import { TbBread } from "react-icons/tb";

export default function Header() {
  return (
    <header className="flex items-center justify-center w-full gap-2 mb-6 bg-white shadow-md">
      <TbBread className="text-3xl" />
      <h1 className="py-3 text-lg font-black select-none">Roti Betis</h1>
    </header>
  );
}
