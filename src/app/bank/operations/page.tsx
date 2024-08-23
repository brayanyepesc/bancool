import { UpdateBalanceForm } from "@/app/components/molecules";

export default function OperationsPage() {
    return (
        <div className="flex flex-col items-center w-full p-10">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 text-5xl font-bold">Bancool</h2>
            <p className="text-xl font-bold text-gray-600">Welcome to the best digital bank</p>
            <p className="text-gray-500">Here, you can update your balance account using multiple transactions</p>
            <UpdateBalanceForm />
        </div>
    )
}