import React from 'react'
import { FaStar } from "react-icons/fa";

const Toprelated = () => {
  return (
    <div>
          <div className="text justify-center text-center mt-16">
            <h6 className='text-pink-600 text-sm font-semibold'>Top Selling products for you</h6>
            <h1 className='font-bold  text-4xl mt-2'>Top Selling Products</h1>
            <p className='text-slate-400 mt-3'>Clothes ipsum dolor sit amet consectetur adipisicing elit. Quidem id quis !</p>
          </div>
          <div className="img flex gap-7 justify-center mt-7">
            <div className="img1">
            <img src="./public/img1.jpg" alt="" className='w-[180px] h-[180px] rounded-md' />
            <h3 className='font-bold'>Women Ethnic</h3>
            <span>white</span>
            <div className="icon">
            <FaStar className='text-orange-600 inline-block'/> 
            <span className='inline-block'>5</span>
            </div>
            </div>

            <div className="img2">
            <img src="./public/img3.jpg" alt="" className='w-[180px] h-[180px] rounded-md' />
            <h3>Women Ethnic</h3>
            <span>white</span>
            <div className="icon">
            <FaStar className='text-orange-600 inline-block'/> 
            <span className='inline-block'>5</span>
            </div>
            </div>
            <div className="img3">
            <img src="./public/img44.jpg" alt="" className='w-[180px] h-[180px] rounded-md' />
            <h3>Women Ethnic</h3>
            <span>white</span>
            <div className="icon">
            <FaStar className='text-orange-600 inline-block'/> 
            <span className='inline-block'>5</span>
            </div>
            </div>
            <div className="img4">
            <img src="./public/img5.jpg" alt="" className='w-[180px] h-[180px] rounded-md' />
            <h3>Women Ethnic</h3>
            <span>white</span>
            <div className="icon">
            <FaStar className='text-orange-600 inline-block'/> 
            <span className='inline-block'>5</span>
            </div>
            </div>
            <div className="img5">
            <img src="./public/img6.jpg" alt="" className='w-[180px] h-[180px] rounded-md' />
            <h3>Women Ethnic</h3>
            <span>white</span>
            <div className="icon">
            <FaStar className='text-orange-600 inline-block'/> 
            <span className='inline-block'>5</span>
            </div>
            </div>
          </div>
    </div>
  )
}

export default Toprelated