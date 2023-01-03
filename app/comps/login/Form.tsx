'use client'

import styles from './form.module.css'
import sha512 from 'crypto-js/sha512';
import { useRouter } from 'next/navigation'
import { useStateContext } from "../../contexts/ContextProvider"
import axios from 'axios';



const PATH = process.env.NEXT_PUBLIC_PATH
const APIPATH = process.env.NEXT_PUBLIC_APIPATH
export default function Form() {
    const router = useRouter()
    const {userData, setUserData} = useStateContext()

    const handleSubmit = (e: any) => {
        e.preventDefault()
        
        const email = document.getElementById('email') as HTMLInputElement | null;
        const password = document.getElementById('password') as HTMLInputElement | null;

        const data = {
            "email": String(email?.value),
            "password": String(sha512(String(password?.value)))
        }
        // In Axios responses are already served as javascript object, no need to parse, simply get response and access data.//
        axios.post(`${APIPATH}login`, data).then(res => res.data).then(data => {
            if (data.succesfull) {
                setUserData({
                    email: data.email,
                    uat: data.uat
                })
                console.log(userData)
                if(data.admin){
                    router.push(`${PATH}dashboard`)
                }else{
                    router.push(`${PATH}dashboard/user`)
                }
            }
        })
        // old fetch method

        // fetch(`${APIPATH}login`, {
        // method: 'POST',
        // body: JSON.stringify(data),
        // headers:    {
        //     "Content-Type": "application/json; charset=UTF-8",
        //     }
        // }).then((response) => response.json())
        // .then((data) => {
        //     console.log(data);
        //     // if( warunek do zalogowania się) 
        //     if (data.succesfull) {
        //         setUserData({
        //             email: data.email,
        //             uat: data.uat
        //         })
        //         console.log(userData)
        //         if(data.admin){
        //             router.push(`${PATH}dashboard`)
        //         }else{
        //             router.push(`${PATH}dashboard/user`)
        //         }
                
        //     }
        //     })
        //     .catch((err) => {
        //     console.log(err);
        // });
    }


    return (
        <div className={'wrapper shadow w-3/5 h-1/2 md:w-2/5 lg:w-1/3 xl:w-1/4 2xl:w-1/5 relative ' + styles.wrapper}>
            <div className="border-gray-500 border-2 rounded-3xl w-full h-full font-sans scale-110 bg-white text-black dark:bg-black dark:text-white ">
                <h2 className="my-8 text-3xl font-normal flex  justify-center relative">Zaloguj się</h2>
                <form action="#" className="mx-8 mt-16  ">
                    {/* poprzednio w input login byl name="email" */}
                    <div className=" mt-10 flex flex-col border-b-2 border-black dark:border-white">
                        <label htmlFor="login" className="text-xl">Login</label>
                        <input 
                            type="textarea" 
                            name="email" id="email"  
                            placeholder="example@gmail.com"
                            className={styles.login + " bg-white dark:bg-black"}  
                        />

                    </div>
                    <div className="my-5 flex flex-col border-b-2 border-black dark:border-white">
                        <label htmlFor="password" className="text-xl">Hasło</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="**********"
                            className={styles.login + " bg-white dark:bg-black"}/>
                    </div>
                    <div className="flex justify-center mt-20 text-3xl font-light">
                        <button 
                            className={styles.lineAnimation} 
                            onClick={e => handleSubmit(e)} 
                            >
                            Dalej
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}