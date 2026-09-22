import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Trash2,
  Copy,
  Check,
  Terminal,
  ExternalLink,
  Users,
  Compass,
  Zap,
  Clock,
  Send,
  Calendar,
  Layers,
  ChevronRight,
  Sun,
  Moon,
  Bookmark,
  Search,
  X,
  SlidersHorizontal,
} from 'lucide-react';
import {
  STUDENT_INFO,
  RITUAL_LOGS,
  AGENT_RULES,
  AGENT_RULE_PRIORITY,
  STRENGTH_MAP,
  DELETED_STRENGTH_ITEMS,
  RESILIENCE_STORY,
  RESUME_AND_PORTFOLIO,
} from '../data/ritualData';
import { cn } from '../lib/utils';

interface RitualAgentProps {
  className?: string;
}

type TabKey = 'logs' | 'rules' | 'map' | 'story' | 'resume';

export const RitualAgent: React.FC<RitualAgentProps> = ({ className }) => {
  const [activeTab, setActiveTab] = useState<TabKey>('logs');
  const hidePeerNames = true;
  const [storyPerspective, setStoryPerspective] = useState<'first' | 'third' | 'split'>('split');
  const [copiedType, setCopiedType] = useState<string | null>(null);

  // Filter & Search State for Ritual Logs
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // AI Prompt Simulator State
  const [promptQuery, setPromptQuery] = useState('내 강점 후보를 반복 횟수와 함께 열 개 뽑아줘.');
  const [simulatedResponse, setSimulatedResponse] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  // Handle Copy to Clipboard
  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(label);
    setTimeout(() => setCopiedType(null), 2000);
  };

  // Run AI Simulation
  const handleRunSimulation = () => {
    setIsSimulating(true);
    setSimulatedResponse(null);
    setTimeout(() => {
      setIsSimulating(false);
      setSimulatedResponse(`[에이전트 5대 규칙 기반 분석 완료 - ${STUDENT_INFO.name} 수강생]

규칙 ② (반복성 우선) 및 규칙 ① (구체적 장면 매핑)에 따라 도출된 강점 후보 10개:

1. [4회 반복] 원리 탐구 및 저수준 프로토콜 디버깅 (2026.08.26 코드 에러 트러블슈팅, 2026.09.21 RBAC 권한 매트릭스)
2. [4회 반복] 동료 페어 멘토링 및 배움 나눔 (2026.08.12 kali 환경 설정, 2026.08.25 logging for문 원리 설명, 2026.09.17 조별 발표 자료)
3. [3회 반복] 루틴 기반 사전 점검 및 회복탄력성 (2026.08.24 시험 직후 아침 1등 도착, 2026.09.18 및 2026.09.22 당일 복습 루틴)
4. [2회 반복] W3C 표준 명세서 및 기술 문서 심층 독해 (2026.08.19 라이브 서비스 아키텍처, 2026.09.21 RBAC 설계)
5. [2회 반복] 웹 접근성(WCAG AA) 및 코드 품질 엄격 관리 (Oxlint 경고 0건, 키보드 네비게이션)
6. [2회 반복] 다이어그램 및 시각화를 통한 복잡 개념 전달 (조별 발표 슬라이드 구조화)
7. [1회 후보] 정돈된 아침 리추얼을 통한 작업 집중력 확보 (아침 7:40 도착 노트 정리)
8. [1회 후보] 다크 모드 및 반응형 UI 디테일 구현 (모노크롬 디자인 시스템)
9. [1회 후보 - 과장 의심] 전 팀원을 완벽히 장악한 카리스마형 리더십 (학생 검토 시 삭제 권고)
10. [1회 후보 - 과장 의심] 선천적 직관 기반 코딩 감각 (학생 검토 시 삭제 권고)

※ 상위 1~3위를 핵심 강점으로 채택하고, 9~10번의 과장된 항목은 지우고 이유를 남길 것을 추천합니다.`);
    }, 500);
  };

  // Filtered Ritual Logs
  const filteredLogs = RITUAL_LOGS.filter((log) => {
    const matchesCat = selectedCategory === '전체' || log.highlightCategory === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      log.date.includes(q) ||
      log.highlightExcerpt.toLowerCase().includes(q) ||
      log.morning.comfortableScene.toLowerCase().includes(q) ||
      log.morning.strengthEpisode.toLowerCase().includes(q) ||
      log.evening.reflection.toLowerCase().includes(q) ||
      log.evening.overcomeMoment.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  const categories = ['전체', '원리탐구', '배움나눔', '루틴회복', '조력리더십', '기술문제해결'] as const;

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
        {[
          { key: 'logs', label: '리추얼 기록', icon: Calendar },
          { key: 'rules', label: '5대 규칙', icon: Terminal },
          { key: 'map', label: '강점 지도', icon: Compass },
          { key: 'story', label: '회복탄력성 서사', icon: Sparkles },
          { key: 'resume', label: '포트폴리오 뼈대', icon: Layers },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key as TabKey)}
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

      {/* Tab 1: 내 리추얼 기록 (Ritual Logs) */}
      {activeTab === 'logs' && (
        <div className="mt-8 space-y-8">
          {/* Student-Selected Highlights (iOS Featured Inset Widget) */}
          <div className="rounded-3xl border border-black/[0.04] bg-neutral-100/60 p-5 backdrop-blur-xl sm:p-6 dark:border-white/[0.06] dark:bg-neutral-800/40">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2.5 text-neutral-900 dark:text-white">
                <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-blue-500 text-white shadow-sm shadow-blue-500/30">
                  <Bookmark className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold sm:text-base">
                    학생 본인이 직접 읽고 선별한 핵심 리추얼 발췌 대목 (T09-C02)
                  </h3>
                  <span className="text-[11px] text-neutral-400">수강생 장진영이 전수 정독 후 선별한 대표 일화</span>
                </div>
              </div>
              <span className="self-start rounded-full bg-blue-500/10 px-3 py-1 font-mono text-[11px] font-semibold text-blue-600 sm:self-auto dark:bg-blue-400/10 dark:text-blue-400">
                핵심 {RITUAL_LOGS.length}편 발췌
              </span>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {RITUAL_LOGS.map((log) => (
                <div
                  key={`highlight-${log.id}`}
                  className="group flex flex-col justify-between rounded-2xl border border-black/[0.04] bg-white/90 p-4.5 shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-black/[0.1] hover:shadow-md dark:border-white/[0.06] dark:bg-neutral-900/90 dark:hover:border-white/[0.15]"
                >
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 font-mono font-semibold text-neutral-600 dark:text-neutral-300">
                      <Clock className="h-3.5 w-3.5 text-blue-500" />
                      <span>
                        {log.date} ({log.dayOfWeek})
                      </span>
                    </div>
                    <span className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
                      {log.highlightCategory}
                    </span>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed font-normal text-neutral-800 dark:text-neutral-200">
                    "{log.highlightExcerpt}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Search & Category Filter Toolbar */}
          <div className="space-y-3.5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-sm font-bold tracking-tight text-neutral-900 sm:text-base dark:text-white">
                  날짜별 아침 및 마무리 리추얼 상세 기록 ({filteredLogs.length}건)
                </h3>
                <p className="text-xs text-neutral-400">
                  매일 기록된 편안했던 장면, 강점 일화, 동료 피드백 및 하루 돌아봄 아카이브
                </p>
              </div>

              {/* iOS Style Search Input */}
              <div className="relative min-w-[240px]">
                <Search className="pointer-events-none absolute top-1/2 left-3.5 h-3.5 w-3.5 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="날짜 또는 키워드 검색..."
                  className="w-full rounded-2xl border border-black/[0.06] bg-neutral-100/80 py-2 pr-9 pl-9 text-xs text-neutral-900 placeholder-neutral-400 backdrop-blur-md transition-all focus:border-blue-500 focus:bg-white focus:outline-none dark:border-white/[0.08] dark:bg-neutral-800/60 dark:text-white dark:focus:bg-neutral-900"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute top-1/2 right-3 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-white"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter Chips */}
            <div className="flex scrollbar-none items-center gap-1.5 overflow-x-auto pb-1">
              <SlidersHorizontal className="mr-1 h-3.5 w-3.5 shrink-0 text-neutral-400" />
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                const count =
                  cat === '전체' ? RITUAL_LOGS.length : RITUAL_LOGS.filter((l) => l.highlightCategory === cat).length;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      'inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-150 select-none',
                      isSelected
                        ? 'bg-neutral-950 font-semibold text-white shadow-sm dark:bg-white dark:text-neutral-950'
                        : 'bg-neutral-100/80 text-neutral-600 hover:bg-neutral-200/80 hover:text-neutral-900 dark:bg-neutral-800/60 dark:text-neutral-300 dark:hover:bg-neutral-700/80 dark:hover:text-white',
                    )}
                  >
                    <span>{cat}</span>
                    <span
                      className={cn(
                        'py-0.2 rounded-full px-1.5 text-[10px] font-bold',
                        isSelected
                          ? 'bg-white/20 text-white dark:bg-black/20 dark:text-neutral-950'
                          : 'bg-black/5 text-neutral-500 dark:bg-white/10 dark:text-neutral-400',
                      )}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Full Daily Ritual Timeline Cards - 2 Columns */}
          {filteredLogs.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-neutral-300 py-12 text-center dark:border-neutral-700">
              <Search className="h-8 w-8 text-neutral-300 dark:text-neutral-600" />
              <p className="mt-3 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                일치하는 리추얼 기록이 없습니다
              </p>
              <p className="mt-1 text-xs text-neutral-400">다른 검색어나 카테고리를 선택해 보세요.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('전체');
                  setSearchQuery('');
                }}
                className="mt-4 rounded-xl bg-neutral-100 px-4 py-1.5 text-xs font-semibold text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
              >
                필터 초기화
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4.5 md:grid-cols-2">
              {filteredLogs.map((log, idx) => {
                const morningPeer = hidePeerNames
                  ? log.morning.peerFeedback
                  : log.morning.peerFeedback
                      .replace(/\[동료 K\]/g, '김OO')
                      .replace(/\[동료 S\]/g, '신OO')
                      .replace(/\[동료 B\]/g, '박OO')
                      .replace(/\[동료 A\]/g, '안OO')
                      .replace(/\[동료 L\]/g, '이OO')
                      .replace(/\[동료 T\]/g, '최OO')
                      .replace(/\[동료 Y\]/g, '유OO');
                const eveningGratitude = hidePeerNames
                  ? log.evening.gratitude
                  : log.evening.gratitude
                      .replace(/\[동료 A\]/g, '안OO')
                      .replace(/\[동료 B\]/g, '박OO')
                      .replace(/\[동료 J\]/g, '정OO')
                      .replace(/\[동료 C\]/g, '최OO')
                      .replace(/\[동료 H\]/g, '한OO')
                      .replace(/\[멘토 M\]/g, '문OO 멘토');

                return (
                  <div
                    key={log.id}
                    className="flex flex-col justify-between overflow-hidden rounded-3xl border border-black/[0.05] bg-white/75 shadow-sm backdrop-blur-2xl transition-all duration-200 hover:-translate-y-0.5 hover:border-black/[0.1] hover:shadow-lg dark:border-white/[0.08] dark:bg-neutral-900/65 dark:hover:border-white/[0.15]"
                  >
                    {/* Card Top Title Row */}
                    <div className="flex items-center justify-between border-b border-black/[0.04] bg-neutral-50/70 px-4.5 py-3 text-xs dark:border-white/[0.06] dark:bg-neutral-800/40">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-5.5 w-5.5 items-center justify-center rounded-full bg-neutral-950 font-mono text-[10px] font-bold text-white shadow-xs dark:bg-white dark:text-neutral-950">
                          {idx + 1}
                        </span>
                        <div className="flex items-baseline gap-1.5">
                          <span className="font-mono text-xs font-bold text-neutral-950 sm:text-sm dark:text-white">
                            {log.date}
                          </span>
                          <span className="text-[11px] font-medium text-neutral-400">({log.dayOfWeek})</span>
                        </div>
                      </div>
                      <span className="rounded-full bg-neutral-200/70 px-2.5 py-0.5 text-[11px] font-semibold text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                        {log.highlightCategory}
                      </span>
                    </div>

                    {/* Morning & Evening iOS Inset Cards */}
                    <div className="flex flex-1 flex-col gap-3.5 p-4 sm:p-5">
                      {/* Morning Ritual Card */}
                      <div className="rounded-2xl border border-amber-500/10 bg-amber-500/[0.04] p-3.5 transition-colors dark:border-amber-400/10 dark:bg-amber-400/[0.04]">
                        <div className="flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-400">
                          <Sun className="h-4 w-4" />
                          <span>아침 리추얼</span>
                        </div>
                        <div className="mt-2.5 space-y-2 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
                          <div className="flex items-start gap-1.5">
                            <span className="shrink-0 font-semibold text-neutral-900 dark:text-white">
                              편안했던 장면:
                            </span>
                            <span>{log.morning.comfortableScene}</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="shrink-0 font-semibold text-neutral-900 dark:text-white">강점 일화:</span>
                            <span>{log.morning.strengthEpisode}</span>
                          </div>
                          <div className="rounded-xl bg-amber-500/10 p-2 text-[11px] text-amber-950 dark:bg-amber-400/10 dark:text-amber-200">
                            <span className="font-bold">동료 피드백:</span> {morningPeer}
                          </div>
                          <div className="flex items-start gap-1.5 text-[11px] text-neutral-500 dark:text-neutral-400">
                            <span className="shrink-0 font-medium text-neutral-700 dark:text-neutral-300">
                              작은 행동:
                            </span>
                            <span>{log.morning.smallAction}</span>
                          </div>
                        </div>
                      </div>

                      {/* Evening Ritual Card */}
                      <div className="rounded-2xl border border-indigo-500/10 bg-indigo-500/[0.04] p-3.5 transition-colors dark:border-indigo-400/10 dark:bg-indigo-400/[0.04]">
                        <div className="flex items-center gap-2 text-xs font-bold text-indigo-700 dark:text-indigo-400">
                          <Moon className="h-4 w-4" />
                          <span>마무리 리추얼</span>
                        </div>
                        <div className="mt-2.5 space-y-2 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
                          <div className="flex items-start gap-1.5">
                            <span className="shrink-0 font-semibold text-neutral-900 dark:text-white">
                              하루 돌아봄:
                            </span>
                            <span>{log.evening.reflection}</span>
                          </div>
                          <div className="rounded-xl bg-indigo-500/10 p-2 text-[11px] text-indigo-950 dark:bg-indigo-400/10 dark:text-indigo-200">
                            <span className="font-bold">감사한 순간:</span> {eveningGratitude}
                          </div>
                          <div className="flex items-start gap-1.5 text-[11px] text-neutral-500 dark:text-neutral-400">
                            <span className="shrink-0 font-medium text-neutral-700 dark:text-neutral-300">
                              극복한 고비:
                            </span>
                            <span>{log.evening.overcomeMoment}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Tab 2: 에이전트 5대 규칙 & 시뮬레이터 */}
      {activeTab === 'rules' && (
        <div className="mt-8 space-y-8">
          {/* Priority Callout Widget */}
          <div className="flex items-center gap-4 rounded-3xl bg-amber-500/10 p-5 backdrop-blur-xl dark:bg-amber-500/15">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-md shadow-amber-500/30">
              <Zap className="h-5 w-5" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[11px] font-bold tracking-wider text-amber-600 uppercase dark:text-amber-400">
                규칙 충돌 시 우선순위 원칙 (T09-C05)
              </span>
              <p className="text-xs font-bold text-neutral-900 sm:text-sm dark:text-white">{AGENT_RULE_PRIORITY}</p>
            </div>
          </div>

          {/* 5 Rules iOS Cards Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AGENT_RULES.map((rule) => (
              <div
                key={rule.id}
                className={cn(
                  'relative flex flex-col justify-between rounded-3xl border border-black/[0.05] bg-white/70 p-6 shadow-sm backdrop-blur-2xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-white/[0.08] dark:bg-neutral-900/60',
                  rule.id === 4 && 'ring-2 ring-blue-500/30',
                )}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-neutral-950 text-xs font-bold text-white dark:bg-white dark:text-neutral-950">
                      0{rule.id}
                    </span>
                    {rule.id === 4 && (
                      <span className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-blue-600 dark:bg-blue-400/20 dark:text-blue-400">
                        T09-C04 필수
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-neutral-400">{rule.title}</h3>
                    <h4 className="mt-0.5 text-sm font-bold text-neutral-950 sm:text-base dark:text-white">
                      {rule.name}
                    </h4>
                  </div>
                  <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">{rule.description}</p>
                </div>

                <div className="mt-5 space-y-2 border-t border-black/[0.04] pt-4 text-xs dark:border-white/[0.06]">
                  <div className="rounded-xl bg-neutral-100/80 p-3 text-[11px] text-neutral-700 dark:bg-neutral-800/60 dark:text-neutral-300">
                    <strong className="font-semibold text-neutral-950 dark:text-white">적용 예시:</strong>{' '}
                    {rule.example}
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    💡 <em>{rule.rationale}</em>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive AI Agent Siri/Intelligence Simulator Card */}
          <div className="overflow-hidden rounded-3xl border border-black/[0.08] bg-neutral-950 p-6 text-white shadow-2xl backdrop-blur-3xl dark:border-white/[0.12]">
            <div className="flex items-center justify-between border-b border-white/[0.1] pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-500 shadow-md shadow-blue-500/40">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white sm:text-sm">리추얼 인텔리전스 질의기</h3>
                  <p className="text-[11px] text-neutral-400">에이전트 5대 규칙 기반 실시간 분석</p>
                </div>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-[10px] font-medium text-emerald-400">
                Active Mode
              </span>
            </div>

            <div className="mt-5 space-y-4">
              <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
                <input
                  type="text"
                  value={promptQuery}
                  onChange={(e) => setPromptQuery(e.target.value)}
                  className="flex-1 rounded-2xl border border-white/[0.12] bg-white/[0.06] px-4 py-3 text-xs text-white placeholder-neutral-500 transition-all focus:border-blue-500 focus:bg-white/[0.1] focus:outline-none"
                  placeholder="에이전트에게 질의를 입력하세요"
                />
                <button
                  type="button"
                  onClick={handleRunSimulation}
                  disabled={isSimulating}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-500 px-6 py-3 text-xs font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-400 active:scale-95 disabled:opacity-50"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>{isSimulating ? '분석 중...' : '분석 실행'}</span>
                </button>
              </div>

              {simulatedResponse && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-5 font-mono text-xs leading-relaxed whitespace-pre-line text-emerald-300"
                >
                  {simulatedResponse}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: 강점 지도 & 지운 항목 */}
      {activeTab === 'map' && (
        <div className="mt-8 space-y-8">
          {/* Deleted Items Section (iOS Warning Inset) */}
          <div className="rounded-3xl bg-rose-500/[0.07] p-5 backdrop-blur-xl sm:p-6 dark:bg-rose-500/10">
            <div className="flex items-center gap-2.5 text-rose-600 dark:text-rose-400">
              <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-rose-500 text-white shadow-sm shadow-rose-500/30">
                <Trash2 className="h-4 w-4" />
              </div>
              <h3 className="text-sm font-bold sm:text-base">
                에이전트 제안 중 학생 본인이 직접 지운 항목과 지운 이유 (T09-C10)
              </h3>
            </div>
            <p className="mt-2 text-xs text-neutral-600 sm:text-sm dark:text-neutral-400">
              AI가 부풀리거나 사실과 다르게 제안한 내용을 학생이 비판적으로 검토하여 삭제하고 정정한 기록입니다.
            </p>

            <div className="mt-4 space-y-3">
              {DELETED_STRENGTH_ITEMS.map((item, idx) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-black/[0.04] bg-white/90 p-4.5 shadow-sm backdrop-blur-md dark:border-white/[0.06] dark:bg-neutral-900/90"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500/10 text-[10px] font-bold text-rose-600 dark:bg-rose-500/20 dark:text-rose-400">
                      ✕ 0{idx + 1}
                    </span>
                    <h4 className="text-xs font-bold text-neutral-400 line-through">{item.agentProposal}</h4>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
                    <strong className="font-semibold text-rose-600 dark:text-rose-400">지운 이유:</strong>{' '}
                    {item.deletedReason}
                  </p>
                  <p className="mt-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    ➔ 정정 결과: {item.correction}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3 Major Strengths iOS Cards */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-tight text-neutral-900 sm:text-base dark:text-white">
              검증 완료된 상위 3대 강점 지도 (T09-C06 ~ T09-C09)
            </h3>

            <div className="space-y-4">
              {STRENGTH_MAP.map((st) => (
                <div
                  key={st.id}
                  className="rounded-3xl border border-black/[0.05] bg-white/70 p-6 shadow-sm backdrop-blur-2xl transition-all duration-200 hover:border-black/[0.1] dark:border-white/[0.08] dark:bg-neutral-900/60"
                >
                  <div className="flex items-center gap-3 border-b border-black/[0.04] pb-4 dark:border-white/[0.06]">
                    <span className="flex h-8 w-8 items-center justify-center rounded-2xl bg-blue-500 text-xs font-bold text-white shadow-md shadow-blue-500/30">
                      0{st.rank}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-950 sm:text-base dark:text-white">{st.title}</h4>
                      <span className="text-xs text-neutral-400">{st.coreKeyword}</span>
                    </div>
                  </div>

                  {/* 4 iOS Sub-Cards Grid */}
                  <div className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
                    {/* 1. Date Scene */}
                    <div className="flex flex-col justify-between rounded-2xl bg-blue-500/[0.05] p-4 dark:bg-blue-400/[0.05]">
                      <div>
                        <span className="inline-block rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-bold text-blue-600 dark:bg-blue-400/20 dark:text-blue-400">
                          ① 날짜 있는 장면
                        </span>
                        <p className="mt-2.5 font-mono text-[11px] font-semibold text-neutral-900 dark:text-white">
                          📅 {st.dateScene.date}
                        </p>
                        <p className="mt-1.5 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
                          {st.dateScene.scene}
                        </p>
                      </div>
                    </div>

                    {/* 2. Peer Feedback */}
                    <div className="flex flex-col justify-between rounded-2xl bg-emerald-500/[0.05] p-4 dark:bg-emerald-400/[0.05]">
                      <div>
                        <span className="inline-block rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold text-emerald-600 dark:bg-emerald-400/20 dark:text-emerald-400">
                          ② 동료 피드백 / 느낌
                        </span>
                        <p className="mt-2.5 text-[11px] font-semibold text-neutral-900 dark:text-white">
                          💬 {st.peerFeedbackOrFeeling.speaker}
                        </p>
                        <p className="mt-1.5 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
                          "{st.peerFeedbackOrFeeling.content}"
                        </p>
                      </div>
                    </div>

                    {/* 3. Preserved Value */}
                    <div className="flex flex-col justify-between rounded-2xl bg-amber-500/[0.05] p-4 dark:bg-amber-400/[0.05]">
                      <div>
                        <span className="inline-block rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-bold text-amber-600 dark:bg-amber-400/20 dark:text-amber-400">
                          ③ 그때 지킨 가치
                        </span>
                        <p className="mt-2.5 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
                          {st.preservedValue}
                        </p>
                      </div>
                    </div>

                    {/* 4. Related Tasks */}
                    <div className="flex flex-col justify-between rounded-2xl bg-purple-500/[0.05] p-4 dark:bg-purple-400/[0.05]">
                      <div>
                        <span className="inline-block rounded-full bg-purple-500/10 px-2.5 py-0.5 text-[10px] font-bold text-purple-600 dark:bg-purple-400/20 dark:text-purple-400">
                          ④ 관련 1~8번 과제
                        </span>
                        <div className="mt-2.5 space-y-2 text-xs">
                          {st.relatedTasks.map((task) => (
                            <div
                              key={task.taskNum}
                              className="border-b border-black/[0.04] pb-1.5 last:border-0 dark:border-white/[0.06]"
                            >
                              <a
                                href={task.link}
                                className="inline-flex items-center gap-1 font-semibold text-purple-600 hover:underline dark:text-purple-400"
                              >
                                {task.taskNum}: {task.taskTitle}
                                <ChevronRight className="h-3 w-3" />
                              </a>
                              <p className="text-[11px] text-neutral-500 dark:text-neutral-400">{task.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: 회복탄력성 서사 */}
      {activeTab === 'story' && (
        <div className="mt-8 space-y-8">
          {/* 3-Part Overview Widgets */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-black/[0.05] bg-white/70 p-5 shadow-sm backdrop-blur-2xl dark:border-white/[0.08] dark:bg-neutral-900/60">
              <span className="rounded-full bg-rose-500/10 px-2.5 py-0.5 text-[10px] font-bold text-rose-600 dark:bg-rose-500/20 dark:text-rose-400">
                1부 // 고난 (T09-C11)
              </span>
              <div className="mt-2.5 font-mono text-xs font-semibold text-neutral-950 dark:text-white">
                {RESILIENCE_STORY.part1_hardship.title}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">
                {RESILIENCE_STORY.part1_hardship.content}
              </p>
            </div>

            <div className="rounded-3xl border border-black/[0.05] bg-white/70 p-5 shadow-sm backdrop-blur-2xl dark:border-white/[0.08] dark:bg-neutral-900/60">
              <span className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-bold text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                2부 // 다시 일어난 날
              </span>
              <p className="mt-2.5 text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">
                {RESILIENCE_STORY.part2_rebound.whatChanged}
              </p>
              <div className="mt-3 rounded-2xl bg-blue-500/[0.06] p-3 text-[11px] leading-relaxed text-neutral-900 dark:bg-blue-400/[0.08] dark:text-neutral-100">
                <strong>ALEPH 재현 ({RESILIENCE_STORY.part2_rebound.alephEchoScene.date}):</strong>{' '}
                {RESILIENCE_STORY.part2_rebound.alephEchoScene.scene}
              </div>
            </div>

            <div className="rounded-3xl border border-black/[0.05] bg-white/70 p-5 shadow-sm backdrop-blur-2xl dark:border-white/[0.08] dark:bg-neutral-900/60">
              <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
                3부 // 더 나아진 나
              </span>
              <p className="mt-2.5 text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">
                {RESILIENCE_STORY.part3_improvedMe.currentChange}
              </p>
              <p className="mt-3 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                🎯 {RESILIENCE_STORY.part3_improvedMe.futureVision}
              </p>
            </div>
          </div>

          {/* Perspective View Switcher: Split vs 1st vs 3rd */}
          <div className="space-y-5 rounded-3xl border border-black/[0.05] bg-white/70 p-6 shadow-sm backdrop-blur-2xl sm:p-7 dark:border-white/[0.08] dark:bg-neutral-900/60">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-blue-500" />
                <h3 className="text-sm font-bold sm:text-base">3인칭 초안과 1인칭 완성본 나란히 보존 (T09-C12)</h3>
              </div>

              {/* iOS Segmented Pill */}
              <div className="flex rounded-xl bg-neutral-200/50 p-1 backdrop-blur-lg dark:bg-neutral-800/80">
                {(['split', 'first', 'third'] as const).map((view) => (
                  <button
                    key={view}
                    type="button"
                    onClick={() => setStoryPerspective(view)}
                    className={cn(
                      'rounded-lg px-3 py-1 text-xs font-medium transition-all',
                      storyPerspective === view
                        ? 'bg-white font-semibold text-neutral-950 shadow-sm dark:bg-neutral-700 dark:text-white'
                        : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white',
                    )}
                  >
                    {view === 'split' ? '듀얼 뷰' : view === 'first' ? '1인칭 완성본' : '3인칭 초안'}
                  </button>
                ))}
              </div>
            </div>

            {/* Split Panels */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {(storyPerspective === 'split' || storyPerspective === 'third') && (
                <div className="space-y-3 rounded-2xl bg-neutral-100/60 p-5 dark:bg-neutral-800/40">
                  <div className="flex items-center justify-between border-b border-black/[0.04] pb-2.5 dark:border-white/[0.06]">
                    <span className="text-xs font-bold text-neutral-700 dark:text-neutral-300">
                      🤖 에이전트 3인칭 초안 ("장진영 님은...")
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(RESILIENCE_STORY.thirdPersonDraft, 'third')}
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                    >
                      {copiedType === 'third' ? (
                        <Check className="h-3 w-3 text-emerald-500" />
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                      <span>{copiedType === 'third' ? '복사됨' : '복사'}</span>
                    </button>
                  </div>
                  <p className="text-xs leading-relaxed whitespace-pre-line text-neutral-700 dark:text-neutral-300">
                    {RESILIENCE_STORY.thirdPersonDraft}
                  </p>
                </div>
              )}

              {(storyPerspective === 'split' || storyPerspective === 'first') && (
                <div className="space-y-3 rounded-2xl bg-blue-500/[0.05] p-5 dark:bg-blue-400/[0.05]">
                  <div className="flex items-center justify-between border-b border-blue-500/10 pb-2.5">
                    <span className="text-xs font-bold text-blue-900 dark:text-blue-300">
                      ✍️ 학생 직접 정제 1인칭 완성본 ("나는...")
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(RESILIENCE_STORY.firstPersonFinal, 'first')}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400"
                    >
                      {copiedType === 'first' ? (
                        <Check className="h-3 w-3 text-emerald-500" />
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                      <span>{copiedType === 'first' ? '복사됨' : '복사'}</span>
                    </button>
                  </div>
                  <p className="text-xs leading-relaxed whitespace-pre-line text-neutral-800 dark:text-neutral-200">
                    {RESILIENCE_STORY.firstPersonFinal}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Anonymous Peer Feedbacks */}
          <div className="rounded-3xl border border-black/[0.05] bg-white/70 p-6 shadow-sm backdrop-blur-2xl sm:p-7 dark:border-white/[0.08] dark:bg-neutral-900/60">
            <div className="flex items-center gap-2 text-neutral-900 dark:text-white">
              <Users className="h-4 w-4 text-emerald-500" />
              <h3 className="text-sm font-bold sm:text-base">동료 두 사람의 이름 없는 피드백 (T09-C13)</h3>
            </div>
            <p className="mt-1 text-xs text-neutral-400">
              1인칭 완성본을 읽히고 "나 같은가?", "지어낸 느낌이 있는가?" 두 질문에 대한 솔직한 응답입니다.
            </p>

            <div className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {RESILIENCE_STORY.peerFeedbacks.map((fb) => (
                <div key={fb.id} className="rounded-2xl bg-neutral-100/60 p-4.5 dark:bg-neutral-800/40">
                  <span className="inline-block rounded-full bg-neutral-200/80 px-2.5 py-0.5 text-xs font-semibold text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200">
                    {fb.peerLabel}
                  </span>
                  <div className="mt-3 space-y-2.5 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
                    <p>
                      <strong className="font-semibold text-neutral-900 dark:text-white">Q1. 나 같아?</strong>
                      <br />
                      👉 "{fb.isLikeMe}"
                    </p>
                    <p>
                      <strong className="font-semibold text-neutral-900 dark:text-white">
                        Q2. 지어낸 느낌이 있어?
                      </strong>
                      <br />
                      👉 "{fb.isFabricated}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: 자기소개서 초안 & 포트폴리오 뼈대 */}
      {activeTab === 'resume' && (
        <div className="mt-8 space-y-8">
          {/* Resume Draft Inset Card - 상태: 작성중 */}
          <div className="rounded-3xl border border-black/[0.05] bg-white/70 p-6 shadow-sm backdrop-blur-2xl sm:p-7 dark:border-white/[0.08] dark:bg-neutral-900/60">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-blue-500" />
                <h3 className="text-sm font-bold sm:text-base">자기소개서 (T09-C14)</h3>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-600 dark:bg-amber-500/20 dark:text-amber-400">
                <Clock className="h-3 w-3" />
                상태: 작성중
              </span>
            </div>

            <div className="mt-4 rounded-2xl bg-amber-500/[0.06] p-5 text-xs leading-relaxed text-neutral-800 sm:text-sm dark:bg-amber-400/[0.06] dark:text-neutral-200">
              <p className="font-semibold">
                📝 리추얼 기록 및 회복탄력성 서사를 바탕으로 현재 완성도 높은 자기소개서 본문을 집필 및 검토하고
                있습니다.
              </p>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                3대 강점별 1~8번 과제 산출물 매핑 포트폴리오 뼈대와 함께 연계되어 완성될 예정입니다.
              </p>
            </div>
          </div>

          {/* Portfolio Framework Widgets */}
          <div className="rounded-3xl border border-black/[0.05] bg-white/70 p-6 shadow-sm backdrop-blur-2xl sm:p-7 dark:border-white/[0.08] dark:bg-neutral-900/60">
            <div className="flex items-center gap-2">
              <Compass className="h-4 w-4 text-indigo-500" />
              <h3 className="text-sm font-bold sm:text-base">
                포트폴리오 뼈대 (1~8번 과제 매핑 및 향후 슬롯 · T09-C15)
              </h3>
            </div>
            <p className="mt-1 text-xs text-neutral-400">
              개발자 장진영의 3대 핵심 강점 아래 1번부터 8번 과제 산출물을 실증 증거로 배치한 구조입니다.
            </p>

            <div className="mt-5 space-y-4">
              {RESUME_AND_PORTFOLIO.portfolioFramework.map((fw) => (
                <div key={fw.strengthTitle} className="rounded-2xl bg-neutral-100/60 p-4.5 dark:bg-neutral-800/40">
                  <h4 className="text-xs font-bold text-neutral-900 sm:text-sm dark:text-white">{fw.strengthTitle}</h4>

                  <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                    {fw.relatedArtifacts.map((art) => (
                      <a
                        key={art.taskId}
                        href={art.artifactLink}
                        className="group flex flex-col justify-between rounded-xl border border-black/[0.04] bg-white/90 p-3.5 shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-white/[0.06] dark:bg-neutral-900/90"
                      >
                        <div>
                          <div className="flex items-center justify-between text-xs font-semibold">
                            <span className="text-blue-500">{art.taskId}</span>
                            <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                          </div>
                          <p className="mt-1 text-xs font-bold text-neutral-950 dark:text-white">{art.taskName}</p>
                        </div>
                        <p className="mt-2 text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400">
                          {art.roleInStrength}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              ))}

              {/* Future Task Slots */}
              <div className="rounded-2xl bg-neutral-100/40 p-4 dark:bg-neutral-800/20">
                <span className="text-xs font-semibold text-neutral-400">향후 과제 연계 슬롯 (완성을 위해 비워둠)</span>
                <div className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-3">
                  {RESUME_AND_PORTFOLIO.futureTaskSlots.map((slot) => (
                    <div
                      key={slot.taskNum}
                      className="rounded-xl border border-dashed border-black/[0.1] bg-white/50 p-3 text-center text-xs dark:border-white/[0.1] dark:bg-neutral-900/40"
                    >
                      <span className="font-bold text-neutral-800 dark:text-neutral-200">{slot.taskNum}</span>
                      <p className="mt-0.5 text-[11px] text-neutral-400">{slot.title}</p>
                      <span className="mt-1.5 inline-block rounded-full bg-neutral-200/60 px-2 py-0.5 text-[10px] font-medium text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
                        {slot.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* AI & Student Judgment 3 Lines */}
          <div className="rounded-3xl border border-black/[0.05] bg-white/70 p-6 shadow-sm backdrop-blur-2xl sm:p-7 dark:border-white/[0.08] dark:bg-neutral-900/60">
            <h3 className="text-sm font-bold text-neutral-950 sm:text-base dark:text-white">
              AI와 나의 판단 3줄 (T09-C16)
            </h3>
            <div className="mt-4 space-y-2 text-xs sm:text-sm">
              <div className="rounded-2xl bg-neutral-100/70 p-4 dark:bg-neutral-800/40">
                <strong className="font-semibold text-blue-600 dark:text-blue-400">① AI에게 맡긴 일:</strong>{' '}
                <span className="text-neutral-700 dark:text-neutral-300">
                  {RESUME_AND_PORTFOLIO.aiJudgment.delegatedToAi}
                </span>
              </div>
              <div className="rounded-2xl bg-neutral-100/70 p-4 dark:bg-neutral-800/40">
                <strong className="font-semibold text-emerald-600 dark:text-emerald-400">② 내가 직접 판단한 일:</strong>{' '}
                <span className="text-neutral-700 dark:text-neutral-300">
                  {RESUME_AND_PORTFOLIO.aiJudgment.studentJudged}
                </span>
              </div>
              <div className="rounded-2xl bg-neutral-100/70 p-4 dark:bg-neutral-800/40">
                <strong className="font-semibold text-rose-600 dark:text-rose-400">③ AI 제안을 따르지 않은 일:</strong>{' '}
                <span className="text-neutral-700 dark:text-neutral-300">
                  {RESUME_AND_PORTFOLIO.aiJudgment.rejectedAiProposal}
                </span>
              </div>
            </div>
          </div>

          {/* 4-Line Quick Verification */}
          <div className="rounded-3xl border border-black/[0.05] bg-white/70 p-6 shadow-sm backdrop-blur-2xl sm:p-7 dark:border-white/[0.08] dark:bg-neutral-900/60">
            <h3 className="text-sm font-bold text-neutral-950 sm:text-base dark:text-white">
              짧은 확인 방법 4줄 (T09-C17)
            </h3>
            <div className="mt-4 space-y-2.5 text-xs leading-relaxed text-neutral-700 sm:text-sm dark:text-neutral-300">
              <p>
                <strong className="font-semibold text-neutral-900 dark:text-white">1. 어디로 가나요:</strong>{' '}
                {RESUME_AND_PORTFOLIO.quickVerification4Lines.whereToGo}
              </p>
              <p>
                <strong className="font-semibold text-neutral-900 dark:text-white">
                  2. 세 단계 안에 무엇을 하나요:
                </strong>
                <br />
                <span className="whitespace-pre-line text-neutral-500 dark:text-neutral-400">
                  {RESUME_AND_PORTFOLIO.quickVerification4Lines.whatToDoIn3Steps}
                </span>
              </p>
              <p>
                <strong className="font-semibold text-neutral-900 dark:text-white">3. 무엇이 보이면 통과인가요:</strong>{' '}
                {RESUME_AND_PORTFOLIO.quickVerification4Lines.whatShowsSuccess}
              </p>
              <p>
                <strong className="font-semibold text-neutral-900 dark:text-white">4. 안 될 때 무엇이 보이나요:</strong>{' '}
                {RESUME_AND_PORTFOLIO.quickVerification4Lines.whatShowsFailure}
              </p>
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default RitualAgent;
