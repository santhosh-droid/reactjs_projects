import React, {useState} from 'react'


export default function TextForm(props){
    const [text,setText]=useState("Enter your text");
    const handleUpClick=() =>{
        console.log("Uppper case was clicked "+ text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to Upper case","success");
    }
    const handleLoClick=() =>{
        console.log("Lower case was clicked "+ text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lower case","success");
    }
    const handleClear=() =>{

        let newText=" ";
        setText(newText);
        props.showAlert("Cleared your text","warning");
    }
    const handleOnChange=(event)=>{
        console.log("value is changed");
        setText(event.target.value);
    }
    //  text="sdlkfjkld" // wrong way to change the state
    //    setText("hello"); // correct way to change the state
    return(
    <div >
 
        <div className="container mb-3 my-3" style={{color:props.mode==='light'?'black':'white'}}>
            <h1 >{props.heading}</h1>
               <textarea className="form-control" onChange={handleOnChange}value={text} style={{background:props.mode==='light'?'grey':'white',color:props.mode==='light'?'white':'black'}}
               id="exampleFormControlTextarea1" rows="3"></textarea>
               <br />
               <div className="container my-3">
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
               <button className="btn btn-primary" onClick={handleLoClick}>Convert to LowerCase</button>
               <button className="btn btn-primary" onClick={handleClear}>Clear</button>
               </div>
               <br />
               <br />
               <h2>Your text summary</h2>
               <p>{text.split(" ").length-1} words and {text.length} characters</p>
        </div>
</div>
    );
}