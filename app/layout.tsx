import type { Metadata } from "next";
import { Marck_Script } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";

const geistSans = Marck_Script({
  weight: "400",
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dacaid",
  description:
    "A comprehensive collection of Web3 code snippets, components, and modules.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
