import ReactDOM from 'react-dom';
import NavbarLogin from './layouts/NavbarLogin';
import Navbar from './layouts/NavbarNoLogin';

function App() {
  return (
    <div className="App">
     <div>
      <Navbar/>
      <NavbarLogin/>
     </div>
    </div>
  );
}

export default App;