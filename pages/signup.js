import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Signup = () => {
  const router = useRouter()
  useEffect(() => {
    if (localStorage.getItem('token')) {
      router.push('/')
    }
  }, [])

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleChange = async (e) => {
    if (e.target.name == 'name') {
      setName(e.target.value)
    }
    else if (e.target.name == 'email') {
      setEmail(e.target.value)
    }
    else if (e.target.name == 'password') {
      setPassword(e.target.value)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { name, email, password }
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup`, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    let response = await res.json()
    toast.success('Your account has been created !', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setEmail('')
    setName('')
    setPassword('')
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
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a className="flex items-center mb-6">
            <img className='w-20 h-16' src="/codeswearcircle.png" alt="logo" />
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create and account
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" method="POST">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
                  <input type="text" onChange={handleChange} value={name} name="name" id="name" placeholder="Your name" className="bg-pink-50 border border-gray-300 text-pink-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-pink-50 dark:border-pink-600 dark:placeholder-pink-400 font-semibold" required />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                  <input type="email" onChange={handleChange} value={email} name="email" id="email" className="bg-pink-50 border text-pink-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-pink-50 dark:border-pink-600 dark:placeholder-pink-400 font-bold" placeholder="name@company.com" required />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                  <input type="password" onChange={handleChange} value={password} name="password" id="password" placeholder="••••••••" className="bg-pink-50 border text-pink-800 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-pink-50 dark:border-pink-600 dark:placeholder-pink-400 font-mono" required />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-pink-50 dark:border-pink-600" required="" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-light dark:text-pink-600">I accept the <a className="font-medium text-pink-500 hover:text-pink-700 cursor-pointer">Terms and Conditions</a></label>
                  </div>
                </div>
                <button type="submit" className="w-full text-white bg-pink-600 hover:bg-pink-700  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-500 dark:focus:ring-pink-800">Create an account</button>
                <p className="text-sm font-light text-pink-500 dark:text-pink-600">
                  Already have an account? {' '} <Link href={'/login'} legacyBehavior><a className="font-medium text-pink-500 hover:text-pink-700 ">Login here</a></Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signup