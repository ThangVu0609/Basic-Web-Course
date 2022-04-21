import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Menu></Menu>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
