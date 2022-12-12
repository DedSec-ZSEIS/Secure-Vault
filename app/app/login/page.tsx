"use client"

import {useState} from 'react';
import Form from '../../comps/login/Form'
import TechHelp from '../../comps/login/TechHelp';
import  {MdOutlineLiveHelp}  from 'react-icons/md';
import { motion as m } from 'framer-motion';
import Dialog from '@mui/material/Dialog';
import { useTheme } from '@mui/material/styles';

export default function page() {

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const theme = useTheme();
    
    

    return (
        <div className='bg-white dark:bg-black' style={{backgroundImage: "radial-gradient(circle at 100% 100%, rgba(150,198,255,.25) 0%, transparent 37%, transparent 82%, rgba(239,173,255,.25) 100%)"}} >
            <m.div 
                className='w-screen h-screen flex justify-center items-center z-100 '
                variants={{
                    show: { filter: 'blur(5px)', transition: { duration: 0.5 } },
                    hide: { filter: 'blur(0px)', transition: { duration: 0.5 } }
            }}
            >
                <Form />
                <button 
                    className='fixed left-3 bottom-3 size-3text-3xl z-50'
                    onClick={handleClickOpen}
                >
                    <MdOutlineLiveHelp  className='text-4xl'/>
                </button>
            </m.div>
            <Dialog  
                open={open}
                onClose={handleClose}>
                    <TechHelp />
            </Dialog>
        </div>
    )
}
