import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="text-sm text-gray-500 mb-4">
      <ol className="list-none p-0 inline-flex">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center">
              {!isLast ? (
                <>
                  <Link
                    href={item.href}
                    className="hover:text-blue-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                  <span className="mx-2">/</span>
                </>
              ) : (
                <span className="font-semibold text-blue-600">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
