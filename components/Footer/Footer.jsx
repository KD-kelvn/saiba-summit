import React from 'react'
import { ImFacebook2, ImInstagram } from "react-icons/im"
import {FaTwitterSquare, FaTiktok} from "react-icons/fa"
const Footer = () => {
  return (
    <footer className='bg-[#011A24] text-white min-h-[40vh] mt-[20%] py-3'>
        <div className="flex flex-col justify-center footer-container space-y-1 w-100%">
            <div className="flex flex-col w-[100%] md:w-[100%] justify-items-center md:self-center   pt-4 mb-11 top" >
                <div className="flex flex-col min-w-[55%] md:min-w-[30%] self-center  brand-side">
                    <div className=" min-w-[300px] max-w-[400px] mt-6 brand-logo">
                        <img src="./saiba-white.png" alt="" className='w-full'/>
                    </div>
                   
                </div>

                {/* <div className="flex flex-col min-w-[55%] md:min-w-[20%] quick-links company">
                    <h2 className='text-2xl'>Company</h2>
                    <a href="#">About us</a>
                    <a href="#">Career</a>
                    <a href="#">Blog</a>
                </div> */}

                {/* <div className="flex flex-col min-w-[55%] md:min-w-[20%] quick-links partner">
                    <h2 className='text-2xl'>Partner</h2>
                    <a href="#">Partner with us</a>
                    <a href="#">Meet our partner</a>
                </div> */}

                {/* <div className="flex flex-col min-w-[55%] md:min-w-[20%] quick-links help">
                   <h2 className='text-2xl'>Help & Support</h2>
                   <a href="#">Support center</a>
                    <a href="#">Terms & condition</a>
                    <a href="#">Privacy policy</a>
                </div> */}

                <div className="flex self-center space-x-2 social-nets">
                  <a href="#"><ImFacebook2/></a>
                  <a href=""><ImInstagram/></a>
                  <a href=""><FaTwitterSquare/></a>
                  <a href=""><FaTiktok/></a>
                </div>
            </div>
            <div className="self-center -mb-20 bottom">
                <p>SaibaSummit @2023. All rights reserved</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer