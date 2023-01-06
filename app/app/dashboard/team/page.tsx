"use client"
import { Card, Paper } from '@mui/material'
import CreateUser from '../../../comps/dashboard/CreateUser'
import UsersList from '../../../comps/dashboard/team/UsersList'

export default function page() {
    return (
        <div className="p-4">
            <CreateUser />
            <br />
            <Paper elevation={0}>
                <Card elevation={0}>
                    <UsersList />
                </Card>
            </Paper>
        </div>
    )
}
