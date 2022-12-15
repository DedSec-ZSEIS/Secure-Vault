'use client'
import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext";
import { BsMoonStars } from 'react-icons/bs';
import { ImSun } from 'react-icons/im';
import { MdMenuOpen } from 'react-icons/md';
import { MenuContext } from "../../contexts/MenuContext";
import NavButton from "./NavButton";
import { Avatar, TextField } from "@mui/material";
import {BiSearchAlt } from 'react-icons/bi';
import { setCookie } from "cookies-next";

export default function Headbar() {
    const { theme, setTheme, isDarkMode, setIsDarkMode } = useContext(ThemeContext)
    const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext)
    
    
    const handleClick = (name: string) => {
        switch (name) {
            case "darkMode":
                setTheme(theme === "light" ? "dark" : "light")
                setIsDarkMode(!isDarkMode)
                setCookie("color-scheme", theme === "light" ? "dark" : "light")
                break
            case "menu":
                setIsMenuOpen((prev: boolean) => !prev)
                break
            default:
                break
        }
    }



    return (
        <div className={`headbar dark:bg-primary-deepblue bg-white flex items-center h-24 w-full shadow-lg relative text-white justify-between`}  style={{ gridArea: "headbar" }}>
            <div className="left-side-options flex items-center">
                <NavButton 
                    icon={<MdMenuOpen  style={isMenuOpen ? {transform: 'scaleX(1)', transition: "all 0.15s ease-in" } : { transform: "scaleX(-1)", transition: "all 0.15s ease-in" }}/>}
                    customFunction={() => handleClick("menu")}
                    customTw="duration-150 ease-in transition-all"
                />
                <TextField id="outlined-basic" label={<BiSearchAlt />} variant="outlined" placeholder="Search" style={{ borderRadius: "999px" }}/>
            </div>
            <div className="right-side-options mr-10 flex items-center">
                <NavButton 
                    icon={isDarkMode ? <ImSun />  : <BsMoonStars />}
                    customFunction={() => handleClick("darkMode")}
                />
                <div className="profile-avatar w-16 h-16 dark:bg-light-deepblue bg-light-blue hover:bg-primary-blue hover:dark:bg-primary-blue rounded-full ease-in duration-150 p-2 flex items-center justify-center">
                    <button className="profile-avatar-btn w-full h-full bg-primary-purple rounded-full overflow-hidden">
                        <Avatar src="../../public/images/person-avatar.png" alt="avatar" variant="circular"/>
                    </button>
                </div>
            </div>
        </div>
    )
}
