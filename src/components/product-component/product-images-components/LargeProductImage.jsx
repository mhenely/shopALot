import { ProductImageContainer } from "./product-images.styles"

const LargeProductImage = ({ imageSrc }) => {
  return (
    <ProductImageContainer>
      <img 
        alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
        src={imageSrc}
        className="h-full w-full object-cover object-center"
      />
    </ProductImageContainer>
  )
}

export default LargeProductImage