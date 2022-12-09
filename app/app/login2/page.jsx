"use client";
import Spline from '@splinetool/react-spline';
import sha from "js-sha512"

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      // ts-ignore
      "email": String(document.querySelector('#email').value),
      "password": sha.sha512(String(document.querySelector('#password').value))
    }
    console.log('hello')
    fetch('http://epickastrona.ddns.net:3001/login',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      }
    ).then(function (response) {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    }).then(function (data) {
      console.log(data);
    }).catch(function (error) {
      console.warn('Something went wrong.', error);
    });
  }

  return (
    <div className="w-12/12 h-12/12 bg-primary-grey splinewrapper">
        <div className='spline h-screen w-8/12'>
            <Spline scene="https://prod.spline.design/TVCo1WsRKG1aWWeg/scene.splinecode" />
        </div>
        <div className="formwrapper w-7/24 h-screen absolute z-10 rounded-l-3xl top-0 right-0 flex justify-center items-center flex-col backdrop-blur-sm">
            <form method='post'  className='flex justify-center items-center flex-col gap-4 relative z-40 opacity-100 w-7/12'>
                <input id='email' type="text" name='email' required className='bg-white rounded-xl  p-8 w-full'/>
                <input id='password' type="password" name='password' required className='bg-white p-8  w-full'/>
                <input type="submit" value="Log in" onClick={handleSubmit} className='bg-white p-8 w-full'/>
            </form>
        </div>
    </div>
  );
}
