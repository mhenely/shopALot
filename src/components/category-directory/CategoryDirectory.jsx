import DirectoryComponent from "../directory-component/DirectoryComponent"
import { DirectoryContainer } from "./category-directory.styles"

const categories = [
  {
    id: 1,
    title: "cooking",
    imageSrc: 'src/assets/food.jpeg',
    route: 'categories/cooking'
    
  },
  {
    id: 2,
    title: "national parks",
    imageSrc: "https://cdn.outsideonline.com/wp-content/uploads/2021/04/13/arches-best-time-visit_h.jpg?width=800",
    route: 'categories/national%20parks'
  },
  {
    id: 3,
    title: "sailing",
    imageSrc: 'src/assets/sailing.jpeg',
    route: 'categories/sailing'
  },
  {
    id: 4,
    title: "soccer",
    imageSrc: 'src/assets/soccer.jpeg',
    route: 'categories/soccer'
  },
  {
    id: 5,
    title: "traveling",
    imageSrc: 'src/assets/travel.png',
    route: 'categories/traveling'
  },
]

const CategoryDirectory = () => {

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Explore by Category</h2>
        <p className="mt-4 text-base text-gray-500">
          Each category represents one of my areas of interests. Browse through each to get an understanding of my favorites within each area!
        </p>
      <DirectoryContainer>
        {categories.map((category) => (
          <DirectoryComponent key={category.title} category={category} />
        ))}
      </DirectoryContainer>
    </div>
  </div>
  )
}

export default CategoryDirectory