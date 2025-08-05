import React, { useState } from 'react';
import { useFormData } from '../context/FormContext';

export const ReviewSubmit = ({ prevStep, setStep }) => {
  const { formData } = useFormData();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();


    const isComplete =
      formData.personalData &&
      formData.jobData &&
      formData.bankData &&
      Array.isArray(formData.emergencyContacts?.emergencyContacts) &&
      formData.emergencyContacts.emergencyContacts.length > 0 &&
      Array.isArray(formData.documents) &&
      formData.documents.length > 0;


    if (!isComplete) {
      alert('Please complete all steps before submitting.');
      return;
    }

    setSubmitted(true);
    console.log('Submitted Data:', formData);
  };

  const { personalData, jobData, bankData, emergencyContacts, documents } = formData;

  if (submitted) {
    return (
      <div className="main-container">
        <div className="form-container">
          <h3>Submission Successful!</h3>
          <h4>Thank you for submitting the onboarding form.</h4>
        </div>
      </div>
    );
  }

  return (
    <div className="main-container">
      <form className="form-container" onSubmit={onSubmit}>
        <h3>Review & Submit</h3>


        <details open>
          <summary><strong>Personal Details</strong></summary>
          <p><strong>Name:</strong> {personalData?.name}</p>
          <p><strong>Email:</strong> {personalData?.email}</p>
          <p><strong>Phone:</strong> {personalData?.phone}</p>
          <button type="button" onClick={() => setStep(1)}>Edit</button>
        </details>


        <details>
          <summary><strong>Job Details</strong></summary>
          <p><strong>ID:</strong> {jobData?.ID}</p>
          <p><strong>Department:</strong> {jobData?.department}</p>
          <p><strong>Designation:</strong> {jobData?.designation}</p>
          <p><strong>Joining Date:</strong> {jobData?.joiningDate}</p>
          <p><strong>Location:</strong> {jobData?.location}</p>
          <button type="button" onClick={() => setStep(2)}>Edit</button>
        </details>


        <details>
          <summary><strong>Bank Details</strong></summary>
          <p><strong>Account No:</strong> {bankData?.AccountNo}</p>
          <p><strong>IFSC:</strong> {bankData?.IFSC}</p>
          <p><strong>PAN No:</strong> {bankData?.PanNo}</p>
          <p><strong>UPI:</strong> {bankData?.UPI}</p>
          <button type="button" onClick={() => setStep(3)}>Edit</button>
        </details>


        <details>
          <summary><strong>Emergency Contacts</strong></summary>
          {emergencyContacts?.emergencyContacts?.map((contact, index) => (
            <div key={index}>
              <p><strong>Name:</strong> {contact.name}</p>
              <p><strong>Relation:</strong> {contact.relation}</p>
              <p><strong>Phone:</strong> {contact.phone}</p>
              <hr />
            </div>
          ))}
          <button type="button" onClick={() => setStep(4)}>Edit</button>
        </details>


        <details>
          <summary><strong>Uploaded Documents</strong></summary>
          {Array.isArray(documents) && documents.map((doc, index) => (
            <div key={index}>
              <p><strong>Document:</strong> {doc.docName}</p>
              <p><strong>File:</strong> {doc.file?.[0]?.name}</p>
              <hr />
            </div>
          ))}
          <button type="button" onClick={() => setStep(5)}>Edit</button>
        </details>


        <div style={{ marginTop: '20px' }}>
          <button type="button" onClick={prevStep}>Back</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
