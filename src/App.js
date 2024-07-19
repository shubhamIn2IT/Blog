import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Navigation/Nav';

function App() {
  return (
    <>
       <Router>
        <Nav />
         <Routes>
           <Route exact path='/' element={<Home/>}/>
         </Routes>
       </Router>
    </>
  );
}

export default App;
