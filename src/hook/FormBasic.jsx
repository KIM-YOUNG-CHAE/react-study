import React from 'react';
import { useForm } from 'react-hook-form';

const FormBasic = () => {
    
    const {
        register, handleSubmit, getValues, formState:{isSubmitting, errors}
    } = useForm({mode: "onChange"})

    const submit = handleSubmit(async (data) => {
        console.log(data)
    })

    return (
        <form onSubmit={submit}>
            <input 
            type="text"
            placeholder="이름"
            {...register("name")} 
            />
             <input 
            type="text"
            placeholder="나이"
            {...register("age")} 
            />
            <button disabled={isSubmitting}>회원가입</button>
        </form>
    );
};

export default FormBasic;