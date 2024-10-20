import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  openGraph:{
    images:[
      "https://open-graph-pink.vercel.app/api/og?title=Nextjs&description=Here+we+go+for+open+graph&logoUrl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP._LTa6aGfrpaSXEe04Q_3-QAAAA%26pid%3DApi%26P%3D0%26h%3D180"
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
