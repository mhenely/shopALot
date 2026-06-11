import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import CategoryProductCard from "../category-productCard/CategoryProductCard";
import StatusScreen from "../StatusScreen";

// receives the category info and maps cards of all items in category

const CategoryPage = () => {

  const { categoryId } = useParams()

  const { value: shopData, status, error } = useSelector(state => state.shopData)

  const data = shopData.find(category => category.title.toLowerCase() === categoryId)

  if (status === 'loading' || status === 'idle') {
    return <StatusScreen>Loading…</StatusScreen>
  }

  if (status === 'failed') {
    return <StatusScreen>Couldn’t load products: {error}</StatusScreen>
  }

  if (!data) {
    return <StatusScreen>Category “{categoryId}” not found.</StatusScreen>
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-[38px] mb-[25px] text-center">{data.title}</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data.items.map((product) => (
            <CategoryProductCard key={product.id} product={product}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryPage