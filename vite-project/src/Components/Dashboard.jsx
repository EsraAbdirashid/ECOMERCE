import React from 'react'

const Dashboard = () => {
  return (
    <div>
     <div className="Navbar1 bg-yellow-700 flex justify-between p-2 pl-4 pr-4 ">
     <div className="logo">
        <h2>ZooEcomerce</h2>
      </div>
      <div className="components flex pr-16">
        <div className="search">
        <input type="text"placeholder='search' />
        <button>🔍</button>
        </div>
        <div className="cart">
        <i class='bx bx-cart-alt'></i>
        </div>
        <div className="dark_light">
        <i class='bx bx-sun'></i>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Dashboard