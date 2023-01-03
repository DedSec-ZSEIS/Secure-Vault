import CreateUser from '../../../comps/dashboard/CreateUser'
import UsersList from '../../../comps/dashboard/UsersList'

export default function page() {
    return (
        <div className="p-4">
            <CreateUser />
            <br />
            <UsersList />
        </div>
    )
}
