import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/Main';



function App() {

  
  return (
    <div className="App" >
      <Header/>
      <Main />
      <Footer year={new Date().getFullYear()} />

    </div>

  );
}

export default App;
