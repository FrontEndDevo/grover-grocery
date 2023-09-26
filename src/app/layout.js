"use client";
import Footer from "@/components/Footer";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { store } from "./store";
import { Provider } from "react-redux";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Grover Grocery",
  description: "Grover Grocery Food Delivery application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <div>
            <Navbar />
            {children}
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
