import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { incrementItems } from "../../features/cart/cartItems";

import ProductImages from "../../components/product-component/ProductImages";
import StatusScreen from "../../components/StatusScreen";

const productHref = (categoryId, name) =>
  `/categories/${encodeURIComponent(categoryId)}/${encodeURIComponent(name.toLowerCase())}`

const ProductPage = () => {

  const { productId, categoryId } = useParams()
  const dispatch = useDispatch()
  const [qty, setQty] = useState(1)
  const [adding, setAdding] = useState(false)

  const { value: shopData, status, error } = useSelector(state => state.shopData)

  const category = shopData.find(data => categoryId === data.title.toLowerCase())
  const data = category?.items.find(product => product.name.toLowerCase() === productId)

  if (status === 'loading' || status === 'idle') {
    return <StatusScreen>Loading…</StatusScreen>
  }
  if (status === 'failed') {
    return <StatusScreen>Couldn’t load this product: {error}</StatusScreen>
  }
  if (!data) {
    return <StatusScreen>Product not found.</StatusScreen>
  }

  const addToCart = async () => {
    setAdding(true)
    // incrementItems adds one per dispatch; add the chosen quantity sequentially.
    for (let i = 0; i < qty; i++) {
      await dispatch(incrementItems(data))
    }
    setAdding(false)
  }

  const related = (category?.items || []).filter((i) => i.id !== data.id).slice(0, 4)

  return (
    <main className="mx-auto max-w-5xl px-6 pb-16 pt-6">
      <nav className="mb-8 text-sm text-ink/50">
        <Link to="/categories" className="hover:text-clay-700">Categories</Link>
        <span className="px-1">/</span>
        <Link to={`/categories/${encodeURIComponent(categoryId)}`} className="capitalize hover:text-clay-700">{categoryId}</Link>
        <span className="px-1">/</span>
        <span className="text-ink">{data.name}</span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-2">
        <ProductImages imageSrc={data.imageUrl} name={data.name} />

        <div className="self-start">
          <p className="text-sm uppercase tracking-widest text-clay-600">
            <span className="capitalize">{categoryId}</span>
            {data.subcategory && <> · {data.subcategory}</>}
          </p>
          <h1 className="mt-2 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">{data.name}</h1>
          <p className="mt-4 font-serif text-3xl text-clay-700">${data.price}</p>
          {data.features?.title && (
            <p className="mt-4 font-serif text-xl italic text-ink/70">{data.features.title}</p>
          )}

          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center rounded-sm border border-clay-100">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                disabled={qty <= 1}
                aria-label="Decrease quantity"
                className="px-4 py-3 text-lg text-ink/60 hover:text-clay-700 disabled:opacity-30"
              >
                −
              </button>
              <span className="w-10 text-center font-medium">{qty}</span>
              <button
                type="button"
                onClick={() => setQty((q) => q + 1)}
                aria-label="Increase quantity"
                className="px-4 py-3 text-lg text-ink/60 hover:text-clay-700"
              >
                +
              </button>
            </div>
            <button
              onClick={addToCart}
              disabled={adding}
              className="flex-1 bg-clay-700 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-cream hover:bg-clay-900 disabled:opacity-60"
            >
              {adding ? "Adding…" : "Add to cart"}
            </button>
          </div>
          <p className="mt-4 text-xs uppercase tracking-widest text-ink/40">
            Free returns · Secure checkout · Ships in 2–3 days
          </p>

          {data.features?.items?.length > 0 && (
            <dl className="mt-10 space-y-6 border-t border-clay-100 pt-8">
              {data.features.items.map((feature) => (
                <div key={feature.name}>
                  <dt className="text-sm font-semibold text-ink">{feature.name}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-ink/60">{feature.description}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="border-b border-clay-100 pb-4 font-serif text-2xl font-semibold">
            More from <span className="capitalize">{categoryId}</span>
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {related.map((item) => (
              <Link key={item.id} to={productHref(categoryId, item.name)} className="group">
                <div className="overflow-hidden rounded-sm bg-clay-100">
                  <img
                    src={item.imageUrl?.[0]}
                    alt={item.name}
                    className="aspect-[5/6] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-3 truncate font-serif text-lg group-hover:text-clay-700">{item.name}</h3>
                <p className="font-semibold text-clay-700">${item.price}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </main>
  )
}

export default ProductPage;
