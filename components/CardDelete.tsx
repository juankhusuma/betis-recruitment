import React, { useContext, useState } from "react";
import { CardContext } from "../context/CardContext";
import { CardProps } from "./Card";
import { DataContext } from "../context/DataContext";

const CardDelete: React.FC = () => {
  const { openDelete, openEdit, setOpenDelete, setOpenEdit, data } =
    useContext(CardContext);
  const dataCtx = useContext(DataContext);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <div
      className={`${
        openDelete ? "top-0" : "top-[1000px]"
      } bg-[#eee]/80 rounded-xl flex justify-center items-center text-center flex-col transition-all backdrop-blur-sm absolute left-0 w-full h-full`}
    >
      Apakah anda ingin menghapus data ini?
      <div className="flex justify-evenly items-center flex-col w-[100px] h-1/3">
        <button
          onClick={async () => {
            setLoading(true);
            const res = await fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/roti/${
                (data as CardProps).id
              }`,
              {
                method: "DELETE",
                headers: {
                  Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
                },
              }
            );
            setLoading(true);
            setOpenDelete(false);
            dataCtx.setData((g) =>
              g.filter((d) => (data as CardProps).id !== d.id)
            );
          }}
          className="w-full py-1 mt-10 transition-colors bg-red-400 rounded-full hover:bg-red-500 active:bg-red-600"
        >
          {loading ? "Loading..." : "Iya"}
        </button>
        <button
          className="w-full py-1 transition-colors rounded-full bg-sky-400 hover:bg-sky-500 active:bg-sky-600"
          onClick={() => {
            setOpenDelete(false);
          }}
        >
          Tidak
        </button>
      </div>
    </div>
  );
};

export default CardDelete;
