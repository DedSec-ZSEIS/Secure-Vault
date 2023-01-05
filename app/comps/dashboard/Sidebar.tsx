
import logo512 from "../../public/images/tarcza-512-black.png";
import Image from "next/image";
import { Typography } from "@mui/material";
import { useStateContext } from "../../contexts/ContextProvider";
import SidebarList from "./SidebarList";
import { useState } from "react";


export default function Sidebar() {
  const { isMenuOpen } = useStateContext();
  const [active, setActive] = useState('home')


  
  return (
    <div className="sidebar bg-white dark:bg-dark-deepblue dark:text-white text-black" style={{ gridArea: "sidebar" }}>
      <div className="w-full h-24 flex justify-center items-center">
        <div className="flex items-center gap-1 text-black dark:text-white">
          <Image src={logo512} alt="logo" className="w-14" />
          {isMenuOpen && <Typography variant="h4">Secure Vault</Typography>}
        </div>
      </div>
      <div className="h-1/2 w-full p-4">
        <SidebarList />
      </div>
    </div>
  )
}
