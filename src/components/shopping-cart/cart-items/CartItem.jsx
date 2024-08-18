import { useDispatch } from "react-redux";
import { decrementItems, incrementItems } from "../../../features/cart/cartItems";

import { CartItemContainer, ItemDetails } from "./cart-items.styles";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price, id } = cartItem;

  const dispatch = useDispatch()

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`}/>
      <ItemDetails>
        <span>{name}</span>
        <span>{quantity} x ${price} = ${quantity * price}</span>
      </ItemDetails>
      <span onClick={() => dispatch(decrementItems(id))}>&#10094;</span>
      <span>Update</span>
      <span onClick={() => dispatch(incrementItems(cartItem))}>&#10095;</span>
    </CartItemContainer>
  )
}

export default CartItem;
