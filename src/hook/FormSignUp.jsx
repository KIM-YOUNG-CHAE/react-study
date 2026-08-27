import React from 'react';
import { useForm } from 'react-hook-form';

const FormSignUp = () => {
   const {
        register, handleSubmit, getValues,
        formState : {isSubmitting, errors}
    } = useForm({mode: "onChange"})

    const submit = handleSubmit(async ({email, password, hobbies, ...others}) => {
        console.log(email, password, hobbies)
    })

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

    return (
        <form onSubmit={submit}>
            <label>
                <p>이메일</p>
                <input 
                    type="text" 
                    placeholder='아이디를 입력하세요'
                    {...register("email", {
                        required: true,
                        pattern: {
                            value: emailRegex
                        }
                    })}
                />
                {errors && errors?.email?.type === "required" && (
                    <p>이메일을 입력해주세요.</p>
                )}
                {errors && errors?.email?.type === "pattern" && (
                    <p>이메일 양식에 맞게 입력해주세요.</p>
                )}
            </label>
            
            <label>
                <p>비밀번호</p>
                <input 
                    type="password"
                    placeholder='비밀번호를 입력하세요.'
                    {...register("password", {
                        required: true,
                        pattern: {
                            value: passwordRegex
                        }
                    })} 
                />
                {errors && errors?.password?.type === "required" && (
                    <p>비밀번호를 입력해주세요.</p>
                )}
                {errors && errors?.password?.type === "pattern" && (
                    <p>소문자, 숫자, 특수문자를 각 하나씩 포함한 8자리 이상이여야 합니다.</p>
                )}
            </label>
            <label>
                <p>비밀번호 확인</p>
                <input 
                    type="password"
                    placeholder='비밀번호를 입력하세요.'
                    {...register("passwordConfirm", {
                        required: true,
                        validate: (passwordConfirm) => {
                            const {password} = getValues()
                            return password === passwordConfirm
                        }
                    })} 
                />
                {errors && errors?.passwordConfirm && (
                    <p>비밀번호가 일치하지 않습니다.</p>
                )}
        
            </label>
            <div>
                <p>취미 목록 선택</p>
                <label>
                    <span>축구</span>
                    <input 
                        type="checkbox"
                        value="footBall"
                        {...register("hobbies")}
                    />
                </label>
                <label>
                    <span>농구</span>
                    <input 
                        type="checkbox"
                        value="basketBall"
                        {...register("hobbies")}
                    />
                </label>
                <label>
                    <span>야구</span>
                    <input 
                        type="checkbox"
                        value="baseBall"
                        {...register("hobbies")}
                    />
                </label>
            </div>
            

            <button disabled={isSubmitting}>회원가입</button>
        </form>
    );
};

export default FormSignUp;