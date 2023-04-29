// import './App.css';
import About from './components/About';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState("dark");
  const [modeText, setModeText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);
  const [btnColor, setBtnColor] = useState("ivory");
  const [textColor, setTextColor] = useState('dark');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
  }
  const changeTextColor = () => {
    setTextColor('light');
  }

  const ChangeMode = (cls) => {
    removeBodyClasses();
    console.log(cls);

    if (cls === 'primary' || cls === 'danger' || cls === 'warning' || cls === 'light' || cls === 'success') {
      console.log(1);
      console.log(cls);
      setTextColor('dark');
    } else {
      console.log(2);
      console.log(cls);

      changeTextColor();
      setTextColor('white');
    }

    document.body.classList.add('bg-' + cls);


    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // setModeText("Enable Dark Mode")
      showAlert("Light Mode has been Enable", "success !")
      setBtnColor("ivory");

    }
    else {
      setMode('dark');
      // setModeText("Enable light Mode");
      document.body.style.backgroundColor = '#241259 ';
      showAlert("Dark Mode has been Enable", "success !")
      setBtnColor("white");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtil" aboutText="about Us" mode={mode} toggleMode={ChangeMode} modeText={modeText} />
        <div className="container">
          {/* <Navbar/> */}
          <Alert alert={alert} />
          <div className="container mx-3">
            <Switch>
              <Route exact path='/'>
                <TextForm showAlert={showAlert} heading="Write your blog here" mode={mode} btnColor={btnColor} toggleMode={ChangeMode} textColor={textColor} />
              </Route>
              <Route exact path='/about'>
                <About mode={mode} />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
