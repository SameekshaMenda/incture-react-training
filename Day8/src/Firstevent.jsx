// function Firstevent()
// {
//     const handleClick= () =>{
//         alert(" Buttton was Clicked...")
//     }
//     return(
//         <div>
//             <h2>React Events :</h2>
//             <button onClick={handleClick}>Click</button>
//         </div>
//     )
// }
// export default Firstevent



//------------------------------------------------------------
// import { useState } from "react"
// function Firstevent()
// {
//     const [text, seText] = useState('');
//     const handleClick= (event) =>{
//     seText(event.target.value);
//     }
//     return(
//         <div>
//             <h2>React Events :</h2>
//             <input type="text" placeholder="Enter text" onChange={handleClick}/>
//             <p> Your Text : {text}</p>
//         </div>
//     )
// }
// export default Firstevent

//-------------------------------form submission--------------------------
// import { useState } from "react"
// function Firstevent()
// {
//     const [name, setName] = useState('');
//     const handleSubmit= () =>{
//     alert(`Form Submitted by : ${name}`)
//     }
//     return(
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <h2>Enter name :</h2>
//                 <input type="text" value={name}  onChange={(event) =>setName(event.target.value)}/><br></br>
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     )
// }
// export default Firstevent

//----------------------------------mouse event------------------------------------------

// function Firstevent()
// {
   
    
//     const handleMouseEnter= () =>{
//     console.log("Mouse Entered the Box :");
//     }

//     const handleMouseLeave= () =>{
//     console.log("Mouse Left the Box :");
//     }

//     return(
//         <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{
//             width: "200px",
//             height: "200px",
//             backgroundColor: "lightblue",
//             textAlign: "center",
//             lineHeight: "200px"
//         }}>
//             Hover Over Me
//         </div>
//     )
// }
// export default Firstevent

//------------------------------------------------------------

// function Firstevent()
// {
   
//     const greet= (name) =>{
//     alert(`Welcome : ${name} to React Session`)
//     }
//     return(
//         <div>
//             <button onClick={() => greet("sameeksha")}>Greet</button>
//         </div>
//     )
// }
// export default Firstevent

//-------------------------------------------KEY EVENT-------------------------------

// function Firstevent()
// {
   
//     const handleKeyDown= (event) =>{
//     alert(`Key Pressed: ${event.key} `)
//     }
//     return(
//         <div>
//             <h2> Type something :</h2>
//             <input type="text" onKeyDown={handleKeyDown}/>
//         </div>
//     )
// }
// export default Firstevent

//--------------------------------------------------------------------------------
// function Firstevent()
// {
   
//     const handleKeyDown= (event) =>{
//     alert(`Key Pressed: ${event.key} `)
//     }
//     return(
//         <div>
//             <h2> Type something :</h2>
//             <input type="text" onKeyUp={handleKeyDown}/>
//         </div>
//     )
// }
// export default Firstevent

//-------------------------------------------------------------------------------------------

function Firstevent()
{
   
    const handleKeyDown= (event) =>{
        if(event.key === 'Enter')
        {
            alert(`Welcome to React Session : `)

        }
    }
    return(
        <div>
            <h2> Type something :</h2>
            <input type="text" onKeyUp={handleKeyDown}/>
        </div>
    )
}
export default Firstevent

