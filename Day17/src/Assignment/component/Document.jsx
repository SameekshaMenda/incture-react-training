import React from 'react'
import { useFormData } from '../context/FormContext'
import { useForm } from 'react-hook-form'
import { useFieldArray } from 'react-hook-form';

function Document({ nextStep, prevStep }) {
    const { formData, setFormData } = useFormData();

    const {
        register,
        control,
        watch,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        setFormData({ ...formData, documents: data.documents });
        nextStep();
    }

    const { fields, append, remove } = useFieldArray({
        control,
        name: "Document"
    });
    
    const documents = watch('documents');

    return (
        <div className='main-container'>

            <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
                <h3>Documents to Upload</h3>

                {fields.map((field, index) => (
                    <div
                        key={field.id}
                        style={{ border: '1px solid #ccc', marginBottom: 10, padding: 10 }}
                    >
                        <div>
                            <label>Document Name</label>
                            <input
                                type='text'
                                {...register(`documents.${index}.docName`, {
                                    required: 'Document name is required',
                                })}
                            />
                            {errors.documents?.[index]?.docName && (
                                <p style={{ color: 'red' }}>
                                    {errors.documents[index].docName.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label>Upload File</label>
                            <input
                                type='file'
                                accept='application/pdf'
                                {...register(`documents.${index}.file`, {
                                    required: 'Document file is required',
                                    validate: {
                                        validFileType: (files) =>
                                            files?.[0]?.type === 'application/pdf' || 'Only PDF files are allowed',
                                    }
                                })}
                            />
                            {errors.documents?.[index]?.file && 
                                <p style={{ color: 'red' }}>
                                    {errors.documents[index].file.message}
                                </p>
                            }

                            {documents?.[index]?.file?.[0] && 
                                <p style={{ marginTop: '5px' }}>
                                    <strong>Selected:</strong> {documents[index].file[0].name}
                                </p>
                            }
                        </div>

                        <button type='button' onClick={() => remove(index)} style={{ marginTop: 10, backgroundColor: "#e26d4aff", color:"white" }}>
                            Delete
                        </button>
                    </div>
                ))}

                 {fields.length < 5 && 
                    <button
                        className='btn'
                        type='button'
                        onClick={() => append({ docName: '', file: null })}
                        style={{ marginBottom: 20 , backgroundColor: "#4a90e2", color:"white"}}
                    >
                        Add Document
                    </button>
                }
                <div style={{ marginTop: 20 }}>
                    <button type='button' onClick={prevStep}>Previous</button>
                    <button type='submit'>Next</button>
                </div>
            </form>

        </div>
    )
}

export default Document