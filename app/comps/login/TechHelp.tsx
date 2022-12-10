
export default function techHelp() {
  return (
    <div className="">
        <form className="flex flex-col">
            <label htmlFor="mail"
              className="text-xl"
            >
              Podaj swoją pocztę
            </label>
            <input 
              className="border-b-2 border-black my-4 "
              type="textarea" 
              name="mail" id="mail"
              placeholder="example@gmail.com">
            </input>
            <textarea 
              id="problem" 
              placeholder="Opisz swój problem i wyślij do nas"
              className="">
              
            </textarea>
            <input type="submit" id="przycisk" placeholder="dalej">
            </input>
        </form>
    </div>
  )
}
