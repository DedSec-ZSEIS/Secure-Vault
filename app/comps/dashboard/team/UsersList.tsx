"use client"
import { GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useStateContext } from '../../../contexts/ContextProvider';
import getUsers from '../../../utils/getUsers';
import UsersDataGrid from './UsersDataGrid';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Avatar, IconButton, Typography } from '@mui/material';

// const bannerUnitId_1 = __DEV__ ? TestIds.BANNER : process.env.;



export default function UsersList() {
    interface IUser {
        id: number;
        email: string;
        fullName: string;
        dbSpaceTaken: number;
        admin: boolean;
        status: string;
    }

    const [users, setUsers] = useState<IUser[]>([])
    const [formattedUsers, setFormattedUsers] = useState<IFormattedUser[]>([])
    const [selectedUsers, setSelectedUsers] = useState<any[]>([])
    const { userData } = useStateContext()
    const contextEmail = userData.email, contextUat = userData.uat

    const fetchUsers = async () => {
        const { email, uat } = window.sessionStorage.getItem('userData') ? JSON.parse(window.sessionStorage.getItem('userData')!) : { email: contextEmail, uat: contextUat }
        type TData = {
            successful: boolean;
            users: IUser[];
        }
        const data: TData = await getUsers(email, uat)
        setUsers(data.users)
        console.log(data)
        
        
    }

    useEffect(() => {
        fetchUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setFormattedUsers(users?.map((user: any, index: number) => {
        
            return {
                id: user?.id,
                shownId: index + 1,
                name: user?.fullName?.split(' ')[0],
                surname: user?.fullName?.split(' ')[1],
                email: user?.email,
                dbSpaceAllocated: user?.dbSpaceAllocated,
                dbSpaceUsed: user?.dbSpaceTaken,
                role: user?.admin ? 'Admin' : 'User',
                status: user?.status
            }
        }))
    }, [users])

    function handleClick(e: any, action: string) {
        switch (action) {
            case 'remove':
                console.log("remove user");
                break;
            case 'select':
                console.log("select user");
                
                break;
            case 'selectAll':
                
            default:
                break;
        }
    }

    const DeleteButton = () => <IconButton onClick={(e) => handleClick(e, 'remove')} aria-label="Delete"><DeleteOutlineIcon /></IconButton>
    const UserProfile = () => {
        const i = 0
        const getFullName = (i: number) => {
            let fullname = ''    
            if (formattedUsers[i].name) fullname += formattedUsers[i].name
            if (formattedUsers[i].surname) fullname += ` ${formattedUsers[i].surname}`
            return fullname
        }
        
        

        return (
            <div className="flex gap-1">
                <div className="flex-1">
                    <Avatar alt={formattedUsers[i].name}/>
                </div>
                <div className="flex justify-center items-left flex-col">
                    <Typography align='left' variant="subtitle2">{getFullName(i)}</Typography>
                    <Typography align='left' variant="subtitle2">{formattedUsers[i].email}</Typography>
                </div>
            </div>
        )
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: '_id', width: 150, hide: true},
        { field: 'shownId', headerName: '#', width: 150 },
        // { field: 'name', headerName: 'Imie', width: 150 },
        // { field: 'surname', headerName: 'Nazwisko', width: 150 },
        // { field: 'email', headerName: 'Email', width: 150 },
        { field: 'userProfile', headerName: 'Użytkownik', width: 150, renderCell: () => <UserProfile />, disableColumnMenu: true, sortable: false, align: "center" },
        { field: 'dbSpaceAllocated', headerName: 'Przydzielone miejsce', width: 150 },
        { field: 'dbSpaceUsed', headerName: 'Zużyte miejsce', width: 150 },
        { field: 'role', headerName: 'Rola', width: 150 }, // this will be custom renderCell() and label will be "admin" or "user". defaultly set to what received from api
        { field: 'status', headerName: 'Status', width: 150 },
        { field: 'remove', headerName: "Usuń użykownika", width: 150, renderCell: () => <DeleteButton />, disableColumnMenu: true, sortable: false, align: "center"},
    ];
    
    //create interface for formattedUsers
    interface IFormattedUser {
        id: number,
        shownId: number,
        name: string,
        surname: string,
        email: string,
        dbSpaceAllocated: number,
        dbSpaceUsed: number,
        role: string,
        status: string
    }

    

  return (
    <div className=''>
        <UsersDataGrid users={formattedUsers} columns={columns} />
    </div>
  )
}
