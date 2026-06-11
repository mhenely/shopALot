import { useState } from "react"
import LargeProductImage from "./product-images-components/LargeProductImage"

// Gallery: one large image plus a thumbnail strip. Clicking a thumbnail selects it.
const ProductImages = ({ imageSrc = [], name }) => {
  const [selected, setSelected] = useState(0)
  const images = imageSrc.length ? imageSrc : [undefined]
  const current = Math.min(selected, images.length - 1)

  return (
    <div>
      <LargeProductImage imageSrc={images[current]} name={name} />
      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-4">
          {images.map((src, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelected(idx)}
              aria-label={`View image ${idx + 1}`}
              className={
                "overflow-hidden rounded-sm transition " +
                (idx === current ? "ring-2 ring-clay-600" : "ring-1 ring-clay-100 hover:ring-clay-600")
              }
            >
              <img src={src} alt={`${name} ${idx + 1}`} className="aspect-square w-full object-cover object-center" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductImages
