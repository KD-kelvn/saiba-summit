import { motion } from 'framer-motion';
import Head from 'next/head';
import Link  from 'next/link';
import Image from 'next/image';
import Events  from "../components/Events/Events"
import img  from "../public/RoboticHand.svg"
import WhyUs from '../components/WhyUs/WhyUs';
import Partners from '../components/Partners/Partners';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const index = () => {
  return (
    <>
        <Navbar/>
        <section className='flex justify-center px-[5rem] hero-section section '>
          <motion.div className='flex flex-col w-[90%] justify-center md:flex-row md:w-[88%]'>
           <div className='w-[100%] mr-2 mt-[0] sm:mt-[12%] md:w-1/2'>
            <small className='text-base font-semibold'>Saiba Summit 2023:</small>
            <h1 className='text-4xl md:text-6xl mb-2 font-bold'>
                Where Tech Meets Collaboration, Creativity and Community 
            </h1>
            <h3 className='text-lg'>Join the thrilling journey of tech transformation and experience the power of Networking, Learning and Sharing.</h3>

            <button className='w-40 px-2 py-2 bg-[#025DBE] rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 mt-6' >
              <Link className='w-100 bg-transparent' href="#" >
                  Join us
              </Link>
            </button>
           </div>
           <div className='w-[96%] h-[50vh] md:h-[auto] md:w-1/2 relative overflow-hidden sm:w-[60%]' >
                <Image src={img} alt='hero-img' className='h-[100%] object-fill md:h-3/4 '/>
           </div>
  
          </motion.div>
        </section>

        <section className="flex justify-center py-[20px] my-[10%] about-section" id="about">
        <div className="flex flex-col w-[90%] md:flex-row md:w-[80%]">
        <div className="w-[80%] md:w-[35%]">
            <h1 className="text-4xl">About <span className='font-semibold'>Saiba </span>summit</h1>
            <div className="empty-bar"></div>
          </div>
          <div className='w-[80%] md:w-[50%]'>
              <p className='mb-[20px]'>is a gathering of thought leaders, entrepreneurs, and investors in technology industry who are passionate about driving innovation and creating solutions to local problems in Africa.</p>
              <p >Saiba Summit Aims to showcase technology innovations and bring together startups, investors, and tech-savvy individuals to promote growth and development of technology industry in Africa. By highlighting indigenous technology. Saiba Summit offers unique perspective on the technology landscape in Africa and promote the development of local solutions to local problems</p>
          </div>
        </div>
         
    </section>
    <Events/>
    <WhyUs/>
    <Partners/>
    <Contact/>
    <Footer/>
    <script src="https://kit.fontawesome.com/524640606a.js" crossorigin="anonymous" async></script>
    </>
  )
}

export default index