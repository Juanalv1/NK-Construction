
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


export const metadata = {
  icons: {
    icon: '/favicon.ico'
}}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='font-Poppins  flex flex-col text-[#d5d6d5] scroll-smooth relative'>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
