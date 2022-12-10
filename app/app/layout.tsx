import './globals.css'
import ContextProvider from '../contexts/Context'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className='dark'>
          <ContextProvider>
            {children}
          </ContextProvider>
        </div>
      </body>
    </html>
  )
}
