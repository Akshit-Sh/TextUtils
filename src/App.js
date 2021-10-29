import './App.css';
import React, {useState} from 'react'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const [Mode, setMode] = useState('light');

  const toggleMode = () => {
    if(Mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      
    }
    else{ 
      setMode('light')
      document.body.style.backgroundColor = 'white'
    } 
   }
  return (
    <>
 <Navbar title = "textutils" about = "About Textutils" Mode = {Mode} toggleMode={toggleMode}/>
 <div className="container my-3">
 <TextForm heading = "Enter the text to analyze"  Mode = {Mode}/>
 {/* <About/> */}
 </div>
 
    </>
  );
}

export default App;
