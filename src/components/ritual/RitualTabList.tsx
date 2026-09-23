import React, { useRef } from 'react';
import { Calendar, Compass, Layers, type LucideIcon, Sparkles, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export type TabKey = 'logs' | 'rules' | 'map' | 'story' | 'resume';

export interface TabItem {
  key: TabKey;
  label: string;
  icon: LucideIcon;
}

const RITUAL_TABS: TabItem[] = [
  { key: 'logs', label: '리추얼 기록', icon: Calendar },
  { key: 'rules', label: '5대 규칙', icon: Terminal },
  { key: 'map', label: '강점 지도', icon: Compass },
  { key: 'story', label: '회복탄력성', icon: Sparkles },
  { key: 'resume', label: '포트폴리오', icon: Layers },
];

interface RitualTabListProps {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
  className?: string;
}

export const RitualTabList: React.FC<RitualTabListProps> = ({ activeTab, onTabChange, className }) => {
  const tabListRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation for ARIA tablist standard (ArrowLeft, ArrowRight, Home, End)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    let nextIndex = -1;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      nextIndex = (currentIndex + 1) % RITUAL_TABS.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      nextIndex = (currentIndex - 1 + RITUAL_TABS.length) % RITUAL_TABS.length;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = RITUAL_TABS.length - 1;
    }

    if (nextIndex !== -1) {
      e.preventDefault();
      const nextTab = RITUAL_TABS[nextIndex];
      onTabChange(nextTab.key);
      const buttons = tabListRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
      buttons?.[nextIndex]?.focus();
    }
  };

  return (
    <div
      ref={tabListRef}
      role="tablist"
      aria-label="리추얼 에이전트 서사 탐색 탭 목록"
      className={cn(
        'relative mt-4 grid w-full grid-cols-2 gap-1 rounded-xl border border-black/[0.06] bg-neutral-200/50 p-1 shadow-inner backdrop-blur-2xl sm:grid-cols-3 sm:gap-1.5 sm:p-1.5 md:grid-cols-5 dark:border-white/[0.08] dark:bg-neutral-950/60',
        className,
      )}
    >
      {RITUAL_TABS.map((tab, idx) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.key;
        const isLastOnTwoCols = idx === RITUAL_TABS.length - 1;

        return (
          <button
            key={tab.key}
            id={`ritual-tab-${tab.key}`}
            role="tab"
            aria-selected={isActive}
            aria-controls={`ritual-panel-${tab.key}`}
            tabIndex={isActive ? 0 : -1}
            type="button"
            onClick={() => onTabChange(tab.key)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            className={cn(
              'group relative flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-lg px-2 py-2 text-xs font-semibold transition-colors duration-150 select-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none sm:px-2.5 sm:text-xs md:text-sm',
              isLastOnTwoCols && 'col-span-2 sm:col-span-1 md:col-span-1',
              isActive
                ? 'text-neutral-950 dark:text-white'
                : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white',
            )}
          >
            {/* Sliding Active Pill Background (Framer Motion) */}
            {isActive && (
              <motion.div
                layoutId="activeRitualTabIndicator"
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                className="absolute inset-0 rounded-lg border border-black/[0.06] bg-white shadow-xs dark:border-white/10 dark:bg-neutral-800"
              />
            )}

            {/* Content Container (Layered above sliding pill) */}
            <span className="relative z-10 flex items-center justify-center gap-1.5 truncate">
              <Icon
                className={cn(
                  'h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:scale-110',
                  isActive
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-neutral-400 group-hover:text-neutral-600 dark:text-neutral-500 dark:group-hover:text-neutral-300',
                )}
              />
              <span
                className={cn(
                  'tracking-tight whitespace-nowrap underline-offset-4 transition-all group-hover:underline',
                  isActive
                    ? 'font-bold decoration-blue-500 dark:decoration-blue-400'
                    : 'font-medium decoration-neutral-400 dark:decoration-neutral-500',
                )}
              >
                {tab.label}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
};
