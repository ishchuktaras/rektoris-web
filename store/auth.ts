import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { User } from '@/types/types'
import { logout } from '@/actions/auth'

// User type remains the same as in the previous implementation

// Session data type
export interface SessionData {
  user: User;
  accessToken: string;
  refreshToken: string;
}
// Store interface
interface userSessionStore {
  user: User | null;
  setUser: (userData: User) => Promise<void>;
  clearSession: () => Promise<void>;
}

// Create Zustand store with persistence
export const useUserSession = create<userSessionStore>()(
  persist(
    (set) => ({
      user: null,
      // Methods to set user session via serrver actions
      setUser: async (userData) => {
        try {    
          // Set user data in local store
          set({ user: userData });   
        } catch (error) {
          console.error("Chyba při vytváření relace", error);
          // Optionally handle error (e.g. show notification)
        }
      },
      // Method to clear session via server action
      clearSession: async () => {
        try {
          // Call logout server action
          const result = await logout();

          if (result.success) {
            // Reset user in local store
            set({ user: null });
          } else {
            throw new Error("Odhlášení se nezdařilo");
          }
        } catch (error) {
          console.error("Chyba vymazání relace", error);
          // Optionally handle error (e.g. show notification)
        }
      },
    }),
    { name: "user-session",
      partialize: (state) => ({ user: state.user }),
    }
  )
);