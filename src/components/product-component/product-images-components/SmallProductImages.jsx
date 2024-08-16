import { useState, useEffect, useRef } from "react"

import { ProductImageContainer } from "./product-images.styles"

const SmallProductImages = ({ handleClick, imageIdx, swapImage, imageSrc }) => {

  // tooltip comes from https://medium.com/@rkprasad.info/how-to-creating-a-cursor-anchored-tooltip-in-react-js-83593c5d17d2

  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showTooltipContent, setShowTooltipContent] = useState(false);
  
  const tooltipRef = useRef();

  const testClick = (imageId, swapId) => {
    console.log({imageId, swapId, imageSrc})
    handleClick(imageId, swapId)
  }

  useEffect(() => {
    let timeoutId
  
    if (isTooltipVisible) {
      timeoutId = setTimeout(() => {
        setShowTooltipContent(true);
      }, 200);
    }
  
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isTooltipVisible]);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
  
    const tooltipWidth = tooltipRef.current?.offsetWidth || 0;
    const tooltipHeight = tooltipRef.current?.offsetHeight || 0;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
  
    //+12 is added to give space between cursor and tooltip
    let tooltipX = clientX + 12;
    let tooltipY = clientY + 12;
  
    // Check if tooltip exceeds the right side of the viewport
    if (tooltipX + tooltipWidth > viewportWidth) {
      tooltipX = clientX - tooltipWidth - 10;
    }
  
    // Check if tooltip exceeds the bottom of the viewport
    if (tooltipY + tooltipHeight > viewportHeight) {
      tooltipY = viewportHeight - tooltipHeight - 10;
    }
  
    setTooltipPosition({ x: tooltipX, y: tooltipY });
  };
  
  const handleMouseEnter = () => {
    setTooltipVisible(true);
    setShowTooltipContent(false);
  };
  
  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };


  return (
    <ProductImageContainer
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
    {isTooltipVisible && (
      <div
        ref={tooltipRef}
        className={`fixed p-3.5 bg-black text-white rounded-lg shadow      text-sm font-semibold max-w-md ${showTooltipContent ? 'opacity-100' : 'opacity-0'}`}
        style={{
          top: tooltipPosition.y,
          left: tooltipPosition.x,
          zIndex: '2147483647'
        }}
      >
        {'Click to make larger'}
      </div>
    )}
    <img onClick={() => testClick(imageIdx, swapImage)}
      alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug."
      src={imageSrc}
      className="h-full w-full object-cover object-center cursor-help"
    />
    </ProductImageContainer>
  )

}

export default SmallProductImages