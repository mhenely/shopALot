import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductImages from "../../components/product-component/ProductImages";

const ProductPage = () => {

  const { productId, categoryId } = useParams()

  const shopData = useSelector(state => state.shopData.value)

  const data = shopData.find(data => categoryId === data.title.toLowerCase()).items.find(product => product.name.toLowerCase() === productId)
  

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div>
            <div className="border-b border-gray-200 pb-10">
              <h2 className="font-medium text-gray-500">{data.name}</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{data.features.title}</p>
            </div>
            <dl className="mt-10 space-y-10">
              {data.features.items.map((feature) => (
                <div key={feature.name}>
                  <dt className="text-sm font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-3 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div> 
          <ProductImages imageSrc={data.imageUrl} />
        </div>
      </div>
    </div>
  )
}

export default ProductPage;