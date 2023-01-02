import { Button, Typography, ListItemButton, ListItemIcon, ListItemText, List, ListSubheader } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { theme } from "../../theme/theme";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { useStateContext } from "../../contexts/ContextProvider";
import Link from "next/link";

const sxStyle = {
    borderRadius: "12px",
    bgcolor: theme.palette.secondary.main
}

export default function SidebarList() {
    const { isMenuOpen } = useStateContext();

  return (
    <>
        { isMenuOpen ? <OpenedList /> : <ClosedList /> }
    </>
  )
}

const path = "/dashboard"

function OpenedList() {
    return (
        <List
        sx={{ width: '100%' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
            <ListSubheader component="div" id="nested-list-subheader" sx={{ background: 'none' }}>
                Dashboard
            </ListSubheader>
        }
    >
        <Link href={`${path}/`} passHref>
            <ListItemButton sx={sxStyle}>
                <ListItemIcon>
                    <HomeOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItemButton>
        </Link>
        <Link href={`${path}/team`} passHref>
            <ListItemButton sx={sxStyle}>
                <ListItemIcon>
                    <PeopleAltOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Team" />
            </ListItemButton>
        </Link>
    </List>
    )
}

function ClosedList() {
    return (
        <List
        sx={{ width: '100%', maxWidth: 360 }}
        component="nav"
    >
        <Link href={`${path}/`} passHref>
            <ListItemButton sx={sxStyle}>
                <ListItemIcon>
                    <HomeOutlinedIcon />
                </ListItemIcon>
            </ListItemButton>
        </Link>
        <Link href={`${path}/team`} passHref>
            <ListItemButton sx={sxStyle}>
                <ListItemIcon>
                    <PeopleAltOutlinedIcon />
                </ListItemIcon>
            </ListItemButton>
        </Link>
    </List>
    )
}