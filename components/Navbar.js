import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle, AiFillDelete } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { MdAccountCircle } from 'react-icons/md';
import { IoMdLogIn, IoMdLogOut } from 'react-icons/io';
const Navbar = ({ user, logout, cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  //toggle cart in or out
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
  const [dropdown, setDropdown] = useState(false)
  // only returns one item. It returns an Object called current.
  const ref = useRef()
  return (
    <div className="shadow-md sticky top-0 bg-pink-50 z-10">
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
        <div className="cart absolute right-0 mx-5 cursor-pointer">
          <a onMouseOver={() => { setDropdown(true) }} onMouseLeave={() => { setDropdown(false) }}>
            {dropdown && <div onMouseOver={() => { setDropdown(true) }} onMouseLeave={() => { setDropdown(false) }} className="absolute right-12 bg-pink-50 shadow-lg border top-8 rounded-md px-5 w-36 py-4 skew-x-3">
              <ul>
                <Link href={'/myaccount'} legacyBehavior><a><li className="py-1 text-black hover:text-pink-600 font-semibold">My Account</li></a></Link>
                <Link href={'/orders'} legacyBehavior><a><li className="py-1 text-black hover:text-pink-600 font-semibold">Orders</li></a></Link>
                <li onClick={logout} className="py-1 text-black hover:text-pink-600 flex font-semibold">Logout <IoMdLogOut className="m-auto mx-2 flex text-lg" /></li>
              </ul>
            </div>}

            {user.value && <button className="inline-flex items-center py-1 px-1 focus:outline-none hover:text-pink-600  text-2xl mt-0 md:mt-0"><MdAccountCircle /></button>}
          </a>
          {!user.value && <Link href={'/login'} legacyBehavior><a><button className="inline-flex items-center py-1 px-1 focus:outline-none hover:text-pink-600 mt-0 md:mt-0 justify-center"><IoMdLogIn className='text-2xl' /></button></a></Link>}
          <button onClick={toggleCart} className="inline-flex items-center py-1 px-2 focus:outline-none hover:text-pink-600  mt-0 md:mt-0 "><AiOutlineShoppingCart className='text-2xl' />
          </button>
        </div>
        <div ref={ref} className={`w-72 h-[100vh] sidecart absolute top-20 sm:top-14 right-0 rounded-tl-lg  bg-pink-100 px-8 py-10 transform transition-transform ${Object.keys(cart).length !== 0 ? 'translate-x-0' : 'translate-x-full'}`}>
          <h2 className='font-bold text-xl text-center'>Shoping Cart</h2>
          <span onClick={toggleCart} className="absolute top-1 right-1 cursor-pointer text-2xl text-pink-500"><AiFillCloseCircle /></span>
          <ol className='Serial_number list-decimal font-mono'>
            {Object.keys(cart).length == 0 && <div className="my-4 text-base font-normal"><div><img src='/empty_cart.webp' alt='Empty' className="object-cover h-48 w-96 my-4 rounded-lg" /></div> Your cart is Empty!<div className='a font-sans text-sm'>Add items to it now.
              <Link href={'/'}><button onClick={toggleCart} className="bg-transparent hover:text-pink-500 font-semibold py-1 px-1 border-0">Shop now</button></Link></div> </div>}
            {Object.keys(cart).map((k) => {
              return <li key={k}>
                <div className="item flex my-5">
                  <div className='w-2/3 font-semibold'>{cart[k].name}</div>
                  <div className='flex items-center justify-center w-1/3 font-medium cursor-pointer text-lg'><span className='mx-2'><AiFillMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variants) }} className='text-pink-500' /></span>{cart[k].qty}<span className='mx-2'><AiFillPlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variants) }} className=' text-pink-500' /></span></div>
                </div>
              </li>
            })}
          </ol>
          <div className="flex">
            <Link href={'/checkout'}><button className="flex mx-auto mr-1  text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"><BsFillBagCheckFill className='m-1' /> Checkout</button></Link>
            <button onClick={clearCart} className="flex mx-auto mr-1  text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm" ><AiFillDelete className='m-1' />Clear Cart</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar