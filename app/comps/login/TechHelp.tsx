import styles from './form.module.css'
import TextField from '@mui/material/TextField';

export default function techHelp() {
  return (
    <div className={"border-gray-500 border-2 rounded-3xl bg-white w-2/5 h-1/2 "}>
            
            
            


        <form className="m-5">
            <h1 className="text-3xl font-thin  ">
              Potrzebujesz pomocy?
            </h1>
            <h2 className='text-lg text-gray-600 font-light'>
              Wypełnij formularz i napisz do nas
            </h2>
            <input 
              className="border-2 border-black my-4 "
              type="textarea" 
              name="mail" id="mail"
              placeholder="example@gmail.com">
            </input>
            {/* <TextField id="outlined-basic" label="Opisz swój problem"  /> */}

            <textarea 
              id="problem" 
              placeholder="Opisz swój problem...."
              className="border-2 border-black w-11/12 max-h-52 h-52 min-h-full">
              
            </textarea>
            <div className="flex justify-center items-center mt-16">
              <button className={styles.lineAnimation} >Wyślij</button>
            </div>
        </form>
    </div>
  )
}
