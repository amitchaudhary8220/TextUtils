
 import TextForm from './components/TextForm'
 import Navbar from './components/Navbar'
 import About from './components/About'
 import React, { useState } from 'react';
  import Alert from './components/Alert';
  import {
   BrowserRouter as Router,
   Switch,
  Route
} from "react-router-dom";


 export default function App() {
  const [mode , setmode] = useState("light");
  const [alert,setalert] = useState("Hey what's up");

  let showalert=(message,type)=>{
    setalert(
      { msg:message,
        type: type
      })
    
      setTimeout(() => {
         setalert("");
      }, 1500);
}
  const removeclass=()=>{
    document.body.classList.remove('light');
    document.body.classList.remove('dark'); 
    document.body.classList.remove('bg-primary'); 
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');

  }
   let Togglemode=(cls)=>{ 
     removeclass(); 
     document.body.classList.add('bg-'+cls) 
      if(mode==='dark'){
      setmode('light')
      document.body.style.backgroundColor="white"
      showalert("light mode on","success")
      setTimeout(() => {
      document.title="Textutils-light mode"
      }, 10);
      }
      else{
      setmode('dark')
      document.body.style.backgroundColor="#1a3256"
      showalert("dark mode onn","success")
      setTimeout(() => {
         document.title="Textutils-dark mode"
         }, 10);
         }
   }
   return (
    <>
    <Router>
    <Navbar title="TextUtils" Text="about Text" mode={mode} Togglemode={Togglemode}/>
    <Alert alert={alert}/>
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm mode={mode} showalert={showalert}/>
          </Route>
        </Switch>
   
    {/* <TextForm heading="aaaj" mode={mode} showalert={showalert}/> */}
  <About mode={mode}/>
     </Router>
    </>
   )
 }
 
