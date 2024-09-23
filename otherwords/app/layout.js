import { Inter } from "next/font/google";
import { Playpen_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const playpenSans = Playpen_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "In other words",
  description: "Family game In other words on the web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playpenSans.className}`}>
        {children}
      </body>
    </html>
  );
}
