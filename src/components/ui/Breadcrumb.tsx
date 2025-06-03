"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Breadcrumb = () => {
  const pathname = usePathname();

  const segments = pathname.split("/").filter((segment) => segment !== "");

  return (
    <nav className="text-sm text-gray-600 dark:text-gray-300">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="hover:underline">
            Trang chủ
          </Link>
        </li>
        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/");
          const isLast = index === segments.length - 1;
          return (
            <li key={href} className="flex items-center space-x-2">
              <span className="mx-1">/</span>
              {isLast ? (
                <span className="font-medium capitalize text-blue-600 dark:text-blue-400">
                  {decodeURIComponent(segment)}
                </span>
              ) : (
                <Link href={href} className="hover:underline capitalize">
                  {decodeURIComponent(segment)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
