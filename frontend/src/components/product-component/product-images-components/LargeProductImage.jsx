const LargeProductImage = ({ imageSrc, name }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-gray-100">
      <img
        alt={name}
        src={imageSrc}
        className="h-full w-full object-cover object-center"
      />
    </div>
  )
}

export default LargeProductImage
