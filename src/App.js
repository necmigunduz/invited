// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';

function App() {
  return (
    <div className="flex justify-center mt-2 rounded-xl">
      <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
