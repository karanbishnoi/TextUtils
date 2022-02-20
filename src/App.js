import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const[mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = ()=>{
    if(mode === 'dark'){
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = 'Textutils - LightMode'
    }
    else{
      setmode('dark')
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled","success");
      document.title = 'Textutils - DarkMode'
    }
  }
  return (
    <>
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
        <Switch>
          <Route exact path="/TextUtils/about">
            <About mode = {mode}/>
          </Route>
          <Route exact path="/TextUtils">
            <TextForm showAlert={showAlert} heading="Enter the text here to analyze below" mode={mode}/>
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
