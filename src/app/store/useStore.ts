import create from 'zustand';
import { persist } from 'zustand/middleware';
import { Store, User } from '../types/types';
import Swal from 'sweetalert2';

export const useStore = create<Store>()(
    persist(
        (set, get) => ({
            users: [],
            accounts: [],
            transactions: [],
            currentUser: null,
            isAuthenticated: false,
            saveUser: (user: User) => {
                const { users } = get();
                const userExists = users.some((u) => u.email === user.email);
                if (!userExists) {
                    set((state) => ({ users: [...state.users, user] }));
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'User already exists!',
                    });
                }
            },
            saveAccount: (account) => {
                const { accounts } = get();
                const accountExists = accounts.some((a) => a.accountNumber === account.accountNumber);
                if (accountExists) {
                    set((state) => ({
                        accounts: state.accounts.map((a) =>
                            a.accountNumber === account.accountNumber ? account : a
                        ),
                    }));
                } else {
                    set((state) => ({
                        accounts: [...state.accounts, account],
                    }));
                }
            },
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
