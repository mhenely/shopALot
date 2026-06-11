// Shared call-to-action button (black, inverts on hover). Extra utility classes
// can be passed via className (e.g. positioning for the product-card hover button).
const Button = ({ children, className = '', ...props }) => (
  <button
    className={`h-[50px] px-9 flex items-center justify-center border border-black bg-black text-white text-lg font-bold uppercase tracking-wide cursor-pointer hover:bg-white hover:text-black ${className}`}
    {...props}
  >
    {children}
  </button>
)

export default Button
