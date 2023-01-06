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
            "api-key": "c9b652c6c3a02b34c1d1fc197b99656e6347bb58f0e713e5014c5470d58e7a35709de8aecfa1e8b170b76c2ae4f8f042b30e0e29663138ef427e85dabd315f9c"
            }
    })
    const data = await res.json()
    return data
}