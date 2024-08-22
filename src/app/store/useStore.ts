import create from 'zustand';
import { persist } from 'zustand/middleware';
import { Store } from '../types/types';

export const useAuthStore = create<Store>()(
    persist(
        (set) => ({
            users: [],
            accounts: [],
            transactions: [],
            currentUser: null,
            createUser: (user) => set((state) => ({ users: [...state.users, user] })),
        }),
        {
            name: 'store',
        }
    )
);
