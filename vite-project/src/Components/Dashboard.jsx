import React from 'react'
import {Link} from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { FaStore } from "react-icons/fa";
import { SiContactlesspayment } from "react-icons/si";
import { BiSolidWidget } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

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
            <p className='text-slate-400 mt-2'>selling top productsClothes ipsum dolor sit amet consectetur adipisicing elit. Quidem id quis !</p>
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
            <button className='bg-indigo-600 text-white px-9 font-medium rounded-lg p-2 hover:bg-pink-800 '>View All Products</button>
          </div>


         <div className="winter mt-20  m-auto px-[100px] ">
<div className='flex gap-10'>
<div className="imag">
                        <img src="./public/img44.jpg" alt="" className='w-[590px] h-[300px] rounded-lg  shadow-2xl shadow-pink-600 border-2' />
                </div>
                <div className="text">
                        <h1 className='text-5xl font-bold text-indigo-600'>Winter Sele Up To 50% off </h1>
                        <p className='text-gray-600 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing sunt quas expedita sapiente officia quasi illo quo ea, possimus optio.</p>
                       <div className='icon1 mt-2 bg-pink-200'>
                        <GiPadlock className='inline-block'/>
                        <pre className='inline-block translate-x-2 font-medium text-xl '>Quility product</pre>
                       </div>
                       <div className='icon2 mt-2 bg-pink-200'>
                        <FaStore className='inline-block'/>
                        <pre className='inline-block translate-x-2 font-medium text-xl '>Fast Delivery</pre>
                       </div>
                       <div className='icon3 mt-2 bg-pink-200'>
                        <pre className='inline-block translate-x-2 font-medium text-xl '>Easy Payment Method</pre>
                       </div>
                       <div className='icon4 mt-2 bg-pink-200'>
                        <div className="icon inline-block">
                        <BiSolidWidget className=''/>
                        </div>
                        <pre className='inline-block translate-x-2 font-medium text-xl '>Get Offers</pre>
                       </div>
                </div>
           </div>
                
              
               
         </div>
         <div className="trending justify-center m-auto text-center mt-16">
                <div className="text">
                        <h6 className='text-pink-600 text-sm font-medium'>Trending products</h6>
                        <h1 className='text-4xl font-bold mt-2'>Top Rated Products</h1>
                        <p className='text-slate-400 mt-2'>to rated products ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        <div className="imges flex gap-7 items-center justify-center mt-5">
 <div className="img1 box-border w-[270px] h-[300px] text-center          items-center  bg-white shadow-md shadow-black rounded-lg hover:bg-black hover:text-white">
                               <img src="./public/shirt4.png" alt="" className='h-[150px] items-center m-auto -mt-4' />
                               <FaStar className='text-orange-600 inline-block'/> 
                               <FaStar className='text-orange-600 inline-block'/> 
                               <FaStar className='text-orange-600 inline-block'/> 
                               <FaStar className='text-orange-600 inline-block'/> 
   <h3 className='font-bold text-xl mt-2'>Casual Wear</h3>
<p className='text-gray-400 mt-2'> repellat rem, laboriosam dolorum <br /> sapiente possimus ab soluta  </p>
                               <button className='bg-pink-600 px-4 p-1 font-medium rounded-lg text-white mt-2 hover:bg-white hover:text-pink-700'>Order now</button>
                               </div>

                               {/* imag2 */}

                               <div className="img2 box-border w-[270px] h-[300px] text-center          items-center  bg-white shadow-md shadow-black rounded-lg hover:bg-black hover:text-white">
                               <img src="./public/shirt3.png" alt="" className='h-[130px] items-center m-auto' />
                               <FaStar className='text-orange-600 inline-block'/> 
                               <FaStar className='text-orange-600 inline-block'/> 
                               <FaStar className='text-orange-600 inline-block'/> 
                               <FaStar className='text-orange-600 inline-block'/> 
   <h3 className='font-bold text-xl mt-2'>printed shirr</h3>
<p className='text-gray-400 mt-2'> repellat rem, laboriosam dolorum <br /> sapiente possimus ab soluta  </p>
                               <button className='bg-pink-600 px-4 p-1 font-medium rounded-lg text-white mt-2 hover:bg-white hover:text-pink-700'>Order now</button>
                               </div>

                               {/* imag3 */}

                               <div className="img3 box-border w-[270px] h-[290px] text-center          items-center  bg-white shadow-md shadow-black rounded-lg hover:bg-black hover:text-white">
                               <img src="./public/shirt2.png" alt="" className='h-[120px] items-center m-auto' />
                               <FaStar className='text-orange-600 inline-block'/> 
                               <FaStar className='text-orange-600 inline-block'/> 
                               <FaStar className='text-orange-600 inline-block'/> 
                               <FaStar className='text-orange-600 inline-block'/> 
   <h3 className='font-bold text-xl mt-2'>fashin shirt</h3>
<p className='text-gray-400 mt-2'> repellat rem, laboriosam dolorum <br /> sapiente possimus ab soluta  </p>
                               <button className='bg-pink-600 px-4 p-1 font-medium rounded-lg text-white mt-2 hover:bg-white hover:text-pink-700'>Order now</button>
                               </div>
                                
                        </div>
                </div>
         </div>

          {/* mens */}
          <div className="Mens mt-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 h-screen flex p-7">
        <div className="text_button ml-28 mt-20">
        <h1 className='text-white text-6xl font-semibold '>30% off on All <br /> Men's Wear</h1>
        <p className='text-white text-start mt-7'>who's there Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat aliquam  dolorem natus  quia, blanditiis similique    vel <br /> quibusdam rem perferendis in repellendus optio  doloremque  eveniet <br /> provident, dolorum nemo ea laudantium.</p>
        <button className='bg-pink-800 px-4 font-medium p-1 text-white rounded-full hover:bg-indigo-900 mt-9 '>Order Now</button>
        </div>
        <div className="image ml-[50px] mt-7">
                <img src="./Public/man.png" alt="" className='w-[700px] h-[500px]' />
        </div>
     </div>
          {/* kides wear */}
          <div className="kids-wear  bg-gradient-to-r from-pink-200 to-indigo-200">
          <div className="text justify-center text-center mt-4">
            <h6 className='text-pink-600 text-sm font-semibold'>Top Selling products for you</h6>
            <h1 className='font-bold  text-4xl mt-2'>Top Selling Products</h1>
            <p className='text-slate-400 mt-2'>selling top productsClothes ipsum dolor sit amet consectetur adipisicing elit. Quidem id quis !</p>
          </div>
          <div className="img flex gap-7 justify-center mt-5">
            <div className="img1">
            <img src="./public/kids1.jpg" alt="" className='w-[180px] h-[180px] rounded-md' />
            <h3 className='font-bold text-pink-700 mt-4'>babygirl Ethnic</h3>
            <span>white</span>
            <div className="icon">
            <FaStar className='text-orange-600 inline-block'/> 
            <span className='inline-block font-bold'>4.5</span>
            </div>
            </div>

            <div className="img2">
            <img src="./public/kids22.jpg" alt="" className='w-[180px] h-[180px] rounded-md' />
            <h3 className='font-bold text-pink-700 mt-4'>boys Western</h3>
            <span>Red</span>
            <div className="icon">
            <FaStar className='text-orange-600 inline-block'/> 
            <span className='inline-block font-bold'>4.9</span>
            </div>
            </div>
            <div className="img3">
            <img src="./public/kids3.jpg" alt="" className='w-[180px] h-[180px] rounded-md' />
            <h3 className='font-bold text-pink-700 mt-4'>Goggles</h3>
            <span>Brown</span>
            <div className="icon">
            <FaStar className='text-orange-600 inline-block'/> 
            <span className='inline-block font-bold'>3.7</span>
            </div>
            </div>
            <div className="img4">
            <img src="./public/kids44.jpg" alt="" className='w-[320px] h-[180px] rounded-md' />
            <h3 className='font-bold text-pink-700 mt-4'>Printed T-shirt</h3>
            <span>Yellow</span>
            <div className="icon">
            <FaStar className='text-orange-600 inline-block'/> 
            <span className='inline-block font-bold'>3.6</span>
            </div>
            </div>
            <div className="img5">
            <img src="./public/kid5.jpg" alt="" className='w-[180px] h-[180px] rounded-md' />
            <h3 className='font-bold text-pink-700 mt-4'>Fashin sholy</h3>
            <span>Pink</span>
            <div className="icon">
            <FaStar className='text-orange-600 inline-block'/> 
            <span className='inline-block font-bold'>2.5</span>
            </div>
            </div>
          </div>
          <div className="button text-center mt-7">
            <button className='bg-indigo-600 text-white px-9 font-medium rounded-lg p-2 hover:bg-pink-800 '>View All Products</button>
          </div>

          </div>
          <div className="intermidate justify-center m-auto text-center mt-10 p-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="">
                 <h1 className='text-white text-2xl font-medium'>Get Nofified About New Products</h1>

                 <input type="text"placeholder='Enter your Email' className='p-2 px-20 outline-none rounded-md mt-2' />
            </div>
          </div>
          {/* an other time */}
          <div className="text justify-center text-center mt-20">
            <h6 className='text-pink-600 text-sm font-semibold'>Top Selling products for you</h6>
            <h1 className='font-bold  text-4xl mt-2'>Top Selling Products</h1>
            <p className='text-slate-400 mt-2'>selling top productsClothes ipsum dolor sit amet consectetur adipisicing elit. Quidem id quis !</p>
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
            <button className='bg-indigo-600 text-white px-9 font-medium rounded-lg p-2 hover:bg-pink-800 '>View All Products</button>
          </div>
          {/* testimonial */}
          <div className="Testimonial text-center items-center mt-16">
          <div className="text">
            <h6 className='text-pink-400 text-sm'>What our customers say!</h6>
            <h1 className='text-4xl font-semibold mt-1'>Testimonial</h1>
            <p className='text-slate-400 mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dicta qui quia ipsa deserunt reiciendis aliquam.</p>
          </div>
          <div className="boxes m-1 ml-52 mt-8 flex gap-7 ">
            <div className="box1 p-4 bg-blue-400 w-[250px] h-[250px] text-center items-center rounded-lg shadow-lg shadow-black hover:bg-pink-600">
             <img src="./public/customer1.jpg" alt="" className='w-[80px] h-[80px] border-2 border-white rounded-full m-auto' />
             <p className='text-white mt-3'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus explicabo id laborum"</p>
               <h4 className='font-bold mt-4'>Avav Razhiit</h4>
            </div>
            {/* box2 */}

            <div className="box2 p-4 bg-blue-400 w-[250px] h-[250px] text-center items-center rounded-lg shadow-lg shadow-black hover:bg-pink-600">
             <img src="./public/customer2.jpg" alt="" className='w-[80px] h-[80px] border-2 border-white rounded-full m-auto' />
             <p className='text-white mt-3'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus explicabo id laborum "</p>
               <h4 className='font-bold mt-4'>Esra Abdirashid</h4>
            </div>
          {/* box3 */}
          <div className="box3 p-4 bg-blue-400 w-[250px] h-[250px] text-center items-center rounded-lg shadow-lg shadow-black hover:bg-pink-600">
             <img src="./public/customer3.png" alt="" className='w-[80px] h-[80px] border-2 border-white rounded-full m-auto' />
             <p className='text-white mt-3'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus explicabo id laborum"</p>
               <h4 className='font-bold mt-4'>Halwa Aden</h4>
            </div>
          </div>
          </div>

    <div className="FOOTER bg-pink-900 text-white mt-16 ">
      <div className='flex justify-between p-3'>
      <div className="">
         <h2 className='text-3xl font-bold'>🛍ZooEcomerce</h2>
        <p className='mt-4  font-medium'>
          Lorem ipsum dolor sit, amet consectetur adipisicing  <br />elit.Eos recusandae earum nesciunt eum, pariatur, <br /> cupiditate quae sed modi 
        </p>
      </div>
     
      <div>
        <h2 className='hover:text-blue-700 cursor-pointer'>Important Links</h2>
        <ul className='mt-4'>
          <li className='hover:text-blue-600 cursor-pointer'>Home</li>
          <li className='hover:text-blue-600 cursor-pointer'>About</li>
          <li className='hover:text-blue-600 cursor-pointer'>Contact</li>
          <li className='hover:text-blue-600 cursor-pointer' >Blog</li>
        </ul>
      </div>
      <div>
        <h2 className='hover:text-blue-700 cursor-pointer'>Links</h2>
        <ul className='mt-4'>
          <li className='hover:text-blue-600 cursor-pointer'>Home</li>
          <li className='hover:text-blue-600 cursor-pointer'>About</li>
          <li className='hover:text-blue-600 cursor-pointer'>Contact</li>
          <li className='hover:text-blue-600 cursor-pointer transition-all'>Blog</li>
        </ul>
      </div>
      <div className='mr-7'>
        <ul className='mt-2 flex gap-5 '>
          <li><FaFacebook /></li>
          <li><FaSquareInstagram /></li>
          <li><FaTwitter /></li>
          <li><FaMapMarkerAlt /></li>
        </ul> 
      </div>
      </div>
       <div className='bg-white text-black flex justify-between'>
       <div>DevelopedBy: EsraAbdirashiid</div>
        <div>
        2024 &copy;
        </div>
       </div>
    </div>
    

    </div>
  )
}

export default Dashboard