const APIPATH = process.env.NEXT_PUBLIC_APIPATH



export default async function getUsers(email: string, uat: string) {
    const sendData = {
        method: "POST",
        headers: { 'Content-Type': 'application/json',
        "api-key": "c9b652c6c3a02b34c1d1fc197b99656e6347bb58f0e713e5014c5470d58e7a35709de8aecfa1e8b170b76c2ae4f8f042b30e0e29663138ef427e85dabd315f9c" },
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

