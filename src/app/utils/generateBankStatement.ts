import { Transaction } from "../types/types";

interface Props {
    transactions: Transaction[];
}

export const generateBankStatement = ({ transactions }: Props) => {
    const bankStatement = {
        transactions,
    }
    const jsonData = new Blob([JSON.stringify(bankStatement, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(jsonData)
    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", "transactions.json")
    document.body.appendChild(link)
    link.click()
    URL.revokeObjectURL(url);
    document.body.removeChild(link);
}