'use client'

import styles from './form.module.css'
import { useSession, signIn } from 'next-auth/react';
import sha512 from 'crypto-js/sha512';
import { useRouter } from 'next/navigation'
import { useStateContext } from "../../contexts/ContextProvider"
import login from '../../utils/login';
import register from '../../utils/register';
// import { useEffect } from 'react';
import {useForm, Controller} from 'react-hook-form'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import oauthLogin from '../../utils/oauthLogin';

const PATH = process.env.NEXT_PUBLIC_PATH
const APIPATH = process.env.NEXT_PUBLIC_APIPATH

export default function Form( { name, email='', uat='' } : { name: string, email?: string, uat?: string } ) {
    const router = useRouter()
    const {userData, setUserData} = useStateContext()

    const { data: session, status } = useSession()

    
    // useEffect(() => {
    //     if (session) {
    //         const data = oauthLogin(session?.user?.email)
    //         console.log(data);
    //         if (!data) {
    //             alert("Nie udało się zalogować")
    //         } else {
    //             setUserData({
    //                 email: data.email,
    //                 uat: data.uat,
    //             })
    //         }
    //     }
    // }, [])

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
                // const data = await register(email, hashedPassword, uat)
                // console.log(data);
                
        }
    }

    interface FormInputs {
        firstName: string;
        lastName: string;
        password: string;
        hashedpassword: string;
        email: string;
    }
    const { register,  control } = useForm<FormInputs>();

    return (
        <div className={'wrapper shadow w-3/5 h-1/2 md:w-2/5 lg:w-1/3 xl:w-1/4 2xl:w-1/5 relative ' + styles.wrapper}>
            <div className="border-gray-500 border-1 rounded-3xl w-full h-full font-sans scale-110 bg-white text-black dark:bg-black dark:text-white ">
                <h2 className="my-8 text-3xl font-normal flex  justify-center relative">
                    {name === 'login' ? 'Zaloguj się' : 'Zarejestruj się'}
                </h2>
                {
                    name === 'activate' ?
                    (
                    <form onSubmit={(e) => handleSubmit(e)} className="mx-8 mt-12 ">
                        <div className="  mx-5 flex flex-col  gap-1 ">
                            <Controller
                                render={({  }) => <TextField {...register("firstName")} id="firstName"label="First Name" variant="standard"/>}
                                name="firstName"
                                control={control}
                                rules={{ required: true }}
                                defaultValue=""
                            />
                            <Controller
                                render={({  }) => <TextField {...register("lastName")} id="lastname" label="Last Name" variant="standard"/>}
                                name="lastName"
                                control={control}
                                rules={{ required: true }}
                                defaultValue=""
                            />
                            <Controller
                                render={({ }) => <TextField {...register("password")} id="password" label="Create password" variant="standard" type="password"/>}
                                name="password"
                                control={control}
                                rules={{ required: true }}
                                defaultValue=""
                            />
                            <Controller
                                render={({  }) => <TextField {...register("hashedpassword")} id="hashedpassword" label="Confirm password" variant="standard" type="password"/>}
                                name="hashedpassword"
                                control={control}
                                rules={{ required: true }}
                                defaultValue=""
                            />
                            {/* <input type="submit" /> */}
                            <Button variant="outlined" type="submit" className='mt-5'>Wyślij</Button>
                        </div>
                    </form>
                    )
                    :
                    (
                    <form onSubmit={(e) => handleSubmit(e)} className="mx-8 mt-12 flex flex-col">
                        <div className=" mt-5 mx-5 flex flex-col  gap-1 ">
                            <Controller
                                render={({ field }) => <TextField {...register("email")} id="email"label="E-mail" variant="standard"/>}
                                name="email"
                                control={control}
                                rules={{ required: true }}
                                defaultValue=""
                            />
                            
                            <Controller
                                render={({ field }) => <TextField {...register("password")} id="password" label="password" variant="standard" type="password"/>}
                                name="password"
                                control={control}
                                rules={{ required: true }}
                                defaultValue=""
                            />
                            
                            {/* <input type="submit" /> */}
                            <Button variant="outlined" type="submit" className='mt-5'>Wyślij</Button>
                        </div>
                    </form>
                    )
                }
            </div>
        </div>
    )
}

