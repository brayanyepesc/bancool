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
    accounts: Account[];
}

export interface Account {
    id: number;
    accountNumber: number;
    accountType: 'saving' | 'current';
    balance: number;
    status: 'active' | 'inactive';
    createdAt: Date;
    user: User;
}