import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';

const api = {
  key: "41ddfe91262cecacb482dec769b75d99",
  base: "api.openweathermap.org/data/2.5"
}

function App() {
  return (
    <div className="App" >
      <Header  />
      <Main   />
      <Footer year={new Date().getFullYear()} />

    </div>

  );
}

export default App;
