import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

export const metadata: Metadata = {
  title: "Ecotab&Așk",
  description:
    "Ecotab&Așk — оптовая продажа бытовой химии в Узбекистане. Стиральные порошки, гели для стирки, средства для мытья посуды, чистящие и моющие средства по выгодным ценам.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
            {children}
        <Footer />
      </body>
    </html>
  );
}
