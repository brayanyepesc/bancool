import Swal from "sweetalert2";
import { Account, RegisterFormInputs, User } from "../types/types";
import { generateAccountNumber } from "./generateAccountNumber";

interface Props {
    users: User[];
    accounts: Account[];
    saveUser: (user: User) => void;
    saveAccount: (account: Account) => void;
    data: RegisterFormInputs;
}

export const createUser = ({ users, accounts, saveUser, saveAccount, data }: Props) => {
    const userId = users.length + 1;
    const accountType = data.clientType === 'natural' ? 'saving' : 'current';
    const newAccount: Account = {
        id: accounts.length + 1,
        userId,
        accountNumber: generateAccountNumber(),
        accountType,
        balance: 0,
        status: 'active',
        createdAt: new Date()
    }
    const newUser: User = {
        id: userId,
        ...data,
        createdAt: new Date(),
        status: 'active',
        account: newAccount
    }
    saveUser(newUser);
    saveAccount(newAccount);
    Swal.fire({
        icon: 'success',
        title: 'User created successfully',
        text: `Now you can login with your email: ${newUser.email}`,
        timer: 2000
    })
}