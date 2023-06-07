import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface CadastroState {
  isAuthenticated: boolean;
  updateIsAuthenticated: () => void;
}

export const useAuthStore = create<CadastroState>()(
  devtools(
    persist(
      (set) => ({
        isAuthenticated: false,
        updateIsAuthenticated: () =>
          set((state) => ({ isAuthenticated: !state.isAuthenticated })),
      }),
      {
        name: "auth-storage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
