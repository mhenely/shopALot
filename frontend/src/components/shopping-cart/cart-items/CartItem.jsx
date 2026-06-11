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
    <div className="w-full flex h-[80px] mb-[15px]">
      <img src={imageUrl?.[0]} alt={name} onClick={handleNavigate} className="w-[30%] cursor-pointer"/>
      <div className="w-[70%] flex flex-col items-start justify-center px-5 py-2.5">
        <span>{name}</span>
        <span>${quantity * price}</span>
      </div>
      <span className="cursor-pointer" onClick={() => dispatch(decrementItems(id))}>&#10094;</span>
      <span>{quantity}</span>
      <span className="cursor-pointer" onClick={() => dispatch(incrementItems(cartItem))}>&#10095;</span>
    </div>
  )
}

export default CartItem;
