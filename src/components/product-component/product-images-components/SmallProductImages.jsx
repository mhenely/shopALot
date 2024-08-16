import { ProductImageContainer } from "./product-images.styles"

const SmallProductImages = ({ handleClick, imageIdx, swapImage, imageSrc }) => {

  const testClick = (imageId, swapId) => {
    console.log({imageId, swapId, imageSrc})
    handleClick(imageId, swapId)
  }

  return (
    <ProductImageContainer>
      <img onClick={() => testClick(imageIdx, swapImage)}
        alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug."
        src={imageSrc}
        className="h-full w-full object-cover object-center"
      />
    </ProductImageContainer>
  )
}

export default SmallProductImages