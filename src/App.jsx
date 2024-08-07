import NavBarComponent from './components/navBarComponent'
import { NavigationProvider } from './context/buttonContext';
import Section1 from './components/section1';
import Section2 from './components/section2'
import Section3R from './components/section3R';
import Section3 from './components/section3';
import Footer from './components/footer';



function App() {
  return (
    <NavigationProvider>
      <NavBarComponent/>
      <Section1 />
      <Section2 />
      <Section3R />
      <Section3 />
      <Footer/>
    </NavigationProvider>
  );
}

export default App;
