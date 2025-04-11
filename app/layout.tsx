import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sửa Khóa Thanh Hóa - Thợ sửa khóa tại nhà 24h",
  description:
    "Dịch vụ sửa khóa tại nhà 24h tại Thanh Hóa. Sửa khóa cửa, khóa xe máy, khóa ô tô, chìa khóa thông minh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <Header />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
