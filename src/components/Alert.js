import React from 'react'
export default function Alert(props) {
    const cap=(word)=>{
        let lower=word.toLowerCase();
        return lower=lower.charAt(0).toUpperCase()+lower.slice(1)
    }
  return (
    // <div>
      <div style={{height:'50px'}}>
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{props.alert.type}</strong>:{props.alert.msg}
    </div> 
    </div>
    // </div>
  )
}
