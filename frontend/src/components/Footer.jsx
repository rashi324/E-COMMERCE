import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
            
          <div>
            <img src={assets.logo2} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum in incidunt atque doloremque similique inventore harum fugit odio vitae perferendis, deserunt excepturi non numquam vero porro repellendus architecto autem dolorum.
            </p>
          </div>

         <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-grat-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
         </div>


         <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-grat-600'>
               <li>+91 9037362959</li>
               <li>bluegill@gmail.com</li>
            </ul>
         </div>

        </div>

        <div>
          <hr />
          <p className='py-5 text-sm text-center'>Copyright 2025@ bluegill.com - All Right Reserverd.</p>
        </div>

    </div>
  )
}

export default Footer
