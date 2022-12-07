import Header from "../../comps/dashboard/Header"
import Sidebar from "../../comps/dashboard/Sidebar"

function page() {
  return (
    <div className="bg-dark-grey grid-cols-2 grid-rows-1">
      <Sidebar />
      <Header />
    </div>
  )
}

export default page