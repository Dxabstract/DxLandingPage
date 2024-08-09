import NavBarComponent from './components/navBarComponent'
import { NavigationProvider } from './context/buttonContext';
import Section1 from './components/section1';
import Section2 from './components/section2'
import Section3 from './components/section3';
import Section4 from './components/section4';
import Section4R from './components/section4R';
import Footer from './components/footer';

import bgSection1 from './assets/bgSection1_1.svg'
import bgSection2 from './assets/bgSection1_2.svg'
import BgAbout from './assets/aboutBG.svg';


function App() {
  return (
    <NavigationProvider>
      <img 
        className='absolute top-0 right-0 -z-20'
        src={bgSection1} 
        alt="Background" 
      />

      <img 
        className='absolute top-0 -z-20'
        src={bgSection2} 
        alt="Background" 
      />

      <NavBarComponent/>
      <Section1 />
      <Section2 />
      <Section3 />
      {/* <Section4 /> */}
      {/* <div className='relative'>
        <div className='h-full flex justify-center'>
        <img
          className="absolute top-0 -z-20 object-cover"
          src={BgAbout}
          alt="Background"
        />
        </div>
        <Section4R />
      </div> */}

      <Footer/>
    </NavigationProvider>
  );
}

export default App;
