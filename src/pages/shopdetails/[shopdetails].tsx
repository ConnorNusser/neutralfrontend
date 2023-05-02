import Image from 'next/image'
import { Inter } from 'next/font/google'
import { SessionProvider } from "next-auth/react"
import DetailedClothingCard from '@/components/shop/detailedclothingcard'

const inter = Inter({ subsets: ['latin'] })

export default function ShopDetails() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <DetailedClothingCard/>
    </main>
  )
}
