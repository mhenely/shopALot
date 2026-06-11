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
    <div className="pb-12">
      <div className="mx-auto max-w-6xl px-6 pt-12">
        <p className="font-serif text-lg italic text-clay-600">A few of my favorite things —</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold tracking-tight">Shop by category</h1>
      </div>
      {
        shopData.map(({ title, items }) => (
          <CategoryPreview key={title} products={items} title={title} />
        ))
      }
    </div>
  )
}

export default CategoryPreviewPage
