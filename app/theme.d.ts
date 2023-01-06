import { ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {

    // interface Theme { //do theme
    //     status: {
    //         danger: string;
    //     }
    // }

    // interface ThemeOptions { //do theme
    //     status: {
    //         danger: React.CSSProperties["color"];
    //     }
    // }

    interface Palette { //do palette w theme
        actions?: PaletteColor;
        gray?: PaletteColor;
        sidebar?: PaletteColor;
    }

    interface PaletteOptions { //do palette w theme
        actions?: PaletteColorOptions;
        gray?: PaletteColorOptions;
        sidebar?: PaletteColorOptions;
    }

    interface SimplePaletteColorOptions { //do palette w theme
        gray?: string;
        lightred?: string;
        red?: string;
        lightgreen?: string;
        green?: string;
        lightpurple?: string;
        purple?: string;
        lightblue?: string;
        blue?: string;
        primary?: string;
        secondary?: string;
        background?: string;
    }

    interface PaletteColor { //do palette w theme
        gray?: string;
        lightred?: string;
        red?: string;
        lightgreen?: string;
        green?: string;
        lightpurple?: string;
        purple?: string;
        lightblue?: string;
        blue?: string;
        primary?: string;
        secondary?: string;
        background?: string;
    }

}



// interface Palette { //do palette w theme
//     actions?: PaletteColor
// }

// interface PaletteOptions { //do palette w theme
//     actions?: PaletteColorOptions
// }

// interface SimplePaletteColorOptions { //do palette w theme
//     darker?: string;
// }

// interface PaletteColor { //do palette w theme
//     darker?: string;
// }