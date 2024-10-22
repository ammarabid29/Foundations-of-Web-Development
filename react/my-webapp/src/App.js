import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {

  return (
    <div className="App" >
      <Navbar></Navbar>
      <div className="content"></div>
      <Home></Home>
    </div>
  );
}

export default App;
