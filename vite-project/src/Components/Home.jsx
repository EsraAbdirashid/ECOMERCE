import React from 'react'

const Home = () => {
  return (
    <div> 
     
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
    </div>
  )
}

export default Home