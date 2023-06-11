import { Cultura } from "./cutura";

export type Usuario = {
  id: string;
  nome: string;
  culturas?: Cultura[];
};
