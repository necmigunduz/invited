import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='bg-slate-100'>Title</h1>
      <FontAwesomeIcon icon={solid('coffee')} />
    </div>
  );
}

export default App;
