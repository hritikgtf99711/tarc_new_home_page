import React from 'react';
import Banner from '../components/Home/Banner';
import About from '../components/Home/About';
import InspiredBy from '../components/Home/InspiredBy';
import LuxurySec from '../components/Home/LuxurySec';
import Projectsec from '../components/Projectsec';
import LeadershipSec from '../components/Home/LeadershipSec';
import Testimonial from '../components/Home/Testimonial';
import Spotlight from '../components/Home/Spotlight';
export default function Home() {
  return (
    <>
    <div className='bg-[url("./assets/images/bg_texture.png")] z-[2] absolute top-0 left-0 h-[100%] w-[100%]'></div>
      <Banner/>
      <About/>
      <InspiredBy/>
      <LuxurySec/>
      <Projectsec/>
      <LeadershipSec/>
      <Testimonial/>
      <Spotlight/>
    </>
  )
}
