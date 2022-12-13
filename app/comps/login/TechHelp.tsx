import styles from './form.module.css'
import TextField from '@mui/material/TextField';


  // const ariaLabel = { 'aria-label': 'description' };

export default function techHelp({open} : {open: boolean}) {
  return ( 
    <div className={``}>xd
      <div className='border-gray-500 border-2 rounded-3xl bg-white fixed w-4/12 top-1/4 left-1/3' >
          <form className="m-5 ">
              <h1 className="text-3xl font-thin  ">
                Potrzebujesz pomocy?
              </h1>
              <h2 className='text-lg text-gray-600 font-light'>
                Wypełnij formularz i napisz do nas
              </h2>
              <div className="flex justify-center flex-col">
                <TextField
                  id="standard-textarea"
                  label="Adres email"
                  placeholder="example@gmail.com"
                  multiline
                  variant="standard"
                  className=" my-4  "
                
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
                <button className={styles.lineAnimation} >Wyślij</button>
              </div>
          </form>
      </div>
    </div>
  )
}
