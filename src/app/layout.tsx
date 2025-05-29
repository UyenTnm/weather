import "./globals.css";
import Providers from "./providers";
import NavLink from "@/components/NavLink";
import Search from "@/app/search/SearchForm";
export const metadata = {
  description: "Trang web dự báo thời tiết",
  icons: {
    icon: "/icons/favicon.ico", // <-- favicon tùy chỉnh
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        {/* Navigation */}
        <nav className="bg-white shadow-md">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="text-xl font-bold">Thời tiết</div>
              {/* Search Form */}

              <Search />

              <ul className="flex space-x-6 font-medium">
                <li>
                  <NavLink
                    href="/"
                    exact={true}
                    className="hover:text-blue-600 transition"
                  >
                    Trang chủ
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="/districts"
                    className="hover:text-blue-600 transition"
                  >
                    Quận/huyện
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Page Content */}
        <main className="max-w-6xl mx-auto px-4 py-6">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
