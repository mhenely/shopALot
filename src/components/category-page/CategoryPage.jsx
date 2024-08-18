import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { CategoryTitle } from "./category-page.styles";
import CategoryProductCard from "../category-productCard/CategoryProductCard";

// w/o backend, importing local shopData and using param to grab which category to populate w/ map

// receives the category info and maps cards of all items in category

const CategoryPage = () => {

  const { categoryId } = useParams()

  const shopData = useSelector(state => state.shopData.value)

  const data = shopData.find(category => category.title.toLowerCase() === categoryId)

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <CategoryTitle>{data.title}</CategoryTitle>

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