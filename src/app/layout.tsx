import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["500", "600", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gmail",
  description: "This is only a page to test phishing though Gmail",
};

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Readonly<Props>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
