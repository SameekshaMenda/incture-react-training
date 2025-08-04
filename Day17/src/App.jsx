import './App.css'
import PersonalData from './Assignment/PersonalData'
import JobData from './Assignment/JobData'
import BankData from './Assignment/BankData'
import EmergencyContacts from './Assignment/EmergencyContacts'
import { FormProvider } from './Assignment/context/FormContext'
import { useState } from 'react'
function App() {

  const [step, setStep] = useState(4);

  const nextStep = () => {setStep( prev => prev + 1)};
  const prevStep = () => {setStep( prev => prev - 1)};
  return (
      <FormProvider>
        <h2>Enterprise Employee Onboarding System</h2>
    <div>
        {step === 1 && <PersonalData nextStep={nextStep}/>}
        {step === 2 && <JobData nextStep={nextStep} prevStep={{prevStep}}/>}
        {step === 3 && <BankData nextStep={nextStep} prevStep={{prevStep}}/>}
        {step === 4 && <EmergencyContacts nextStep={nextStep} prevStep={{prevStep}}/>}
    </div>
      </FormProvider>
  )
}

export default App
