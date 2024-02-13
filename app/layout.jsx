import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ReduxProvider from "./ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="">
      <body className={inter.className}>
        <ReduxProvider>
          <Navbar />
          <main className="flex-grow max-container">{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
}
