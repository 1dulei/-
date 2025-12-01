import React from 'react';
import { ChevronRight } from 'lucide-react';
import { LinkItem, ViewState } from '../types';

interface LinkButtonProps {
  item: LinkItem;
  onNavigate: (view: ViewState) => void;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ item, onNavigate }) => {
  const handleClick = () => {
    if (item.actionType === 'link' && item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    } else if (item.actionType === 'alert' && item.alertMessage) {
      alert(item.alertMessage);
    } else if (item.actionType === 'navigate' && item.targetView) {
      onNavigate(item.targetView);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-full bg-white hover:bg-gray-50 text-gray-900 font-medium py-4 px-6 rounded-full shadow-lg transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-between group mb-4"
    >
      <div className="flex items-center space-x-4">
        <div 
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100"
          style={{ color: item.color }}
        >
          <item.icon size={24} />
        </div>
        <span className="text-lg font-bold text-gray-800">{item.title}</span>
      </div>
      <ChevronRight className="text-gray-400 group-hover:text-gray-600 transition-colors" />
    </button>
  );
};