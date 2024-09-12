import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import clsx from "clsx";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Creatify",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={clsx("dark min-h-screen font-sans antialiased", montserrat.variable)}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
