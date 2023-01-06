// import axios from 'axios';

export default async function oauthLogin (email: string) {
    const APIPATH = process.env.NEXT_PUBLIC_APIPATH
    const API_KEY = process.env.API_KEY
    // const res = await axios({
    //     method: 'post',
    //     url: `${APIPATH}oauthLogin`,
    //     withCredentials: false,
    //     data: {
    //         email,
    //     },
    //     headers: {
    //         'Content-Type': 'application/json',
    //         "Access-Control-Allow-Origin": "*", // Required for CORS support to work,
    //         "api-key": API_KEY
    //     },
    // })


    const headers = {
        'Content-Type': 'application/json',
        // "Access-Control-Allow-Origin": "*", // Required for CORS support to work,
        "api-key": String(API_KEY),
    }
    console.log(headers);
    
    const res = await fetch(`${APIPATH}oauthLogin`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            email,
        })
    })

    const data = await res.json()


    return data
}