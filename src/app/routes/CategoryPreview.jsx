import { useSelector } from "react-redux"

import CategoryPreview from "../../components/category-preview/CategoryPreview"

const CategoryPreviewPage = () => {

  const shopData = useSelector(state => state.shopData.value)

  return (
    <div>
      {
        shopData.map(({title, items}) => {
          return <CategoryPreview key={title} products={items} title={title}/>
        })
      }
    </div>
  )
}

export default CategoryPreviewPage