'use client'
import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext";
import { BsMoonStars } from 'react-icons/bs';
import { ImSun } from 'react-icons/im';
import { MdMenuOpen } from 'react-icons/md';
import personAvatar from '../../public/images/person-avatar.png';
import Image from "next/image";
import { MenuContext } from "../../contexts/MenuContext";
import NavButton from "./NavButton";


export default function Headbar() {
    const { theme, setTheme, isDarkMode, setIsDarkMode } = useContext(ThemeContext)
    const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext)
    
    
    const handleClick = (name: string) => {
        switch (name) {
            case "darkMode":
                setTheme(theme === "light" ? "dark" : "light")
                setIsDarkMode(!isDarkMode)
                break
            case "menu":
                setIsMenuOpen((prev: boolean) => !prev)
                break
            default:
                break
        }
    }


    return (
        <div className={`headbar dark:bg-primary-deepblue bg-white flex items-center h-24 w-full shadow-lg relative text-white`}  style={{ gridArea: "headbar" }}>
            <NavButton 
                icon={<MdMenuOpen />}
            />
            <div className="right-side-options m-10 flex gap-8 items-center absolute right-0">
                <NavButton 
                    icon={isDarkMode ? <ImSun />  : <BsMoonStars />}
                />
                <div className="profile-avatar w-16 h-16 dark:bg-light-deepblue bg-light-blue hover:bg-primary-blue hover:dark:bg-primary-blue rounded-full ease-in duration-150 p-2 flex items-center justify-center">
                    <button className="profile-avatar-btn w-full h-full bg-primary-purple rounded-full overflow-hidden">
                        <Image src={personAvatar} alt="avatar" style={isMenuOpen ? {} : { transform: "scaleX(-1)" }}/>
                    </button>
                </div>
            </div>
        </div>
    )
}
