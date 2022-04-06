import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import Mainpage from './Components/Mainpage';
import Secondpage from './Components/Secondpage'

function App() {

  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Mainpage/>}/>
        <Route exact path='/Secondpage' element={<Secondpage/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;

