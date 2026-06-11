const LargeProductImage = ({ imageSrc, name }) => {
  return (
    <div className="overflow-hidden rounded-sm bg-clay-100">
      <img
        alt={name}
        src={imageSrc}
        className="aspect-[4/5] w-full object-cover object-center"
      />
    </div>
  )
}

export default LargeProductImage
