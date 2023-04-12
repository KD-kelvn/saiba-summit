import React from 'react'
import { contacts } from '../../Data/Contacts'
import Link from 'next/link'
import Form from '../Form/Form'

const Contact = () => {
  return (
    <section id='contact-section' className='flex flex-col justify-center py-[20px]'>
         <div className="relative header self-center">
                <h1 className="text-4xl font-semibold z-10 relative">Contact us & Say hello</h1>
                <div className='z-0 header-empty-bar relative'></div>
            </div>
       <h3 className='text-xl self-center mb-8'>want to get intouch? we would love to hear from you. Here is how you can reach us...</h3>
         <div className="w-[90%] md:w-[100%] flex flex-col md:flex-row mt-[20px] justify-center  contact-container space-x-4">
         
            <div className="flex flex-row md:flex-col md:mt-[30px]  cards-for-contact">
                <div className="flex flex-col w-[56%] space-y-4 md:w-[100%]  justify-center  cards-wrapper">
                   {contacts.map((contact)=>{
                    return(
                        <div key={contact.id} className='flex flex-col rounded-md p-4' style={{background:"#F9FAFD"}}>
                            <h1 className='text-base mb-1 md:text-xl md:mb-2'>{contact.title}</h1>
                            <a href="#" mailto={`${contact.url}`} style={{color: "#F95738"}} className='text-[14px] md:text-[16px]'>{contact.url}</a>
                        </div>
                    )
                   })}
                </div>
            </div>

            <Form/>
         </div>
    </section>
  )
}

export default Contact