import { useState } from "react";

function FirstForm(){
     
    const [formData, setFormData] = useState({ 
        name: '', 
        email: '' 
    });

    const handleChange = (event) => {
         const {name, value} = event.target;
         setFormData((prevData) => ({
            ...prevData,
            [name]: value
         }));
    }

    const handleSubmit = ((event) => {
        event.preventDefault();  //prevents rendering the page so that data is not lost after alert
        alert(`Name: ${formData.name}, Email: ${formData.email}`);
        console.log("Rendering FirstForm");
    })

    return(
        <div>
            <form onSubmit={handleSubmit}>
                  <input name="name" placeholder="Enter name" onChange={handleChange}/> <br></br>
                  <input name="email" placeholder="Enter email" onChange={handleChange}/> <br></br>
                  <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FirstForm;