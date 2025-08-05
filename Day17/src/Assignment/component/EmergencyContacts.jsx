import React from 'react'
import { useFormData } from '../context/FormContext'
import { useForm } from 'react-hook-form'
import { useFieldArray } from 'react-hook-form';

function EmergencyContacts({ nextStep, prevStep }) {
    const { formData, setFormData } = useFormData();

    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const { fields, append, remove } = useFieldArray({
        control,
        name: "emergencyContacts"
    });

    const onSubmit = (data) => {
        setFormData({ ...formData, emergencyContacts: data });
        nextStep();
    }

    return (
        <div className='main-container'>

            <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
                <h3>Emergency Contacts</h3>
                {fields.map((field, index) => (
                    <div key={field.id} style={{ border: "1px solid #ccc", marginBottom: "10px", padding: "10px" }}>
                        <div>
                            <label>Name</label>
                            <input
                                type='text'
                                {...register(`emergencyContacts.${index}.name`, {
                                    required: "Name is Required",
                                    minLength: {
                                        value: 4,
                                        message: "Name should be more than 4 characters"
                                    }
                                })}

                            />
                            {errors.emergencyContacts?.[index]?.name && <p style={{ color: "red" }}>{errors.emergencyContacts[index].name.message}</p>}
                        </div>
                        <div>
                            <label>Relation</label>
                            <input
                                type='text'
                                {...register(`emergencyContacts.${index}.relation`, {
                                    required: "Relation is Required",
                                })}

                            />
                            {errors.emergencyContacts?.[index]?.relation && <p style={{ color: "red" }}>{errors.emergencyContacts[index].relation.message}</p>}
                        </div>
                        <div>
                            <label>Phone</label>
                            <input
                                type='text'
                                {...register(`emergencyContacts.${index}.phone`, {
                                    required: "Phone Number is required",
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: "Please enter a valid 10-digit number"
                                    }
                                })}
                            />
                            {errors.emergencyContacts?.[index]?.phone && <p style={{ color: "red" }}>{errors.emergencyContacts[index].phone.message}</p>}
                        </div>
                        <button type='button' onClick={() => remove(index)} style={{ marginTop: 10, backgroundColor: "#e26d4aff", color:"white" }}>
                            Delete
                        </button>
                    </div>
                ))}
                <button type="button" onClick={() => append({ name: '', relation: '', phone: '' })}  style={{ marginBottom: 20 , backgroundColor: "#4a90e2", color:"white"}}>Add Contact</button>
                <div>
                    <button type='button' onClick={prevStep}>Previous</button>
                    <button type='submit'>Next</button>
                </div>
            </form>

        </div>
    )
}

export default EmergencyContacts