// Format a numeric price as a clean 2-decimal dollar string: 24.9 -> "$24.90".
export const formatPrice = (value) => `$${Number(value || 0).toFixed(2)}`

export default formatPrice
