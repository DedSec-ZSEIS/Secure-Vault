import { useStateContext } from "../contexts/ContextProvider"
const APIPATH = process.env.NEXT_PUBLIC_APIPATH

async function getusers(sendData:{method: string, headers: { 'Content-Type': string }, body: string}) {
    const response = await fetch(`${APIPATH}getUsers`, sendData)
    const data = await response.json()
    return data
}

export default function GetUsers() {
    const { userData } = useStateContext()
    const sendData = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "email": userData.email, //userData.email,
            "uat": userData.uat, //userData.uat,
            "userIds": [
                1,11,13
            ]
        })
    }
    const data = getusers(sendData)
    return data
}

