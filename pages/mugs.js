import Link from 'next/link'
import React from 'react'
import mongoose from 'mongoose';
import Product from '../models/Product';

const Mugs = ({ products }) => {
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
                      {products[item].size.includes('logo') && <span className="border px-1 mx-1 border-gray-350">logo</span>}
                      {products[item].size.includes('skin') && <span className="border px-1 mx-1 border-gray-350">Skin</span>}
                     
                    </div>
                    <div className="mt-1">
                      {products[item].color.includes('multicolor') && <button>Multicolor</button>}
                    </div>
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
  let products = await Product.find({ category: 'mug' })
  let Mugs = {}
  for (let item of products) {
    if (item.title in Mugs) {
      if (!Mugs[item.title].color.includes(item.color) && item.availableQty > 0) {
        Mugs[item.title].color.push(item.color)
      }
      if (!Mugs[item.title].size.includes(item.size) && item.availableQty > 0) {
        Mugs[item.title].size.push(item.size)
      }
      // if (!Mugs[item.title].price.includes(item.price) && item.availableQty > 0) {
      //   Mugs[item.title].price.push(item.price)
      // }
    }
    else {
      Mugs[item.title] = JSON.parse(JSON.stringify(item))
      if (item.availableQty > 0) {
        Mugs[item.title].color = [item.color]
        Mugs[item.title].size = [item.size]
        // Mugs[item.title].price = [item.price]
      }
    }
  }
  return {
    props: { products: JSON.parse(JSON.stringify(Mugs)) }, // will be passed to the page component as props
  }
}
export default Mugs