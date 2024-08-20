import type { Metadata } from "next";
import ReduxProvider from "../components/ProviderRedux";
import './globals.css'
import SessionProviderFn from "../components/SessionProviderFn";

export const metadata: Metadata = {
  title: "PaymentVerse",
  description: "Generated by PayeeVerse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <SessionProviderFn>
        <html lang="en">
          <body className="dark:bg-black">
            {children}
          </body>
        </html>
      </SessionProviderFn>
    </ReduxProvider>
  );
}
