import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success ! ");
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleLwClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success ! ");

    }
    const handleClearText = () => {
        setText("");
        props.showAlert("Clear all msg ", "success ! ");

    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces", "success ! ");

    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);        
        props.showAlert("Text Copied ", "success ! ");
    }
    const [text, setText] = useState('');

    return (
        <>
            <div className="container" >
                <div className="mb-3">
                    <h1 style={{ color: props.textColor }}>{props.heading} </h1>
                    <textarea className="form-control " id="data" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#769ebc', color: props.mode === 'light' ? 'black' : 'white', border: '2px solid black' }} value={text} rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className={`btn  mx-2 my-1 border`} style={{ backgroundColor: props.btnColor }} onClick={handleUpClick}>Conver to Uppercase</button>
                <button disabled={text.length === 0} className={`btn  mx-2 my-1 border`} style={{ backgroundColor: props.btnColor }} onClick={handleLwClick}>Conver to Lowercase</button>
                <button disabled={text.length === 0} className={`btn  mx-2 my-1 border`} style={{ backgroundColor: props.btnColor }} onClick={handleClearText}>Clear Text</button>
                <button disabled={text.length === 0} className={`btn  mx-2 my-1 border`} style={{ backgroundColor: props.btnColor }} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className={`btn  mx-2 my-1 border`} style={{ backgroundColor: props.btnColor }} onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="container my-3" style={{ color: props.textColor }}>
                <h2 >Your Text summury :</h2>
                <p><b>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</b> - words and <b> {text.length} </b> - character</p>
                <p><b>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} </b> - minutes to read words </p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
TextForm.propTypes = { heading: PropTypes.string }
