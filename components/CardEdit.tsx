import { useContext, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CardContext } from "../context/CardContext";
import { formatDate } from "../lib/utils";
import { CardProps } from "./Card";

const CardEdit: React.FC = () => {
  const { openEdit, setOpenDelete, setOpenEdit, data, setData } =
    useContext(CardContext);

  const [loading, setLoading] = useState<boolean>(false);

  return (
    <form
      className={`${
        openEdit ? "top-0" : "top-[1000px]"
      } bg-[#474554]/80 rounded-xl transition-all backdrop-blur-sm absolute left-0 w-full h-full`}
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        const input = (e.target as HTMLFormElement)?.elements as any;
        const formData = new FormData();
        input?.name?.value && formData.append("name", input?.name?.value);
        input?.description?.value &&
          formData.append("description", input?.description?.value);
        input?.image?.value && formData.append("image", input?.image?.files[0]);
        input?.expired_date?.value &&
          formData.append(
            "expired_date",
            formatDate(input?.expired_date?.value)
          );
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/roti/${(data as CardProps).id}`,
          {
            body: formData,
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
            },
          }
        );
        const json = await res.json();
        console.log(json);
        setData(() => json.data);
        setLoading(false);
        setOpenEdit(false);
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
          value={loading ? "Loading..." : "Update"}
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
