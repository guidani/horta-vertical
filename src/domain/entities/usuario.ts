import { Cultura } from "./cutura";
import { Horta } from "./horta";

export type Usuario = {
  nome: string;
  culturas?: Cultura[];
};
