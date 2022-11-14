import { useContext } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CardContext } from "../context/CardContext";

const CardEdit: React.FC = () => {
  const { openDelete, openEdit, setOpenDelete, setOpenEdit, data, setData } =
    useContext(CardContext);
  return (
    <form
      className={`${
        openEdit ? "top-0" : "top-[1000px]"
      } bg-[#474554]/80 rounded-xl transition-all backdrop-blur-sm absolute left-0 w-full h-full`}
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/roti`, {
          body: formData,
          method: "UPDATE",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
          },
        });
      }}
    >
      <IoIosCloseCircleOutline
        onClick={() => setOpenEdit(false)}
        className="absolute text-2xl font-bold top-5 right-5"
      />
      <fieldset className="flex flex-col p-4 mt-10">
        <label className="mt-2 font-bold text-green-300" htmlFor="name">
          Name
        </label>
        <input
          className="px-3 py-1 border border-green-500 outline-none rounded-xl"
          type="text"
          name="name"
        />
        <label className="mt-2 font-bold text-green-300" htmlFor="description">
          Description
        </label>
        <input
          className="px-3 py-1 border border-green-500 outline-none rounded-xl"
          type="text"
          name="description"
        />
        <label className="mt-2 font-bold text-green-300" htmlFor="expired_date">
          Expired Date
        </label>
        <input
          className="px-3 py-1 border border-green-500 outline-none rounded-xl"
          type="date"
          name="expired_date"
        />
        <label className="mt-2 font-bold text-green-300" htmlFor="image">
          Image
        </label>
        <input
          type="file"
          name="image"
          className="max-w-[260px] rounded-xl outline-none px-3 py-1"
        />
        <input
          className="py-2 mt-20 shadow-xl cursor-pointer bg-slate-300 rounded-xl hover:shadow-none hover:bg-slate-400 active:bg-slate-500"
          type="submit"
          value="Update"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setOpenDelete(true);
          }}
          className="py-2 mt-2 transition-colors bg-red-300 shadow-xl cursor-pointer rounded-xl hover:shadow-none hover:bg-red-400 active:bg-red-500"
        >
          Delete
        </button>
      </fieldset>
    </form>
  );
};

export default CardEdit;
