export interface User {
    id: number;
    names: string;
    lastnames: string;
    email: string;
    password: string;
    address: string;
    phone: string;
    clientType: 'natural' | 'juridical';
    createdAt: Date;
    status: 'active' | 'inactive';
    account: Account;
}

export interface Account {
    id: number;
    userId: number;
    accountNumber: number;
    accountType: 'saving' | 'current';
    balance: number;
    status: 'active' | 'inactive';
    createdAt: Date;
}

export interface Transaction {
    id: number;
    amount: number;
    type: 'deposit' | 'withdraw';
    createdAt: Date;
    account: Account;
}

export interface Store {
    users: User[];
    accounts: Account[];
    transactions: Transaction[];
    currentUser: User | null;
    saveUser: (user: User) => void;
    saveAccount: (account: Account) => void;
}

export interface RegisterFormInputs {
    names: string;
    lastnames: string;
    email: string;
    password: string;
    address: string;
    phone: string;
    clientType: 'natural' | 'juridical';
}