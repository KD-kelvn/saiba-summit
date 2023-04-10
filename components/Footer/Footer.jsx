import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#011A24] text-white min-h-[40vh] mt-[20%] py-4'>
        <div className="flex flex-col justify-center footer-container space-y-10 w-100%">
            <div className="flex flex-wrap w-[90%] md:w-[80%] justify-between md:self-center md:justify-center  space-x-4 space-y-4 pl-10 pt-4 mb-11 top" >
                <div className="flex flex-col min-w-[55%] md:min-w-[30%] brand-side">
                    <div className=" min-w-[200px] max-w-[200px] mt-6 brand-logo">
                        <img src="./SAIBASUMMIT.svg" alt="" className='w-full'/>
                    </div>
                    <small>Tech the stage</small>
                </div>

                <div className="flex flex-col min-w-[55%] md:min-w-[20%] quick-links company">
                    <h2 className='text-2xl'>Company</h2>
                    <a href="#">About us</a>
                    <a href="#">Career</a>
                    <a href="#">Blog</a>
                </div>

                <div className="flex flex-col min-w-[55%] md:min-w-[20%] quick-links partner">
                    <h2 className='text-2xl'>Partner</h2>
                    <a href="#">Partner with us</a>
                    <a href="#">Meet our partner</a>
                </div>

                <div className="flex flex-col min-w-[55%] md:min-w-[20%] quick-links help">
                   <h2 className='text-2xl'>Help & Support</h2>
                   <a href="#">Support center</a>
                    <a href="#">Terms & condition</a>
                    <a href="#">Privacy policy</a>
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