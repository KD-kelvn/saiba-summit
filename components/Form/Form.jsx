import { useState } from "react"
const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e)=> {
    e.preventDefault();

    const payload = { name, email, subject, message};

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload) 
    });

    if(response.status === 200 ){
      setError(false);
      console.log("email sent successfully", response.body.msgId);
    }
    else{
      setError(true);
      console.log(response.message)
    }

  }
  return (
    <form className="rounded-lg w-[88%] md:w-[70%] mt-[30px] self-center shadow-xl flex flex-col px-8 py-8 bg-[#F9FAFD] dark:bg-[#F9FAFD]" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold ">Send a message</h1>
       {error&& <span className="text-error">{error}</span>}
      <label for="fullname" className="text-white-500 font-light mt-8 text-black">Full name<span className="text-red-500 dark:text-red-500">*</span></label>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="bg-transparent border-sky-950 border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-blue-500 font-light text-black"/>

      <label for="email" className="text-gray-500 font-light mt-4 dark:text-black">E-mail<span className="text-red-500">*</span></label>
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="bg-transparent border-sky-950 border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-blue-500 font-light text-black" />

      <label for="subject" className="text-black font-light mt-4 dark:text-black">Subject<span className="text-red-500">*</span></label>
      <input type="text" value={subject} onChange={(e)=>setSubject(e.target.value)} className="bg-transparent border-sky-950 border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-blue-500 font-light text-black" />

      <label for="message" className="text-black font-light mt-4 dark:text-black">Message<span className="text-red-500">*</span></label>
      <textarea name="message" value={message} onChange={(e)=>setMessage(e.target.value)} className="bg-transparent border-sky-950 border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-blue-500 font-light text-black"></textarea>
      <div className="flex flex-row items-center justify-start">
        <button className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
          Send
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-cyan-500 ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </form>
  )
}

export default Form