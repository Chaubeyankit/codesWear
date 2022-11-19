import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react';
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle, AiFillDelete } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { MdAccountCircle } from 'react-icons/md';
import { IoMdLogIn, IoMdLogOut } from 'react-icons/io';
const Navbar = () => {
  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }
  // only returns one item. It returns an Object called current.
  const ref = useRef()
  return (
    <div className="shadow-md sticky top-0 bg-white z-10">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <div className='logo mr-auto md:mx-5'>
          <Link href='/'><Image src='/logo.webp' alt='' width={200} height={40} /></Link>
        </div>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <ul className='flex items-center space-x-12 font-bold md:text-md'>
            <Link href={'/tshirts'}><li className="hover:text-pink-600">Tshirts</li></Link>
            <Link href={'/hoodies'}><li className="hover:text-pink-600">Hoodies</li></Link>
            <Link href={'/stickers'}><li className="hover:text-pink-600">Stickers</li></Link>
            <Link href={'/mugs'}><li className="hover:text-pink-600">Mugs</li></Link>
          </ul>
        </nav>
        <div onClick={toggleCart} className="cart absolute right-0 mx-5 cursor-pointer">
          <button className="inline-flex items-center py-1 px-3 focus:outline-none hover:text-pink-600  text-2xl mt-0 md:mt-0 "><AiOutlineShoppingCart />
          </button>
        </div>
        <div ref={ref} className="w-72 h-[100vh] sidecart absolute top-0 right-0 bg-pink-100 px-8 py-10 transform transition-transform translate-x-full">
          <h2 className='font-bold text-xl text-center'>Shoping Cart</h2>
          <span onClick={toggleCart} className="absolute top-4 right-2 cursor-pointer text-2xl text-pink-500"><AiFillCloseCircle /></span>
          <ol className='Serial_number list-decimal font-mono'>
            <li>
              <div className="item flex my-5">
                <div className='w-2/3 font-semibold'>Your cart items</div>
                <div className='flex items-center justify-center w-1/3 font-medium cursor-pointer text-lg'><span className='mx-2'><AiFillMinusCircle className='text-pink-500' /></span><span className='mx-2'><AiFillPlusCircle className=' text-pink-500' /></span></div>
              </div>
            </li>
          </ol>
          <div className="flex">
            <Link href={'/checkout'}><button className="flex mx-auto mr-1  text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"><BsFillBagCheckFill className='m-1' /> Checkout</button></Link>
            <button className="flex mx-auto mr-1  text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm" ><AiFillDelete className='m-1' />Clear Cart</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar