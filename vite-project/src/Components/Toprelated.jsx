import React from 'react'
import { FaStar } from "react-icons/fa";

const Toprelated = () => {
  return (
    <div>
          <div className="text justify-center text-center mt-16">
            <h6>Top Selling products for you</h6>
            <h1>Top SElling Products</h1>
            <p>Clothes ipsum dolor sit amet consectetur adipisicing elit. Quidem id quis !</p>
          </div>
          <div className="img flex gap-7 justify-center mt-7">
            <div className="img1">
            <img src="./public/img1.jpg" alt="" className='w-[180px] h-[180px] rounded-md' />
            <h3>Women Ethnic</h3>
            <span>white</span>
            <div className="icon">
            <FaStar className='text-orange-600 inline-block'/> 
            <span className='inline-block'>5</span>
            </div>
            </div>

            <img src="./public/img3.jpg" alt="" className='w-[180px] h-[180px] rounded-md' />
            <img src="./public/img44.jpg" alt="" className='w-[180px] h-[180px] rounded-md' />
            <img src="./public/img5.jpg" alt="" className='w-[180px] h-[180px] rounded-md' />
            <img src="./public/img6.jpg" alt="" className='w-[180px] h-[180px] rounded-md' />
          </div>
    </div>
  )
}

export default Toprelated