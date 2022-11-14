import { createContext, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CardContext } from "../context/CardContext";
import CardDelete from "./CardDelete";
import CardEdit from "./CardEdit";
export interface CardProps {
  name: string;
  expired_date: string | Date;
  description: string;
  image: string;
  id: number;
  idx: number;
}

const Card: React.FC<CardProps> = ({
  name,
  description,
  expired_date,
  image,
  id,
  idx,
}) => {
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<CardProps>({
    name,
    description,
    expired_date,
    image,
    id,
    idx,
  });
  return (
    <CardContext.Provider
      value={{
        openEdit,
        openDelete,
        setOpenDelete,
        setOpenEdit,
        data,
        setData,
      }}
    >
      <div className="relative overflow-x-hidden !md:w-[400px] !w-[300px] h-[500px] overflow-y-hidden md:h-[550px] bg-white shadow-xl cursor-pointer hover:-translate-y-4 after:rounded-xl card rounded-xl md:w-1/2 lg:w-1/4">
        <FiEdit
          onClick={() => {
            setOpenEdit(true);
            console.log(openEdit);
          }}
          className="absolute top-0 right-0 mt-5 mr-5 text-2xl opacity-0 cursor-pointer edit"
        />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={data.image}
          alt="gambar roti"
          className="w-full h-[200px] object-cover bg-center bg-stone-200 rounded-xl"
        />
        <div className="px-4 py-8 m-4 ">
          <h1
            onClick={() => setOpenEdit(true)}
            className="mb-2 font-bold underline font-lg"
          >
            {data.name}
          </h1>
          <h2 className="text-sm font-semibold text-orange-600">
            Expired Date: {data.expired_date as string}
          </h2>
          <h2 className="text-xs">{data.description}</h2>
        </div>
        <CardEdit />
        <CardDelete />
      </div>
    </CardContext.Provider>
  );
};

export default Card;
