import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { useRouter } from "next/router";


const inter = Inter({ subsets: ["latin"] });
const router = useRouter()
export const metadata = {
  title: "Blog App ",
  description: "Blog App with Next Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full md:w-[80%] min-h-[100vh] mx-auto flex flex-col justify-between ">
        <Navbar  router/>
        {children} <Footer />
        </div>
      </body>
    </html>
  );
}
