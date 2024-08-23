'use client'

import { useStore } from "@/app/store/useStore";
import { MoneyFormatter } from "@/app/utils/moneyFormatter";

export const AccountDetails = () => {
  const { currentUser, accounts, transactions } = useStore();
  const userAccount = accounts.find((account) => account.userId === currentUser?.id);
  const userTransactions = transactions.filter((transaction) => transaction.accountId === userAccount?.id);
  const userExpenses = userTransactions.filter((transaction) => transaction.type === ('withdraw' || 'transfer'));
  const balanceUserExpenses = userExpenses.reduce((acc, transaction) => acc + transaction.amount, 0);
  const balance = userAccount?.balance || 0;
  return (
    <div className="grid grid-cols-2 gap-4 w-full place-items-center">
      <div className="w-full h-44 bg-gray-100 rounded shadow-lg flex flex-col justify-center items-center space-y-2">
        <span className="text-sm font-bold text-gray-500">Balance</span>
        <p className="text-indigo-500 font-bold text-5xl">${MoneyFormatter(balance)}</p>
      </div>
      <div className="w-full h-44 bg-gray-100 rounded shadow-lg flex flex-col justify-center items-center space-y-2">
        <span className="text-sm font-bold text-gray-500">Expenses</span>
        <p className="text-indigo-500 font-bold text-5xl">${MoneyFormatter(balanceUserExpenses)}</p>
      </div>
      <div className="w-full h-44 bg-gray-100 rounded shadow-lg flex flex-col justify-center items-center space-y-2">
        <span className="text-sm font-bold text-gray-500">Transactions</span>
        <p className="text-indigo-500 font-bold text-5xl">{userTransactions.length}</p>
      </div>
      <div className="w-full h-44 bg-gray-100 rounded shadow-lg flex flex-col justify-center items-center space-y-2">
        <span className="text-sm font-bold text-gray-500">Credits</span>
        <p className="text-indigo-500 font-bold text-5xl">0</p>
      </div>
    </div>
  )
}