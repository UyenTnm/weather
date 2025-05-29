"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import clsx from "clsx";

type NavLinkProps = {
  href: string;
  exact?: boolean; // mặc định false: chỉ khớp bắt đầu (prefix)
  children: ReactNode;
  className?: string;
  activeClassName?: string;
};

export default function NavLink({
  href,
  exact = false,
  children,
  className = "",
  activeClassName = "text-blue-600 font-semibold",
}: NavLinkProps) {
  const pathname = usePathname();

  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={clsx(className, {
        [activeClassName]: isActive,
      })}
    >
      {children}
    </Link>
  );
}
