"use client"
import sendFile from '../../../utils/sendFile';

export default function Page() {
    async function handleSubmit(e:any) {
        e.preventDefault()

        const userData = sessionStorage.getItem('userData')
        // const email = userData.email
        // const uat = userData.uat

        const file = document.getElementById('file') as HTMLInputElement | null;

        // const data = sendFile(searchParams.fil)
        console.table(userData);
        console.log(file?.value);
        
        
    }


  return (
    <div>
        <h1>Files</h1>
        <form action="POST" onSubmit={(e) => handleSubmit(e)}>
            <input type="file" name="file" id="file" />
            <input type="submit" value="Wyślij" />
        </form>
    </div>
  )
}
