//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
//  import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//import { createRoot } from "react-dom/client";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {

  const [mode,setMode]=useState('light');

  const [alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({
        msg:message,
        type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark')  
    document.body.style.backgroundColor='black'
    showAlert("Dark mode has been enabled","success")
    document.title='TextUtils - Dark mode'

    // setInterval(() => {
    //   document.title='TextUtils is Amazing'

    // }, 2000);

    // setInterval(() => {
    //   document.title='Install TextUtils Now'
    // }, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
      document.title='TextUtils - Light mode'
    }
  }

  return (
    <>
      {/* <BrowserRouter> */}
    {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Routes> */}
            {/* <Route exact path="/about" element={<About/>}></Route> */}
            {/* <Route exact path="/" element={<TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode}/>}/> */}
            <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode}/>
    {/* </Routes> */}
    {/* <About/> */}
    </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
