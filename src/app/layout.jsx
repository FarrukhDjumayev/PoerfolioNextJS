import { LanguageProvider } from "./context/LanguageContext";
import { Providers } from "./context/ThemeProvider";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import CustomCursor from "./ReactBits/CustomCursor";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Farrukh Portfolio",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <LanguageProvider>
          <Providers>
            <CustomCursor />
            <Navbar />
            <Sidebar />
            <main>{children}</main>
          </Providers>
        </LanguageProvider>
      </body>
    </html>
  );
}
