"use client"
import { useContext } from "react"
import Headbar from "../../comps/dashboard/Headbar"
import Sidebar from "../../comps/dashboard/Sidebar"
import { ThemeContext } from "../../contexts/ThemeContext"
import { MenuContext } from "../../contexts/MenuContext"

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
  const { isMenuOpen } = useContext(MenuContext)


  return (
      <div className={`h-screen ${theme}`}>
            <div className={`bg-dark-grey grid-rows-dashboardLayout ${isMenuOpen ? "grid-cols-dashboardLayoutMenuOpened" : "grid-cols-dashboardLayoutMenuClosed"} gap-0 grid h-full`} style={styles.page}>
              <Sidebar />
              <Headbar />
              <main className="main bg-primary-grey dark:bg-dark-deepblue h-full w-full"  style={{ gridArea: "main" }}>
                asd
              </main>
            </div>
      </div>
  )
}

export default Page