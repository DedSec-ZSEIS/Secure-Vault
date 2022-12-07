import Link from "next/link"

function Navbar() {
  return (
    <div className="navbar w-screen h-36 flex justify-between items-center text-4xl">
        <div className="logo ml-16">
            Logo
        </div>
        <div className="links flex justify-between items-center gap-2 ">
            <Link href="/" className="p-4 ">Home</Link>
            <Link href="/about" className="p-4 ">About</Link>
            <Link href="/service" className="p-4 ">Service</Link>
            <Link href="/contact" className="p-4 mr-16">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar