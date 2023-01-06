export default async function register (email: string, password: string, uat: string, name="dupa") {
    const APIPATH = process.env.NEXT_PUBLIC_APIPATH
    const APIKEY = process.env.NEXT_PUBLIC_APIKEY
    const sendData = {
        "email": String(email),
        "newPass": String(password),
        "uat": String(uat),
        "newFullName": String(name)
    }
    console.log(sendData);
    
    const res = await fetch(`${APIPATH}validateUser`, {
        method: 'POST',
        body: JSON.stringify(sendData),
        headers:    {
            "Content-Type": "application/json; charset=UTF-8",
            "api-key": (`${APIKEY}`)
            }
        })
        const data = await res.json()
        return data

}