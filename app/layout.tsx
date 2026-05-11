import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SSV Infra — Wind & Hybrid Solar EPC Partner | India",
  description: "SSV Infra delivers utility-scale Wind, Hybrid Solar+Wind EPC and O&M services across India. 300+ MW commissioned. MNRE compliant.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
