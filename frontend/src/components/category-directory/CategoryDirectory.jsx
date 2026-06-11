import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

import categoryImages from "../../utils/categoryImages"
import { getBlurb } from "../../utils/categoryBlurbs"

const categoryHref = (title) => `/categories/${encodeURIComponent(title)}`
const productHref = (title, name) =>
  `/categories/${encodeURIComponent(title.toLowerCase())}/${encodeURIComponent(name.toLowerCase())}`

// A small product preview tile reused by the picks strip and the category bands.
const ProductMini = ({ title, product }) => (
  <Link to={productHref(title, product.name)} className="group block">
    <div className="overflow-hidden rounded-sm bg-clay-100">
      <img
        src={product.imageUrl?.[0]}
        alt={product.name}
        className="aspect-[5/6] w-full object-cover transition duration-500 group-hover:scale-105"
      />
    </div>
    <p className="mt-2 truncate font-serif text-sm">{product.name}</p>
    <p className="text-sm font-semibold text-clay-700">${product.price}</p>
  </Link>
)

const CategoryDirectory = () => {
  const categories = useSelector((state) => state.shopData.value)

  // Hero collage: the first two categories' curated images (gracefully hidden if absent).
  const heroImages = categories
    .slice(0, 2)
    .map(({ title }) => categoryImages[title?.toLowerCase()])
    .filter(Boolean)

  // "This week's picks": the first product from each of the first four categories.
  const picks = categories
    .slice(0, 4)
    .map(({ title, items }) => (items?.length ? { title, product: items[0] } : null))
    .filter(Boolean)

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="border-b border-clay-100">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-2">
          <div>
            <p className="font-serif text-lg italic text-clay-600">A small shop of my favorite things —</p>
            <h1 className="mt-3 font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              Gear for the things<br />I actually love.
            </h1>
            <p className="mt-5 max-w-md text-lg text-ink/70">
              {categories.length
                ? `${categories.length} collections, each one a real part of my life — hand-picked, and built end-to-end.`
                : 'A handful of collections, each one a real part of my life — hand-picked, and built end-to-end.'}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/categories"
                className="bg-clay-700 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream hover:bg-clay-900"
              >
                Shop all
              </Link>
              <a href="#categories" className="border-b-2 border-clay-600 pb-1 text-sm font-semibold text-clay-700">
                Browse by category →
              </a>
            </div>
            <p className="mt-6 text-xs uppercase tracking-widest text-ink/40">
              Free returns · Secure checkout · Ships in 2–3 days
            </p>
          </div>

          {heroImages.length === 2 && (
            <div className="grid grid-cols-2 gap-4">
              <img src={heroImages[0]} alt="" className="h-72 w-full rounded-sm object-cover" />
              <img src={heroImages[1]} alt="" className="mt-8 h-72 w-full rounded-sm object-cover" />
            </div>
          )}
        </div>
      </section>

      {/* ===== THIS WEEK'S PICKS ===== */}
      {picks.length > 0 && (
        <section className="border-b border-clay-100 bg-white/40">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="mb-6 flex items-end justify-between">
              <h2 className="font-serif text-2xl font-semibold">This week&rsquo;s picks</h2>
              <Link to="/categories" className="text-sm font-medium text-clay-600 hover:text-clay-700">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {picks.map(({ title, product }) => (
                <div key={`${title}-${product.id}`}>
                  <ProductMini title={title} product={product} />
                  <p className="mt-1 text-xs uppercase tracking-wide text-ink/40">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== EDITORIAL CATEGORY BANDS ===== */}
      <section id="categories" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12">
          <p className="font-serif text-lg italic text-clay-600">A few of my favorite things —</p>
          <h2 className="mt-2 font-serif text-4xl font-semibold tracking-tight">Shop by category</h2>
        </div>

        <div className="space-y-20">
          {categories.map(({ title, items = [] }, idx) => {
            const reversed = idx % 2 === 1
            const fromPrice = items.length ? Math.min(...items.map((i) => i.price)) : null
            const previews = items.slice(0, 3)
            return (
              <div key={title} className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
                {/* text side */}
                <div className={reversed ? "md:order-2" : ""}>
                  <span className="font-serif text-sm italic text-clay-600">
                    {String(idx + 1).padStart(2, "0")} — <span className="capitalize">{title}</span>
                  </span>
                  <h3 className="mt-1 font-serif text-4xl font-semibold capitalize">{title}</h3>
                  <p className="mt-3 max-w-md text-ink/60">{getBlurb(title)}</p>
                  <div className="mt-4 flex items-center gap-3 text-sm text-ink/50">
                    <span>{items.length} item{items.length === 1 ? "" : "s"}</span>
                    {fromPrice != null && (
                      <>
                        <span className="h-1 w-1 rounded-full bg-clay-600" />
                        <span>from ${fromPrice}</span>
                      </>
                    )}
                  </div>
                  <Link
                    to={categoryHref(title)}
                    className="mt-6 inline-block bg-clay-700 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream hover:bg-clay-900"
                  >
                    Shop <span className="capitalize">{title}</span>
                  </Link>
                </div>

                {/* product side */}
                {previews.length > 0 && (
                  <div className={`grid grid-cols-3 gap-4 ${reversed ? "md:order-1" : ""}`}>
                    {previews.map((product) => (
                      <ProductMini key={product.id} title={title} product={product} />
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default CategoryDirectory
