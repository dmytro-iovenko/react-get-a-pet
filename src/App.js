import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { PetFinderProvider } from './contexts/PetFinderContext';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import TopButton from './components/TopButton';
import PetFinder from './components/PetFinder';
import Contact from './components/Contact';

function App() {
  return (
    <PetFinderProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='petfinder' element={<PetFinder />} />
            <Route path='contact' element={<Contact />}/> 
            {/* <Route path='*' element={ }/> */}
          </Routes>
          <Footer />
          <TopButton />
        </div>
      </BrowserRouter>
    </PetFinderProvider>
  );
}

export default App;
