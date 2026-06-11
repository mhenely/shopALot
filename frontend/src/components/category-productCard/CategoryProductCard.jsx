import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { incrementItems } from "../../features/cart/cartItems";

import Button from "../Button";


const CategoryProductCard = ({ product, category }) => {
  const { name, price, imageUrl, id } = product;

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onNavigateHandler = () => {
    if (category) {
      navigate(`${category}/${name.toLowerCase()}`)
    } else {
      navigate(name.toLowerCase())
    }
  }

  const addCartItem = () => {
    dispatch(incrementItems(product))
  }
  

  return (
    <div className="w-full flex flex-col h-[350px] items-center relative group">
      <img
        onClick={onNavigateHandler}
        src={imageUrl?.[0]}
        alt={name}
        className="w-full h-[95%] object-cover object-center mb-[5px] rounded cursor-pointer group-hover:opacity-80"
      />
      <div className="w-full h-[5%] flex justify-between text-lg">
        <span className="mt-1 text-sm leading-5 text-gray-700">{name}</span>
        <span className="mt-1 text-lg leading-7 font-medium text-gray-900">${price}</span>
      </div>
      <Button
        onClick={addCartItem}
        className="w-4/5 absolute top-[255px] opacity-70 hidden group-hover:flex group-hover:opacity-90"
      >
        add to cart
      </Button>
    </div>
  )
}

export default CategoryProductCard;