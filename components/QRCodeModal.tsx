import React from 'react';
import { X, User } from 'lucide-react';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-sm w-full p-6 relative shadow-2xl animate-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-800 transition-colors rounded-full hover:bg-gray-100"
        >
          <X size={24} />
        </button>
        
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6 w-full pb-4 border-b border-gray-100">
            <div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden">
               {/* User avatar in QR card - matching the main page */}
               <img src="https://images.unsplash.com/photo-1549487532-6a84f3780373?q=80&w=200&auto=format&fit=crop" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-lg text-gray-900">杜子咕咕叫</h3>
              <p className="text-sm text-gray-500">冰岛</p>
            </div>
          </div>

          <div className="w-64 h-64 bg-gray-100 rounded-xl mb-6 p-4 border border-gray-200">
             {/* Simulating the QR Code from the image */}
             <img 
               src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=WeChat:DuZiGuGuJiao" 
               alt="WeChat QR Code" 
               className="w-full h-full object-contain opacity-90"
             />
          </div>

          <div className="flex items-center gap-2 text-gray-500 text-sm">
             <div className="p-2 bg-gray-100 rounded-full">
                <User size={16} />
             </div>
             <span>扫一扫上面的二维码图案，加我为朋友。</span>
          </div>
        </div>
      </div>
    </div>
  );
};