import React from 'react'

const Dashboard = () => {
  return (
    <div>
     <div className="Navbar1 bg-blue-400 flex justify-between p-1 pl-4 pr-4 text-white">
     <div className="logo text-2xl text-white font-thin ">
        <h2>ZooEcomerce 🛍</h2>
      </div>
      <div className="components flex pr-16 justify-center items-center">
        <div className="search">
        <input type="text"placeholder='search'className='px-20 text-black rounded-full p-1 outline-none'/>
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
     <div className="navbar2">
        
     </div>
    </div>
  )
}

export default Dashboard