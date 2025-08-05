import React from 'react'
import { useFormData } from '../context/FormContext'
import { useForm } from 'react-hook-form';
function BankData({ nextStep, prevStep }) {

    const { formData, setFormData } = useFormData();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        setFormData({ ...formData, bankData: data });
        nextStep();
    }

    return (
        <div className='main-container'>

            <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
                <h3>Bank Details</h3>

                <div>
                    <label>Bank Account No.</label>
                    <input
                        type='number'
                        {...register("AccountNo", {
                            required: "Bank detail is required",
                            pattern: {
                                value: /^[0-9]{9,18}$/,
                                message: "Invalid Format"
                            }
                        })} />
                    {errors.AccountNo && <p style={{ color: "red" }}>{errors.AccountNo.message}</p>}
                </div>

                <div>
                    <label>IFSC Code</label>
                    <input
                        type='text'
                        {...register("IFSC", {
                            required: "Please enter the details",
                            pattern: {
                                value: /^[A-Z]{4}0[A-Z0-9]{6}$/,
                                message: "Invalid Format"
                            }
                        })} />
                    {errors.IFSC && <p style={{ color: "red" }}>{errors.IFSC.message}</p>}
                </div>


                <div>
                    <label>Pan Number</label>
                    <input type='text' {...register("PanNo", {
                        required: "Please enter the details",
                        pattern: {
                            value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
                            message: "Invalid Format"
                        }
                    })} />
                    {errors.PanNo && <p style={{ color: "red" }}>{errors.PanNo.message}</p>}
                </div>

                <div>
                    <label>UPI ID</label>
                    <input type='text' {...register("UPI", {
                        required: "Please enter the details",
                        pattern: {
                            value: /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/,
                            message: "Invalid Format"
                        }
                    })} />
                    {errors.UPI && <p style={{ color: "red" }}>{errors.UPI.message}</p>}
                </div>


                <div>
                    <button onClick={prevStep} type='Next'>Previous</button>
                    <button type='submit'>Next</button>
                </div>
            </form>

        </div>
    )
}

export default BankData