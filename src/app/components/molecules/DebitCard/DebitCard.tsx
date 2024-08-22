'use client'
import { useStore } from "@/app/store/useStore";
import { formatDebitCardNumber } from "@/app/utils/formatDebitCardNumber";
import { CreditCard } from "lucide-react";

export const DebitCard = () => {
    const { currentUser } = useStore();
    const fullName = currentUser?.names + ' ' + currentUser?.lastnames;
    return (
        <div className="bg-black h-96 shadow-lg rounded-md bg-gradient-to-tr from-indigo-500 to-pink-500 p-5 transition-all">
            <div className="rounded w-full h-full p-5 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                    <CreditCard className="text-white text-4xl" />
                    <p className="text-white text-2xl">Debit Card</p>
                </div>
                <div>
                    <span className="text-white font-bold text-xs">Card Number</span>
                    <p className="text-xl font-bold text-white mt-2">{formatDebitCardNumber(currentUser?.account.accountNumber)}</p>
                    <div className="flex justify-between items-center">
                        <p className="text-white font-bold">{fullName}</p>
                        <div>
                            <span className="text-white text-xs font-bold">Expiration Date</span>
                            <p className="text-white">12/23</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}