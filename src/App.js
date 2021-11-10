import ReactDOM from 'react-dom';
import NavbarHome from './layouts/NavbarHome';
import NavbarNoLogin from './layouts/NavbarNoLogin';
import NavbarLogin from './layouts/NavbarLogin';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
     <div>
      <Homepage />
     </div>
    </div>
  );
}

export default App;