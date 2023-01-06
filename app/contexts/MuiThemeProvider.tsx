"use client"
import { ThemeProvider, colors, createTheme } from "@mui/material";
import { useStateContext } from "./ContextProvider";




const lightTheme = {
    
    palette: {
        secondary: {
            light: colors.deepPurple[50],
            main: colors.deepPurple[500],
            dark: colors.deepPurple[600],
        },
        primary:{
            light: colors.blue[50],
            main: colors.blue[500],
            dark: colors.blue[600],
        },
        background:{
            light:'#FFFFFF',
            default: colors.blue[50],
            dark: colors.blue[300],
        },
        actions:{
            gray:'#29314f',
            lightred: '#f8efee',
            red:'#d84315',
            lightgreen: colors.green.A100,
            green: colors.green.A400,
            lightpurple: colors.deepPurple[50],
            purple: colors.deepPurple[600],
            lightblue: colors.blue[50],
            blue: colors.blue[600]
        },
        gray:{
            primary:'#bdc8f0',
            secondary:'#8492c4',
        },
        sidebar:{
            background:'#ede7f6'
        }
    }
}

const darkTheme = {
    
    palette: {
        secondary: {
            light: colors.deepPurple[50],
            main: colors.deepPurple[500],
            dark: colors.deepPurple[600],
        },
        primary:{
            light: colors.blue[50],
            main: colors.blue[500],
            dark: colors.blue[600],
        },
        background:{
            dark:'#111936',
            default:'#1a223f',
            light:'#212946',
        },
        actions:{
            gray:'#29314f',
            lightred: '#29314f',
            red:'#d84315',
            lightgreen: '29314f',
            green: colors.green.A400,
            lightpurple: '29314f',
            purple: colors.deepPurple[600],
            lightblue: '#29314f',
            blue: colors.blue[600]
        },
        gray:{
            primary:'#bdc8f0',
            secondary:'#8492c4',
        },
        sidebar:{
            background:'#212053'
        }
    }
}



export default function MuiThemeProvider({ children }: { children: React.ReactNode }) {
    const darkMode = localStorage.getItem("darkMode") === "true";
    const muiTheme = createTheme(darkMode ? darkTheme : lightTheme)
    return (
        <ThemeProvider theme={muiTheme}>
            {children}
        </ThemeProvider>
    )
}