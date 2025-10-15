import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ivan Mikhailik | Junior SEO Specialist",
  description:
    "Portfolio of Ivan Mikhailik - Junior SEO Specialist with 6 years of e-commerce experience. Showcasing SEO projects and digital marketing expertise.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.jpg",
  },
  openGraph: {
    title: "Ivan Mikhailik | Junior SEO Specialist",
    description: "Portfolio of Ivan Mikhailik - Junior SEO Specialist with 6 years of e-commerce experience.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
