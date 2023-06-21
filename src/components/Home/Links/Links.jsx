// import "../index.css";
// import "../gallery.css";
import Card from './Card';

import apparel from "../../../assets/Raster/Gallery/apparel.png"
import awards from "../../../assets/Raster/Gallery/awards.png"
import info from "../../../assets/Raster/Gallery/info.png"
import photography from "../../../assets/Raster/Gallery/photography.png"
import stream from "../../../assets/Raster/Gallery/stream.png"
import volunteer from "../../../assets/Raster/Gallery/volunteer.png"
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Links = () => {
  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <section id="links" className="flex flex-col relative z-5">
      <div className="flex flex-col items-center justify-center my-5 text-white
      font-semibold italic tracking-wide text-[60px] bg-repeat h-[200px] bg-[url('../src/assets/Vector/marquee.svg')] bg-contain w-full">
        <span data-aos="fade-right">QUICK LINKS</span>
        <h1 className="font-light text-2xl lg:visible invisible" data-aos="fade-right">(HOVER TO EXPAND)</h1>
        <h1 className="font-light text-4xl lg:invisible visible">(HOLD TO EXPAND)</h1>
      </div>
      <div className='w-full py-5 flex justify-center items-center'>        
        <div className="w-4/5 flex justify-center items-center">
          <Card bgImage={photography} name={"PHOTOGRAPHY"} route={"photography"} delay={600}/>
          <Card bgImage={awards} name={"AWARDS"} route={"awards"} delay={500}/>
          <Card bgImage={stream} name={"STREAM"} route={"stream"} delay={400}/>
          <Card bgImage={apparel} name={"APPAREL"} route={"apparel"} delay={300}/>
          <Card bgImage={info} name={"INFO"} route={"info"} delay={200}/>
          <Card bgImage={volunteer} name={"VOLUNTEERS"} route={"volunteers"} delay={100}/>
        </div>
      </div>
    </section>
  )
}

export default Links