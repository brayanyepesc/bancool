'use client'

import { useStore } from "@/app/store/useStore"

export const TransactionsTable = () => {
    const { currentUser, transactions } = useStore()
    const userTransactions = transactions.filter(transaction => transaction.accountId === currentUser?.account.id)
    return (
        <table className="w-full text-center">
            <thead>
                <tr>
                    <th className="text-gray-500">Date</th>
                    <th className="text-gray-500">Amount</th>
                    <th className="text-gray-500">Transaction Type</th>
                </tr>
            </thead>
            <tbody>
                {
                    userTransactions.map(transaction => (
                        <tr>
                            <td>2021-09-01</td>
                            <td>Payment</td>
                            <td>-$100.00</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}