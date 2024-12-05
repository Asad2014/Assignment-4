import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-[#043873] h-[92px] w-[1920px] flex justify-between items-center py-4 px-[220px]'>
        <div className='w-[191px] h-[34px]'>
            <img src="/Logo.png"
             alt="logo" />
        </div>

        <div className='flex w-[737.5px] h-[60px] items-center justify-between'>
            <div className='w-[549px] h-[23px]'>
            <ul className='text-white flex items-center justify-between text-[18px] font-semibold leading-[23px] gap-10'>
                <li>Products</li>
                <li>Solutions</li>
                <li>Resources</li>
                <li>Pricing</li>
            </ul>
            </div>
            <div>
            <button className='text-[#043873] bg-[#FFE492] w-[126px] h-[60px] rounded-lg py-4 px-10'>Login</button>
            </div>

        </div>

    </div>

  )
}

export default Navbar