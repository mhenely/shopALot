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
  }
]

const CategoryDirectory = () => {
  return (
    <DirectoryContainer>
      {
        categories.map(category => {
          return <DirectoryComponent key={category.title} category={category} />
        })
      }
    </DirectoryContainer>
  )
}

export default CategoryDirectory