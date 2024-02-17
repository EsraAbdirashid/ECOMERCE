import React from 'react'
import {Link} from 'react-router-dom'
import { FaStar } from "react-icons/fa";


const Dashboard = () => {
  return (
    <div className=''>
     <div className="Navbar1 bg-gradient-to-r from-pink-500 to-indigo-500   flex justify-between p-1 pl-4 pr-4 text-white">
     <div className="logo text-2xl text-white font-extrabold ">
        <h2>🛍ZooEcomerce</h2>
      </div>
      <div className="components flex pr-16 justify-center items-center">
        <div className="search">
        <input type="text"placeholder='search'className='px-20 text-black rounded-full p-1 outline-none  bg-slate-100'/>
        </div>
     <div className="icon -translate-x-7">
     <button>🔍</button>
     </div>
        <div className="cart bg-blue-700 py-1 px-1 rounded-lg">
        <i class='bx bx-cart-alt'></i>
        </div>
        <div className="dark_light space-x-7 translate-x-7">
        <i class='bx bx-sun'></i>
        </div>
      </div>
     </div>
     <div className="navbar2 bg-white p-1">
       <nav>
        <ul className='flex text-center justify-center gap-9 font-medium text-lg '>
                <li className='hover:text-violet-600'>
                        <Link to='/Home'>Home</Link>
                </li>
                <li className='hover:text-violet-600'>
                        <Link to='/Toprelated'>Top related</Link>
                </li>
                <li className='hover:text-violet-600'>
                        <Link to='/KidsWear'>Kids Wear</Link>
                </li>
                <li className='hover:text-violet-600'>
                        <Link to='/MensWear'>Mens Wear</Link>
                </li>
                <li className='hover:text-violet-600'>
                        <Link to='/Electronics'>Elentronics</Link>
                </li>
                <li className='hover:text-violet-600'> 
                        <Link to='/TrendingItems'>Trending Items</Link>
                </li>
        </ul>
       </nav>
     </div>
{/* Home */}
     <div className="Home bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center p-[100px]">

<div className="text_button ">
<h1 className='text-white text-6xl font-semibold '>30% off on All <br /> Women's Wear</h1>
<p className='text-white text-start mt-4'>who's there Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat aliquam  dolorem natus  quia, blanditiis similique    vel <br /> quibusdam rem perferendis in repellendus optio  doloremque  eveniet <br /> provident, dolorum nemo ea laudantium.</p>
<button className='bg-pink-600 px-4 font-medium p-1 text-white rounded-full hover:bg-pink-800 mt-4 '>Order Now</button>
</div>
<div className="image">
        <img src="./Public/image1.png" alt="" className='w-[1100px] -mt-20' />
</div>
</div>

{/* toprelated */}
    
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
            <button className='bg-pink-600 text-white px-9 font-medium rounded-lg p-2 hover:bg-pink-800 '>View All Products</button>
          </div>
         <div className="trending">
                <div className="text">
                        <h6>Trending products</h6>
                        <h1>Top Rated Products</h1>
                        
                </div>
         </div>

          {/* kides wear */}
          <div className="kids-wear">
                
          </div>

    </div>
  )
}

export default Dashboard