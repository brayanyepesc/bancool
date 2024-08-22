'use client'
import { useStore } from "@/app/store/useStore";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";

interface RechargeAccountInputs {
    accountNumber: number;
    amount: number;
}

export const RechargeForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<RechargeAccountInputs>();
    const { currentUser, rechargeAccount } = useStore();
    const router = useRouter();
    const onSubmit: SubmitHandler<RechargeAccountInputs> = async (data) => {
        rechargeAccount(data.accountNumber, data.amount);
        Swal.fire('Success', 'Recharge account successfully', 'success');
        router.push('/bank/account');
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mt-10 space-y-4">
            <div className="flex flex-col space-y-2">
                <label htmlFor="accountNumber" className="text-gray-500">Account number</label>
                <input type="number" {...register('accountNumber', { required: 'Number account is required' })} id="accountNumber" value={currentUser?.account?.accountNumber} className="p-2 border border-gray-200 rounded-lg outline-indigo-500" />
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="amount" className="text-gray-500">Amount</label>
                <input type="number" {...register('amount', { required: 'Amount is required' })} id="amount" className="p-2 border border-gray-200 rounded-lg outline-indigo-500" />
            </div>
            <button type="submit" className="mt-4 w-full p-3 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-bold">Recharge</button>
        </form>
    )
}