import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Copy, Check, Users, Flame, RefreshCw, Trophy, MessageCircle } from 'lucide-react';
import { RESILIENCE_STORY } from '../../data/ritualData';
import { cn } from '../../lib/utils';

export const ResilienceStoryTab: React.FC = () => {
  const [storyPerspective, setStoryPerspective] = useState<'split' | 'first' | 'third'>('split');
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(label);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <div className="mt-8 space-y-8">
      {/* 3-Part Resilience Story Pipeline (T09-C11) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-blue-500" />
            <h3 className="text-sm font-bold tracking-tight text-neutral-900 sm:text-base dark:text-white">
              3부작 회복탄력성 서사 구조 (T09-C11)
            </h3>
          </div>
          <span className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-bold text-blue-600 dark:bg-blue-400/20 dark:text-blue-300">
            고난 ➔ 원칙 확립 ➔ 실전 도약
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* Part 1: Hardship */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-rose-500/15 bg-white/80 p-6 shadow-sm backdrop-blur-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-rose-400/20 dark:bg-neutral-900/70">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 rounded-full bg-rose-500/10 px-2.5 py-0.5 text-[10px] font-bold text-rose-600 dark:bg-rose-500/20 dark:text-rose-400">
                  <Flame className="h-3 w-3" />
                  1부 // 고난 (T09-C11)
                </span>
                <span className="font-mono text-[10px] text-neutral-400">2025년 가을</span>
              </div>
              <h4 className="text-sm font-bold text-neutral-950 sm:text-base dark:text-white">
                {RESILIENCE_STORY.part1_hardship.title}
              </h4>
              <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">
                {RESILIENCE_STORY.part1_hardship.content}
              </p>
            </div>
            <div className="mt-4 rounded-xl border border-rose-500/10 bg-rose-500/[0.04] p-3 text-[11px] text-rose-900 dark:bg-rose-400/10 dark:text-rose-200">
              💔 <strong>뼈아픈 교훈:</strong> 기본기가 없는 임시방편 코드는 결국 팀에 치명적인 장애를 낳는다.
            </div>
          </div>

          {/* Part 2: Rebound */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-blue-500/15 bg-white/80 p-6 shadow-sm backdrop-blur-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-blue-400/20 dark:bg-neutral-900/70">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-bold text-blue-600 dark:bg-blue-400/20 dark:text-blue-400">
                  <RefreshCw className="h-3 w-3" />
                  2부 // 다시 일어난 날
                </span>
                <span className="font-mono text-[10px] text-neutral-400">원칙의 탄생</span>
              </div>
              <h4 className="text-sm font-bold text-neutral-950 sm:text-base dark:text-white">
                원리 규명과 사전 점검 원칙
              </h4>
              <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">
                {RESILIENCE_STORY.part2_rebound.whatChanged}
              </p>
            </div>
            <div className="mt-4 rounded-xl border border-blue-500/10 bg-blue-500/[0.06] p-3 text-[11px] leading-relaxed text-neutral-900 dark:bg-blue-400/[0.08] dark:text-neutral-100">
              <strong>ALEPH 재현 ({RESILIENCE_STORY.part2_rebound.alephEchoScene.date}):</strong>{' '}
              {RESILIENCE_STORY.part2_rebound.alephEchoScene.scene}
            </div>
          </div>

          {/* Part 3: Improved Me */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-emerald-500/15 bg-white/80 p-6 shadow-sm backdrop-blur-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-emerald-400/20 dark:bg-neutral-900/70">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold text-emerald-600 dark:bg-emerald-400/20 dark:text-emerald-400">
                  <Trophy className="h-3 w-3" />
                  3부 // 더 나아진 나
                </span>
                <span className="font-mono text-[10px] text-neutral-400">지속 성장</span>
              </div>
              <h4 className="text-sm font-bold text-neutral-950 sm:text-base dark:text-white">
                루틴과 원리로 완성된 엔지니어
              </h4>
              <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">
                {RESILIENCE_STORY.part3_improvedMe.currentChange}
              </p>
            </div>
            <div className="mt-4 rounded-xl border border-emerald-500/10 bg-emerald-500/[0.06] p-3 text-[11px] font-semibold text-emerald-900 dark:bg-emerald-400/10 dark:text-emerald-200">
              🎯 {RESILIENCE_STORY.part3_improvedMe.futureVision}
            </div>
          </div>
        </div>
      </div>

      {/* Perspective View Switcher: Split vs 1st vs 3rd (T09-C12) */}
      <div className="space-y-5 rounded-3xl border border-black/[0.06] bg-white/80 p-6 shadow-sm backdrop-blur-2xl sm:p-7 dark:border-white/[0.08] dark:bg-neutral-900/70">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-blue-500" />
              <h3 className="text-sm font-bold text-neutral-950 sm:text-base dark:text-white">
                3인칭 초안과 1인칭 완성본 나란히 보존 (T09-C12)
              </h3>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              에이전트가 3인칭으로 작성한 초안을 학생이 1인칭으로 주도적 교정하여 보존했습니다.
            </p>
          </div>

          {/* Perspective Selector Segmented Pill with Spring Animation */}
          <div className="flex rounded-xl border border-black/[0.06] bg-neutral-200/50 p-1 backdrop-blur-lg dark:border-white/[0.08] dark:bg-neutral-800/80">
            {(['split', 'first', 'third'] as const).map((view) => {
              const active = storyPerspective === view;
              return (
                <button
                  key={view}
                  type="button"
                  onClick={() => setStoryPerspective(view)}
                  className={cn(
                    'relative rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors duration-150',
                    active
                      ? 'text-neutral-950 dark:text-white'
                      : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white',
                  )}
                >
                  {active && (
                    <motion.div
                      layoutId="storyPerspectiveIndicator"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      className="absolute inset-0 rounded-lg bg-white shadow-xs dark:bg-neutral-700"
                    />
                  )}
                  <span className="relative z-10">
                    {view === 'split' ? '듀얼 비교 뷰' : view === 'first' ? '1인칭 완성본' : '3인칭 초안'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Split Panels */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {(storyPerspective === 'split' || storyPerspective === 'third') && (
            <div className="space-y-3 rounded-2xl border border-black/[0.05] bg-neutral-100/70 p-5 dark:border-white/[0.06] dark:bg-neutral-800/50">
              <div className="flex items-center justify-between border-b border-black/[0.04] pb-3 dark:border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-md bg-neutral-900 text-[10px] font-bold text-white dark:bg-white dark:text-neutral-900">
                    AI
                  </span>
                  <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200">
                    에이전트 3인칭 초안 ("장진영 님은...")
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(RESILIENCE_STORY.thirdPersonDraft, 'third')}
                  className="inline-flex items-center gap-1 rounded-lg bg-white px-2.5 py-1 text-[11px] font-semibold text-neutral-600 shadow-2xs hover:bg-neutral-50 hover:text-neutral-900 active:scale-95 dark:bg-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-600"
                >
                  {copiedType === 'third' ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">복사됨</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span>초안 복사</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs leading-relaxed whitespace-pre-line text-neutral-700 dark:text-neutral-300">
                {RESILIENCE_STORY.thirdPersonDraft}
              </p>
            </div>
          )}

          {(storyPerspective === 'split' || storyPerspective === 'first') && (
            <div className="space-y-3 rounded-2xl border border-blue-500/20 bg-blue-500/[0.04] p-5 dark:border-blue-400/20 dark:bg-blue-400/[0.05]">
              <div className="flex items-center justify-between border-b border-blue-500/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-md bg-blue-600 text-[10px] font-bold text-white">
                    나
                  </span>
                  <span className="text-xs font-bold text-blue-950 dark:text-blue-200">
                    학생 직접 정제 1인칭 완성본 ("나는...")
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(RESILIENCE_STORY.firstPersonFinal, 'first')}
                  className="inline-flex items-center gap-1 rounded-lg bg-blue-600 px-2.5 py-1 text-[11px] font-semibold text-white shadow-2xs hover:bg-blue-500 active:scale-95"
                >
                  {copiedType === 'first' ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-300" />
                      <span>복사됨</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span>완성본 복사</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs leading-relaxed whitespace-pre-line text-neutral-800 dark:text-neutral-200">
                {RESILIENCE_STORY.firstPersonFinal}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Anonymous Peer Feedbacks (T09-C13) */}
      <div className="rounded-3xl border border-black/[0.06] bg-white/80 p-6 shadow-sm backdrop-blur-2xl sm:p-7 dark:border-white/[0.08] dark:bg-neutral-900/70">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-neutral-900 dark:text-white">
            <Users className="h-5 w-5 text-emerald-500" />
            <h3 className="text-sm font-bold sm:text-base">동료 두 사람의 이름 없는 진실성 피드백 (T09-C13)</h3>
          </div>
          <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-bold text-emerald-600 dark:bg-emerald-400/20 dark:text-emerald-300">
            2인 피드백 검증 완료
          </span>
        </div>
        <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
          완성본을 동료 2인에게 익명으로 읽히고 "나 같은가?", "지어낸 느낌이 있는가?"를 검증받은 실제 응답 기록입니다.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {RESILIENCE_STORY.peerFeedbacks.map((fb, idx) => (
            <div
              key={fb.id}
              className="flex flex-col justify-between rounded-2xl border border-black/[0.05] bg-neutral-100/70 p-5 dark:border-white/[0.06] dark:bg-neutral-800/50"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-700 dark:text-emerald-300">
                      P{idx + 1}
                    </span>
                    <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200">{fb.peerLabel}</span>
                  </div>
                  <MessageCircle className="h-4 w-4 text-neutral-400" />
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="rounded-xl border border-black/[0.04] bg-white/80 p-3 dark:border-white/[0.04] dark:bg-neutral-900/70">
                    <span className="font-bold text-blue-600 dark:text-blue-400">Q1. 나 같아?</span>
                    <p className="mt-1 leading-relaxed text-neutral-800 dark:text-neutral-200">👉 "{fb.isLikeMe}"</p>
                  </div>
                  <div className="rounded-xl border border-black/[0.04] bg-white/80 p-3 dark:border-white/[0.04] dark:bg-neutral-900/70">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">Q2. 지어낸 느낌이 있어?</span>
                    <p className="mt-1 leading-relaxed text-neutral-800 dark:text-neutral-200">
                      👉 "{fb.isFabricated}"
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-end text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                <span>✓ 팩트 기반 검증 일치</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
