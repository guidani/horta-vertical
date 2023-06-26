import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { Cultura } from "../domain/entities/cutura";
import { Usuario } from "../domain/entities/usuario";
import firestore from "@react-native-firebase/firestore";

interface CadastroState {
  cadastro: Usuario;
  adicionar_cultura: (cultura: Cultura) => Promise<void>;
  update_name: (novoNome: string) => void;
  remover_cultura: (id: string) => void;
  atualizar_cultura: (id: string, novosDados: Cultura) => void;
}

export const useCadastroStore = create<CadastroState>()(
  devtools(
    persist(
      (set) => ({
        cadastro: {
          id: Math.random().toString(),
          nome: "",
          culturas: [],
        },
        adicionar_cultura: async (cultura: Cultura) =>
          // buscar dados no banco de dados e adicionar
          // https://github.com/pmndrs/zustand#async-actions
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
        //
        remover_cultura: (id: string) =>
          set((state) => ({
            cadastro: {
              ...state.cadastro,
              culturas: state.cadastro.culturas.filter(
                (cultura) => cultura.id !== id
              ),
            },
          })),
        //
        atualizar_cultura: (id: string, novosDados: Cultura) =>
          set((state) => ({
            cadastro: {
              ...state.cadastro,
              culturas: state.cadastro.culturas.map((cult) =>
                cult.id === id ? novosDados : cult
              ),
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
