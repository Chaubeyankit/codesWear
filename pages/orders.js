import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react';
import Link from 'next/link';

const Orders = () => {

  const router = useRouter()
  const [orders, setOrders] = useState([])
  useEffect(() => {
    const fetchOrders = async () => {
      let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/myorders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: localStorage.getItem('token') }),
      })
      let res = await a.json()
      setOrders(res.orders);
      console.log(orders)
    }
    if (!localStorage.getItem('token')) {
      router.push('/')
    }
    else {
      fetchOrders()
    }
  }, [])

  return (
    <>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg m-24 px-10">
        <table className="w-full text-sm text-left">
          <caption className="p-5 text-lg font-semibold text-left ">
            My Orders
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to .</p>
          </caption>
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-500">
            <tr className="bg-white border-b  dark:border-gray-900">
              <th scope="col" className="py-3 px-6">#OrderId</th>
              <th scope="col" className="py-3 px-6">EMAIL</th>
              <th scope="col" className="py-3 px-6">Amount</th>
              <th scope="col" className="py-3 px-6">Details</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item) => {
              return <tr key={item._id} className="bg-white">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">{item.orderId}</th>
                <td className="py-4 px-6">{item.email}</td>
                <td className="py-4 px-6">{item.amount}</td>
                <td className="py-4 px-6"><Link href={'/order?id=' + item._id} legacyBehavior><a> Details </a></Link></td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Orders