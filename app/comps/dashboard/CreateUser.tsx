'use client'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useStateContext } from "../../contexts/ContextProvider"
import { useState } from 'react';
import axios from 'axios';

export default function CreateUser() {
    const {userData} = useStateContext()
    const [requestPending, setRequestPending] = useState(false)
    const APIPATH = process.env.NEXT_PUBLIC_APIPATH
    const handleSubmit = (e: any) => {
        e.preventDefault()
        setRequestPending(true)
        const createdEmail = document.getElementById('email-input') as HTMLInputElement | null;
        const data = {
            "email": userData.email,
            "uat": userData.uat,
            "createdEmail": String(createdEmail?.value)
        }

        axios.post(`${APIPATH}createUser`, data).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        }).then(() => {
            setRequestPending(false)
        })

        // fetch(`${APIPATH}generateUser`, {
        // method: 'POST',
        // headers: {
        //     "Content-Type": "application/json; charset=UTF-8",
        // },
        // body: JSON.stringify(data),
        
        
        // }).then(response => {
        //     console.log(response)
        //     return response.json()
        // })
        // .then(data => {
        // console.log(data);
        // //rururu
        // })
    }
    return(
    <div>
        <form onSubmit={e => handleSubmit(e)}>
            <TextField id="email-input" label="createdEmail" variant="standard" />
            <Button variant="outlined" type='submit' disabled={requestPending}>Invite</Button>
        </form>
    </div>
    )
}