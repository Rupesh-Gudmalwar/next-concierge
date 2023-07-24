import "./globals.scss";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Concierge",
  description: "Quoality concierge",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
