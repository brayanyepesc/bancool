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
                    userTransactions.map(({ createdAt, amount, type, id }) => (
                        <tr key={id}>
                            <td>{new Date(createdAt).toLocaleDateString('es-ES')}</td>
                            <td>{amount}</td>
                            <td>{type}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}