import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { incrementItems } from "../../features/cart/cartItems";

import { ProductCardContainer, Footer, Name, Price, Button } from "./category-product-card.styles";


const CategoryProductCard = ({ product, category }) => {
  const { name, price, imageUrl, id } = product;

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onNavigateHandler = () => { 

    console.log()
    
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
    <ProductCardContainer>
      <img 
        onClick={onNavigateHandler}
        src={imageUrl[0]} 
        alt={`${name}`}
        className="h-full w-full object-cover object-center group-hover:opacity-75 cursor-pointer rounded"
      />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <Button onClick={addCartItem}>add to cart</Button>
    </ProductCardContainer>
  )
}

export default CategoryProductCard;