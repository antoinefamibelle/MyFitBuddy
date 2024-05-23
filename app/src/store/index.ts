import { UserAuthRo, UserRo } from '@/lib/types';
import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

interface SportyState {
    user: UserAuthRo | null;
    setUser: (user: UserAuthRo | null) => void;
}

export const useSportyStore = create<SportyState>()(
    devtools(
        persist(
            (set, get) => ({
                user: null,
                setUser: (user: UserAuthRo | null) => set({ user })
            }),
            {
                name: 'sporty',
            }
        ),
    ),
);