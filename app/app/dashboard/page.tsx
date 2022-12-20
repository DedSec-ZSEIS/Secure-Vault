import Dashboard from './dashboard'
import { Suspense } from 'react'
import Loading from './loading'

export default function Page() {

  return (
    <Suspense fallback={<Loading />}>
        <Dashboard />
    </Suspense>
  )
}
