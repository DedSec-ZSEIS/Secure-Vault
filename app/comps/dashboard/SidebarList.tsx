import { ListItemButton, ListItemIcon, ListItemText, List, ListSubheader, styled, Typography } from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { useStateContext } from "../../contexts/ContextProvider";
import Link from "next/link";

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
    borderRadius: "12px",
    backgroundColor: theme.palette.actions?.lightpurple,
    marginTop: "8px",
}))

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
                <Typography variant="subtitle1">Dashboard</Typography>
            </ListSubheader>
        }
    >
        <Link href={`${path}/`} passHref>
            <StyledListItemButton>
                <ListItemIcon>
                    <HomeOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </StyledListItemButton>
        </Link>
        <Link href={`${path}/team`} passHref>
            <StyledListItemButton>
                <ListItemIcon>
                    <PeopleAltOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Team" />
            </StyledListItemButton>
        </Link>
        <Link href={`${path}/files`} passHref>
            <StyledListItemButton>
                <ListItemIcon>
                    <FolderIcon />
                </ListItemIcon>
                <ListItemText primary="Files" />
            </StyledListItemButton>
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
            <StyledListItemButton>
                <ListItemIcon>
                    <HomeOutlinedIcon />
                </ListItemIcon>
            </StyledListItemButton>
        </Link>
        <Link href={`${path}/team`} passHref>
            <StyledListItemButton>
                <ListItemIcon>
                    <PeopleAltOutlinedIcon />
                </ListItemIcon>
            </StyledListItemButton>
        </Link>
    </List>
    )
}