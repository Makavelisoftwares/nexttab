"use client";

import { Logo } from "@/components/_custom_components/logo";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const path = usePathname();

  const Links = [
    {
      href: "/about",
      name: "Work Experience",
    },
    {
      href: "/blog",
      name: "Blog",
    },
    {
      href: "/project",
      name: "Projects",
    },
  ];
  return (
    <div className="py-4 flex z-50 items-center justify-between">
      <div>
        <Logo />
      </div>

      <div>
        {Links?.map((item, i) => (
          <Link className="mx-2" key={i} href={item?.href}>
            <span
              className={cn(
                "text-sm text-muted-foreground",

                item?.href == path && "text-rose-500 font-bold"
              )}
            >
              {item?.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};
