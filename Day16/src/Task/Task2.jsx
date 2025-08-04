import { useForm } from 'react-hook-form'

const Task2 = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        alert("Registration Successful : " + JSON.stringify(data, null, 2));
    };

    const password = watch("password", "");

    return (
        <div style={{ maxWidth: '500px' }}>
            <h2>Registration Form :</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ marginBottom: '15px' }}>
                    <label> Name: </label>
                    <input
                        type='text'
                        {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label> Email: </label>
                    <input
                        type='text'
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid Email Format"
                            }
                        })}
                    />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label> Password: </label>
                    <input
                        type='password'
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 2,
                                message: "Password must be at least 10 characters"
                            }
                        })}
                    />
                    {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>Confirm Password: </label>
                    <input
                        type='password'
                        {...register("confirmpassword", {
                            required: "Re-Enter the password",
                            validate: value =>
                                value === password || "Passwords must match"
                        })}
                    />
                    {errors.confirmpassword && <p style={{ color: 'red' }}>{errors.confirmpassword.message}</p>}
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>Gender:</label>
                    <input
                        type='radio'
                        value='male'
                        {...register("gender", { required: "Please select your gender" })}
                    />
                    <label>Male</label>
                    <input
                        type='radio'
                        value='female'
                        {...register("gender", { required: "Please select your gender" })}
                    />
                    <label>Female</label>
                    <input
                        type='radio'
                        value='other'
                        {...register("gender", { required: "Please select your gender" })}
                    />
                    <label>Other</label>
                    {errors.gender && <div style={{ color: 'red' }}>{errors.gender.message}</div>}
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="city">City</label>
                    <br />
                    <select
                        id="city"
                        {...register("city", { required: "City is required" })}
                    >
                        <option value="">Choose a city</option>
                        <option value="Mangaluru">Mangaluru</option>
                        <option value="Bengaluru">Bengaluru</option>
                        <option value="Mysore">Mysore</option>
                        <option value="Udupi">Udupi</option>
                    </select>
                    {errors.city && <div style={{ color: 'red' }}>{errors.city.message}</div>}
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <input
                        type='checkbox'
                        {...register("terms", { required: "You must accept the terms" })}
                    />
                    <label>Agree to Terms & Conditions</label>
                    {errors.terms && <div style={{ color: 'red' }}>{errors.terms.message}</div>}
                </div>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default Task2;