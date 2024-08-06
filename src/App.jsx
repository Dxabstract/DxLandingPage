import { NavigationProvider } from './context/buttonContext';
import Section1 from './components/section1';
import Section3 from './components/section3';


function App() {
  return (
    <NavigationProvider>
      <Section1 />
      <Section3 />
    </NavigationProvider>
  );
}

export default App;
