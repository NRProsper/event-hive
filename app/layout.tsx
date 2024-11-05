import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import {Toaster} from "react-hot-toast";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
    title: {
        default: 'Event Hive',
        template: `%s | Event Hive`
    },
  description: "Visit our website get most recent and updated events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} antialiased`}
      >
      <Toaster
          position="top-center"
          reverseOrder={false}
      />
      {children}
      </body>
    </html>
  );
}
