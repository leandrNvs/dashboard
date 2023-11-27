"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface IListLink {
  href: string;
  text: string;
  Icon: any;
}

export default function ListLink({ href, text, Icon }: IListLink) {
  const style = usePathname() === href ? "bg-gray-700" : null;

  return (
    <li>
      <Link
        href={href}
        className={`${style} flex items-center gap-2 p-4 hover:bg-gray-700 rounded-md`}
      >
        {Icon} {text}
      </Link>
    </li>
  );
}
