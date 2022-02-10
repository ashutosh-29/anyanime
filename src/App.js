import './App.css';
import Navbar from './component/Navbar';
import Banner from './component/Banner';
import Favorites from './component/Favorites';
import Animes from './component/Animes';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={
          <>
            <Banner/>
            <Animes/>
          </>
        }/>
          
        <Route path='/favorites' element={
          <Favorites/>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
