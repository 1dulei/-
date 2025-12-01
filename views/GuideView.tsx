import React from 'react';
import { ArrowLeft, BookOpen, Star, Shield, Zap } from 'lucide-react';
import { ViewState } from '../types';

interface GuideViewProps {
  onBack: () => void;
}

export const GuideView: React.FC<GuideViewProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 pb-20">
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 px-4 py-4 flex items-center gap-4">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
        >
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-xl font-bold">聚合群使用指南</h2>
      </div>

      <div className="max-w-2xl mx-auto p-6 space-y-8 animate-in slide-in-from-right-10 duration-300">
        
        {/* Intro Section */}
        <section className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <div className="flex items-center gap-3 mb-4 text-emerald-400">
            <BookOpen size={28} />
            <h3 className="text-2xl font-bold text-white">欢迎加入归巢社区</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            感谢您选择归巢聚合信息社区。这是一个汇集全网顶级加密货币策略、一级市场打新信息以及海外优质信号的综合平台。为了让您更好地使用本社区资源，请仔细阅读以下指南。
          </p>
        </section>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 p-5 rounded-xl border border-blue-500/20">
            <Shield className="text-blue-400 mb-3" size={32} />
            <h4 className="font-bold text-lg mb-2">安全第一</h4>
            <p className="text-sm text-gray-400">所有信息源均经过严格筛选，确保真实性与时效性，远离各类诈骗与垃圾信息。</p>
          </div>
          <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 p-5 rounded-xl border border-purple-500/20">
            <Star className="text-purple-400 mb-3" size={32} />
            <h4 className="font-bold text-lg mb-2">顶级资源</h4>
            <p className="text-sm text-gray-400">聚合提阿非罗、舒琴、镭射猫等头部KOL的付费内容，一份订阅，全部拥有。</p>
          </div>
        </div>

        {/* Step by Step Guide */}
        <section className="space-y-6">
          <h3 className="text-xl font-bold border-l-4 border-emerald-500 pl-4">如何开始使用？</h3>
          
          <div className="relative pl-8 border-l-2 border-white/10 space-y-8">
            <div className="relative">
              <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 ring-4 ring-[#0a0a0a]">
                1
              </span>
              <h4 className="text-lg font-bold text-white mb-2">加入 Discord 或 飞书群</h4>
              <p className="text-gray-400 mb-3">
                点击首页的 "DC免费体验" 或联系管理员加入飞书群。飞书群支持消息自动翻译与话题分类，体验更佳。
              </p>
              <img 
                src="https://picsum.photos/seed/guide1/600/300" 
                alt="Community Interface" 
                className="rounded-lg w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>

            <div className="relative">
              <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 ring-4 ring-[#0a0a0a]">
                2
              </span>
              <h4 className="text-lg font-bold text-white mb-2">设置关注频道</h4>
              <p className="text-gray-400 mb-3">
                进入社区后，建议根据您的交易风格（现货/合约/一级市场）设置消息通知，避免信息过载。
              </p>
            </div>

             <div className="relative">
              <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 ring-4 ring-[#0a0a0a]">
                3
              </span>
              <h4 className="text-lg font-bold text-white mb-2">查阅历史教程</h4>
              <p className="text-gray-400 mb-3">
                我们在 "资料库" 中存档了超过1000小时的顶级交易课程，建议新手先从《交易心态管理》开始学习。
              </p>
               <div className="bg-gray-800 p-4 rounded-lg flex items-center gap-3">
                 <Zap className="text-yellow-400" />
                 <span className="text-sm text-gray-300">提示：部分高级课程仅限正式会员查阅。</span>
               </div>
            </div>
          </div>
        </section>

        <button 
          onClick={onBack}
          className="w-full py-4 bg-white text-black font-bold rounded-xl mt-8 hover:bg-gray-200 transition-colors"
        >
          返回首页
        </button>

      </div>
    </div>
  );
};