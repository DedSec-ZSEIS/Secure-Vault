"use client"
import { ThemeProvider, colors, createTheme } from "@mui/material";
import { useStateContext } from "./ContextProvider";

const darkMode = localStorage.getItem("darkMode") === "true";



const lightTheme = {
    status: {
        danger: '#E54E3E',
    },
    palette: {
        secondary: {
            main: colors.orange[500],
        },
        neutral: {
            main: colors.grey[500],
            darker: colors.grey[700],
        },
    }
}

const darkTheme = {
    status: {
        danger: '#E54E3E',
    },
    palette: {
        secondary: {
            main: colors.orange[500],
        },
        neutral: {
            main: colors.grey[500],
            darker: colors.grey[700],
        },
    }
}

export const muiTheme = createTheme(darkMode ? darkTheme : lightTheme)


export default function MuiThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={muiTheme}>
            {children}
        </ThemeProvider>
    )
}