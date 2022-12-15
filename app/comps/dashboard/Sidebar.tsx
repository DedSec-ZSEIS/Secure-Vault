import logo512 from "../../public/images/tarcza-512-black.png";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="sidebar bg-white dark:bg-dark-deepblue" style={{ gridArea: "sidebar" }}>
      <div className="logo-wrapper m-2">
      <Image src={logo512} alt="logo" className="w-14" />
      </div>
    </div>
  )
}
