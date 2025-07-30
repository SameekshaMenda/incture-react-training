
import { useState } from 'react'
function Task() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmpassword: ''
    }) ; 

    const [errors, setErrors] = useState({});  

      const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

     const validate = () => {
        let errorList = {};
        if (!formData.email.trim()) {
            errorList.email = "Email is required";
        }
        
        else if (! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errorList.email = "Email is invalid...";
        }


        if (!formData.password.trim()) {
            errorList.email = "Password is required";
        }
        else if (formData.password.length < 3) {
            errorList.email = "Password must be of 3 characters long";
        }

        if(!formData.confirmpassword.trim()) {
            errorList.email = "Confirm Password is required";
        }
        else if( formData.confirmpassword !== formData.password)
        {
            errorList.email = "Password and Confirm Password do not match";
        }
        return errorList;


    }

    const handleSubmit = (event) => {
        event.preventDefault(); 
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            alert(`Submitted for Email: ${formData.email}`);
            console.log("Rendering ThirdForm");
        }
    }
  


    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                <div>
                    <input name='password'
                        type='text'
                        placeholder='Enter password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                </div>
                <br></br>
                <div>
                    <input name='confirmpassword'
                        type='text'
                        placeholder='Enter Password Again'
                        value={formData.confirmpassword}
                        onChange={handleChange}
                    />
                    {/* {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>} */}
                </div>

                <button type='submit'>Submit</button>

            </form>
        </div>
    )
}

export default Task