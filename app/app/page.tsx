import Navbar from "../comps/Navbar"
import SplineHomepage from "../comps/SplineHomepage"

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="main-content grid grid-rows-1 grid-cols-2 h-max overflow-x-hidden">
        <header className="p-24">
          <h1 className="text  text-8xl text-transparent text-center bg-gradient-to-r from-pink-400 to-blue-300 bg-clip-text ">Security Vault</h1> 
          <h3 className="pt-12 pl-6 text-2xl max-w-xl text-purple-900">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium temporibus placeat labore laborum ad necessitatibus non quae ea debitis facere!</h3>
          <button>Get started</button>
        </header>
        <div className="spline-wrapper">
          <SplineHomepage></SplineHomepage>
        </div>
      </div>
    </>
  )
}
