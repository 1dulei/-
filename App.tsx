import React, { useState } from 'react';
import { ViewState } from './types';
import { APP_TITLE, APP_DESCRIPTION, LINKS } from './constants';
import { LinkButton } from './components/LinkButton';
import { GuideView } from './views/GuideView';
import { QRCodeModal } from './components/QRCodeModal';
import { QrCode, Share2 } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.HOME);
  const [showQR, setShowQR] = useState(false);

  // Render Guide View
  if (view === ViewState.GUIDE) {
    return <GuideView onBack={() => setView(ViewState.HOME)} />;
  }

  // Render Home View
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f1115] to-[#000000] text-white overflow-hidden relative selection:bg-emerald-500/30">
      
      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[100px]" />
      </div>

      {/* Top Navigation / Controls */}
      <div className="absolute top-4 right-4 z-20 flex gap-3">
        <button 
          onClick={() => setShowQR(true)}
          className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all duration-300 group"
          aria-label="Show QR Code"
        >
          <QrCode className="text-white group-hover:scale-110 transition-transform" size={24} />
        </button>
      </div>

      <main className="relative z-10 max-w-lg mx-auto px-6 py-12 flex flex-col items-center min-h-screen">
        
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center mb-10 w-full">
          <div className="relative mb-6 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-28 h-28 rounded-full bg-[#111] border-4 border-[#1a1a1a] overflow-hidden flex items-center justify-center shadow-2xl">
               {/* 
                 Avatar Image: 
                 Using a reliable Unsplash image of a classic statue.
                 REPLACE the src below with your own image URL if needed.
               */}
               <img 
                 src="https://images.unsplash.com/photo-1549487532-6a84f3780373?q=80&w=400&auto=format&fit=crop" 
                 alt="" 
                 className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
               />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold mb-4 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">{APP_TITLE}</h1>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 shadow-xl w-full hover:bg-white/10 transition-colors duration-300">
             <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line font-medium">
               {APP_DESCRIPTION}
             </p>
          </div>
        </div>

        {/* Links List */}
        <div className="w-full space-y-4 pb-20">
          {LINKS.map((link) => (
            <LinkButton 
              key={link.id} 
              item={link} 
              onNavigate={setView} 
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-auto py-6 text-center text-gray-500 text-xs">
          <p>© 2024 归巢聚合信息社区. All rights reserved.</p>
        </footer>
      </main>

      {/* QR Code Modal */}
      <QRCodeModal isOpen={showQR} onClose={() => setShowQR(false)} />
    </div>
  );
};

export default App;