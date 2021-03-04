import './App.css';
import Header from './Header'
import Welcome from './Welcome'
import Skills from './Skills'
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import Footer from "./Footer"
import "./main.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
