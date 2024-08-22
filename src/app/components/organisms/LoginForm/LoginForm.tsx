'use client'
import { useStore } from '@/app/store/useStore';
import { LoginFormInputs } from '@/app/types/types';
import { loginUser } from '@/app/utils/loginUser';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
    const { users, setCurrentUser, changeStatusAuthentication } = useStore();
    const router = useRouter();
    const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
        const options = { users, data, setCurrentUser, changeStatusAuthentication };
        const user = loginUser(options);
        if (!user) return;
        router.push('/bank/account');
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center w-full space-y-4">
            <div className="space-y-2 w-full">
                <label htmlFor="" className="text-sm font-bold text-indigo-500">Email</label>
                <input
                    type="email"
                    {...register('email', { required: 'Email es requerido' })}
                    className="w-full p-1 border border-gray-300 rounded-md mt-1 outline-indigo-500"
                />
            </div>
            <div className="space-y-2 w-full">
                <label htmlFor="" className="text-sm font-bold text-indigo-500">Password</label>
                <input
                    type="password"
                    {...register('password', { required: 'Contraseña es requerida' })}
                    className="w-full p-1 border border-gray-300 rounded-md mt-1 outline-indigo-500"
                />
            </div>
            <div className="w-full flex justify-between items-center">
                <Link href='/auth/register' className="text-sm text-gray-600 hover:text-indigo-500">Register</Link>
                <Link href='/' className="text-sm text-gray-600 hover:text-indigo-500">Forgot your password?</Link>
            </div>
            <button type='submit' className="p-2 rounded -md w-full text-white bg-gradient-to-r from-indigo-500 to-pink-500 font-bold">Login</button>
        </form>
    )
}