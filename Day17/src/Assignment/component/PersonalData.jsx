import React from 'react'
import { useForm } from 'react-hook-form'
import { useFormData } from '../context/FormContext';


function PersonalData({ nextStep }) {


  const {formData, setFormData} = useFormData();  //context api

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    setFormData({ ...formData, personalData: data });
    nextStep();
  };

  return (
    <div className='main-container'>
      <form className='form-container' onSubmit={handleSubmit(onSubmit)}>

        <h3>1. Personal Details</h3>

        <div>
          <label>Full Name</label>
          <input
            type='text'
            {...register("name", { 
               required: "Full Name is Required",
               minLength:{
                      value: 4,
                      message: "Please enter your Full Name"
            }  })}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </div>

        <div>
          <label>Email</label>
          <input
            type='email'
            {...register("email", {
              required: "Email ia required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid Email Format"
              }
            })}
          />
          {errors.email && <p style={{color: "red"}}>{errors.email.message}</p>}
        </div>

        <div>
          <label>Phone</label>
          <input 
          type='number'
          {...register('phone', {
                   required: "Phone Number is required",
                   maxLength: {
                    value: 10,
                    message: "Please enter a valid number"
                   },
                   minLength: {
                    value: 10,
                    message: "Please enter a valid number"
                   },
                   pattern: {
                   value: /^[0-9]{10}$/,
                   message: "Please enter a valid 10-digit number"
                   }
           })}/>
           {errors.phone && <p style={{color: "red"}}>{errors.phone.message}</p>}
        </div>

       

        <div>
          <label>Profile Photo</label>
          <input
           type='file'
           {...register("profile", { required: "Please Upload Your Profile Image"})} />
            {errors.profile && <p style={{color: "red"}}>{errors.profile.message}</p>}
        </div>

        <div>
          <button type='submit' >Next</button>
        </div>

      </form>
    </div>
  )
}

export default PersonalData