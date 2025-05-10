import React from 'react';

const COLORS = [
  { name: 'Primär: Die Linke Rot', var: '--die-linke-rot' },
  { name: 'Primär: Weiß', var: '--white', text: '#212121' },
  { name: 'Sekundär: Türkis', var: '--tuerkis' },
  { name: 'Sekundär: Off-White', var: '--off-white', text: '#212121' },
  { name: 'Sekundär: Petrol', var: '--petrol' },
  { name: 'Sekundär: Friedensblau', var: '--friedensblau' },
  { name: 'Sekundär: Petrol Dunkel', var: '--petrol-dark' },
];

interface ColorCardProps {
  name: string;
  variable: string;
  text?: string;
}

function ColorCard({ name, variable, text }: ColorCardProps) {
  return (
    <div
      className="rounded-lg shadow p-6 flex flex-col items-center justify-center mb-6"
      style={{
        background: `var(${variable})`,
        color: text || (variable === '--white' || variable === '--off-white' ? '#212121' : '#fff'),
        minHeight: 120,
        minWidth: 220,
        border: '1px solid #e1e1e1',
      }}
    >
      <div className="font-bold text-lg mb-2">{name}</div>
      <div className="text-xs font-mono">{variable}</div>
    </div>
  );
}

export default function DevPage() {
  return (
    <main className="min-h-screen w-full bg-white text-black py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Color Cards Demo</h1>
      <div className="flex flex-wrap gap-6">
        {COLORS.map((c) => (
          <ColorCard key={c.var} name={c.name} variable={c.var} text={c.text} />
        ))}
      </div>
    </main>
  );
} 