import { useSelector } from "react-redux"

import CategoryPreview from "../../components/category-preview/CategoryPreview"
import StatusScreen from "../../components/StatusScreen"

const CategoryPreviewPage = () => {

  const { value: shopData, status, error } = useSelector(state => state.shopData)

  if (status === 'loading' || status === 'idle') {
    return <StatusScreen>Loading products…</StatusScreen>
  }

  if (status === 'failed') {
    return <StatusScreen>Couldn’t load products: {error}</StatusScreen>
  }

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