import React, { useState } from 'react'
// import PropTypes from 'prop-types';
export default function TextForm(props) {

  const handleUpChange = (e) => {
    setText(e.target.value)
  }
  const handelUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showalert("it is uppercase","success")
  }
  const handelLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showalert("it is lower case","success")
  }
  const clear = () => {
    let newText = "";
    setText(newText)
    props.showalert("text cleared","success")
  }

  const [text, setText] = useState("Welcome Back");
  return (
    <>
      <h1>{props.heading}</h1>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
  <textarea className="form-control" value={text} id="mybox" onChange={handleUpChange} rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
 {/* onchange fn---whenever user change value in text area  */}
  <button  disabled={text.length===0} className="ny-button-click" onClick={handelUpClick}>convert to uppercase</button>
  <button  disabled={text.length===0} className="ny-button-click mx-1" onClick={handelLowClick}>convert to lower case</button>
  <button  disabled={text.length===0} className="ny-button-click mx-1" onClick={clear}>clear</button>
</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
  <h3>your text summary</h3>
  <p>{text.length} characters {text.split(" ").filter((person) => {return person.length!==0}).length} words are in it</p>
  <h3>Preview</h3>
  <p>{text.length>0?text:"enter your text here"}</p>
</div>
    </>
  )
}
