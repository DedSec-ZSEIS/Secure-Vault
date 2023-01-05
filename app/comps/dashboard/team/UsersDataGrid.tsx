"use client"
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useEffect, useState } from 'react'

export default function UsersDataGrid({ users, columns }: { users: any[], columns: GridColDef<any, any, any>[] }) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (users) {
      console.log(users);
      
      // if (!users.length) {
      //   console.log("test");
        
      //   setLoading(true)
      // } else {
      //   setLoading(false)
      // }
    }
  }, [users])

  const dataGridStyles = {
    height: '650px',
    '& .MuiDataGrid-root': {
      border: '1px solid #f5f5f5',
    },
    '& .MuiDataGrid-row': {
      cursor: 'pointer',
    },
    '& .MuiDataGrid-cell': {
      fontSize: '0.8rem',
    },
    '& .MuiDataGrid-columnsContainer': {
      backgroundColor: '#f5f5f5',
    },
    '& .MuiDataGrid-columnHeaderTitle': {
      fontWeight: 'bold',
    },
    '& .MuiDataGrid-columnHeader': {
      backgroundColor: '#f5f5f5',
    },
    '& .MuiDataGrid-columnSeparator': {
      display: 'none',
    },
    '& .MuiDataGrid-cellWithRenderer': {
      display: 'flex',
      alignItems: 'center',
    },
  }

  return (
    <DataGrid
      rows={users}
      columns={columns}
      loading={loading}
      pagination
      pageSize={10}
      rowsPerPageOptions={[10, 20, 50]}
      checkboxSelection
      sx={dataGridStyles}
    />
  )
}
