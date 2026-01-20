import React from 'react'
import Home from "../sections/Home.jsx"
import Contact from './Contact.jsx'
import WhyChooseUs from '../sections/WhyChooseUs.jsx'
import Coverage from '../sections/Coverage.jsx'
import Testimonials from '../sections/Testimonials.jsx'
import Contaact from '../sections/Contaact.jsx'



const Main = () => {
  return (
    <div>
       <Home/>
       <WhyChooseUs/>
       <Coverage/>
       <Contaact/>
       <Testimonials/>
    </div>
  )
}

export default Main
