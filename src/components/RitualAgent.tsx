import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Calendar, Layers, Compass, Check } from 'lucide-react';
import { STUDENT_INFO } from '../data/ritualData';
import { cn } from '../lib/utils';
import { RitualLogsTab } from './ritual/RitualLogsTab';
import { AgentRulesTab } from './ritual/AgentRulesTab';
import { StrengthMapTab } from './ritual/StrengthMapTab';
import { ResilienceStoryTab } from './ritual/ResilienceStoryTab';
import { ResumePortfolioTab } from './ritual/ResumePortfolioTab';

interface RitualAgentProps {
  className?: string;
}

type TabKey = 'logs' | 'rules' | 'map' | 'story' | 'resume';

export const RitualAgent: React.FC<RitualAgentProps> = ({ className }) => {
  const [activeTab, setActiveTab] = useState<TabKey>('logs');

  const tabList = [
    { key: 'logs' as const, label: '리추얼 기록', icon: Calendar },
    { key: 'rules' as const, label: '5대 규칙', icon: Terminal },
    { key: 'map' as const, label: '강점 지도', icon: Compass },
    { key: 'story' as const, label: '회복탄력성 서사', icon: Sparkles },
    { key: 'resume' as const, label: '포트폴리오 뼈대', icon: Layers },
  ];

  return (
    <motion.section
      id="ritual-agent"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'relative scroll-mt-24 overflow-hidden rounded-[32px] border border-black/[0.08] bg-white/80 p-6 shadow-2xl shadow-black/[0.04] backdrop-blur-3xl transition-all sm:p-9 lg:p-10 dark:border-white/[0.12] dark:bg-neutral-900/80 dark:shadow-none',
        className,
      )}
    >
      {/* iOS Dynamic Ambient Light Reflection */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-500/10 to-transparent blur-3xl dark:from-blue-400/10" />

      {/* iOS App Header Widget */}
      <div className="relative border-b border-black/[0.06] pb-6 dark:border-white/[0.08]">
        <div className="flex flex-col gap-3">
          {/* iOS Status Pill Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100/90 px-3 py-1 text-xs font-semibold text-neutral-800 backdrop-blur-md dark:bg-neutral-800/90 dark:text-neutral-200">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
              과제 9 · 나를 말하는 에이전트
            </span>
            <span className="inline-flex items-center rounded-full bg-neutral-100/70 px-2.5 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800/70 dark:text-neutral-300">
              수강생 {STUDENT_INFO.name}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
              <Check className="h-3 w-3" />
              T09 준수 완료
            </span>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl dark:text-white">
            리추얼 기록에서 내 강점과 이야기를 찾습니다
          </h2>

          <p className="text-xs leading-relaxed text-neutral-500 sm:text-sm dark:text-neutral-400">
            매일 아침저녁으로 남긴 리추얼 기록을 재료로, 나만의 에이전트 규칙을 부여하여 강점 지도와 회복탄력성 서사를
            발굴하고 포트폴리오 뼈대를 완성합니다.
          </p>
        </div>
      </div>

      {/* iOS Segmented Control Bar */}
      <div className="relative mt-6 flex scrollbar-none overflow-x-auto rounded-2xl bg-neutral-200/50 p-1 backdrop-blur-xl sm:p-1.5 dark:bg-neutral-800/60">
        {tabList.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                'group relative flex min-w-max flex-1 items-center justify-center gap-2 rounded-xl px-3.5 py-2 text-xs font-medium transition-all duration-200 select-none sm:text-sm',
                isActive
                  ? 'bg-white text-neutral-950 shadow-sm shadow-black/[0.04] dark:bg-neutral-700/90 dark:text-white'
                  : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white',
              )}
            >
              <Icon
                className={cn(
                  'h-4 w-4 transition-transform duration-200 group-hover:scale-105',
                  isActive ? 'text-blue-500 dark:text-blue-400' : 'opacity-70',
                )}
              />
              <span className={cn(isActive && 'font-semibold')}>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      {activeTab === 'logs' && <RitualLogsTab />}
      {activeTab === 'rules' && <AgentRulesTab />}
      {activeTab === 'map' && <StrengthMapTab />}
      {activeTab === 'story' && <ResilienceStoryTab />}
      {activeTab === 'resume' && <ResumePortfolioTab />}
    </motion.section>
  );
};

export default RitualAgent;
