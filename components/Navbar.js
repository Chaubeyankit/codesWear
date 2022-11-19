import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle, AiFillDelete } from 'react-icons/ai';
const Navbar = () => {
  return (
    <div className="shadow-md sticky top-0 bg-white z-10">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <div className='logo mr-auto md:mx-5'>
          <Link href='/'><Image src='/logo.webp' alt='' width={200} height={40} /></Link>
        </div>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <ul className='flex items-center space-x-8 font-bold md:text-md'>
            <Link href={'/tshirts'}><li className="hover:text-pink-600">Tshirts</li></Link>
            <Link href={'/hoodies'}><li className="hover:text-pink-600">Hoodies</li></Link>
            <Link href={'/stickers'}><li className="hover:text-pink-600">Stickers</li></Link>
            <Link href={'/mugs'}><li className="hover:text-pink-600">Mugs</li></Link>
          </ul>
        </nav>
        <div className="cart absolute right-0 mx-5 cursor-pointer">
          <button className="inline-flex items-center py-1 px-3 focus:outline-none hover:text-pink-600  text-2xl mt-0 md:mt-0 "><AiOutlineShoppingCart />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar