import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Task1 = () => {
    const validationSchema = Yup.object({
        name: Yup.string()
            .required("Name is required"),


        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),


        password: Yup.string()
            .min(2, " Password must be at least 8 characters")
            .required("Password is required"),

        confirmpassword: Yup.string()
            .oneOf([Yup.ref('password'), null], "Password must match")
            .required("Password is required"),

        gender: Yup.string()
            .oneOf(['male', 'female', 'other'], "Please select your gender")
            .required("Please select your gender"),

        city: Yup.string()
            .notOneOf([''], "City is required")
            .required("City is required"),

        terms: Yup.boolean()
                  .oneOf([true], "Please read the and agree")
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmpassword: '',
            gender: '',
            city: '',
            terms: false
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert("Registration Successful" + JSON.stringify(values));  //convert string to object type
        }
    });

    return (
        <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }} className='main-container'>
            <h2 style={{ color: 'white' }}>Register :</h2>
            <form onSubmit={formik.handleSubmit} className='form-class'>
                <div style={{ marginBottom: '15px' }}>
                    <label>Name : </label>
                    <input
                        type='text'
                        name='name'
                        value={formik.values.name}
                        placeholder='Enter name'
                        onChange={formik.handleChange} />

                    {formik.touched.name && formik.errors.name && (<div style={{ color: 'red' }}>
                        {formik.errors.name}</div>
                    )}
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>Email : </label>
                    <input
                        type='email'
                        name='email'
                        value={formik.values.email}
                        placeholder='Enter email'
                        onChange={formik.handleChange} />

                    {formik.touched.email && formik.errors.email && (<div style={{ color: 'red' }}>
                        {formik.errors.email}  </div>
                    )}
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>Password : </label>
                    <input
                        type='password'
                        name='password'
                        value={formik.values.password}
                        placeholder='Enter password'
                        onChange={formik.handleChange} />

                    {formik.touched.password && formik.errors.password && (<div style={{ color: 'red' }}>
                        {formik.errors.password}  </div>
                    )}
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>Confirm Password : </label>
                    <input
                        type='password'
                        name='confirmpassword'
                        value={formik.values.confirmpassword}
                        placeholder='Enter confirm password'
                        onChange={formik.handleChange} />

                    {formik.touched.confirmpassword && formik.errors.confirmpassword && (<div style={{ color: 'red' }}>
                        {formik.errors.confirmpassword}  </div>
                    )}
                </div>
                <div>
                    <label>Gender:</label>
                    <input
                        type='radio'
                        name='gender'
                        value='male'
                        checked={formik.values.gender === 'male'}
                        onChange={formik.handleChange}
                    />
                    <label>Male</label>
                    <input
                        type='radio'
                        name='gender'
                        value='female'
                        checked={formik.values.gender === 'female'}
                        onChange={formik.handleChange}
                    />
                    <label>Female</label>
                    <input
                        type='radio'
                        name='gender'
                        value='other'
                        checked={formik.values.gender === 'other'}
                        onChange={formik.handleChange}
                    />
                    <label>Other</label>
                    {formik.touched.gender && formik.errors.gender && (
                        <div style={{ color: 'red' }}>{formik.errors.gender}</div>
                    )}
                </div>

                <div>
                    <label htmlFor="city">City</label>
                    <br />
                    <select
                        name="city"
                        id="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        
                    >
                        <option value="">Choose a city</option>
                        <option value="Mangaluru">Mangaluru</option>
                        <option value="Bengaluru">Bengaluru</option>
                        <option value="Mysore">Mysore</option>
                        <option value="Udupi">Udupi</option>
                    </select>
                    {formik.touched.city && formik.errors.city && (
                        <div style={{ color: 'red' }}>{formik.errors.city}</div>
                    )}
                </div>

                <input type='checkbox'
                       name='terms' 
                       checked={formik.values.terms}
                       onChange={formik.handleChange}
                       
                       />

                <label>Agree to Terms & Conditions</label>
                {formik.touched.terms && formik.errors.terms  && (
                        <div style={{ color: 'red' }}>{formik.errors.terms}</div>
                    )}

                <br></br>
                <button className='btn' type='submit'>Submit</button>


            </form>
        </div>
    )
}

export default Task1;
