import { Link } from "react-router-dom";

import CategoryProductCard from "../category-productCard/CategoryProductCard";
import { CategoryTitle } from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {


  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
        <Link to={title.toLowerCase()} className='title'><CategoryTitle>{title}</CategoryTitle></Link>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {
            products.filter((_, idx) => idx < 4)
            .map((product) => 
              <CategoryProductCard key={product.id} product={product} category={title.toLowerCase()}/>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default CategoryPreview
