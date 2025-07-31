import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const FormValid = () => {
    const validationSchema = Yup.object({
        name: Yup.string()
            .required("Name is required"),


        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),


        password: Yup.string()
            .min(8, " Password must be at least 8 characters")
            .required("Password is required")
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert("Registration Successful" + JSON.stringify(values, null, 2));  //convert string to object type
        }
    });

    return (
        <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }} className='main-container'>
            <h2 style={{color: 'white'}}>Register :</h2>
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
                <br></br>
                <button className='btn' type='submit'>Submit</button>


            </form>
        </div>
    )
}

export default FormValid;
