const APIPATH = process.env.NEXT_PUBLIC_APIPATH

export default async function removeUsers(email: string, uat: string, userIds: number[]) {
    const sendData = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "email": email,
            "uat": uat, 
            "userIds": userIds, // can contain user id to precise the users to remove
        })
    }
    console.log("Sent Data:");
    console.log(sendData);
    
    const res = await fetch(`${APIPATH}removeUsers`, sendData)
    const data = await res.json()
    
    console.log("Received Data:");
    console.log(data);
    
    return data
}

