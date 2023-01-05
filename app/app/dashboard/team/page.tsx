"use client"
import { Card, Paper } from '@mui/material'
import CreateUser from '../../../comps/dashboard/CreateUser'
import UsersList from '../../../comps/dashboard/team/UsersList'

export default function page() {
    return (
        <div className="p-4">
            <CreateUser />
            <br />
            <Paper>
                <Card>
                    <UsersList />
                </Card>
            </Paper>
        </div>
    )
}
