export default async function validateLink (token: string) {
    const APIPATH = process.env.NEXT_PUBLIC_APIPATH

    const res = await fetch(`${APIPATH}validateLink/${token}`, {
        method: 'POST',
        headers:    {
            "Content-Type": "application/json; charset=UTF-8",
            }
        })
        const data = await res.json()
        return data
}