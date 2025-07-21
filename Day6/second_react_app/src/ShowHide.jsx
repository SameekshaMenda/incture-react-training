//-----------------------------Show and Hide Text---------------------------------------
import { useState } from "react";

function ShowHide(){
   const [show, setShow] = useState(true);

   return (
    <div>
        
        <button onClick={()=> setShow(!show)}>   
             {show ? "Hide Text" : "Show Text"}
        </button>
        { show && <p>This is my secret message</p>}
        
    </div>
   )

}
export default ShowHide;