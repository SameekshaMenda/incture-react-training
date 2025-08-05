import './App.css'
import PersonalData from './Assignment/component/PersonalData'
import JobData from './Assignment/component/JobData'
import BankData from './Assignment/component/BankData'
import EmergencyContacts from './Assignment/component/EmergencyContacts'
import Document from './Assignment/component/Document'
import { ReviewSubmit } from './Assignment/component/ReviewSubmit'
import { FormProvider } from './Assignment/context/FormContext'
import { useState } from 'react'
function App() {

  const [step, setStep] = useState(1);

  const nextStep = () => {setStep( prev => prev + 1)};
  const prevStep = () => {setStep( prev => prev - 1)};
  return (
      <FormProvider>
    <div className='app-container'>
        <h2>Enterprise Employee Onboarding System</h2>
        {step === 1 && <PersonalData nextStep={nextStep} />}
        {step === 2 && <JobData nextStep={nextStep} prevStep={prevStep}/>}
        {step === 3 && <BankData nextStep={nextStep} prevStep={prevStep}/>}
        {step === 4 && <EmergencyContacts nextStep={nextStep} prevStep={prevStep}/>}
        {step === 5 && <Document nextStep={nextStep} prevStep={prevStep}/>}
        {step === 6 && <ReviewSubmit nextStep={nextStep} prevStep={prevStep} setStep={setStep}/>}
    </div>
      </FormProvider>
  )
}

export default App
