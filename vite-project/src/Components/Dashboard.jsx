import React from 'react'
import {Link} from 'react-router-dom'


const Dashboard = () => {
  return (
    <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen'>
     <div className="Navbar1 bg-gradient-to-r from-pink-500 to-blue-500   flex justify-between p-1 pl-4 pr-4 text-white">
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
        <ul className='flex text-center justify-center gap-9 font-semibold text-lg '>
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

     <div className="Home">

     </div>
    </div>
  )
}

export default Dashboard