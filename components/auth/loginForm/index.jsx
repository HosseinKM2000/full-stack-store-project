'use client'
import { useForm } from 'react-hook-form';
import Link from 'next/link';

const LoginForm = () => {

    const {
        register,
        handleSubmit,
        formState:{errors},
        watch,
    } = useForm({});

    const formSubmiter = () => {
        const formData = {
            email:watch('email'),
            password:watch('password'),
        }
        console.log(formData)
    }

    return (
        <section className='flex flex-col gap-5 justify-center items-center w-[30%]'>
        <div className='flex items-center gap-3'>
          <h1 className='text-2xl font-bold text-blue-500 border-l-2 px-2 border-gray-500'>ورود به حساب کاربری</h1>
          <Link href={'/register'} className='px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white transition-all rounded-md'><button type='button'>ثبت نام</button></Link>
        </div>
        <form onSubmit={handleSubmit(formSubmiter)} className='w-full justify-center items-center gap-10 px-2 py-10 flex rounded-md flex-col bg-white shadow-[0px_0px_3px_rgba(0,0,0,0.5)]'>
            <div className='flex flex-col gap-1 items-start justify-center'>
                <input 
                type="email"
                autoComplete='email'
                placeholder='ایمیل'
                className='outline-none rounded-md w-[15rem] p-1 border-1 border-zinc-400 transition-all focus:border-orange-400'
                {
                    ...register('email', {
                        required:true,
                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        minLength:11,
                    })
                }
                />
                {
                errors.email && errors.email.type === 'required' && (
                    <span className='text-sm text-red-700'>لطفاایمیل وارد کنید</span>
                )
                }
                {
                errors.email && errors.email.type === 'pattern' && (
                    <span className='text-sm text-red-700'>فرمت ایمیل صحیح نیست</span>
                )
                }
                {
                errors.email && errors.email.type === 'minLength' && (
                    <span className='text-sm text-red-700'>ایمیل کوتاه است</span>
                )
                }
            </div>
            <div className='flex flex-col gap-1 items-start justify-center'>
                <input 
                type="password"
                autoComplete='off'
                placeholder='رمز عبور'
                className='outline-none rounded-md w-[15rem] p-1 border border-1 border-zinc-400 transition-all focus:border-orange-400'
                {
                    ...register('password', {
                        required:true,
                        maxLength:20,
                        minLength:8,
                    })
                }
                />
                {
                errors.password && errors.password.type === 'required' && (
                    <span className='text-sm text-red-700'>لطفا رمز عبور وارد کنید</span>
                )
                }
                                    {
                errors.password && errors.password.type === 'maxLength' && (
                    <span className='text-sm text-red-700'>رمز عبور باید حداکثر 20 کاراکتر باشد</span>
                )
                }
                                    {
                errors.password && errors.password.type === 'minLength' && (
                    <span className='text-sm text-red-700'>رمز عبور باید حداقل 8 کاراکتر باشد</span>
                )
                }
            </div>
            <button type='submit' className='font-bold w-[50%] bg-green-600 hover:bg-green-700 transition-all text-white px-3 py-2 rounded-lg'>ورود</button>
        </form>
    </section>
    );
}

export default LoginForm;