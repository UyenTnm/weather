import "./globals.css";
import Providers from "./providers";
import NavLink from "@/components/NavLink";
import Search from "@/app/search/SearchForm";
// import { ThemeProvider } from "@/components/theme/ThemeProvider";
import ThemeWrapper from "@/components/theme/ThemeWrapper";
import ToggleTheme from "@/components/theme/ToggleTheme";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata = {
  Title: "Trang web dự báo thời tiết",
  description: "Xem thông tin dự báo thời tiết theo vị trí tại Hà Nội",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
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
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white">
        <ThemeWrapper>
          {/* Navigation */}
          <nav className="bg-white w-full shadow-md dark:bg-gray-800 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex justify-between items-center h-16">
                <div className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                  Thời tiết
                </div>
                {/* Search Form */}
                <Search />
                <ul className="flex space-x-6 font-medium">
                  <li>
                    <NavLink
                      href="/"
                      exact={true}
                      className="hover:text-blue-600 transition-colors"
                    >
                      Trang chủ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href="/districts"
                      className="hover:text-blue-600 transition-colors"
                    >
                      Quận/huyện
                    </NavLink>
                  </li>

                  {/* Toggle Theme */}
                  <li>
                    <ToggleTheme />
                  </li>

                  {/*  */}
                </ul>
              </div>
            </div>
          </nav>
          {/* Page Content */}
          <main className="max-w-6xl mx-auto px-4 py-6">
            <Providers>{children}</Providers>
          </main>
        </ThemeWrapper>
      </body>
    </html>
  );
}
