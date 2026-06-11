import { useState } from "react"
import SmallProductImages from "./product-images-components/SmallProductImages"
import LargeProductImage from "./product-images-components/LargeProductImage"

const ProductComponent = ({ imageSrc, name }) => {

  const [ images, setImages ] = useState([0, 1, 2])

  const handleImgSwap = (idx, idxToSwap) => {

    const tempImages = [...images]
    let temp = tempImages[0]
    tempImages[0] = idx;
    if (idxToSwap === 'left') {
      tempImages[1] = temp
    } else {
      tempImages[2] = temp
    }
    setImages(tempImages)
  }
  return (
    <div>
      <LargeProductImage imageSrc={imageSrc[images[0]]} name={name} />
      <div className='mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8'>
        <SmallProductImages handleClick={handleImgSwap} imageSrc={imageSrc[images[1]]} imageIdx={images[1]} swapImage='left' name={name}/>
        <SmallProductImages handleClick={handleImgSwap} imageSrc={imageSrc[images[2]]} imageIdx={images[2]} swapImage='right' name={name}/>
      </div>
    </div>
)
}

export default ProductComponent