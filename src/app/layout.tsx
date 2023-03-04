import Navbar from '../../components/Navbar'
import './globals.css'
import {IBM_Plex_Mono} from '@next/font/google'

const plexMono = IBM_Plex_Mono({
  subsets:['latin'],
  weight:['200','300','400','500','600','700']
})

export const metadata = {
  title: 'Octane Portfolio OS',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-[#080808] ${plexMono.className}`}>
      <Navbar/>
        {children}</body>
    </html>
  )
}
