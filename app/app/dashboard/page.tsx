"use client"
import { useContext } from "react"
import Headbar from "../../comps/dashboard/Headbar"
import Sidebar from "../../comps/dashboard/Sidebar"
import { ThemeContext } from "../../contexts/ThemeContext"

const styles = {
  page: {
    gridTemplateAreas: `
      "sidebar headbar"
      "sidebar main"
    `,
  }
}
function Page() {
  const { theme } = useContext(ThemeContext)
  return (
      <div className={`h-screen ${theme}`}>
            <div className="bg-dark-grey grid-rows-dashboardLayout grid-cols-dashboardLayout gap-0 grid h-full" style={styles.page}>
              <Sidebar />
              <Headbar />
              <main className="main bg-primary-grey dark:bg-dark-grey h-full w-full"  style={{ gridArea: "main" }}>
                asd
              </main>
            </div>
      </div>
  )
}

export default Page