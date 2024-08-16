import CategoryPreview from "../../components/category-preview/CategoryPreview"

import SHOP_DATA from "../../utils/shop-data"

const CategoryPreviewPage = () => {
  return (
    <div>
      {
        SHOP_DATA.map(({title, items}) => {
          return <CategoryPreview key={title} products={items} title={title}/>
        })
      }
    </div>
  )
}

export default CategoryPreviewPage