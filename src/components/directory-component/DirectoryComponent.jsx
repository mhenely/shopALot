
import { useNavigate } from "react-router-dom"

import { BackgroundImage, Body, DirectoryItemContainer } from "./directory-component.styles"

const DirectoryComponent = ({ category }) => {

  const { imageSrc, title, route } = category

  const navigate = useNavigate()

  const onNavigateHandler = () => navigate(route)
  // const style = {backgroundImage: `url(${imageSrc})`}

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageurl={imageSrc}/>
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  )
}


export default DirectoryComponent


