import './App.css';
import {Home} from './components/Home'
import { AboutMe } from './components/AboutMe';
import { Technologies } from './components/Technologies';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';

function App() {
  
  return(
    <>
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Technologies/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App;
