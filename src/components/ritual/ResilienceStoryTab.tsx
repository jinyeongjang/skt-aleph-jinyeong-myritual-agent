import React, { useState } from 'react';
import { Sparkles, Copy, Check, Users } from 'lucide-react';
import { RESILIENCE_STORY } from '../../data/ritualData';
import { cn } from '../../lib/utils';

export const ResilienceStoryTab: React.FC = () => {
  const [storyPerspective, setStoryPerspective] = useState<'first' | 'third' | 'split'>('split');
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(label);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
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
                  <strong className="font-semibold text-neutral-950 dark:text-white">Q1. 나 같아?</strong>
                  <br />
                  👉 "{fb.isLikeMe}"
                </p>
                <p>
                  <strong className="font-semibold text-neutral-950 dark:text-white">Q2. 지어낸 느낌이 있어?</strong>
                  <br />
                  👉 "{fb.isFabricated}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
