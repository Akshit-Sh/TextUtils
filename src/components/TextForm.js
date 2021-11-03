import React, {useState}  from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("Convert to Upper Case was clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text converted to Upper Case", "success");
    }
    const handleLoClick = () =>{
        console.log("Convert to Upper Case was clicked")
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Text converted to Lower Case", "success")
    }
    const handleClClick = () =>{
        console.log("Convert to Upper Case was clicked")
        let newText = text.toLowerCase();
        setText(" ")
        props.showAlert("Text has been cleared", "success")
    }
    const handleOnChange = (event) =>{
        console.log("handleOnChange was clicked")
        setText(event.target.value)
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    const [text, setText] = useState("");
    return (
        <>
        <div className="container" style ={{color:props.Mode=== 'dark' ? 'white' : '#042743'}}>
            <h1 >{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="mybox" style ={{backgroundColor:props.Mode=== 'dark' ? 'grey' : 'white'}} value = {text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick= {handleClClick}>Clear text</button>
            <button className="btn btn-primary" onClick= {handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick= {handleLoClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}> Copy Text</button>
        </div>

        <div className="container my-12" style ={{color:props.Mode=== 'dark' ? 'white' : '#042743'}}>
            <h2>
                Your text summary:
            </h2>
            <p>
                <b>{text.split(" ").length}</b> words <b>{text.length}</b> characters
            </p>
            <p>
                <b> {0.008 * text.split(" ").length}</b> minutes to read
            </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview here"}</p>
        </div>

        </>
    )
}
