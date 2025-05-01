import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sửa Khóa Thanh Hóa",
  description: "Chuyên nghiệp - Nhanh chóng - An toàn tuyệt đối",
  icons: {
    icon: [
      { url: "/images/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
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
        <StructuredData />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
