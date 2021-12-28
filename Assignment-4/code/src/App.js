
import './App.css';
import LandingPage from './components/LandingPage';
import Postview from './Postview';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/postview' element={<Postview />}></Route>
        <Route exact path='/' element={<LandingPage />}></Route>
      </Routes>
    </>
  );
}

export default App;