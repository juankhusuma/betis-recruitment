import { createContext, Dispatch, SetStateAction } from "react";
import { Datum } from "../interfaces/get-roti";

interface Ctx {
  data: Datum[];
  setData: Dispatch<SetStateAction<Datum[]>> | (() => any);
}

export const DataContext = createContext<Ctx>({
  data: [],
  setData: () => {},
});
