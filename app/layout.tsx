import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-family",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--second-family",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rental Car",
  description: "Let's rent your car",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${inter.variable}`}>
        
        <header>
          <h1>Here must be header</h1>
        </header>

        <main>{children}</main>
        
      </body>
    </html>
  );
}
