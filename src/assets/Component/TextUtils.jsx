import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    // props.showAlert("Converted to Uppercase!", "success");
  }

  const handleLoclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    // props.showAlert("Converted to Lowercase!", "success");
  }

  const handleClearclick = () => {
    let newText = '';
    setText(newText);
    // props.showAlert("All text has been cleared", "success");
  }

  const handleCopy = () => {
    let textArea = document.getElementById("MyBox");
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
    // props.showAlert("All text has been copied", "success");
  };

  return (
    <div>
      <div className="container my-5 mt-5">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control border-dark rounded-3"
            value={text}
            onChange={(e)=>setText(e.target.value)}
            id="MyBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpclick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoclick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearclick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      </div>
      <div className="container my-3">
        <h2>Your Text</h2>
        <p>{text.split(/\s+/).filter((word) => word !== "").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the above box to preview it..."}</p>
      </div>
    </div>
  )
}
