import './App.css';
import React, {useState} from 'react'
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)
   const showAlert =(message, type) =>{
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(() => {
          setAlert(null)
        }, 2000);
  }

  const toggleMode = () => {
    if(Mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been enabled", "success")
      
    }
    else{ 
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "success")
    } 
   }
  return (
    <>
 <Navbar title = "textutils" about = "About Textutils" Mode = {Mode} toggleMode={toggleMode}/>
 <Alert Alert = {alert}/>
 <div className="container my-3">
 <TextForm showAlert={showAlert} heading = "Enter the text to analyze"  Mode = {Mode}/>
 {/* <About/> */}
 </div>
 
    </>
  );
}

export default App;
