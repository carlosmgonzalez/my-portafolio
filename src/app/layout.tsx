import type { Metadata } from 'next'
import  Providers from '@/components/Providers';
import Navbar from '@/components/Navbar';
import { Toaster } from "@/components/ui/toaster"
import Footer from '@/components/Footer';
import './globals.css'

export const metadata: Metadata = {
  title: 'Carlos Gonzalez',
  description: 'This page is the portfolio of Carlos Gonzalez, where you can find his projects and the way to contact him',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar/>
          <main className="container mx-auto px-6 mt-16">
              {children}
          </main>
          <Footer/>
          <Toaster/>
        </Providers>
      </body>
    </html>
  );
};
