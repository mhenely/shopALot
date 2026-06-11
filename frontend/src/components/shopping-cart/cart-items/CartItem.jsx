import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { decrementItems, incrementItems } from "../../../features/cart/cartItems";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price, id, category } = cartItem;

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/categories/${category}/${name.toLowerCase()}`)
  }

  return (
    <div className="flex items-center gap-3">
      <img
        src={imageUrl?.[0]}
        alt={name}
        onClick={handleNavigate}
        className="h-14 w-12 shrink-0 cursor-pointer rounded-sm object-cover"
      />
      <div className="min-w-0 flex-1">
        <p onClick={handleNavigate} className="cursor-pointer truncate font-serif text-sm hover:text-clay-700">{name}</p>
        <p className="text-xs text-ink/40">${(price * quantity).toFixed(2)}</p>
      </div>
      <div className="flex items-center gap-2 text-sm text-ink/60">
        <button
          onClick={() => dispatch(decrementItems(id))}
          aria-label={`Decrease quantity of ${name}`}
          className="grid h-6 w-6 place-items-center rounded-sm border border-clay-100 hover:border-clay-600"
        >
          −
        </button>
        <span className="w-4 text-center">{quantity}</span>
        <button
          onClick={() => dispatch(incrementItems(cartItem))}
          aria-label={`Increase quantity of ${name}`}
          className="grid h-6 w-6 place-items-center rounded-sm border border-clay-100 hover:border-clay-600"
        >
          +
        </button>
      </div>
    </div>
  )
}

export default CartItem;
