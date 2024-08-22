import create from 'zustand';
import { persist } from 'zustand/middleware';
import { Store } from '../types/types';

export const useStore = create<Store>()(
    persist(
        (set, get) => ({
            users: [],
            accounts: [],
            transactions: [],
            currentUser: null,
            isAuthenticated: false,
            saveUser: (user) => set((state) => ({ users: [...state.users, user] })),
            saveAccount: (account) => set((state) => ({ accounts: [...state.accounts, account] })),
            saveTransaction: (transaction) => set((state) => ({ transactions: [...state.transactions, transaction] })),
            setCurrentUser: (user) => set((state) => ({ currentUser: user })),
            changeStatusAuthentication: (status) => set((state) => ({ isAuthenticated: status })),
            logout: () => set((state) => ({ currentUser: null, isAuthenticated: false })),
            rechargeAccount(accountNumber, amount) {
                const { accounts, transactions, saveAccount, saveTransaction } = get();
                const account = accounts.find((account) => Number(account.accountNumber) === Number(accountNumber));
                if (account) {
                    const newBalance = account.balance + Number(amount);
                    account.balance = Number(newBalance);
                    saveAccount(account);
                    saveTransaction({
                        id: transactions.length + 1,
                        amount: Number(amount),
                        type: 'deposit',
                        createdAt: new Date(),
                        accountId: account.id,
                    });
                }
            },
        }),
        {
            name: 'store',
        }
    )
);
