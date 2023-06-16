import meditating_lady from '../../assets/meditating_lady.png'
import cute from '../../assets/cute.svg'
export const About = () => {
  return (
    <>
    
    <div className='about_section w-screen  box-border bg-primaryOrange relative flex items-center justify-center'>
        <img alt='About' src={cute} className='absolute top-[calc(0px-87px)] w-[200px] h-[100px]'></img>
        
        <div className="about_container bg-slate-400 flex flex-col lg:flex-row max-w-[90%] my-6">
            <div className="left lg:w-max w-full flex bg-primaryOrange py-3 pr-14" >
               <img src={meditating_lady} className=' m-auto max-w-[350px] aspect-square' alt="Meditation" >
               </img>
               <div className="absolute eye w-1 h-1 rounded-full"></div>
            </div>
            <div className="right w-[100%]  bg-primaryOrange text-white">
                <h3 className='text-2xl font-mainFont py-6 font-[600]'>WHAT IS MINDBLOWING MORNINGS?</h3>
                <p>We are a wellness program dedicated to helping individuals discover their inner potential and live a healthy lifestyle. Our program includes daily yoga ,meditation and breathing practices that aim to provide physical, mental and emotional benefits led by a team of knowledgeable and passionate instructors </p>
                <h3 className='text-2xl font-mainFont py-6 font-[600]'>OUR MISSION</h3>
                <p>We are a wellness program dedicated to helping individuals discover their inner potential and live a healthy lifestyle. Our program includes daily yoga ,meditation and breathing practices that aim to provide physical, mental and emotional benefits led by a team of knowledgeable and passionate instructors </p>

            </div>

        </div>
    </div>
    </>
  )
}
