import { 
  MessageCircle, 
  Send, 
  BookOpen, 
  Plane, 
  Gamepad2, 
  Zap,
  MessageSquare
} from 'lucide-react';
import { LinkItem, ViewState } from './types';

export const APP_TITLE = "归巢聚合信息社区";
export const APP_DESCRIPTION = `归巢 —— 励志做web3信息最全面的社区
每日公开顶尖选手实盘盈利公开验算，胜率与收益
这里不喊单、不画饼，只做公开可验证的高胜率实盘
一起抱团滚仓、极致复利，最终都能回家`;

export const LINKS: LinkItem[] = [
  {
    id: 'dc',
    title: 'DC免费体验',
    icon: Gamepad2, // Using Gamepad as Discord proxy
    actionType: 'link',
    url: 'https://discord.gg/Pt5D5qWxkA',
    color: '#5865F2'
  },
  {
    id: 'feishu',
    title: '飞书联系方式',
    icon: Zap, // Using Zap for efficiency app
    actionType: 'alert',
    alertMessage: '正在开发',
    color: '#00D6B9'
  },
  {
    id: 'tg',
    title: 'TG (Telegram)',
    icon: Send,
    actionType: 'alert',
    alertMessage: '正在开发',
    color: '#229ED9'
  },
  {
    id: 'guide',
    title: '聚合群使用指南',
    icon: BookOpen,
    actionType: 'navigate',
    targetView: ViewState.GUIDE,
    color: '#333333'
  },
  {
    id: 'airport',
    title: '稳定机场，每月12元',
    icon: Plane,
    actionType: 'link',
    url: 'https://ikuuu.de/auth/register?code=mrG1',
    color: '#1a1a1a'
  }
];