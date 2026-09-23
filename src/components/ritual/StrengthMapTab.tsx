import React from 'react';
import { Trash2, ChevronRight, Calendar, MessageSquareQuote, ShieldCheck, Layers, Sparkles, Check } from 'lucide-react';
import { DELETED_STRENGTH_ITEMS, STRENGTH_MAP } from '../../data/ritualData';
import { cn } from '../../lib/utils';

const RANK_ACCENTS = [
  {
    bg: 'from-blue-600 to-cyan-600',
    border: 'border-blue-500/20',
    ring: 'ring-blue-500/20',
    text: 'text-blue-600 dark:text-blue-400',
    badgeBg: 'bg-blue-500/10 text-blue-600 dark:bg-blue-400/20 dark:text-blue-300',
  },
  {
    bg: 'from-emerald-600 to-teal-600',
    border: 'border-emerald-500/20',
    ring: 'ring-emerald-500/20',
    text: 'text-emerald-600 dark:text-emerald-400',
    badgeBg: 'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/20 dark:text-emerald-300',
  },
  {
    bg: 'from-amber-600 to-orange-600',
    border: 'border-amber-500/20',
    ring: 'ring-amber-500/20',
    text: 'text-amber-600 dark:text-amber-400',
    badgeBg: 'bg-amber-500/10 text-amber-600 dark:bg-amber-400/20 dark:text-amber-300',
  },
];

export const StrengthMapTab: React.FC = () => {
  return (
    <div className="mt-8 space-y-8">
      {/* Deleted Items Section (T09-C10) */}
      <div className="relative overflow-hidden rounded-3xl border border-rose-500/20 bg-linear-to-b from-rose-500/[0.08] via-rose-500/[0.03] to-transparent p-5 backdrop-blur-xl sm:p-7 dark:border-rose-400/20 dark:from-rose-400/10 dark:via-rose-400/[0.04]">
        <div className="pointer-events-none absolute -top-12 -right-12 h-36 w-36 rounded-full bg-rose-500/10 blur-2xl" />

        <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-rose-600 to-rose-400 text-white shadow-md shadow-rose-500/30">
              <Trash2 className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-neutral-950 sm:text-base dark:text-white">
                  에이전트 제안 중 학생 본인이 직접 지운 항목과 지운 이유 (T09-C10)
                </h3>
              </div>
              <p className="text-xs text-neutral-600 sm:text-sm dark:text-neutral-400">
                AI가 과장하거나 사실과 다르게 생성한 제안을 학생이 주도적으로 검증하고 팩트 기반으로 정정한 기록입니다.
              </p>
            </div>
          </div>
          <span className="shrink-0 self-start rounded-full border border-rose-500/20 bg-rose-500/10 px-3 py-1 text-xs font-bold text-rose-600 sm:self-auto dark:border-rose-400/30 dark:bg-rose-400/20 dark:text-rose-300">
            3건 삭제 및 정정 완료
          </span>
        </div>

        {/* Deleted Cards Grid */}
        <div className="relative mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
          {DELETED_STRENGTH_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-2xl border border-black/[0.06] bg-white/90 p-4.5 shadow-xs backdrop-blur-md transition-all hover:border-rose-500/30 dark:border-white/[0.08] dark:bg-neutral-900/85"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 rounded-full bg-rose-500/10 px-2 py-0.5 text-[10px] font-bold text-rose-600 dark:bg-rose-500/20 dark:text-rose-400">
                    ✕ 삭제 0{idx + 1}
                  </span>
                  <span className="font-mono text-[10px] text-neutral-400">AI Draft</span>
                </div>

                <div className="rounded-xl bg-rose-50/70 p-2.5 dark:bg-rose-950/30">
                  <span className="text-[10px] font-semibold text-rose-700 uppercase dark:text-rose-400">
                    제안 원문
                  </span>
                  <p className="mt-0.5 text-xs font-semibold text-neutral-600 line-through dark:text-neutral-400">
                    "{item.agentProposal}"
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase">지운 이유</span>
                  <p className="text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">{item.deletedReason}</p>
                </div>
              </div>

              <div className="mt-3.5 border-t border-black/[0.05] pt-3 dark:border-white/[0.06]">
                <div className="flex items-start gap-1.5 rounded-xl bg-emerald-500/[0.08] p-2.5 text-xs font-medium text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-300">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <span>
                    <strong className="font-bold">정정:</strong> {item.correction}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3 Major Strengths iOS Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-blue-500" />
            <h3 className="text-sm font-bold tracking-tight text-neutral-900 sm:text-base dark:text-white">
              검증 완료된 상위 3대 강점 지도 (T09-C06 ~ T09-C09)
            </h3>
          </div>
          <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-semibold text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
            4대 항목 완비
          </span>
        </div>

        <div className="space-y-5">
          {STRENGTH_MAP.map((st, idx) => {
            const accent = RANK_ACCENTS[idx % RANK_ACCENTS.length];
            return (
              <div
                key={st.id}
                className={cn(
                  'group relative overflow-hidden rounded-3xl border border-black/[0.06] bg-white/80 p-6 shadow-sm backdrop-blur-2xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/5 sm:p-7 dark:border-white/[0.08] dark:bg-neutral-900/70',
                  accent.border,
                )}
              >
                {/* Header: Rank, Title & Core Keyword */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/[0.05] pb-4 dark:border-white/[0.06]">
                  <div className="flex items-center gap-3.5">
                    <span
                      className={cn(
                        'flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr text-xs font-black text-white shadow-md',
                        accent.bg,
                      )}
                    >
                      0{st.rank}
                    </span>
                    <div>
                      <h4 className="text-base font-bold text-neutral-950 sm:text-lg dark:text-white">{st.title}</h4>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        핵심 키워드:{' '}
                        <span className="font-semibold text-neutral-800 dark:text-neutral-200">{st.coreKeyword}</span>
                      </p>
                    </div>
                  </div>

                  <span className={cn('rounded-full px-3 py-1 text-xs font-bold', accent.badgeBg)}>
                    TOP {st.rank} CORE STRENGTH
                  </span>
                </div>

                {/* 4 iOS Sub-Cards Grid */}
                <div className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
                  {/* 1. Date Scene (T09-C06) */}
                  <div className="flex flex-col justify-between rounded-2xl border border-blue-500/10 bg-blue-500/[0.04] p-4.5 dark:border-blue-400/10 dark:bg-blue-400/[0.05]">
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                        <span className="text-[10px] font-bold tracking-wider text-blue-600 uppercase dark:text-blue-400">
                          ① 날짜 있는 장면 (T09-C06)
                        </span>
                      </div>
                      <span className="inline-block rounded-md bg-blue-500/10 px-2 py-0.5 font-mono text-[11px] font-bold text-blue-700 dark:bg-blue-400/20 dark:text-blue-300">
                        📅 {st.dateScene.date}
                      </span>
                      <p className="text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
                        {st.dateScene.scene}
                      </p>
                    </div>
                  </div>

                  {/* 2. Peer Feedback (T09-C07) */}
                  <div className="flex flex-col justify-between rounded-2xl border border-emerald-500/10 bg-emerald-500/[0.04] p-4.5 dark:border-emerald-400/10 dark:bg-emerald-400/[0.05]">
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5">
                        <MessageSquareQuote className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-[10px] font-bold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
                          ② 동료 피드백 / 느낌 (T09-C07)
                        </span>
                      </div>
                      <span className="inline-block rounded-md bg-emerald-500/10 px-2 py-0.5 text-[11px] font-bold text-emerald-700 dark:bg-emerald-400/20 dark:text-emerald-300">
                        💬 {st.peerFeedbackOrFeeling.speaker}
                      </span>
                      <blockquote className="text-xs leading-relaxed text-neutral-700 italic dark:text-neutral-300">
                        "{st.peerFeedbackOrFeeling.content}"
                      </blockquote>
                    </div>
                  </div>

                  {/* 3. Preserved Value (T09-C08) */}
                  <div className="flex flex-col justify-between rounded-2xl border border-amber-500/10 bg-amber-500/[0.04] p-4.5 dark:border-amber-400/10 dark:bg-amber-400/[0.05]">
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
                        <span className="text-[10px] font-bold tracking-wider text-amber-600 uppercase dark:text-amber-400">
                          ③ 그때 지킨 가치 (T09-C08)
                        </span>
                      </div>
                      <span className="inline-block rounded-md bg-amber-500/10 px-2 py-0.5 text-[11px] font-bold text-amber-700 dark:bg-amber-400/20 dark:text-amber-300">
                        🛡️ 핵심 행동 원칙
                      </span>
                      <p className="text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
                        {st.preservedValue}
                      </p>
                    </div>
                  </div>

                  {/* 4. Related Tasks (T09-C09) */}
                  <div className="flex flex-col justify-between rounded-2xl border border-purple-500/10 bg-purple-500/[0.04] p-4.5 dark:border-purple-400/10 dark:bg-purple-400/[0.05]">
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5">
                        <Layers className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
                        <span className="text-[10px] font-bold tracking-wider text-purple-600 uppercase dark:text-purple-400">
                          ④ 관련 1~8번 과제 (T09-C09)
                        </span>
                      </div>
                      <div className="space-y-2 pt-1 text-xs">
                        {st.relatedTasks.map((task) => (
                          <div
                            key={task.taskNum}
                            className="rounded-xl border border-purple-500/10 bg-white/70 p-2 dark:border-white/5 dark:bg-neutral-800/60"
                          >
                            <a
                              href={task.link}
                              className="inline-flex items-center gap-1 font-bold text-purple-700 decoration-purple-500 underline-offset-4 transition-all hover:underline dark:text-purple-300 dark:decoration-purple-400"
                            >
                              <span>
                                {task.taskNum}: {task.taskTitle}
                              </span>
                              <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                            </a>
                            <p className="mt-0.5 text-[11px] text-neutral-500 dark:text-neutral-400">
                              {task.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
