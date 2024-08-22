'use client'

import { useStore } from "@/app/store/useStore";

export const AccountDetails = () => {
  const { currentUser } = useStore();
  return (
    <div className="grid grid-cols-2 gap-4 w-full place-items-center">
      <div className="w-full h-44 bg-gray-100 rounded shadow-lg flex flex-col justify-center items-center space-y-2">
        <span className="text-sm font-bold text-gray-500">Balance</span>
        <p className="text-indigo-500 font-bold text-5xl">${currentUser?.account?.balance}</p>
      </div>
      <div className="w-full h-44 bg-gray-100 rounded shadow-lg flex flex-col justify-center items-center space-y-2">
        <span className="text-sm font-bold text-gray-500">Expenses</span>
        <p className="text-indigo-500 font-bold text-5xl">$200.000</p>
      </div>
      <div className="w-full h-44 bg-gray-100 rounded shadow-lg flex flex-col justify-center items-center space-y-2">
        <span className="text-sm font-bold text-gray-500">Transactions</span>
        <p className="text-indigo-500 font-bold text-5xl">2</p>
      </div>
      <div className="w-full h-44 bg-gray-100 rounded shadow-lg flex flex-col justify-center items-center space-y-2">
        <span className="text-sm font-bold text-gray-500">Credits</span>
        <p className="text-indigo-500 font-bold text-5xl">0</p>
      </div>
    </div>
  )
}