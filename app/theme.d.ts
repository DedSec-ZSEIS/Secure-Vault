import { ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {

    interface Theme { //do theme
        status: {
            danger: string;
        }
    }

    interface ThemeOptions { //do theme
        status: {
            danger: React.CSSProperties["color"];
        }
    }

    interface Palette { //do palette w theme
        neutral?: PaletteColor
    }

    interface PaletteOptions { //do palette w theme
        neutral?: PaletteColorOptions
    }

    interface SimplePaletteColorOptions { //do palette w theme
        darker?: string;
    }

    interface PaletteColor { //do palette w theme
        darker?: string;
    }
}