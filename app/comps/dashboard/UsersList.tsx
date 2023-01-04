"use client"
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import GetUsers from '../../utils/getUsers';

// const bannerUnitId_1 = __DEV__ ? TestIds.BANNER : process.env.;



export default function UsersList() {
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        const users = await GetUsers()
        setUsers(users)
    }

    useEffect(() => {
        fetchUsers()
    }, [])



    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'fullName', headerName: 'Name', width: 150 },
        { field: 'email', headerName: 'Email', width: 150 },
    ];
    


  return (
    <div className='h-96 w-full'>
        <DataGrid rows={users} columns={columns} loading={!users.length}/>
    </div>
  )
}
