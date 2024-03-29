import styles from '../../style';
import { bg_vid, banner, bannermobile, hero_footer, hero_mb } from '../../assets';
import { leaf } from '../../assets'; //Dormant imports for Top notification bar DO NOT REMOVE LOL
import "../../index.css";


const Hero = () => {
  return (
    <section id="home" className={'flex flex-col ${styles.paddingY} h-[85vh] w-screen'}>
      {/* Top Bar // No Stream*/}

      {/* Top Bar // Stream*/}
      {/* <div className='flex flex-row items-center py-[6px] px-4 bg-rink-gradient invisible xxs:visible rounded-[10px] mb-2 sm:h-[40px] h-[20px] w-full'>
        <span className="text-white font-bold absolute sm:text-[18px] text-[12px]">  🔴 STREAM IS LIVE </span>
        <p className={`${styles.paragraph} ml-2 overflow-hidden`}>
          <span className="md:visible invisible text-white font-normal ml-52"> PRAIRIES - QUAL 58 </span>
          <span className="md:visible invisible  text-white font-normal ml-24"> ROCKIES - QUAL 61 </span>
        </p>
      </div> */}

      {/* VIDEO+HERO SECTION */}
      <div className={`flex-1 ${styles.flexStart} items-center justify-center flex-col relative h-screen`}>        
        {/* video file */}
        <video autoPlay muted loop width="100%" height="100%" controls={false} className='flex-1 object-cover -z-1 '>
          <source src={bg_vid} type="video/mp4" contentEditable={false} className=''/>
        </video>
        
        {/* center elements */}
        <div className="bg-opacity-60 bg-black w-full h-full absolute sm:hidden block p-5"></div>

        <div className="flex flex-col justify-center items-center bg-primary sm:bg-opacity-60 bg-opacity-0 absolute sm:w-5/6 w-full py-1 backdrop-blur-sm h-4/5">
          {/* <img src={text_1} className="h-[150px] object-scale-down"/> */}
          {/* <img src={text_2}/> */}
          <img src={banner} className="w-full object-cover mx-auto sm:block hidden"/>
          <img src={hero_mb} className="h-[70vh] mx-auto mt-[1vh] sm:hidden visible object-cover"/>
          <div className=' text-gray-400 font-orbitron tracking-widest -mt-10 text-2xl sm:flex hidden'>02/02/24 - 02/04/24</div>
          <img src={hero_footer} className="mx-auto"/>
        </div>


      </div>
    </section>
  )
}

export default Hero