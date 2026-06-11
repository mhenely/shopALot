import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { incrementItems } from "../../features/cart/cartItems";

const CategoryProductCard = ({ product, category }) => {
  const { name, price, imageUrl, subcategory } = product;

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onNavigateHandler = () => {
    if (category) {
      navigate(`${category}/${name.toLowerCase()}`)
    } else {
      navigate(name.toLowerCase())
    }
  }

  const addCartItem = () => dispatch(incrementItems(product))

  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-sm bg-clay-100">
        <img
          onClick={onNavigateHandler}
          src={imageUrl?.[0]}
          alt={name}
          className="aspect-[5/6] w-full cursor-pointer object-cover transition duration-500 group-hover:scale-105"
        />
        <button
          onClick={addCartItem}
          className="absolute inset-x-3 bottom-3 translate-y-2 bg-clay-700 py-2 text-xs font-semibold uppercase tracking-wide text-cream opacity-0 transition hover:bg-clay-900 group-hover:translate-y-0 group-hover:opacity-100"
        >
          Add to cart
        </button>
      </div>
      <div className="mt-3 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3
            onClick={onNavigateHandler}
            className="cursor-pointer truncate font-serif text-lg hover:text-clay-700"
          >
            {name}
          </h3>
          {subcategory && (
            <p className="text-xs uppercase tracking-wide text-ink/40">{subcategory}</p>
          )}
        </div>
        <p className="whitespace-nowrap font-semibold text-clay-700">${price}</p>
      </div>
    </div>
  )
}

export default CategoryProductCard;
