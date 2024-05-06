import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Providers from '@/app/providers.jsx'
import NavBar from "@/components/navBar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "movie app",
  description: "It is a movie clone website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <Header/>
        <NavBar/>
        {children}
        </Providers>
        </body>
    </html>
  );
}
