import React from "react";
import useFetch from "../hooks/useFetch";

type IData = {
  loading: boolean;
  error: string | null;
  data: ISale[] | null;
  inicio: string;
  final: string;
  setInicio: React.Dispatch<React.SetStateAction<string>>;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
}

export type ISale = {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "pix" | "cartao";
  data: string;
  parcelas: number | null;
}

const DataContext = React.createContext<IData | null>(null);

export const useData = () => {
  const context = React.useContext(DataContext)
  if (!context) throw new Error('useData precisa estar em dataContextProvider');
  return context;
}

function getDate(n: number) {
  const date = new Date();
  date.setDate(date.getDate() - n)
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = String(date.getFullYear());
  return `${yyyy}-${mm}-${dd}`
}

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [inicio, setInicio] = React.useState(getDate(14))
  const [final, setFinal] = React.useState(getDate(0))
  const { data, loading, error } = useFetch<ISale[]>(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`);

  return <DataContext.Provider value={{ data, loading, error, inicio, setInicio, final, setFinal, }}>{children}</DataContext.Provider>
}