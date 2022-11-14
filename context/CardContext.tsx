import { createContext, Dispatch, SetStateAction } from "react";
import { CardProps } from "../components/Card";

interface Ctx {
  openEdit: boolean;
  setOpenEdit: Dispatch<SetStateAction<boolean>> | (() => any);
  openDelete: boolean;
  setOpenDelete: Dispatch<SetStateAction<boolean>> | (() => any);
  data: CardProps | {};
  setData: Dispatch<SetStateAction<CardProps>> | (() => any);
}

export const CardContext = createContext<Ctx>({
  openEdit: false,
  openDelete: false,
  setOpenDelete: () => {},
  setOpenEdit: () => {},
  data: {},
  setData: () => {},
});
