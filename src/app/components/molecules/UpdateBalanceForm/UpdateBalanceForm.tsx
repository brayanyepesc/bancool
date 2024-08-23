'use client'
import { useStore } from "@/app/store/useStore";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

interface UpdateBalanceInputs {
    accountNumber: number;
    typeTransaction: 'deposit' | 'withdraw' | 'transfer';
    amount: number;
}

export const UpdateBalanceForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<UpdateBalanceInputs>();
    const { currentUser, updateBalanceAccount } = useStore();
    const router = useRouter();
    const onSubmit: SubmitHandler<UpdateBalanceInputs> = async (data) => {
        updateBalanceAccount(data.accountNumber, data.amount, data.typeTransaction);
        router.push('/bank/account');
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mt-10 space-y-4">
            <div className="flex flex-col space-y-2">
                <label htmlFor="accountNumber" className="text-gray-500">Account number</label>
                <input type="number" {...register('accountNumber', { required: 'Number account is required' })} id="accountNumber" defaultValue={currentUser?.account?.accountNumber} className="p-2 border border-gray-200 rounded-lg outline-indigo-500" />
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="" className="text-sm font-bold text-indigo-500">Transaction</label>
                <select
                    {...register('typeTransaction', { required: 'Select a transaction type' })}
                    className="w-full p-2 rounded outline-indigo-500 border border-gray-300"
                >
                    <option value="deposit">Deposit</option>
                    <option value="withdraw">Withdraw</option>
                    <option value="transfer">Transfer</option>
                </select>
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="amount" className="text-gray-500">Amount</label>
                <input type="number" {...register('amount', { required: 'Amount is required' })} id="amount" className="p-2 border border-gray-200 rounded-lg outline-indigo-500" />
            </div>
            <button type="submit" className="mt-4 w-full p-3 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-bold">Recharge</button>
        </form>
    )
}