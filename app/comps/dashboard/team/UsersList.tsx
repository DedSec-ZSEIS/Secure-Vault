"use client"
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useStateContext } from '../../../contexts/ContextProvider';
import getUsers from '../../../utils/getUsers';
import UsersDataGrid from './UsersDataGrid';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material';

// const bannerUnitId_1 = __DEV__ ? TestIds.BANNER : process.env.;



export default function UsersList() {
    interface IUser {
        id: number;
        email: string;
        fullName: string;
        dbSpaceTaken: number;
        admin: boolean;
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
        setFormattedUsers(users.map((user: any, index: number) => {
        
            return {
                dbId: user?.id,
                id: index + 1,
                name: user?.fullName?.split(' ')[0],
                surname: user?.fullName?.split(' ')[1],
                email: user?.email,
                dbSpaceAllocated: user?.dbSpaceAllocated,
                dbSpaceUsed: user?.dbSpaceTaken,
                role: user?.admin ? 'Admin' : 'User',
            }
        }))
        console.log(formattedUsers)
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

    function DeleteButton () {
        return (
            <IconButton onClick={(e) => handleClick(e, 'remove')} aria-label="Delete"><DeleteOutlineIcon /></IconButton>
        )
    }

    const columns: GridColDef[] = [
        { field: "select", renderHeader: () => <input type="checkbox" onInput={(e) => handleClick(e, 'selectAll')} />, width: 25, renderCell: () => <input type="checkbox" onInput={(e) => handleClick(e, 'select')} />, disableColumnMenu: true, sortable: false, headerAlign: 'center', align: 'center'},
        { field: 'id', headerName: '#', width: 150 },
        { field: 'name', headerName: 'Imie', width: 150 },
        { field: 'surname', headerName: 'Nazwisko', width: 150 },
        { field: 'email', headerName: 'Email', width: 150 },
        { field: 'dbSpaceAllocated', headerName: 'Przydzielone miejsce', width: 150 },
        { field: 'dbSpaceUsed', headerName: 'Zużyte miejsce', width: 150 },
        { field: 'role', headerName: 'Rola', width: 150 }, // this will be custom renderCell() and label will be "admin" or "user". defaultly set to what received from api
        { field: 'status', headerName: 'Status', width: 150 },
        { field: 'remove', headerName: "Usuń użykownika", width: 150, renderCell: () => <DeleteButton />, disableColumnMenu: true, sortable: false, align: "center"},
    ];
    
    //create interface for formattedUsers
    interface IFormattedUser {
        dbId: number,
        id: number,
        name: string,
        surname: string,
        email: string,
        dbSpaceAllocated: number,
        dbSpaceUsed: number,
        role: string,
    }

    

  return (
    <div className='h-96 w-full'>
        <UsersDataGrid users={formattedUsers} columns={columns} />
    </div>
  )
}
