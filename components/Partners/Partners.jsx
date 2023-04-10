import React from 'react'

const Partners = () => {
  return (
    <section id='partners-section' className='flex justify-center py-[20px] my-[10%]'>
          <div className="w-[90%] md:w-[80%] flex flex-col mt-[20px] partners-container">
          <div className="relative header self-center">
                <h1 className="text-4xl font-semibold z-10 relative">Our partners</h1>
                <div className='z-0 header-empty-bar relative'></div>
            </div>

            <div className="w-[80%] justify-center partners-wrapper flex flex-wrap">
                <div className="partner-wrapper relative self-center min-w-[200px] max-w-[200px]">
                    <img src="./SAIBASUMMIT.svg" alt="" className='w-full min-h-[200px] max-h-[200px]'/>
                </div>
            </div>
          </div>
    </section>
  )
}

export default Partners