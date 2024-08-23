import { BankHeader, UpdateBalanceForm } from "@/app/components/molecules";

export default function OperationsPage() {
    return (
        <div className="flex flex-col items-center w-full p-10">
            <BankHeader title="Welcome to the best digital bank" description="Here, you can update your balance account using multiple transactions" />
            <UpdateBalanceForm />
        </div>
    )
}