
import { BrowserRouter, Routes,Route } from 'react-router-dom';
//bootstrap dependencies
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//custom css
import './App.css';
import Home from './Screens/Home'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
