import React from 'react'

const Footer = () => {
  return (

    
    <div className='bg-[#043873] w-[1920px] h-[461px] pt-[140px]'>
        <div className='flex items-center justify-around gap-5 w-[1720px]  h-[169px]'>
        <span className='ml-10 pt-10'>
            <img src="/Logo.png" alt="logo" />
            <p className='text-white text-[18px] font-[400] leading-[30px] pt-2'>whitepace was created for <br /> the new ways we live and <br />work. 
                We make a better <br /> workspace around the world</p>
        </span>

        <span className=''>
            <p className='text-white text-[18px] font-[700] leading-[21.78px] mb-2'>Product</p>
            <p className='text-[#FFE492]'>Overview</p>
            <p className='text-white'>Pricing</p>
            <p className='text-white'>Customer Stories</p>
        </span>
        <span className=''>
            <p className='text-white text-[18px] font-[700] leading-[21.78px] mb-2'>Resources</p>
            <p className='text-white'>Blog</p>
            <p className='text-white'>Guides & tutorials</p>
            <p className='text-white'>Help center</p>
        </span>
        <span className=''>
            <p className='text-white text-[18px] font-[700] leading-[21.78px] mb-2 '>Company</p>
            <p className='text-white'>About us</p>
            <p className='text-white'>Careers</p>
            <p className='text-white'>Media Kit</p>
        </span>
        </div>

        <div className='mt-[80px] w-[1920px] h-[289px]'>
        <p className='text-white text-center'>©2021 Whitepace LLC.</p>
        </div>
    </div>

  )
}

export default Footer