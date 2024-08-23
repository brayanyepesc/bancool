import create from 'zustand';
import { persist } from 'zustand/middleware';
import { Store, User } from '../types/types';
import Swal from 'sweetalert2';
import { showAlert } from '../utils/showAlert';

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
                    showAlert({ type: 'success', title: 'Success', message: 'User created successfully!' });
                } else {
                    showAlert({ type: 'error', title: 'Error', message: 'User already exists!' });
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
            updateBalanceAccount(accountNumber, amount, typeTransaction) {
                const { accounts, transactions, saveAccount, saveTransaction, currentUser } = get();
                let newBalance;
                if (typeTransaction === 'deposit') {
                    const account = accounts.find((account) => Number(account.accountNumber) === Number(accountNumber));
                    if (account) {
                        newBalance = account.balance + Number(amount);
                        account.balance = Number(newBalance);
                        saveAccount(account);
                        saveTransaction({
                            id: transactions.length + 1,
                            amount: Number(amount),
                            type: 'deposit',
                            createdAt: new Date(),
                            accountId: account.id,
                        });
                        showAlert({ type: 'success', title: 'Success', message: 'Deposit was successfully!' });
                    }
                }
                if (typeTransaction === 'withdraw') {
                    const account = accounts.find((account) => Number(account.accountNumber) === Number(accountNumber));
                    if (account) {
                        newBalance = account.balance - Number(amount);
                        if (newBalance >= 0) {
                            account.balance = Number(newBalance);
                            saveAccount(account);
                            saveTransaction({
                                id: transactions.length + 1,
                                amount: Number(amount),
                                type: 'withdraw',
                                createdAt: new Date(),
                                accountId: account.id,
                            });
                            const codeWithdraw = Math.floor(Math.random() * 1000000);
                            showAlert({ type: 'success', title: 'Success', message: `Withdraw successfully, your code is ${codeWithdraw}` });
                        } else {
                            showAlert({ type: 'error', title: 'Error', message: 'Insufficient Funds' });
                        }
                    }
                }
                if (typeTransaction === 'transfer') {
                    const accountOrigin = accounts.find((account) => account.userId === currentUser?.id);
                    const accountDestination = accounts.find((account) => Number(account.accountNumber) === Number(accountNumber));
                    if (accountOrigin && accountDestination) {
                        if (accountOrigin.balance >= Number(amount)) {
                            accountOrigin.balance -= Number(amount);
                            accountDestination.balance += Number(amount);
                            saveAccount(accountOrigin);
                            saveAccount(accountDestination);
                            saveTransaction({
                                id: transactions.length + 1,
                                amount: Number(amount),
                                type: 'transfer',
                                createdAt: new Date(),
                                accountId: accountOrigin.id,
                            });
                            saveTransaction({
                                id: transactions.length + 1,
                                amount: Number(amount),
                                type: 'transfer',
                                createdAt: new Date(),
                                accountId: accountDestination.id,
                            });
                            showAlert({ type: 'success', title: 'Success', message: 'Transfer successfully' });
                        } else {
                            showAlert({ type: 'error', title: 'Error', message: 'Insufficient Funds' });
                        }
                    } else {
                        showAlert({ type: 'error', title: 'Error', message: 'Account not found' });
                    }
                }
            },
        }),
        {
            name: 'store',
        }
    )
);
