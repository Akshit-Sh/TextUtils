import React, {useState}  from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("Convert to Upper Case was clicked")
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () =>{
        console.log("Convert to Upper Case was clicked")
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event) =>{
        console.log("handleOnChange was clicked")
        setText(event.target.value)
    }
    const [text, setText] = useState(" ");
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="mybox" value = {text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick= {handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-4" onClick= {handleLoClick}>Convert to LowerCase</button>
        </div>

        <div className="container my-12">
            <h2>
                Your text summary.
            </h2>
            <p>
                <b>{text.split(" ").length}</b> words <b>{text.length}</b> characters
            </p>
            <p>
                <b> {0.008 * text.split(" ").length}</b> minutes to read
            </p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>

        </>
    )
}
