'use client'

import styles from './form.module.css'
import { useSession, signIn } from 'next-auth/react';
import sha512 from 'crypto-js/sha512';
import { useRouter } from 'next/navigation'
import { useStateContext } from "../../contexts/ContextProvider"
import login from '../../utils/login';
import register from '../../utils/register';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import oauthLogin from '../../utils/oauthLogin';

export default function Form({ name, email='', uat='' }: { name: string, email?: string, uat?: string }) {
    const router = useRouter()
    const { setUserData, userData } = useStateContext()

    const { data: session, status } = useSession()

    
    useEffect(() => {
        if (session) {
            const data = oauthLogin(session?.user?.email)
            console.log(data);
            if (!data) {
                alert("Nie udało się zalogować")
            } else {
                setUserData({
                    email: data.email,
                    uat: data.uat,
                })
            }
        }
    }, [])

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        if(name === 'login') {
            const data = await login()
            console.log(data)
            
            if (data.successful) {
                console.log('successful');
                
                setUserData({
                    email: data.email,
                    uat: data.uat
                })
                router.push('/dashboard')
                sessionStorage.setItem('userData', JSON.stringify({
                    email: data.email,
                    uat: data.uat
                }))
            }

        } else {
                const password = document.getElementById('password') as HTMLInputElement
                const hashedPassword = sha512(password.value).toString()
                const data = await register(email, hashedPassword, uat)
                console.log(data);
                
        }
    }

    return (
        <div className={'wrapper shadow w-3/5 h-1/2 md:w-2/5 lg:w-1/3 xl:w-1/4 2xl:w-1/5 relative ' + styles.wrapper}>
            <div className="border-gray-500 border-2 rounded-3xl w-full h-full font-sans scale-110 bg-white text-black dark:bg-black dark:text-white ">
                <h2 className="my-8 text-3xl font-normal flex  justify-center relative">
                    {name === 'login' ? 'Zaloguj się' : 'Stwórz hasło'}
                </h2>
                <form action="#" className="mx-8 mt-16  ">
                    {
                        name === 'login' && <div className=" mt-10 flex flex-col border-b-2 border-black dark:border-white">
                        <label htmlFor="login" className="text-xl">Login</label>
                        <input 
                            type="textarea" 
                            name="email" id="email"  
                            placeholder="example@gmail.com"
                            className={styles.login + " bg-white dark:bg-black"}  
                        />

                    </div>
                    }
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
                <Button onClick={() => signIn()}>Sign up</Button>
            </div>
        </div>
    )
}