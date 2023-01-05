"use client"
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useStateContext } from '../../../contexts/ContextProvider';
import getUsers from '../../../utils/getUsers';
import UsersDataGrid from './UsersDataGrid';

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
    const { userData } = useStateContext()
    const contextEmail = userData.email, contextUat = userData.uat

    const fetchUsers = async (email: string, uat: string) => {
        type TData = {
            successful: boolean;
            users: IUser[];
        }
        const data: TData = await getUsers(email, uat)
        setUsers(data.users)
        console.log(data);
        
    }

    useEffect(() => {
        const { email, uat } = window.sessionStorage.getItem('user') ? JSON.parse(window.sessionStorage.getItem('user')!) : { email: contextEmail, uat: contextUat }
        fetchUsers(email, uat)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleClick(e: any, action: string) {
        switch (action) {
            case 'remove':
                console.log("remove user");
                break;
            default:
                break;
        }
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: '#', width: 150 },
        { field: 'name', headerName: 'Imie', width: 150 },
        { field: 'surname', headerName: 'Nazwisko', width: 150 },
        { field: 'email', headerName: 'Email', width: 150 },
        { field: 'dbSpaceAllocated', headerName: 'Przydzielone miejsce', width: 150 },
        { field: 'dbSpaceUsed', headerName: 'Zużyte miejsce', width: 150 },
        { field: 'role', headerName: 'Rola', width: 150 }, // this will be custom renderCell() and label will be "admin" or "user". defaultly set to what received from api
        { field: 'remove', headerName: "Usuń użykownika", width: 150, renderCell: () => <button onClick={(e) => handleClick(e, 'remove')}>Usuń</button> }
    ];
    
    //create interface for formattedUsers
    interface IFormattedUser {
        id: number,
        name: string,
        surname: string,
        email: string,
        dbSpaceAllocated: number,
        dbSpaceUsed: number,
    }

    const formattedUsers: IFormattedUser[] = users.map((user: any, index) => {
        
        return {
            id: index + 1,
            name: user?.name,
            surname: user?.surname,
            email: user?.email,
            dbSpaceAllocated: user?.dbSpaceAllocated,
            dbSpaceUsed: user?.dbSpaceUsed,
        }
    })


  return (
    <div className='h-96 w-full'>
        <UsersDataGrid users={formattedUsers} columns={columns} />
    </div>
  )
}
