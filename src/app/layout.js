import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Providers from '@/app/providers.jsx'
import NavBar from "@/components/navBar";
import SearchBox from "@/components/searchBox";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie App",
  description: "It is a movie clone website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <Header/>
        <NavBar/>
        <SearchBox/>
        {children}
        </Providers>
        </body>
    </html>
  );
}
