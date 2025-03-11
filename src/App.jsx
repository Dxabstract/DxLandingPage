import { Routes, Route } from 'react-router-dom';
import { NavigationProvider } from './context/buttonContext';
import NavBarComponent from './components/navBarComponent';
import Footer from './components/footer';
import Home from './pages/home';
import PrivacyPolicy from './pages/privacy_policy';
import TermsAndConditions from './pages/terms_conditions';

function App() {
  return (
    <NavigationProvider>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          <Route path="/terms_and_conditions" element={<TermsAndConditions />} />
        </Routes>
      </main>
    </NavigationProvider>
  );
}

export default App;