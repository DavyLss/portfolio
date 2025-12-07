import { useEffect, useState } from 'react';

export default function NeonCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <>
      {/* Halo externe */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-screen transition-transform duration-100 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-8 h-8 rounded-full bg-cyan-400/40 blur-md animate-pulse" 
             style={{
               boxShadow: '0 0 20px rgba(34, 211, 238, 0.6), 0 0 40px rgba(34, 211, 238, 0.4)'
             }}
        />
      </div>
      
      {/* Point central */}
      <div
        className="fixed pointer-events-none z-[10000] transition-transform duration-50 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-2 h-2 rounded-full bg-cyan-400" 
             style={{
               boxShadow: '0 0 10px rgba(34, 211, 238, 1)'
             }}
        />
      </div>
    </>
  );
}
