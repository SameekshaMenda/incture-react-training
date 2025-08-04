import React from 'react'
import { useFormData } from './context/FormContext'
import { useForm } from 'react-hook-form';
function JobData({nextStep, prevStep}) {

    const {formData, setFormData} = useFormData();

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();

      const onSubmit = (data) => {
        setFormData({...formData, jobData: data});
        nextStep();
      }
  return (
    <div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Job Details</h3>

            <div>
                <label>Employee ID</label>
                <input 
                type='text'
                {...register("ID", {
                    required: "Email is required",
                    pattern: {
                                value: [/^[[a-b]+[A-B]]+$/],
                                message: "Invalid Format"
                    }
                })} />
                {errors.ID && <p style={{color: "red"}}>{errors.ID.message}</p>}
            </div>

             <div>
                <label>Department</label>
                <select {...register("department",{required: "Please select the department"})}>
                    <option value="">Select</option>
                    <option value="engineering">Engineering</option>
                    <option value="hr">HR</option>
                    <option value="sales">Sales</option>
                </select>
                {errors.department && <p style={{color: "red"}}>{errors.department.message}</p>}
            </div>

             <div>
                <label>Designation</label>
                <input type='text'  {...register("designation",{required: "Please enter the designation"})} />
                {errors.designation && <p style={{color: "red"}}>{errors.designation.message}</p>}
            </div>

            <div>
                <label>Joining Date</label>
                <input type='date' {...register("joiningDate",{required: "Please enter the details"})} />
                {errors.joiningDate && <p style={{color: "red"}}>{errors.joiningDate.message}</p>}
            </div>
            <div>
                <label>Work Location</label>
                <input type='text' {...register("location",{required: "Please enter the details"})} />
                {errors.location && <p style={{color: "red"}}>{errors.location.message}</p>}
            </div>


            <div>
                <button onClick={prevStep} type='Next'>Previous</button>
                <button type='submit'>Next</button>
            </div>
         </form>
    </div>
  )
}

export default JobData