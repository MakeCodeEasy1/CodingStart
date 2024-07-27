import React, { useState } from "react";

export default function Textutils(props) {
  const [text, setText] = useState("Write your text here");

  const handleOnchange = (e) => {
    setText(e.target.value);
  };

  const hanldeUpclick = () => {
    let newtext = text.toUpperCase();

    setText(newtext);
  };

  const hanldeLoclick = () => {
    let newtext = text.toLowerCase();

    setText(newtext);
  };

  const hanldeCclick = () => {
    let newtext = " ";

    setText(newtext);
  };

  const hanldeCopyclick = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const hanldeExtraclick = () => {
    let newText = text.split(/ [ ] + / );
    setText(newText.join(' '));
  };




  return (
    <div>
      <div
        className="container mt-5"
        style={{ color: props.mode === "dark" ? "black" : "white " }}
      >
        <h1 style={{ color: props.mode === "dark" ? "black" : "white" }}>
          Example Text Area
        </h1>
        <textarea
          cols={50}
          rows={10}
          className="form-control mb-2"
          value={text}
          onChange={handleOnchange}
          id="mybox"
        />
        <button
          className="btn btn-info mx-2 text-light"
          onClick={hanldeUpclick}
        >
          Uppercase
        </button>
        <button
          className="btn btn-info mx-2 text-light"
          onClick={hanldeLoclick}
        >
          Lowercase
        </button>
        <button className="btn btn-info mx-2 text-light" onClick={hanldeCclick}>
          Clear text
        </button>
        <button
          className="btn btn-info mx-2 text-light"
          onClick={hanldeCopyclick}
        >
          Copy text
        </button>

        <button
          className="btn btn-info mx-2 text-light" onClick={hanldeExtraclick}  >    Remove extra space  </button>
         
      
      
      
      </div>
      <div
        className="container mt-3  "
        style={{ color: props.mode === "light" ? "black" : "white " }}
        
      >
        <h1 style={{ color: props.mode === "dark" ? "black" : "white" }}>
          Text preview
        </h1>
        <p style={{ color: props.mode === "dark" ? "black" : "white" }}>
          {" "}
          {text}
        </p>
        <div className=" mt-3">
          <h1 style={{ color: props.mode === "dark" ? "black" : "white" }}>
            Minutes to read
          </h1>
          <p style={{ color: props.mode === "dark" ? "black" : "white" }}>
            {0.008 * text.split(" ").length}
          </p>
        </div>
      </div>

      <div
        className="container mt-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
        
      >
        <h1 style={{ color: props.mode === "dark" ? "black" : "white" }}>
          Text Summary
        </h1>
      <p style={{ color: props.mode === "dark" ? "black" : "white" }}>
          {" "}
          {text.length} Characters and {text.split(" ").filter((element)=>{return element.length !==0}).length} words{" "}
        </p>
      </div>
    </div>
  );
}
