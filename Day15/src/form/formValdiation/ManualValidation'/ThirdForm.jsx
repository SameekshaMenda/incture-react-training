//---------------------------------form validation done manually-----------------------------------------
import { useState } from 'react'


function ThirdForm() {

    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const [errors, setErrors] = useState({});  // initialize with empty object

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    const validate = () => {
        let errorList = {};


        if (!formData.name.trim()) {
            errorList.name = "Name is required";
        }

        if (!formData.email.trim()) {  //if email is not available evn after trimming
            errorList.name = "Email is required";
        }
        else if (! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ) {
            errorList.name = "Email is invalid...";
        }

        return errorList
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // prevents rendering the page so that data is not lost after alert
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            alert(`Name: ${formData.name}, Email: ${formData.email}`);
            console.log("Rendering ThirdForm");
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input name='name'
                        type='text'
                        placeholder='Enter name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                </div>
                <div>
                    <input name='email'
                        type='text'
                        placeholder='Enter email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                   {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </div>
                <br></br>
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default ThirdForm;