
 import TextForm from './components/TextForm'
 import Navbar from './components/Navbar'
 import About from './components/About'
 import React, { useState } from 'react';
  import Alert from './components/Alert';
  import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";


 export default function App() {
  const [mode, setmode] = useState("light");
  const [alert,setalert] = useState("tum kya krree ho");

  let showalert=(message,type)=>{
  setalert({
      msg:message,
      type:type
          })
      setTimeout(() => {
         setalert("");
      }, 1500);
      
}
   let Togglemode=()=>{   
      if(mode==='dark'){
      setmode('light')
      document.body.style.backgroundColor="white"
      showalert("light mode onn","success")
      setTimeout(() => {
      document.title="Textutlis-light mode"
      }, 10);
      }
      else{
      setmode('dark')
      document.body.style.backgroundColor="#1a3256"
      showalert("dark mode onn","success")
      setTimeout(() => {
         document.title="Textutlis-dark mode"
         }, 10);
         }
   }
   return (
    <>
    <Router>
    <Navbar t="Textuitls" Text="about Text" mode={mode} Togglemode={Togglemode}/>
    <Alert alert={alert}/>
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm heading="aaaj" mode={mode} showalert={showalert}/>
          </Route>
        </Switch>
   
    {/* <TextForm heading="aaaj" mode={mode} showalert={showalert}/>
    <About/> */}
     </Router>
    </>
   )
 }
 
