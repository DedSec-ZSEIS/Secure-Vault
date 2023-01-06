"use client"
import './globals.css'
import Navigator from '../comps/Navigator'
import { SessionProvider } from 'next-auth/react'
import StateProvider from '../contexts/ContextProvider'
import MuiThemeProvider from '../contexts/MuiThemeProvider'
import { Session } from 'next-auth'

interface IProps { children: React.ReactNode, params : { session: Session } }

export default function RootLayout({ children, params }: IProps ) {
  return (
    <html lang="en"> 
      <head />
      <body>
          <SessionProvider session={params.session}>
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
