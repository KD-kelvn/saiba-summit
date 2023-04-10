import { reasons } from "../../Data/Reasons"

const WhyUs = () => {
  return (
    <section id='why-us' className="flex justify-center py-[20px] my-[10%]">
        <div className="w-[90%] md:w-[80%] flex flex-col why-us-container">
            <div className="relative header self-center">
                <h1 className="text-3xl font-semibold">Reason why you should attend</h1>
                <div className='empty-line-bar'></div>
            </div>

            <div className="flex flex-col mt-[40px] reasons-wrapper">
                { reasons.map((reason)=>{
                    return(
                        <div key={reason.id} className="flex flex-col mb-[20px] items-center md:flex-row">
                            <div className=" min-w-[60%] max-w-[60%] relative overflow-hidden md:max-w-[30%] md:min-w-[30%] img-wrapper" >
                               <img src={`./${reason.pic}`} alt="x" className="w-full max-h-[150px] min-h-[150px]" />
                            </div>
                             
                             <div className="info">
                                <h3 className="text-xl">{reason.name}</h3>
                                <p>{reason.desc}</p>
                             </div>
                        </div>
                    )
                })}
            </div>
        </div>

    </section>
  )
}

export default WhyUs