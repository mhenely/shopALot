import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { decrementItems, incrementItems } from "../../../features/cart/cartItems";

import { CartItemContainer, ItemDetails } from "./cart-items.styles";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price, id, category } = cartItem;

  console.log({category})

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/categories/${category}/${name.toLowerCase()}`)
  }

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} onClick={handleNavigate} className="cursor-pointer"/>
      <ItemDetails>
        <span>{name}</span>
        {/* <span>{quantity} x ${price} = ${quantity * price}</span> */}
        <span>${quantity * price}</span>
      </ItemDetails>
      <span className="cursor-pointer" onClick={() => dispatch(decrementItems(id))}>&#10094;</span>
      <span>{quantity}</span>
      <span className="cursor-pointer" onClick={() => dispatch(incrementItems(cartItem))}>&#10095;</span>
    </CartItemContainer>
  )
}

export default CartItem;
