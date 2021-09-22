import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App container">
      <Header></Header>
      <Meals></Meals>
      <Cart/>
    </div>
  );
}

export default App;
