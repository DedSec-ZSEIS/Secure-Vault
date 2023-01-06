export default async function validateLink (token: string) {
    const APIPATH = process.env.NEXT_PUBLIC_APIPATH
    const APIKEY = process.env.NEXT_PUBLIC_APIKEY

    const res = await fetch(`${APIPATH}validateLink/${token}`, {
        method: 'POST',
        headers:    {
            "Content-Type": "application/json; charset=UTF-8","api-key": (`${APIKEY}`)
            }
        })
        const data = await res.json()
        return data
}