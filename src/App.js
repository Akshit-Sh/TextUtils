import './App.css';
import React, {useState} from 'react'
// import About from './components/About';
import Alert from './components/Alert';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
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
      document.title = "TextUtils - Dark Mode"
      
    }
    else{ 
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "success")
      document.title = "TextUtils - Light Mode"
    } 
   }
  return (
    <>
    {/* <Router> */}
 <Navbar title = "textutils" about = "About Textutils" Mode = {Mode} toggleMode={toggleMode}/>
 <Alert Alert = {alert}/>
 <div className="container my-3">
 {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          </Route>
        </Switch> */}
        <TextForm showAlert={showAlert} heading = "Enter the text to analyze"  Mode = {Mode}/>
 {/* <About/> */}
 </div>
 {/* </Router> */}
 <Footer/>
 
    </>
  );
}

export default App;
