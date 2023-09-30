import "./globals.css";
import { Inter, Mooli } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });
const mooli = Mooli({ weight: '400', subsets: ["latin"] });

export const metadata = {
  title: "Blog App ",
  description: "Blog App with Next Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full md:w-[80%] min-h-[100vh]  mx-auto flex flex-col justify-between ">
          <Navbar />
          <div className={mooli.className}>{children}</div>

          <Footer />
        </div>
      </body>
    </html>
  );
}