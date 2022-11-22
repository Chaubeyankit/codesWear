import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {

  const router = useRouter()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleChange = async (e) => {
    if (e.target.name == 'email') {
      setEmail(e.target.value)
    }
    else if (e.target.name == 'password') {
      setPassword(e.target.value)
    }
  }
  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     router.push('/')
  //   }
  // }, [])
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { email, password }
    let res = await fetch(`http://localhost:3000/api/login`, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    let response = await res.json()
    setEmail('')
    setPassword('')
    if (response.success) {
      // JSON.stringify({ token: response.token, email: response.email })
      localStorage.setItem('token', response.token)
      toast.success('loged in !', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        router.push(`${process.env.NEXT_PUBLIC_HOST}`)
      }, 1000)
    }
    else {
      toast.error(response.error, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <section className="bg-gray-50 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a className="flex items-center mb-6">
            <img className='w-20 h-16' src="/codeswearcircle.png" alt="logo" />
          </a>
          <div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl ">
                Sign in to your account
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" method="POST">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                  <input type="email" onChange={handleChange} value={email} name="email" id="email" className="bg-pink-50 border text-pink-900 sm:text-sm rounded-lg  block w-full p-2.5 dark:border-pink-600 dark:placeholder-pink-400 font-bold" placeholder="name@company.com" required="" />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                  <input type="password" onChange={handleChange} value={password} name="password" id="password" placeholder="••••••••" className="bg-pink-50 border text-pink-900 sm:text-sm rounded-lg block w-full p-2.5 dark:border-pink-600 dark:placeholder-pink-400 font-mono" required="" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-pink-300 rounded bg-pink-50 dark:bg-pink-700 dark:border-pink-600  dark:ring-offset-pink-800" required="" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="dark:text-pink-300">Remember me</label>
                    </div>
                  </div>
                  <Link href={'/forgot'} legacyBehavior><a className="text-sm font-medium text-pink-400 hover:text-pink-700 cursor-pointer">Forgot password?</a></Link>
                </div>
                <button type="submit" className="w-full dark:text-white bg-pink-500 hover:bg-pink-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-500">Sign in</button>
                <p className="text-sm font-light text-pink-500 dark:text-pink-400">
                  Don’t have an account yet? <Link href={'/signup'} legacyBehavior><a className="font-medium text-pink-500 hover:text-pink-700">Sign up</a></Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login