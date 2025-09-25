// src/lib/fonts.ts
import localFont from "next/font/local";

export const shiba = localFont({
  src: [
    {
      path: "../fonts/Shiba-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-shiba",
});
