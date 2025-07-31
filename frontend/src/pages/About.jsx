import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      
       <div className='text-2xl text-center pt-8 border-t'>
            <Title text1={'ABOUT'} text2={'US'} />

            </div>
            <div className='my-10 flex flex-col md:flex-row gap-16'>
               <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
               <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, consequatur dolores! Beatae autem harum alias, illum eius exercitationem explicabo at saepe, corporis fugit illo soluta, ratione quos voluptatum libero rem! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, voluptatem!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis est dolore dolor exercitationem error, at fugiat doloribus! Architecto, corrupti alias!</p>
               </div>
            </div>

    </div>
  )
}

export default About
