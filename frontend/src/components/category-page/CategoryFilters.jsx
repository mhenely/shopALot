// Subcategory filter chips. Presentational: the parent owns the active value
// (synced to a URL param) and the filtering. `subcategories` is the list of
// distinct labels; `active` is the selected label or 'all'.
const CategoryFilters = ({ subcategories, active, onChange, shown }) => (
  <div className="my-8 flex flex-wrap items-center gap-3">
    <Chip label="All" value="all" active={active} onChange={onChange} />
    {subcategories.map((sub) => (
      <Chip key={sub} label={sub} value={sub} active={active} onChange={onChange} />
    ))}
    {typeof shown === "number" && (
      <span className="ml-auto text-sm text-ink/50">{shown} item{shown === 1 ? "" : "s"}</span>
    )}
  </div>
)

const Chip = ({ label, value, active, onChange }) => {
  const isActive = active.toLowerCase() === value.toLowerCase()
  return (
    <button
      onClick={() => onChange(value)}
      aria-pressed={isActive}
      className={
        "rounded-full px-4 py-1.5 text-sm font-medium capitalize transition " +
        (isActive
          ? "border border-clay-600 text-clay-700"
          : "border border-clay-100 text-ink/70 hover:border-clay-600")
      }
    >
      {label}
    </button>
  )
}

export default CategoryFilters
