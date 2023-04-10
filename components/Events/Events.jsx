 import speaker1  from "../../public/speakers/1.jpg";
 import speaker2 from "../../public/speakers/2.png";
 import speaker3 from "../../public/speakers/3.png";
 import speaker4 from "../../public/speakers/4.png";
 import speaker5 from "../../public/speakers/5.png";
 import Image from 'next/image';

const Events = () => {
  return (
    <>
        <section id="events-section" className="hidden md:my-[10%] sm:flex sm:justify-center">
            <div className="w-[90%] md:w-[80%] events-container">
                <div className="mt-[20px] headings">
                    <h1 className="text-4xl font-bold">2023 EVENT</h1>
                   
                    <h2 className="text-3xl font-medium">THEME: Empowering the digital age</h2>
                    <small className="text-2xl">Date: 4th January</small>
                    <h2 className="text-2xl mt-[10px]">Speakers</h2>
                </div>
                <div className="mt-[20px] w-[45%] flex flex-wrap gap-x-1 md:w-[60%] speakers">
                    
                {[speaker1, speaker2, speaker3, speaker4, speaker5].map((speaker)=>{
                    return (
                        <div key={speaker} className="w-[90px] max-w[100px] rounded-full h-[90px] max-h-[100px] mx-[10px] my-[3px] relative overflow-hidden">
                            <Image src={speaker} alt="speaker-img" className="w-[100%]"/>
                        </div>
                    )
                })}
                </div>

                <div className=" mt-[40px] w-[80%] md:w-[60%] relative info">
                    <p className="text-lg">Overall the theme suggests a focus on the transformable power of digital technologies and their potential to enables greeter collaboration, efficiency, and innovation in various fields. The specific topics discussed at the event you attended highlight some of the key tools and strategies necessary to make this transformation a reality. </p>
                </div>

                <div className="flex w-[50%] md:w-[66%] mt-[20px] justify-between extra-info">
                    <p className="text-semibold">10+ startups </p>
                    <p className="text-semibold">80+ Attendees </p>
                    <p className="text-semibold">4+ Speakers</p>
                </div>

                <div className="btn">

                </div>
            </div>
    </section>

    <section className="flex justify-center sm:hidden">
        <div className="w-[90%] flex flex-col justify-center events-container">
                <div className="mt-[20px] self-center headings">
                    <h1 className="text-4xl font-bold relative z-10">2023 EVENT</h1>
                    <div className='z-0 header-empty-bar relative '></div>
                    <h2 className="text-3xl font-medium">THEME: Empowering the digital age</h2>
                    <small className="text-2xl">Date: 4th January</small>
                    <h2 className="text-2xl mt-[10px]">Speakers</h2>
                </div>

                <div className="mt-[20px] w-[85%] flex flex-wrap gap-x-1  speakers">
                    
                    {[speaker1, speaker2, speaker3, speaker4, speaker5].map((speaker)=>{
                        return (
                            <div key={speaker} className="w-[80px] max-w[80px] rounded-full h-[80px] max-h-[100px] mx-[10px] my-[3px] relative overflow-hidden">
                                <Image src={speaker} alt="speaker-img" className="w-[100%]"/>
                            </div>
                        )
                    })}
                </div>
                <div className=" mt-[40px] w-[96%]  relative info">
                    <p className="text-lg">Overall the theme suggests a focus on the transformable power of digital technologies and their potential to enables greeter collaboration, efficiency, and innovation in various fields. The specific topics discussed at the event you attended highlight some of the key tools and strategies necessary to make this transformation a reality. </p>
                </div>

                <hr />

                <div className="flex flex-col w-[90%]  mt-[20px] justify-center space-y-6 self-center extra-info">
                    <p className="text-semibold self-center">10+ startups </p>
                    <p className="text-semibold self-center">100+ Attendees </p>
                    <p className="text-semibold self-center">4+ Speakers</p>
                </div>

                <div className="relative block w-[96%] mt-10 mb-20 img-rec">
                    <div className="w-[100%] z-10 image-wrapper">
                        <img src="./saiba-image.png" alt="" className="object-fill"/>
                    </div>

                    <div className="relative z-0 w-[96%] h-[40vh] -mt-[170px] -ml-[20px] bg-[#F95738] rec"></div>
                </div>

        </div>
    </section>
    </>
 
  )
}

export default Events