import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { STUDENT_INFO } from '../data/ritualData';
import { cn } from '../lib/utils';
import { RitualLogsTab } from './ritual/RitualLogsTab';
import { AgentRulesTab } from './ritual/AgentRulesTab';
import { StrengthMapTab } from './ritual/StrengthMapTab';
import { ResilienceStoryTab } from './ritual/ResilienceStoryTab';
import { ResumePortfolioTab } from './ritual/ResumePortfolioTab';
import { RitualTabList, type TabKey } from './ritual/RitualTabList';

interface RitualAgentProps {
  className?: string;
}

export const RitualAgent: React.FC<RitualAgentProps> = ({ className }) => {
  const [activeTab, setActiveTab] = useState<TabKey>('logs');

  return (
    <motion.section
      id="ritual-agent"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'relative scroll-mt-24 overflow-hidden rounded-4xl border border-black/8 bg-white/80 p-6 shadow-2xl shadow-black/4 backdrop-blur-3xl transition-all sm:p-9 lg:p-10 dark:border-white/12 dark:bg-neutral-900/80 dark:shadow-none',
        className,
      )}
    >
      {/* iOS Dynamic Ambient Light Reflection */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-125 -translate-x-1/2 rounded-full bg-linear-to-b from-blue-500/10 to-transparent blur-3xl dark:from-blue-400/10" />

      {/* iOS App Header Widget */}
      <div className="relative border-b border-black/6 pb-6 dark:border-white/8">
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
      <RitualTabList activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Tab Panels with Fast Top-to-Bottom Blur Entrance */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          id={`ritual-panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`ritual-tab-${activeTab}`}
          initial={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
          animate={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 0.16, ease: [0.22, 1, 0.36, 1] },
          }}
          exit={{
            opacity: 0,
            y: 4,
            filter: 'blur(3px)',
            transition: { duration: 0.08, ease: 'easeIn' },
          }}
        >
          {activeTab === 'logs' && <RitualLogsTab />}
          {activeTab === 'rules' && <AgentRulesTab />}
          {activeTab === 'map' && <StrengthMapTab />}
          {activeTab === 'story' && <ResilienceStoryTab />}
          {activeTab === 'resume' && <ResumePortfolioTab />}
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
};

export default RitualAgent;
