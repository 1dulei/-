import { LucideIcon } from 'lucide-react';

export enum ViewState {
  HOME = 'HOME',
  GUIDE = 'GUIDE'
}

export interface LinkItem {
  id: string;
  title: string;
  icon: LucideIcon;
  actionType: 'link' | 'alert' | 'navigate';
  url?: string;
  alertMessage?: string;
  targetView?: ViewState;
  color?: string; // Optional specific color for the icon
}
