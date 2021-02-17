// External Imports
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {About, Footer, Header, Intro,Services, Work} from 'components'

//Internal Imports
import './App.css';

function App() {
  return (
    <>
   <Header/>
   <Services/>
   <About/>
   <Intro/>
   <Work/>
   <Footer/>
    </>
  );
}

export default App;
