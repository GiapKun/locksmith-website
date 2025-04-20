import type { ReactNode } from "react";

export default function ServicesLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <main className="container mx-auto px-4 py-8">{children}</main>;
}
