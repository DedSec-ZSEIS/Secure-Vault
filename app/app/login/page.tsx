"use client"

import React from 'react'
import Form from '../../comps/login/Form'
import  {MdOutlineLiveHelp}  from 'react-icons/md';
import TechHelp from '../../comps/login/TechHelp';
import styles from '../../comps/login/form.module.css';
import { motion as m } from 'framer-motion';
import {useState} from 'react';

export default function page() {

    const [isShow, setIsShow] = useState(false)
    const toggle = () => setIsShow(!isShow);


    return (
        <div className='bg-white dark:bg-black' style={{backgroundImage: "radial-gradient(circle at 100% 100%, rgba(150,198,255,.25) 0%, transparent 37%, transparent 82%, rgba(239,173,255,.25) 100%)"}} >
            <m.div className='w-screen h-screen flex justify-center items-center z-100 '
            animate={isShow ? 'show' : 'hide'}
            variants={{
                show: { filter: 'blur(5px)', transition: { duration: 0.5 } },
                hide: { filter: 'blur(0px)', transition: { duration: 0.5 } }
                
            }}
            >
                <Form />
                <button 
                    className='fixed left-3 bottom-3 size-3text-3xl z-50'
                    onClick={toggle}
                >
                    <MdOutlineLiveHelp />
                </button>
                

            </m.div>
            <m.div 

            onClick={toggle}
        className={'fixed w-screen h-screen top-1/4  '+ styles.help}

            
            

            animate={isShow ? 'show' : 'hide'}
            variants={{
                show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20, mass: 1 } },
                hide: { opacity: 0, y: '100%', transition: { type: 'spring', stiffness: 100, damping: 20, mass: 1 } }

                
            }}

            
            >
                
                    <div onClick={toggle} className='w-screen h-screen flex justify-center items-center '>
                        {isShow && (<div className={"border-gray-500 border-2 rounded-3xl bg-white w-2/5 h-1/2 " + styles.help}>
                                <TechHelp />
                        </div>)}
                    </div>
                
            </m.div>
        </div>
    )
}
