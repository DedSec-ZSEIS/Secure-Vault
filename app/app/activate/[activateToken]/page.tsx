"use client"
import {useState, useEffect} from 'react';
import Form from '../../../comps/login/Form'
import TechHelp from '../../../comps/login/TechHelp';
// import  {MdOutlineLiveHelp}  from 'react-icons/md';
import QuizRoundedIcon from '@mui/icons-material/QuizRounded';
import { motion as m } from 'framer-motion';
import Dialog from '@mui/material/Dialog';
import { useRouter } from 'next/navigation';
import validateLink from '../../../utils/validateLink';

export default function page({ params } : { params: { activateToken: string } }) {
    const { activateToken } = params

    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState('')

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    async function getEmail() {
      const data = await validateLink(activateToken)
      console.log(data);
    }
    useEffect(() => {
      getEmail()
    }, [])


  return (
    
  <div className={`bg-white dark:bg-black `} style={{backgroundImage: "radial-gradient(circle at 100% 100%, rgba(150,198,255,.25) 0%, transparent 37%, transparent 82%, rgba(239,173,255,.25) 100%)"}} >
  <m.div 
      className='w-screen h-screen flex justify-center items-center z-100 '
      variants={{
          show: { filter: 'blur(5px)', transition: { duration: 0.5 } },
          hide: { filter: 'blur(0px)', transition: { duration: 0.5 } }
      }}
      >
      <Form  name="activate" email={email} />
      <button 
          className='fixed left-3 bottom-3 size-3 text-3xl z-50'
          onClick={handleClickOpen}
      >
          <QuizRoundedIcon  className='text-4xl p-2 box-content duration-150 dark:text-white hover:bg-slate-200 dark:hover:bg-gray-500 dark:hover:bg-opacity-50 hover:bg-opacity-50 rounded-lg'/>
      </button>
  </m.div>
  {/* {
      open && <div className="w-screen h-screen flex justify-center items-center overflow-visible ${open ? "backdrop-blur-md" : ""}"></div>
  } */}
  <Dialog
      sx={{
          backdropFilter: 'blur(5px)',
      }}
      open={open}
      onClose={handleClose}>
          <TechHelp open={open} />
  </Dialog>
</div>

  )
}
