import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Cultura } from "../domain/entities/cutura";
import { Usuario } from "../domain/entities/usuario";

interface CadastroState {
  cadastro: Usuario;
  adicionar_horta: (cultura: Cultura) => void;
}

export const useCadastroStore = create<CadastroState>()(
  devtools(
    persist(
      (set) => ({
        cadastro: {
          nome: "",
          hortas: [],
        },
          adicionar_horta: (cultura: Cultura) => 
            set((state) => ({
               cadastro: {
                ...state.cadastro,
                hortas: [
                  ...state.cadastro.hortas, 
                  {culturas: [cultura], nome: "new-"}
                ]
               }
              }))
      }),
      {
        name: "cadastro-storage",
      }
    )
  )
);