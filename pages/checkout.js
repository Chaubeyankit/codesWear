import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle, AiFillDelete } from 'react-icons/ai';
const Checkout = ({ user, cart, clearCart, addToCart, removeFromCart, subTotal }) => {
  return (
    <div>
      <div className="container p-12 mx-auto">
        <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
          <div className="flex flex-col md:w-full">
            <h2 className="mb-4 font-bold md:text-xl text-heading ">Shipping Address
            </h2>
            <div className="justify-center w-full mx-auto">
              <div className="">
                <div className="space-x-0 lg:flex lg:space-x-4">
                  <div className="w-full lg:w-1/2">
                    <label htmlFor="name" className="block mb-3 text-sm font-semibold text-gray-500">Name</label>
                    <input name="name" type="text" placeholder="Name"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-pink-500" />
                  </div>
                  <div className="w-full lg:w-1/2 ">
                    <label htmlFor="email" className="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                    <input name="email" type="email" placeholder="Email"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-pink-500" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="space-x-0 lg:flex lg:space-x-4">
                    <div className="w-full lg:w-1/2">
                      <label htmlFor="phone" className="block mb-3 text-sm font-semibold text-gray-500">Phone</label>
                      <input name="phone" type="number" placeholder="Phone"
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-pink-500" />
                    </div>
                    <div className="w-full lg:w-1/2 ">
                      <label htmlFor="pincode" className="block mb-3 text-sm font-semibold text-gray-500">
                        Postcode</label>
                      <input name="pincode" type="text" placeholder="Post Code"
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-pink-500" />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full">
                    <label htmlFor="Address"
                      className="block mb-3 text-sm font-semibold text-gray-500">Address</label>
                    <textarea
                      className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                      name="Address" cols="20" rows="4" placeholder="Address"></textarea>
                  </div>
                </div>
                <div className="space-x-0 lg:flex lg:space-x-4">
                  <div className="w-full lg:w-1/2">
                    <label htmlFor="city"
                      className="block mb-3 text-sm font-semibold text-gray-500">City</label>
                    <input name="city" type="text" placeholder="City"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-pink-500" />
                  </div>
                  <div className="w-full lg:w-1/2 ">
                    <label htmlFor="state" className="block mb-3 text-sm font-semibold text-gray-500">
                      State</label>
                    <input name="state" type="text" placeholder="State"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-pink-500" />
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    className="w-full  text-white bg-pink-500 hover:bg-pink-600 font-bold py-2 px-4 rounded">Process</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
            <div className="pt-12 md:pt-0 2xl:ps-4">
              <h2 className="text-xl font-bold">Order Summary
              </h2>
              <div className="mt-8">
                <div className="flex flex-col space-y-4">
                  <div className="flex space-x-4">
                    <div className='flex px-9 mt-4'>
                      <ol className='Serial_number list-decimal font-mono'>
                        {Object.keys(cart).length == 0 && <div className="my-4 text-base font-normal"><div><img src='/empty_cart.webp' alt='Empty' className="object-cover h-48 w-96 my-4 rounded-lg" /></div> Your cart is Empty!
                          <div className='a font-sans text-sm'>Add items to it now.
                            <Link href={'/'}>
                              <button className="bg-transparent hover:text-pink-500 font-semibold py-1 px-1 border-0">Shop now</button>
                            </Link>
                          </div> </div>}
                        {Object.keys(cart).map((k) => {
                          return <li key={k}>
                            <div className="item flex my-5">
                              <div className='w-2/3 font-semibold'>{cart[k].name}</div>
                              <div className='flex items-center justify-center w-1/3 font-medium cursor-pointer text-lg'><span className='mx-2'><AiFillMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variants) }} className='text-pink-500' /></span>{cart[k].qty}<span className='mx-2'><AiFillPlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variants) }} className=' text-pink-500' /></span></div>
                            </div>
                          </li>
                        })}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex p-4 mt-4">
                <h2 className="text-xl font-bold">ITEMS 2</h2>
              </div>
              <div
                className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Subtotal<span className="ml-2">₹  {subTotal}</span></div>
              <div
                className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Shipping Tax<span className="ml-2">₹ 0</span></div>
              <div
                className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Total<span className="ml-2">₹  {subTotal}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout