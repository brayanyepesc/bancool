import { AccountDetails, DebitCard } from "@/app/components/molecules";
import { TransactionsTable } from "@/app/components/organisms";

export default function AccountPage() {
    return (
        <section className="flex flex-col items-center w-full p-10">
            <div className="grid grid-cols-2 gap-5 w-full">
                <DebitCard />
                <AccountDetails />
            </div>
            <div className="mt-10 w-full bg-gray-50 shadow-lg rounded p-5 flex justify-center items-center">
                <TransactionsTable />
            </div>
        </section>
    )
}