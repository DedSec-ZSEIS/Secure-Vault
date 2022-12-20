"use client"
import { Headbar, Sidebar, Hero } from "../../comps/dashboard"
import { useStateContext } from "../../contexts/ContextProvider"
import Loading from "./loading"
import { Suspense } from "react"

const styles = {
  page: {
    gridTemplateAreas: `
      "sidebar headbar"
      "sidebar main"
    `,
  }
}


function Dashboard() {
  const { theme, isMenuOpen } = useStateContext()

  return (
      <Suspense fallback={<Loading />}>
          <div className={`h-screen ${theme}`}>
            <div className={`bg-dark-grey grid-rows-dashboardLayout ${isMenuOpen ? "grid-cols-dashboardLayoutMenuOpened" : "grid-cols-dashboardLayoutMenuClosed"} gap-0 grid h-full`} style={styles.page}>
              <Sidebar />
              <Headbar />
              <main className="main bg-primary-grey dark:bg-dark-deepblue h-full w-full"  style={{ gridArea: "main" }}>
                <Hero />
              </main>
            </div>
      </div>
      </Suspense>
  )
}

export default Dashboard