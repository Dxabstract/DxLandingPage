import NavBarComponent from './components/navBarComponent'
import { NavigationProvider } from './context/buttonContext';
import Section1 from './components/section1';
import Section2 from './components/section2'
import Section3 from './components/section3';


function App() {
  return (
    <NavigationProvider>
      <Section1 />
      <Section2 />
      <Section3 />
    </NavigationProvider>
  );
}

export default App;
