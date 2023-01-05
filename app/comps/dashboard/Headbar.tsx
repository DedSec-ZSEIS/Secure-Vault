'use client'
// import { BsMoonStars } from 'react-icons/bs';
// import { ImSun } from 'react-icons/im';
import { NightsStayRounded, LightModeRounded, MenuOpenRounded, SearchRounded, Logout } from '@mui/icons-material';
import NavButton from "./NavButton";
import { Avatar, InputAdornment, Stack, TextField } from "@mui/material";
import { useStateContext } from '../../contexts/ContextProvider';
import { signOut, useSession } from 'next-auth/react'; 
import { useRouter } from 'next/navigation';


export default function Headbar() {
    const { theme, isMenuOpen, setIsMenuOpen, isDarkMode, setIsDarkMode, setTheme } = useStateContext()
    const { data: session } = useSession()
    const router = useRouter()

    
    const handleClick = (name: string) => {
        switch (name) {
            case "darkMode":
                setTheme(theme === "light" ? "dark" : "light")
                setIsDarkMode(!isDarkMode) //(prev: any) => !prev

                localStorage.setItem("theme", !isDarkMode ? "dark" : "light")
                break
            case "menu":
                setIsMenuOpen(!isMenuOpen) //(prev: any) => !prev
                break
            case "logout":
                if (session) {
                    signOut()
                } else {
                    sessionStorage.removeItem("userData")
                    router.push("/login")
                }
                break
            default:
                break
        }
    }


    return (
        <div className={`headbar dark:bg-light-deepblue bg-white flex items-center rounded-bl-lg h-24 w-full dark:shadow-md relative text-white justify-between`}  style={{ gridArea: "headbar" }}>
            <Stack direction="row" spacing={4} sx={{ marginLeft: 4 }} alignItems="center">
                <NavButton 
                    icon={<MenuOpenRounded  sx={{transform: isMenuOpen ? "scale(1)" : "scale(-1)", transition: "all 0.15s ease-in" }}/>}
                    customFunction={() => handleClick("menu")}
                    name="Menu"
                />
                <TextField
                InputProps={{
                    startAdornment: <InputAdornment position='start'><SearchRounded /></InputAdornment>
                }}
                placeholder="Search"
                variant="standard"
                />
            </Stack>
            <Stack direction="row" spacing={4} sx={{ marginRight: 4 }} alignItems="center">
                <NavButton 
                    icon={isDarkMode ?  <NightsStayRounded /> : <LightModeRounded />}
                    customFunction={() => handleClick("darkMode")}
                    name={isDarkMode ? "Dark Mode" : "Light Mode"}
                />
                <NavButton
                    customFunction={() => handleClick('logout')}
                    icon={<Logout />}
                    name="Logout"
                />
                    <Avatar src="./public/images/person-avatar.png" alt="avatar" variant="circular" />
            </Stack>
        </div>
    )
}