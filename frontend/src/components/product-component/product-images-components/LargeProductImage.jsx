import { ProductImageContainer } from "./product-images.styles"

const LargeProductImage = ({ imageSrc }) => {
  return (
    <ProductImageContainer>
      <img 
        alt={imageSrc}
        src={imageSrc}
        className="h-full w-full object-cover object-center"
      />
    </ProductImageContainer>
  )
}

export default LargeProductImage