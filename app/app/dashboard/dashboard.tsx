"use client"
import { Headbar, Sidebar } from "../../comps/dashboard"
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


function Dashboard({ children } : { children: React.ReactNode }) {
  const { theme, isMenuOpen } = useStateContext()

  return (
      <Suspense fallback={<Loading />}>
          <div className={`h-screen ${theme}`}>
            <div className={`bg-white dark:bg-dark-deepblue text-black dark:text-white grid-rows-dashboardLayout ${isMenuOpen ? "grid-cols-dashboardLayoutMenuOpened" : "grid-cols-dashboardLayoutMenuClosed"} gap-0 grid h-full`} style={styles.page}>
              <Sidebar />
              <Headbar />
              <main className="bg-white dark:bg-dark-deepblue h-full w-full" style={{ gridArea: "main" }}>
                <div className=" bg-light-blue dark:bg-light-deepblue rounded-xl m-2" style={{ height: "calc(100% - 16px)", width: "calc(100% - 16px)" }}>
                    {/* Page Component ex. "Group" */}
                    {children}
                </div>
              </main>
            </div>
      </div>
      </Suspense>
  )
}

export default Dashboard