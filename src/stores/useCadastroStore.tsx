import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { Cultura } from "../domain/entities/cutura";
import { Usuario } from "../domain/entities/usuario";

interface CadastroState {
  cadastro: Usuario;
  adicionar_cultura: (cultura: Cultura) => Promise<void>;
  update_name: (novoNome: string) => void;
}

export const useCadastroStore = create<CadastroState>()(
  devtools(
    persist(
      (set) => ({
        cadastro: {
          nome: "",
          culturas: [],
        },
        adicionar_cultura: async (cultura: Cultura) =>
          set((state) => ({
            cadastro: {
              ...state.cadastro,
              culturas: [...(state.cadastro.culturas || []), cultura],
            },
          })),
        update_name: (novoNome: string) =>
          set((state) => ({
            cadastro: {
              ...state.cadastro,
              nome: novoNome,
            },
          })),
      }),
      {
        name: "cadastro-storage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
