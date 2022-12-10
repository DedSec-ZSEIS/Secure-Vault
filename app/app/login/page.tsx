import React from 'react'
import Form from '../../comps/login/Form'
import  {MdOutlineLiveHelp}  from 'react-icons/md';
import TechHelp from '../../comps/login/TechHelp';
export default function page() {
    return (
        <div className='bg-white dark:bg-black' style={{backgroundImage: "radial-gradient(circle at 100% 100%, rgba(150,198,255,.25) 0%, transparent 37%, transparent 82%, rgba(239,173,255,.25) 100%)"}}>
            <div className='w-screen h-screen flex justify-center items-center z-100 '>
                <Form />
                <button className='fixed left-3 bottom-3 size-3 text-3xl' ><MdOutlineLiveHelp /></button>
                <TechHelp />
            </div>
            
        </div>
    )
}
