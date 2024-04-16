import { createContext, useContext } from "react";
import monthlyDealsData from "../data/monthlyDeals.json";

type IdContextProps = {
  id: number[];
};

type IdContextProviderProps = {
  children: React.ReactNode;
};
const IdContext = createContext({ id: [] } as IdContextProps);
const id = monthlyDealsData.map((item) => item.id);
export const useIdContext = () => useContext(IdContext);

const IdContextProvider = ({ children }: IdContextProviderProps) => {
  return <IdContext.Provider value={{ id }}>{children}</IdContext.Provider>;
};

export default IdContextProvider;
