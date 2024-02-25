import type { Metadata } from "next";
import "./globals.css";

import { LightEfectTop } from "../assets/LightEfectTop"
import { YellowLightEfect } from "../assets/YellowLightEfect"
import { LightEfectBot } from "../assets/LightEfectBot"

export const metadata: Metadata = {
  title: "Manual do Milionário",
  description: "O guia definitivo que te levará do mil ao milhão.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
        {/* <LightEfectTop className="absolute -z-10" /> */}
        {children}
        {/* <YellowLightEfect className="absolute right-0 top-[500px] -z-10" /> */}
        {/* <LightEfectBot className="absolute bottom-100 -translate-y-full -z-10" /> */}
      </body>
    </html>
  );
}
