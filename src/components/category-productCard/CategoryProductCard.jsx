import { useNavigate, useParams } from "react-router-dom";

import { ProductCardContainer, Footer, Name, Price, Button } from "./category-product-card.styles";


const CategoryProductCard = ({ product, category }) => {
  const { name, price, imageUrl } = product;

  const navigate = useNavigate()

  console.log({category})

  const onNavigateHandler = () => { 
    
    if (category) {
      navigate(`${category}/${name.toLowerCase()}`)
    } else {
      navigate(name.toLowerCase())
    }
  }
  

  return (
    <ProductCardContainer>
      <img 
        onClick={onNavigateHandler}
        src={imageUrl} 
        alt={`${name}`}
        className="h-full w-full object-cover object-center group-hover:opacity-75 cursor-pointer rounded"
      />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <Button>add to cart</Button>
    </ProductCardContainer>
  )
}

export default CategoryProductCard;