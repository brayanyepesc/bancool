import create from 'zustand';
import { persist } from 'zustand/middleware';
import { Store } from '../types/types';

export const useStore = create<Store>()(
    persist(
        (set) => ({
            users: [],
            accounts: [],
            transactions: [],
            currentUser: null,
            saveUser: (user) => set((state) => ({ users: [...state.users, user] })),
            saveAccount: (account) => set((state) => ({ accounts: [...state.accounts, account] })),
            setCurrentUser: (user) => set((state) => ({ currentUser: user })),
        }),
        {
            name: 'store',
        }
    )
);
