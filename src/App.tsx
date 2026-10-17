import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { BentoGrid } from './components/BentoGrid';
import { Footer } from './components/Footer';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <ThemeProvider>
      <div id="home" className="min-h-screen bg-[var(--canvas-bg)] text-[var(--canvas-fg)] bg-grid-pattern transition-colors duration-300">
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />
        <BentoGrid
          isResumeOpen={isResumeOpen}
          onOpenResume={() => setIsResumeOpen(true)}
          onCloseResume={() => setIsResumeOpen(false)}
        />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
