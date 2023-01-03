"use client"
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import axios from 'axios';
import { useEffect, useState } from 'react';




export default function UsersList() {
    const [users, setUsers] = useState([])
    // const api_url = 'http://jsonplaceholder.typicode.com/users?limit=5'
    const api_url = 'http://localhost:8080'
    async function getUsers() {
        axios.get(api_url)
            .then(response => {
                console.log(response);
                setUsers(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    }
    useEffect(() => {
        getUsers();
    }, []);


    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'username', headerName: 'Username', width: 150 },
        { field: 'email', headerName: 'Email', width: 150 },
    ];
    


  return (
    <div className='h-96 w-full'>
        <DataGrid rows={users} columns={columns} loading={!users.length}/>
    </div>
  )
}
