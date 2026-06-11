// Centered full-width message used for loading / error / not-found states
// while or after the shop data is fetched.
const StatusScreen = ({ children }) => (
  <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 text-center text-gray-500">
      {children}
    </div>
  </div>
)

export default StatusScreen
