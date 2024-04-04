import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState } from 'react';
function App() {
  const [mode, setMode]=useState('light');// whether dark mode i s enabled or not
  const [alert,setAlert]=useState(null);// for alert to display
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.background="#00538b";
      showAlert("Dark mode have been enabled","success");
      document.title="TextUtils-Dark Mode";
      setInterval(()=>{
        document.title="TextUtils is Amazing boss";
      },2000      );
      setInterval(() => {
        document.title="Loading";
      }, 1500);
    }
    else{
      setMode('light')
      document.body.style.background="white";
      document.title="TextUtils-Light Mode";
      showAlert("Light mode have been enabled","success");
    }

  }
  return (
   <>
   <Navbar title="TextUtils" toggleMode={toggleMode} mode={mode}/>
   <Alert alert={alert} />
   {/* <Navbar  /> */}
   <div className="container my-3">
   <TextForm heading="Enter your text below for analyzing" showAlert={showAlert}mode={mode}/>
   {/* <About/> */}
   </div>
   </>
  );
}

export default App;
