import { useNavigate } from "react-router-dom"

const DirectoryComponent = ({ category }) => {

  const { imageSrc, title, route } = category

  const navigate = useNavigate()

  const onNavigateHandler = () => navigate(route)
  const style = { backgroundImage: `url(${imageSrc})` }

  return (
    <div
      onClick={onNavigateHandler}
      className="group relative min-w-[30%] h-[400px] flex-auto flex items-center justify-center border border-black rounded mx-[7.5px] mb-[15px] overflow-hidden cursor-pointer hover:opacity-85"
    >
      <div
        style={style}
        className="w-full h-full bg-cover bg-center transition-transform duration-[6000ms] ease-[cubic-bezier(0.25,0.45,0.45,0.95)] group-hover:scale-110"
      />
      <div className="absolute h-[90px] px-[25px] flex flex-col items-center justify-center border border-black rounded bg-white opacity-70 group-hover:opacity-90">
        <h2 className="font-bold mx-1.5 text-[22px] text-[#4a4a4a] uppercase">{title}</h2>
        <p className="font-light text-base">Shop Now</p>
      </div>
    </div>
  )
}

export default DirectoryComponent
