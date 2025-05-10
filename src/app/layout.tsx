import './globals.css';
import { Inter, Work_Sans } from 'next/font/google';
import type { Metadata } from 'next';
import ScrollTracker from './ScrollTracker';
import Navbar from './Navbar';
import Image from 'next/image';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '700'], // Regular, Medium, Bold
  style: ['normal', 'italic'],
});

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap',
  weight: ['300', '900'], // Light, Black
});

export const metadata: Metadata = {
  title: 'Heidi Reichinnek – Neue Website',
  description: 'Website für Heidi Reichinnek, MdB, Fraktionsvorsitzende Die Linke im Bundestag.',
};

function Footer() {
  return (
    <footer className="w-full bg-[#004B5B] text-white pt-12 mt-auto relative">
      {/* Background noise and radial gradients */}
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' fill='%23ffffff'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px',
        mixBlendMode: 'overlay'
      }} />
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full opacity-20 z-0" style={{ 
        background: 'radial-gradient(circle, var(--active-mint) 0%, transparent 70%)',
        transform: 'translate(30%, 30%)',
      }} />
      <div className="absolute left-0 top-0 w-[500px] h-[500px] rounded-full opacity-15 z-0" style={{ 
        background: 'radial-gradient(circle, var(--active-mint) 0%, transparent 70%)',
        transform: 'translate(-30%, -30%)',
      }} />
      <div className="absolute left-1/2 top-[40%] w-[400px] h-[400px] rounded-full opacity-10 z-0" style={{ 
        background: 'radial-gradient(circle, var(--active-mint) 0%, transparent 70%)',
        transform: 'translate(-50%, 0)',
      }} />
      
      <div className="w-full max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {/* Column 1: Logo/Brand */}
        <div className="flex flex-col gap-4">
          <div className="w-40">
            <Image
              src="/images/Die_Linke_Logo_Standard_RGB.svg"
              alt="Die Linke Logo"
              width={180}
              height={60}
              className="object-contain"
              priority
            />
          </div>
          <p className="text-sm text-gray-200">Kurzer Slogan oder Beschreibung als Platzhaltertext.</p>
        </div>
        {/* Column 2: Links */}
        <div className="flex flex-col gap-2">
          <div className="font-semibold mb-2">Links</div>
          <a href="#" className="text-sm text-gray-100 hover:underline">Link 1</a>
          <a href="#" className="text-sm text-gray-100 hover:underline">Link 2</a>
          <a href="#" className="text-sm text-gray-100 hover:underline">Link 3</a>
        </div>
        {/* Column 3: Social/Contact */}
        <div className="flex flex-col gap-2">
          <div className="font-semibold mb-2">Kontakt</div>
          <span className="text-sm text-gray-100">E-Mail: info@example.com</span>
          <span className="text-sm text-gray-100">Telefon: 01234 567890</span>
          <div className="flex gap-3 mt-2">
            <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">F</span>
            <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">T</span>
            <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">I</span>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center text-xs relative z-10 pb-4" style={{color: 'var(--active-mint)'}}>
        <a href="https://www.dielinkebt.de/start/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white" style={{color: 'var(--active-mint)'}}>DIE LINKE. im Bundestag</a>
        <span className="mx-1">|</span>
        <a href="https://www.dielinke-nds.de/start/aktuell/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white" style={{color: 'var(--active-mint)'}}>Landesverband DIE LINKE. Niedersachsen</a>
        <span className="mx-1">|</span>
        <a href="/impressum" className="underline hover:text-white" style={{color: 'var(--active-mint)'}}>Impressum</a>
        <span className="mx-1">|</span>
        <a href="/datenschutzerklaerung" className="underline hover:text-white" style={{color: 'var(--active-mint)'}}>Datenschutzerklärung</a>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${workSans.variable} h-full`}>
      <body className="font-[var(--font-inter)] bg-white text-black flex flex-row min-h-screen h-full overflow-x-hidden">
        <ScrollTracker />
        <div className="flex flex-row w-full min-h-screen h-full">
          <div className="w-56 flex-shrink-0 fixed h-screen">
            <Navbar />
          </div>
          <div className="flex-1 flex flex-col ml-56">
            <main className="flex-1 w-full">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
