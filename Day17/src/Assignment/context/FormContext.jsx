import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const useFormData = () => useContext(FormContext);

export const FormProvider = ({children}) => {
     console.log(useFormData);
    const [formData, setFormData] = useState({

        personalData: {},
        jobData: {},
        bankData: {},
        emergencyContacts: [],
        documents: [],
    });

    return (
        <FormContext.Provider value = {{ formData, setFormData}}>
               {children}
        </FormContext.Provider>
    );
};