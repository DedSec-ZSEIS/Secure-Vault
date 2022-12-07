import { sha512 } from "js-sha512"

async function getLoginData(data) {
  const response = await fetch('http://epickastrona.ddns.net:3001/login', 
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(data)
    }
  )
}

export default function Playground() {
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = document.querySelector('#email').value
    const passwd = sha512(document.querySelector('#password').value)
    if (!email || email === "" || passwd === "" || !passwd) {
      return null
    } else {
      const data = {
        "email": email,
        "password": passwd
      }
      getLoginData(data)
    }
  }

  


  
  return (
    <div>
      <h1>Create new user</h1>
      <form>
        <input type="email" id="email" name="email" required placeholder="email"/>
        <input type="password" id="password" name="password" placeholder="password" required/>
        <input type="submit" onClick={() => handleSubmit()}>Submit</input>
      </form>
    </div>
  )
}
