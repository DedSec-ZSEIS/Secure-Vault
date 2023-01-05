"use client"
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useEffect, useState } from 'react'

export default function UsersDataGrid({ users, columns }: { users: any[], columns: GridColDef<any, any, any>[] }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!users.length) {
      setLoading(true)
    } else {
      setLoading(false)
    }
  }, [users])


  return (
    <DataGrid rows={users} columns={columns} loading={loading}/>
  )
}
