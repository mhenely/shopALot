import { Link, useParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

import CategoryProductCard from "../category-productCard/CategoryProductCard";
import CategoryFilters from "./CategoryFilters";
import StatusScreen from "../StatusScreen";

const CategoryPage = () => {

  const { categoryId } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

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

  const items = data.items || []

  // Distinct, non-empty subcategory labels present in this category.
  const subcategories = [...new Set(items.map((i) => i.subcategory).filter(Boolean))]
  const hasFilters = subcategories.length >= 2

  const active = searchParams.get('collection') || 'all'
  const filtered = (hasFilters && active !== 'all')
    ? items.filter((i) => i.subcategory?.toLowerCase() === active.toLowerCase())
    : items

  const onChange = (value) => {
    if (value === 'all') {
      searchParams.delete('collection')
    } else {
      searchParams.set('collection', value)
    }
    setSearchParams(searchParams, { replace: true })
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <nav className="mb-6 text-sm text-ink/50">
        <Link to="/categories" className="hover:text-clay-700">Categories</Link>
        <span className="px-1">/</span>
        <span className="capitalize text-ink">{data.title}</span>
        {hasFilters && active !== 'all' && (
          <>
            <span className="px-1">/</span>
            <span className="capitalize text-ink">{active}</span>
          </>
        )}
      </nav>

      <div className="border-b border-clay-100 pb-6">
        <h1 className="font-serif text-5xl font-semibold capitalize tracking-tight">{data.title}</h1>
      </div>

      {hasFilters && (
        <CategoryFilters
          subcategories={subcategories}
          active={active}
          onChange={onChange}
          shown={filtered.length}
        />
      )}

      <div className={`grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 ${hasFilters ? '' : 'mt-10'}`}>
        {filtered.map((product) => (
          <CategoryProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}

export default CategoryPage
