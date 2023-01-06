"use client"
import { Headbar, Sidebar } from "../../comps/dashboard"
import { useStateContext } from "../../contexts/ContextProvider"
import Loading from "./loading"
import { Suspense } from "react"
import { Paper } from "@mui/material"
const styles = {
  page: {
    gridTemplateAreas: `
      "sidebar headbar"
      "sidebar main"
    `,
  }
}


function Dashboard({ children } : { children: React.ReactNode }) {
  const { isMenuOpen } = useStateContext()


  
  return (
      // <Suspense fallback={<Loading />}>
          <>
            <div className={`bg-white dark:bg-dark-deepblue text-black dark:text-white grid-rows-dashboardLayout ${isMenuOpen ? "grid-cols-dashboardLayoutMenuOpened" : "grid-cols-dashboardLayoutMenuClosed"} gap-0 grid h-full`} style={styles.page}>
              <Sidebar />
              <Headbar />
              <main className="bg-white dark:bg-dark-deepblue h-full w-full" style={{ gridArea: "main" }}>
                <div className=" bg-light-blue dark:bg-primary-deepblue rounded-xl m-2 ml-0 pt-1" style={{ height: "calc(100% - 16px)", width: "calc(100% - 8px)" }}>
                    {/* Page Component ex. "Group" */}
                    <Paper elevation={0} sx={{
                      backgroundColor: "#212946",
                      margin: "12px",
                      paddingTop: "20px",
                    }}>
                      {children}
                    </Paper>
                </div>
              </main>
            </div>
      </>
      // </Suspense>
  )
}

export default Dashboard