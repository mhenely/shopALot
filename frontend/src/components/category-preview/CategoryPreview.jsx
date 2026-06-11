import { Link } from "react-router-dom";

import CategoryProductCard from "../category-productCard/CategoryProductCard";

const CategoryPreview = ({ title, products = [] }) => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex items-end justify-between border-b border-clay-100 pb-4">
        <Link
          to={title.toLowerCase()}
          className="font-serif text-3xl font-semibold capitalize hover:text-clay-700"
        >
          {title}
        </Link>
        <Link to={title.toLowerCase()} className="text-sm font-medium text-clay-600 hover:text-clay-700">
          View all →
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {products.slice(0, 4).map((product) => (
          <CategoryProductCard key={product.id} product={product} category={title.toLowerCase()} />
        ))}
      </div>
    </section>
  )
}

export default CategoryPreview
