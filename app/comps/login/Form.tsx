'use client'

import styles from './form.module.css'
import sha from "js-sha512"


export default function Form() {
    
    const handleSubmit = (e: Event) => {
            const email = document.getElementById('email') as HTMLInputElement | null;
            const password = document.getElementById('password') as HTMLInputElement | null;
            e.preventDefault()
            const data = {
            "email": String(email?.value),
            "password": sha.sha512(String(password?.value))
            }
            console.log('hello')
            fetch('http://epickastrona.ddns.net:3001/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
            }).then(function (response) {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(response);
            }).then(function (data) {
            console.log(data);
            }).catch(function (error) {
            console.warn('Something went wrong.', error);
            });
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
                            onClick={e => handleSubmit} 
                            >
                        Dalej
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}