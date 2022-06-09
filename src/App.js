import logo from './logo.svg';
import './App.css';
import { TopNav } from './components/TopNav/TopNav';
import { navMenuData, movieBrand } from './components/Data/NavData';
import { MainPage } from './components/MainPage/MainPage';
function App() {
  return (
    <div className="App">
      <TopNav navMenuData={navMenuData} movieBrand={movieBrand} />
      <MainPage page='Book'/>
    </div>
  );
}

export default App;
