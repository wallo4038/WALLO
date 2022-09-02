// import React, {useState} from 'react'
// export default function Txtform(props) {
//     const handleupclick=()=>{
//     let newtext=text.toUpperCase();
//     setText(newtext)
//     }
    
//     const handleloclick=()=>{
//       let newtext=text.toLocaleLowerCase();
//       setText(newtext)
//       }
    
//     const handleonchange=(event)=>{
    
    
//       setText(event.target.value)
    
//     }
//       const [text,setText]=useState("")
//      // setText("new text");
//       return (
//         <>
//          <div>
//          <h1>{props.heading}</h1>
//      <div className="mb-3">
//      <textarea  placeholder='Enter your text here' onChange={handleonchange}
//      value={text} 
//      className="textarea form-control"
//       id="mybox" rows="8">
       
//      </textarea>
//      </div>
//     <span id='btt'>
    
//       <button className="btn btn-primary" 
//      onClick={handleupclick}
//        >
//        Convert to Uppercase
//      </button>
//      </span>
    
//     {/* <span id='bt'>
//       <button  className="btn btn-primary" 
//      onClick={handleloclick}
//        >
//        Convert to lowercase
//      </button>
//      </span> */}
     
//      </div>

//      <div className="container">
//      <h1>your text summary</h1>
//      <p>3234 words, 767 characters</p>
//    </div>
//    </>
//        )
// }