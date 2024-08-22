'use client'
import { useStore } from "@/app/store/useStore";
import { RegisterFormInputs } from "@/app/types/types";
import { createUser } from "@/app/utils/createUser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

export const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormInputs>();
    const { users, accounts, saveUser, saveAccount } = useStore();
    const router = useRouter();
    const onSubmit: SubmitHandler<RegisterFormInputs> = (data) => {
        const options = { users, accounts, saveUser, saveAccount, data };
        createUser(options);
        router.push('/auth/login');
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center w-full space-y-4">
            <div className="flex justify-center items-center w-full gap-2">
                <div className="space-y-2 w-full">
                    <label htmlFor="" className="text-sm font-bold text-indigo-500">Names</label>
                    <input {...register('names', { required: 'Names is required' })} className="w-full p-1 rounded outline-indigo-500 border border-gray-300" />
                </div>
                <div className="space-y-2 w-full">
                    <label htmlFor="" className="text-sm font-bold text-indigo-500">Lastnames</label>
                    <input {...register('lastnames', { required: 'Lastnames is required' })} className="w-full p-1 rounded outline-indigo-500 border border-gray-300" />
                </div>
            </div>
            <div className="flex justify-center items-center w-full gap-2">
                <div className="space-y-2 w-full">
                    <label htmlFor="" className="text-sm font-bold text-indigo-500">Email</label>
                    <input type="email"
                        {...register('email', { required: 'Email is required' })} className="w-full p-1 rounded outline-indigo-500 border border-gray-300" />
                </div>
                <div className="space-y-2 w-full">
                    <label htmlFor="" className="text-sm font-bold text-indigo-500">Password</label>
                    <input type="password"
                        {...register('password', { required: 'Password is required' })} className="w-full p-1 rounded outline-indigo-500 border border-gray-300" />
                </div>
            </div>
            <div className="flex justify-center items-center w-full gap-2">
                <div className="space-y-2 w-full">
                    <label htmlFor="" className="text-sm font-bold text-indigo-500">Address</label>
                    <input {...register('address', { required: 'Address is required' })} className="w-full p-1 rounded outline-indigo-500 border border-gray-300" />
                </div>
                <div className="space-y-2 w-full">
                    <label htmlFor="" className="text-sm font-bold text-indigo-500">Phone</label>
                    <input {...register('phone', { required: 'Phone is required' })} className="w-full p-1 rounded outline-indigo-500 border border-gray-300" />
                </div>
            </div>
            <div className="space-y-2 w-full">
                <label htmlFor="" className="text-sm font-bold text-indigo-500">Client Type</label>
                <select
                    {...register('clientType', { required: 'Select a client type' })}
                    className="w-full p-1 rounded outline-indigo-500 border border-gray-300"
                >
                    <option value="natural">Natural</option>
                    <option value="empresa">Bussiness</option>
                </select>
            </div>
            <div className="w-full flex justify-between items-center">
                <Link href='/auth/login' className="text-sm text-gray-600 hover:text-indigo-500">Login</Link>
                <Link href='/' className="text-sm text-gray-600 hover:text-indigo-500">Forgot your password?</Link>
            </div>
            <button type="submit" className="p-2 rounded w-full text-white bg-gradient-to-r from-indigo-500 to-pink-500 font-bold">Register</button>
        </form>
    )
}