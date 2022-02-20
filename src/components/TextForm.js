import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked " + text);
        let newText = text.toLocaleUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLowClick = ()=>{
        // console.log("Uppercase was clicked " + text);
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    return (
        <>
        <div className='container' style={{color : props.mode === 'light' ? 'black' : 'white'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" value = {text} onChange = {handleOnChange} style={{backgroundColor : props.mode === 'dark' ? 'black' : 'white', color : props.mode === 'light' ? 'black' : 'white'}}id="myBox" rows="8"></textarea>
            </div>
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3 " style={{color : props.mode === 'light' ? 'black' : 'white'}}>
            <h2>Your text Summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} Characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length !== 0}).length} is the avarage time taken to read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
