import React from 'react'
import { FaStar } from "react-icons/fa";

const Toprelated = () => {
  return (
    <div>
          <div className="text justify-center text-center mt-4">
            <h6 className='text-pink-600 text-sm font-semibold'>Top Selling products for you</h6>
            <h1 className='font-bold  text-4xl mt-2'>Top Selling Products</h1>
            <p className='text-slate-400 mt-2'>Clothes ipsum dolor sit amet consectetur adipisicing elit. Quidem id quis !</p>
          </div>
          <div className="img flex gap-7 justify-center mt-5">
            <div className="img1">
            <img src="./public/img1.jpg" alt="" className='w-[180px] h-[180px] rounded-md' />
            <h3 className='font-bold text-pink-700 mt-4'>Women Ethnic</h3>
            <span>white</span>
            <div className="icon">
            <FaStar className='text-orange-600 inline-block'/> 
            <span className='inline-block font-bold'>5</span>
            </div>
            </div>

            <div className="img2">
            <img src="./public/img3.jpg" alt="" className='w-[180px] h-[180px] rounded-md' />
            <h3 className='font-bold text-pink-700 mt-4'>Women Western</h3>
            <span>Red</span>
            <div className="icon">
            <FaStar className='text-orange-600 inline-block'/> 
            <span className='inline-block font-bold'>4.5</span>
            </div>
            </div>
            <div className="img3">
            <img src="./public/img44.jpg" alt="" className='w-[180px] h-[180px] rounded-md' />
            <h3 className='font-bold text-pink-700 mt-4'>Goggles</h3>
            <span>Brown</span>
            <div className="icon">
            <FaStar className='text-orange-600 inline-block'/> 
            <span className='inline-block font-bold'>4.7</span>
            </div>
            </div>
            <div className="img4">
            <img src="./public/img5.jpg" alt="" className='w-[180px] h-[180px] rounded-md' />
            <h3 className='font-bold text-pink-700 mt-4'>Printed T-shirt</h3>
            <span>Yellow</span>
            <div className="icon">
            <FaStar className='text-orange-600 inline-block'/> 
            <span className='inline-block font-bold'>4.4</span>
            </div>
            </div>
            <div className="img5">
            <img src="./public/img6.jpg" alt="" className='w-[180px] h-[180px] rounded-md' />
            <h3 className='font-bold text-pink-700 mt-4'>Fashin T-shirt</h3>
            <span>Pink</span>
            <div className="icon">
            <FaStar className='text-orange-600 inline-block'/> 
            <span className='inline-block font-bold'>4.5</span>
            </div>
            </div>
          </div>
          <div className="button text-center mt-7">
            <button className='bg-pink-600 text-white px-9 font-medium rounded-lg p-2'>View All Products</button>
          </div>
    </div>
  )
}

export default Toprelated