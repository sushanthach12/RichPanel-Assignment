import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FacebookProvider from "@/components/providers/facebook";
import ReduxProvider from "@/components/providers/redux-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FB-helpdesk",
  description: "R1 Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#version=v2.2&appId=2684236935073797&xfbml=true&autoLogAppEvents=true"></script>
      </head>
      <body className={inter.className}>
        <FacebookProvider />
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
