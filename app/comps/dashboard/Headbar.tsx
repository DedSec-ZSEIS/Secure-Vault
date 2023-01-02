'use client'
// import { BsMoonStars } from 'react-icons/bs';
// import { ImSun } from 'react-icons/im';
import { NightsStayRounded, LightModeRounded, MenuOpenRounded, SearchRounded } from '@mui/icons-material';
import NavButton from "./NavButton";
import { Avatar, InputAdornment, Stack, TextField } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { useStateContext } from '../../contexts/ContextProvider';


export default function Headbar() {
    const { theme, isMenuOpen, setIsMenuOpen, isDarkMode, setIsDarkMode, setTheme } = useStateContext()
    
    
    const handleClick = (name: string) => {
        switch (name) {
            case "darkMode":
                setTheme(theme === "light" ? "dark" : "light")
                setIsDarkMode(!isDarkMode) //(prev: any) => !prev
                break
            case "menu":
                setIsMenuOpen(!isMenuOpen) //(prev: any) => !prev
                break
            default:
                break
        }
    }


    return (
        <div className={`headbar dark:bg-primary-deepblue bg-white flex items-center rounded-bl-lg h-24 w-full dark:shadow-md relative text-white justify-between`}  style={{ gridArea: "headbar" }}>
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
                <div className="profile-avatar w-16 h-16 dark:bg-light-deepblue bg-light-blue hover:bg-primary-blue hover:dark:bg-primary-blue rounded-full ease-in duration-150 p-2 flex items-center justify-center">
                    <button className="profile-avatar-btn w-full h-full bg-primary-purple rounded-full overflow-hidden">
                        <Avatar src="../../public/images/person-avatar.png" alt="avatar" variant="circular"/>
                    </button>
                </div>
            </Stack>
        </div>
    )
}
