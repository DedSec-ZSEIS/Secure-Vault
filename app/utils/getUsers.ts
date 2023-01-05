const APIPATH = process.env.NEXT_PUBLIC_APIPATH



export default async function getUsers(email: string, uat: string) {
    const sendData = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
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

