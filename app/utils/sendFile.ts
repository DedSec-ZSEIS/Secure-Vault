export default async function sendFile({
    file, email, uat
}: {
    file: File, email: string, uat: string
}) {
    const APIPATH = process.env.NEXT_PUBLIC_APIPATH
    const sendData = {
        method: "POST",
        headers: { 'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "email": email,
            "uat": uat, 
            "file": file
        })
    }
    const res = await fetch(`${APIPATH}sendFile`, sendData)
    const data = await res.json()
    return data
}
