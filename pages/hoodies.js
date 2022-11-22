import Link from 'next/link'
import React from 'react'
import mongoose from 'mongoose';
import Product from '../models/Product';

const Hoodies = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {Object.keys(products).map((item) => {
              return <Link passHref={true} key={products[item]._id} href={`/product/${products[item].slug}`} legacyBehavior>
                <div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5">
                  <a className="block relative  rounded overflow-hidden">
                    <img alt="ecommerce" className="m-auto md:mx-0 block" src={products[item].img} />
                  </a>
                  <div className="mt-4 text-center md:text-left">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{products[item].title}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">codeswear</h2>
                    <p className="mt-1">₹ {products[item].price}/-</p>
                    <div className="mt-1">
                      {products[item].size.includes('S') && <span className="border px-1 mx-1 border-gray-350">S</span>}
                      {products[item].size.includes('M') && <span className="border px-1 mx-1 border-gray-350">M</span>}
                      {products[item].size.includes('L') && <span className="border px-1 mx-1 border-gray-350">L</span>}
                      {products[item].size.includes('XL') && <span className="border px-1 mx-1 border-gray-350">XL</span>}
                      {products[item].size.includes('XXL') && <span className="border px-1 mx-1 border-gray-350">XXL</span>}
                    </div>
                    {/* <div className="mt-1">
                      {products[item].color.includes('blue') && <button className="border-2 border-gray-300 ml-1 bg-blue-900 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('black') && <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('white') && <button className="border-2 border-gray-300 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('red') && <button className="border-2 border-gray-300 ml-1 bg-red-600 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('gray') && <button className="border-2 border-gray-300 ml-1 bg-gray-800 rounded-full w-6 h-6 focus:outline-none"></button>}
                    </div> */}
                  </div>
                </div>
              </Link>
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let products = await Product.find({ category: 'hoodies' })
  let Hoodies = {}
  for (let item of products) {
    if (item.title in Hoodies) {
      if (!Hoodies[item.title].color.includes(item.color) && item.availableQty > 0) {
        Hoodies[item.title].color.push(item.color)
      }
      if (!Hoodies[item.title].size.includes(item.size) && item.availableQty > 0) {
        Hoodies[item.title].size.push(item.size)
      }
      // if (!Hoodies[item.title].price.includes(item.price) && item.availableQty > 0) {
      //   Hoodies[item.title].price.push(item.price)
      // }
    }
    else {
      Hoodies[item.title] = JSON.parse(JSON.stringify(item))
      if (item.availableQty > 0) {
        Hoodies[item.title].color = [item.color]
        Hoodies[item.title].size = [item.size]
        // Hoodies[item.title].price = [item.price]
      }
    }
  }
  return {
    props: { products: JSON.parse(JSON.stringify(Hoodies)) }, // will be passed to the page component as props
  }
}
export default Hoodies