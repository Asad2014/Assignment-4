import React from 'react'
import Navbar from '@/components/Navbar'
import Herosection from '@/components/Herosection'
import Projectmanagment from '@/components/Projectmanagment'
import Needs from '@/components/Needs'
import Work from '@/components/Work'
import Sponsers from '@/components/Sponsers'
import Footer from '@/components/Footer'


const page = () => {
  return (
    <div>
        <Navbar />
        <Herosection />
        <Projectmanagment />
        <Needs />
        <Work />
        <Sponsers />
        <Footer />
    </div>
  )
}

export default page