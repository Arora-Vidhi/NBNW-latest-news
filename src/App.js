import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  	return (
  	  	<>
  	  	  	<Navbar/>
  	  	  	<News pageSize={6} apiKey="aa710c6bfa5d4cca9b0ac33c89686ec0" country="us" category="science"/>
  	  	</>
  	);
}

export default App;
