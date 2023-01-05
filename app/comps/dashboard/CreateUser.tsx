'use client'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useStateContext } from "../../contexts/ContextProvider"

export default function CreateUser() {
    const {userData} = useStateContext()
    const APIPATH = process.env.NEXT_PUBLIC_APIPATH
    const handleSubmit = (e: any) => {
        e.preventDefault()
        const createdEmail = document.getElementById('standard-basic') as HTMLInputElement | null;
        const data = {
            "email": userData.email,
            "uat": userData.uat,
            "createdEmail": String(createdEmail?.value)
            }
            console.log(data);
            
            fetch(`${APIPATH}generateUser`, {
            method: 'POST',
            headers:    {
                "Content-Type": "application/json; charset=UTF-8",
                },
            body: JSON.stringify(data),
            
            
            }).then((response) => {
                console.log(response)
                return response.json()
                
            })
            .then((data) => {
            console.log(data);
            //rururu
            })
    }
    return(
    <div>
        <form onSubmit={e => handleSubmit(e)}>
            <TextField id="standard-basic" label="createdEmail" variant="standard" />
            <Button variant="outlined" type='submit'>Invite</Button>
        </form>
    </div>
    )
}