import styles from './form.module.css'
import TextField from '@mui/material/TextField';
import { FormEvent } from 'react';
const APIPATH = process.env.NEXT_PUBLIC_APIPATH

export default function techHelp({open} : {open: boolean}) {

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const searchParams = new URLSearchParams(formData as any);
    // const email = document.getElementById('standard-textarea') as HTMLInputElement | null;
    // const problem = document.getElementById('outlined-basic') as HTMLInputElement | null;
    // const data = {
    //   "email": String(email?.value),
    //   "problem": String(problem?.value)
    // }
    

    fetch(`http://epickastrona.ddns.net:3001/help`, {
      method: 'POST',
      body: searchParams,
      
    }).then((response) => response.json())
    .then((data) => {
      console.log(data);
      
    })
  }

  return ( 
    <div className={`theme={darkTheme}`}>
      <div className='border-gray-500 border-2 rounded-3xl bg-white  fixed w-4/12 top-1/4 left-1/3' >
          <form 
            className="m-5 "
            onSubmit={e => handleSubmit(e)}
            
            >
              <h1 className="text-3xl font-thin  ">
                Potrzebujesz pomocy?
              </h1>
              <h2 className='text-lg text-gray-600 font-light'>
                Wypełnij formularz i napisz do nas
              </h2>
              <div className="flex justify-center flex-col">
              <TextField
                  name='email'
                  id="standard-textarea"
                  label="Podaj Imie i Nazwisko"
                  placeholder="Jan Kowalski"
                  multiline
                  variant="standard"
                  className=" my-2  "
                  InputLabelProps={{
                    style: { color: '#000' },
                  }}
                  sx={{
                        color: '#000',
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#000',
                            color: '#6b6b6b',
                          },
                          '&:hover fieldset': {
                            borderColor: '#000',
                            color: '#6b6b6b',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#000',
                            color: '#6b6b6b',
                          }
                        },
                      }}
                />
                <TextField
                  name='email'
                  id="standard-textarea"
                  label="Adres email"
                  placeholder="example@gmail.com"
                  multiline
                  variant="standard"
                  className=" mb-8 mt-2 "
                  InputLabelProps={{
                    style: { color: '#000' },
                  }}
                  sx={{
                        color: '#000',
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#000',
                            color: '#6b6b6b',
                          },
                          '&:hover fieldset': {
                            borderColor: '#000',
                            color: '#6b6b6b',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#000',
                            color: '#6b6b6b',
                          }
                        },
                      }}
                />
                <TextField
                  name='problem'
                  fullWidth
                  id="outlined-basic"
                  label="Opisz swój problem, a my postaramy się go rozwiązać"
                  multiline
                  rows={8}
                  InputLabelProps={{
                    style: { color: '#4d4d4d' },
                  }}
                  sx={{
                        color: '#000',
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#000',
                            color: '#6b6b6b',
                          },
                          '&:hover fieldset': {
                            borderColor: '#000',
                            color: '#6b6b6b',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#000',
                            color: '#6b6b6b',
                          }
                        },
                
                  }}  />
              </div>
              <div className="flex justify-center items-center my-8  text-3xl font-light">
                <input type="submit" value="Wyślij" className={styles.lineAnimation} />
              </div>
          </form>
      </div>
    </div>
  )
}
