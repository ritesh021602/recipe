
import Navbar from './components/Searchbar';
import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Home } from './components/Home';
import DescriptionPage from './components/DescriptionPage';
import { Saved } from './components/Saved';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home></Home>}/>
        <Route exact path='/description' element={<DescriptionPage></DescriptionPage>}/>
        <Route exact path='/saved' element={<Saved/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
