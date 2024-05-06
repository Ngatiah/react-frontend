// import { useEffect } from "react";
// import { useState, useEffect } from "react";
import MealItem from "./MealItem.jsx";
import useHttp from "../hooks/useHttp.js";
import Error from "./Error.jsx";

const requestConfig = {};

export default function Meals() {
  // fetch('https://localhost:3000/meals',{method : 'GET'});
  // const [loadedMeals, setLoadedMeals] = useState([]);

  const {
    data: loadedMeals,
    isLoading,
    error,
    // } = useHttp("http://localhost:3000/meals", {}, []);
  } = useHttp("http://localhost:3000/meals", requestConfig, []);
  // } = useHttp("http://localhost:3000/mealssssss", requestConfig, []);

  // console.log(loadedMeals);

  // useEffect(() => {
  //   async function fetchMeals() {
  //     const response = await fetch("http://localhost:3000/meals");

  //     // if (!response.ok) {
  //     //   // return;
  //     // }

  //     const meals = await response.json();
  //     setLoadedMeals(meals);
  //     // console.log(meals);
  //   }

  //   fetchMeals();
  // }, []);

  //   fetch("https://localhost:3000/meals").then(response =>);
  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  // if(!data){
  //   return <p>No meals found.</p>
  // }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        // <li key={meal.id}>{meal.name}</li>
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
