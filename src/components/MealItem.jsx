import { currencyFormatter } from "./util/formatting.js";
import Button from "./UI/Button.jsx";
import { useContext } from "react";
import CartContext from "../store/CartContext.jsx";

export default function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);

  function handleAddMealToCart() {
    cartCtx.addItem(meal);
  }

  return (
    <li className="meal-item">
      <article>
        {/* <img src={meal.image} alt={meal.name} /> */}

        <img src={`https://react-backend-duiw.onrender.com/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          {/* <button>Add to Cart</button> */}
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
