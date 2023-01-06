"use client"
import './globals.css'
import Navigator from '../comps/Navigator'
import { SessionProvider } from "next-auth/react"
import StateProvider from '../contexts/ContextProvider'
import MuiThemeProvider from '../contexts/MuiThemeProvider'

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode,
  session: any
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SessionProvider session={session} >
          <StateProvider>
            <MuiThemeProvider>
              <Navigator />
              {children}
            </MuiThemeProvider>
          </StateProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
