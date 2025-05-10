'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const links = [
  { href: '#GlaserneAbgeordnete', label: 'Transparenz' },
  { href: '#Mitgliedschaften', label: 'Mitgliedschaften' },
  { href: '#Bueros', label: 'Büros' },
  { href: '#Kontakt', label: 'Kontakt' },
];

export default function Navbar() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      for (const link of links) {
        const section = document.querySelector(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = link.href;
            break;
          }
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="h-full w-full flex flex-col items-center bg-white text-white border-r border-gray-200 shadow-md">
      {/* Logo at the top, centered horizontally */}
      <div className="w-full flex justify-center items-center py-8">
        <Image
          src="/images/Die_Linke_Logo_Standard_RGB.svg"
          alt="Die Linke Logo"
          width={120}
          height={60}
          className="object-contain"
          priority
        />
      </div>
      {/* Navigation links stacked vertically */}
      <div className="flex flex-col gap-4 items-start w-full mt-8 px-4">
        {links.map(link => (
          <a
            key={link.href}
            href={link.href}
            onClick={e => handleNavClick(e, link.href)}
            className={
              (active === link.href
                ? 'text-[var(--die-linke-rot)]' // red for active
                : 'text-[var(--medium-grey)]') + // light grey for inactive
              ' hover:text-[var(--dunkelrot)] transition-colors text-base font-medium w-full text-left px-4 py-2'
            }
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
} 