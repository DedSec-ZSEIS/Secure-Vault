export default async function register (email: string, password: string, uat: string, name="dupa") {
    const APIPATH = process.env.NEXT_PUBLIC_APIPATH
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
            }
        })
        const data = await res.json()
        return data

}