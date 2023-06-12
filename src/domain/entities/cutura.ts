export type Cultura = {
  id: string;
  nome?: string | undefined;
  luminosidadeMinima?: number | string | undefined;
  luminosidadeMaxima?: number | string;
  temperaturaMinima?: number | string;
  temperaturaMaxima?: number | string;
  humidadeMinima?: number | string;
  humidadeMaxima?: number | string;
};
