
import './App.css';
import Navbar from './components/navBar/navBar'
import BeerList from './containers/beerList/beerList'

function App() {
  //const url1 = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json'
  //const url2 = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json'
  return (
    <div className="App">
      <Navbar/>
      <BeerList/>
    </div>
  );
}

export default App;
