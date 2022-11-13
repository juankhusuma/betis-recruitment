import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";
interface CardProps {
  name: string;
  expired_date: string | Date;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({
  name,
  description,
  expired_date,
  image,
}) => {
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  return (
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
        src={image}
        alt="gambar roti"
        className="w-full h-[200px] object-cover bg-center bg-stone-200 rounded-xl"
      />
      <div className="px-4 py-8 m-4 ">
        <h1 className="mb-2 font-bold underline font-lg">{name}</h1>
        <h2 className="text-sm font-semibold text-orange-600">
          Expired Date: {expired_date.toString()}
        </h2>
        <h2 className="text-xs">{description}</h2>
      </div>
      <form
        className={`${
          openEdit ? "top-0" : "top-[1000px]"
        } bg-[#474554]/80 rounded-xl transition-all backdrop-blur-sm absolute left-0 w-full h-full`}
      >
        <IoIosCloseCircleOutline
          onClick={() => setOpenEdit(false)}
          className="absolute font-bold text-2xl top-5 right-5"
        />
        <fieldset className="mt-10 flex flex-col p-4">
          <label className="font-bold" htmlFor="name">
            Name
          </label>
          <input type="text" name="name" />
          <label className="font-bold" htmlFor="description">
            Description
          </label>
          <input type="text" name="description" />
          <label className="font-bold" htmlFor="expired_date">
            Expired Date
          </label>
          <input type="date" name="expired_date" />
          <label className="font-bold" htmlFor="image">
            Image
          </label>
          <input type="file" name="image" />
          <input type="submit" value="Submit" />
        </fieldset>
      </form>
    </div>
  );
};

export default Card;
