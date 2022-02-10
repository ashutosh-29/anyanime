import './App.css';
import Navbar from './component/Navbar';
import Banner from './component/Banner';
import Movies from './component/Movies';
import Favorites from './component/Favorites';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={
          <>
            <Banner/>
            <Movies/>
          </>
        }/>
          
        <Route path='/favorites' element={
          <Favorites/>
        }/>
      </Routes>
      
      {/*<h1>Trending Movies</h1>*/}
    </BrowserRouter>
  );
}

export default App;
