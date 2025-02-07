import { currencyFormatter } from "./util/formatting";
export default function CartItem({
  name,
  quantity,
  price,
  onDecrease,
  onIncrease,
}) {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} * {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        {/* CURRENT QTY */}
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
}
