import React from 'react'
import Link from 'next/link'

const forgot = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a className="flex items-center mb-6">
            <img className='w-20 h-16' src="/codeswearcircle.png" alt="logo" />
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Reset your password
              </h1>
              <div className="space-y-4 md:space-y-6">

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                  <input type="email" name="email" id="email" className="bg-pink-50 border text-pink-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-pink-50 dark:border-pink-600 dark:placeholder-pink-400 font-bold" placeholder="name@company.com" required="" />
                </div>
                {/* <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-pink-50 border text-pink-800 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-pink-50 dark:border-pink-600 dark:placeholder-pink-400 font-mono" required="" />
                </div> */}
                {/* <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-pink-50 dark:border-pink-600" required="" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-light dark:text-pink-600">I accept the <a className="font-medium text-pink-500 hover:text-pink-700 cursor-pointer">Terms and Conditions</a></label>
                  </div>
                </div> */}
                <button type="submit" className="w-full  dark:text-white bg-pink-600 hover:bg-pink-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-500 dark:focus:ring-pink-800">Continue</button>
                <p className="text-sm font-light text-pink-500 dark:text-pink-600">
                  Already have an account? <Link href={'/login'} legacyBehavior><a className="font-medium text-pink-500 hover:text-pink-700 ">Login here</a></Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default forgot