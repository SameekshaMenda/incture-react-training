import { useState, useEffect } from 'react'
function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [gender, setGender] = useState('');

  useEffect(() => {
    // localStorage.removeItem("username"); // to remove particular key else use clearItem() to remove all
    const savedName = sessionStorage.getItem("username");
    const savedEmail = sessionStorage.getItem("email"); 
    const savedPhone = sessionStorage.getItem("phone"); 
    const savedGender = sessionStorage.getItem("gender");   
    if (savedName && savedEmail && savedPhone && savedGender) {
      setName(savedName);
      setEmail(savedEmail);
      setPhone(savedPhone);
      setGender(savedGender); 
    }
  }, [])

  const handleNameChange = (event) => {
    setName(event.target.value);
    sessionStorage.setItem("username", event.target.value);
  }
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    sessionStorage.setItem("email", event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    sessionStorage.setItem("phone", event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
    if(event.target.checked) {
    sessionStorage.setItem("gender", event.target.value);
    }

  };
  return (
    <div>
      <h1>Welcome :{name || "Guest"} </h1>
      <form>
        <input type='text' value={name} placeholder='Enter Name' onChange={handleNameChange}/>
        <input type='email' value={email} placeholder='Enter Email' onChange={handleEmailChange}/>
        <input type='number' value={phone} placeholder='Enter Contact no.'onChange={handlePhoneChange}/>
        <label>
          <input
            type="checkbox"
            name="male"
            checked={gender.male}
            onChange={handleGenderChange}/>
          Male
        </label>
        <label>
          <input
            type="checkbox"
            name="female"
            checked={gender.female}
            onChange={handleGenderChange}/>
          Female
        </label>
        <label>
          <input
            type="checkbox"
            name="other"
            checked={gender.other}
            onChange={handleGenderChange}/>
          Other
        </label>
        <input type='checklist' />

      </form>
    </div>
  )
}

export default App