import axios from 'axios';

export default async function oauthLogin (email: string) {
    const APIPATH = process.env.NEXT_PUBLIC_APIPATH
    const API_KEY = process.env.API_KEY
    const res = await axios({
        method: 'post',
        url: `${APIPATH}/oauthLogin`,
        withCredentials: false,
        data: {
            email,
        },
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*", // Required for CORS support to work,
            "api-key": API_KEY
        },
    })

    return res.status !== 200 ? false : res.data
}