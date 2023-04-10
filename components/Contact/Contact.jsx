import React from 'react'
import { contacts } from '../../Data/Contacts'
import Link from 'next/link'
import Form from '../Form/Form'

const Contact = () => {
  return (
    <section id='contact-section' className='flex justify-center py-[20px]'>
         <div className="w-[90%] md:w-[80%] flex flex-col mt-[20px] justify-center  contact-container">
            <div className="relative header self-center">
                <h1 className="text-4xl font-semibold z-10 relative">Contact us & Say hello</h1>
              
                <div className='z-0 header-empty-bar relative'></div>
            </div>

            <div className="flex flex-col  cards-for-contact">
                <h3 className='text-xl self-center mb-8'>want to get intouch? we would love to hear from you. Here is how you can reach us...</h3>

                <div className="flex flex-wrap w-[96%] space-y-4 md:w-[100%] md:space-x-4 justify-center  cards-wrapper">
                   {contacts.map((contact)=>{
                    return(
                        <div key={contact.id} className='flex flex-col  min-w-[84%] max-w-[84%] md:min-w-[32%] md:max-w-[32%] rounded-md p-4' style={{background:"#F9FAFD"}}>
                            <small className='mb-8 italic'>{contact.tag}</small>
                            <h1 className='text-2xl mb-2'>{contact.title}</h1>
                            <p className='mb-[20px] text-base'>{contact.body}</p>
                            <a href="#" mailto={`${contact.url}`} style={{color: "#F95738"}}>{contact.url}</a>
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