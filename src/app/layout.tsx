import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";

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
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange>
          <main className="w-full h-screen grid place-items-center">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
