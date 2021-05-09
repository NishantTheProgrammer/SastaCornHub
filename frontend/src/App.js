
import './App.css';
import Videos from './pages/Videos/Videos';
import NavBar from './components/NavBar';
import NewVideo from './components/NewVideo';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <NewVideo />
        <Videos />

      </div>
    </>
  );
}

export default App;
