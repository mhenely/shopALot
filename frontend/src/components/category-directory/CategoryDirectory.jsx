import { useSelector } from "react-redux"

import DirectoryComponent from "../directory-component/DirectoryComponent"
import categoryImages from "../../utils/categoryImages"

const CategoryDirectory = () => {

  const categories = useSelector((state) => state.shopData.value)

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Explore by Category</h2>
        <p className="mt-4 text-base text-gray-500">
          Each category represents one of my areas of interests. Browse through each to get an understanding of my favorites within each area!
        </p>
      <div className="w-full flex flex-wrap justify-between mt-10">
        {categories.map(({ title }) => (
          <DirectoryComponent
            key={title}
            category={{
              title,
              imageSrc: categoryImages[title],
              route: `categories/${encodeURIComponent(title)}`,
            }}
          />
        ))}
      </div>
    </div>
  </div>
  )
}

export default CategoryDirectory