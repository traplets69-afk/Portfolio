import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';
import { navLinks } from '../constants/index.js';
const contactLink = navLinks.find(link => link.name === 'Contact');

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' adrian@jsmastery.pro');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };


  return (
<section className="c-space my-20" id="about">
  <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-5 w-full max-w-6xl mx-auto">

    {/* Grid 1 - Left full-height column */}
    <div className="grid-container h-full flex items-center justify-center">
  <div className="flex flex-col items-center gap-4 text-center">
    
    <div className="rounded-3xl w-[150px] h-[150px] flex justify-center items-center overflow-hidden">
      <Globe
        height={150}
        width={150}
        backgroundColor="rgba(0, 0, 0, 0)"
        backgroundImageOpacity={0.5}
        showAtmosphere
        showGraticules
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        labelsData={[
          { lat: 40, lng: -100, text: 'Philiphines, Cebu', color: 'white', size: 15 }
        ]}
      />
    </div>

    <p className="grid-headtext">
      Flexible with time zones & locations
    </p>

    <p className="grid-subtext max-w-xs">
      I&apos;m based in Philiphines, Cebu and open to remote work worldwide.
    </p>

<a
  href='/assets/Resume(Suarez,Kyrstian).pdf'         // path to your PDF (public folder)
  download="Kyrstian_Suarez_Resume.pdf"
  className="w-full"
>
  <Button name="Hire Me" isBeam containerClass="w-full mt-2" />
</a>
  </div>
</div>

    {/* Right column */}
    <div className="flex flex-col gap-5">

      {/* Grid 2 - Top Centered */}
      <div className="grid-container h-[266px]">
        <img src="assets/grid1.png" alt="grid-1" className="w-full h-full object-contain" />
        <div>
          <p className="grid-headtext text-center">Hi, I’m Krystian</p>
          <p className="grid-subtext text-center">
            I’m a Civil Engineering graduate specializing in Project Management,
            dedicated to turning complex ideas into well-organized, efficient,
            and successful projects.
          </p>
        </div>
      </div>

      {/* Bottom grids 3 & 4 side by side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Grid 3 */}
        <div className="grid-container h-[200px]">
          <img src="/assets/Building1.png" alt="grid-3" className="w-full h-full object-contain" />
          <div>
            <p className="grid-headtext text-center">Site Engineer</p>
            <p className="grid-subtext text-center">
              I love solving problems on-site and overseeing workers to deliver high-quality project results.
            </p>
          </div>
        </div>

        {/* Grid 4 */}
        <div className="grid-container h-[200px]">
          <img src="/assets/Building3.png" alt="grid-4" className="w-full h-full object-contain" />
          <div>
            <p className="grid-headtext text-center">Estimator</p>
            <p className="grid-subtext text-center">
              I’m passionate about construction estimating and turning drawings, quantities, and data into accurate cost projections.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom grids 5 & 6 side by side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Grid 5 */}
        <div className="grid-container h-[266px]">
          <img src="/assets/Building2.png" alt="grid-5" className="w-full h-full object-contain" />
          <div>
            <p className="grid-headtext text-center">Draftsman</p>
            <p className="grid-subtext text-center">
              I enjoy transforming ideas into detailed drawings that provide clear visual documentation for clients.
            </p>
          </div>
        </div>

        {/* Grid 6 */}
        <div className="grid-container h-[266px]">
          <img src="/assets/Bulding4.jpg" alt="grid-6" className="w-full h-full object-contain" />
          <div>
            <p className="grid-headtext text-center">Surveyor</p>
            <p className="grid-subtext text-center">
              By using modern surveying equipment to gather precise measurements and convert them into clear, 
              dependable survey plans for construction.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


  );
};

export default About;

   