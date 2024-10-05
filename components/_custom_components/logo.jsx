import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex  items-center md:text-4xl text-sm font-bold">
        <span className="text-rose-500 font-extrabold">NEXT</span>
        <span>TAB</span>
      </div>
    </Link>
  );
};
