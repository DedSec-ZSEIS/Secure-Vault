const APIPATH = process.env.NEXT_PUBLIC_APIPATH
const APIKEY = process.env.NEXT_PUBLIC_APIKEY



export default async function getUsers(email: string, uat: string) {
    const sendData = {
        method: "POST",
        headers: { 'Content-Type': 'application/json',
        "api-key": (`${APIKEY}`)},
        body: JSON.stringify({
            "email": email,
            "uat": uat, 
            "userIds": [ // can contain user id to precise the user to get | if empty, get all users
                // 1,11,13
            ]
        })
    }
    console.log("Sent Data:");
    console.log(sendData);
    
    const res = await fetch(`${APIPATH}getUsers`, sendData)
    const data = await res.json()

    console.log("Received Data:");
    console.log(data);
    
    return data
}

