import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import TopButton from './components/TopButton';
import PetFinder from './components/PetFinder';

function App() {



  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='petfinder' element={<PetFinder />}/>
          {/* <Route path='contact' element={ }/> */}
          {/* <Route path='*' element={ }/> */}
        </Routes>
        <Footer />
        <TopButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
