import React from 'react';
import { useState } from 'react';

const GameBoyGoldWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  
  const backgroundImage = {
    backgroundImage: `url('/api/placeholder/1920/1080')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  const NavButton = ({ page, label }) => (
    <button
      onClick={() => setCurrentPage(page)}
      className={`px-6 py-2 rounded-lg font-bold transition-colors ${
        currentPage === page
          ? 'bg-purple-600 text-white'
          : 'bg-gray-200 text-gray-800 hover:bg-purple-500 hover:text-white'
      }`}
    >
      {label}
    </button>
  );

  const HomePage = () => (
    <div style={backgroundImage} className="min-h-screen flex flex-col items-center justify-center text-white p-4">
      <div className="bg-black bg-opacity-50 p-8 rounded-xl max-w-2xl text-center">
        <h1 className="text-5xl font-bold mb-4">GameBoyGold Coin</h1>
        <p className="text-2xl">Relive your childhood gameboy days with $GBG</p>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl max-w-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-4">About GameBoyGold</h2>
        <p className="text-lg leading-relaxed">
          The Nintendo Game Boy, released in 1989, revolutionized portable gaming and became a cultural phenomenon. 
          This iconic handheld console brought gaming to everyone's pockets, featuring legendary titles like 
          Tetris, Pokemon, and Super Mario Land. Its simple yet durable design, paired with incredible battery 
          life and an extensive game library, made it a beloved companion for millions of players worldwide. 
          The Game Boy's success wasn't just in its technology, but in its ability to create shared experiences 
          and memories that would last a lifetime.
        </p>
        <p className="text-lg mt-4 font-bold text-purple-600">
          $GBG was created to revive the nostalgia and spirit of the GameBoy and combine it with our love for community
        </p>
      </div>
    </div>
  );

  const TokenomicsPage = () => (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl max-w-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Tokenomics</h2>
        <div className="text-lg">
          <p className="mb-2">Token supply: 1,000,000,000 $GBG</p>
          <p className="font-bold text-purple-600">LP Burnt</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
        <div className="max-w-4xl mx-auto p-4 flex gap-4 justify-center">
          <NavButton page="home" label="Home" />
          <NavButton page="about" label="About" />
          <NavButton page="tokenomics" label="Tokenomics" />
        </div>
      </nav>
      
      <main className="pt-16">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'tokenomics' && <TokenomicsPage />}
      </main>
    </div>
  );
};

export default GameBoyGoldWebsite;