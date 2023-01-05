import sha512 from "crypto-js/sha512";

export default async function login() {
    const APIPATH = process.env.NEXT_PUBLIC_APIPATH
    // to change with react hook form
    const email = document.getElementById('email') as HTMLInputElement | null;
    const password = document.getElementById('password') as HTMLInputElement | null;

    const sendData = {
        "email": String(email?.value),
        "password": String(sha512(String(password?.value)))
    }
    
    const res = await fetch(`${APIPATH}login`, {
        method: 'POST',
        body: JSON.stringify(sendData),
        headers:    {
            "Content-Type": "application/json; charset=UTF-8",
            }
    })
    const data = await res.json()
    return data
}