import React from "react";
import {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("Uppercase button was clicked");
        const newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Text has been converted to uppercase","success")
    }

    const handleLowClick=()=>{
      //console.log("Uppercase button was clicked");
      const newText=text.toLowerCase();
      setText(newText)
      props.showAlert("Text has been converted to lowercase","success")
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Text is being read","success")
  }

  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ] +/)
    setText(newText.join(""))
    props.showAlert("Extra sapces have been removed","success")
  }
 

    const handleOnChange=(event)=>{
       // console.log("On Chnage");
        setText(event.target.value)    //by using this event we can add our sentences after the 'text' in textarea
    }
    const [text,setText]=useState("");
    // text = "new text";  Wrong way to change the state
    // set Text("new text");  Correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode ==='dark'? 'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text}  style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
      <button className="btn btn-primary mx-1 my-1" onClick={speak}>Speak</button>
    </div>
    <div className="container my-3" style={{color:props.mode ==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
      <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters.</p>
                                               {/* OR OTHER WAY IS: */}
      {/* <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}</p> */}

      <p>{0.008 * text.split("").length}Minutes Read</p>   
      {/* since for reading 125 words we require 1 minute sor for 1 word it will be 1/125=0.008  */}

      <h2>Preview</h2>
      <p>{text.length>0 ? text:"Enter text in above textbox to preview it here"}</p>

    </div>
    </>
  );
}
