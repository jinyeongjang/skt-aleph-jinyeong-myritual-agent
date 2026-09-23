import React from 'react';
import {
  Layers,
  Compass,
  Check,
  Scale,
  HelpCircle,
  ArrowUpRight,
  Shield,
  Users2,
  Activity,
  Milestone,
  CheckCircle2,
} from 'lucide-react';
import { RESUME_AND_PORTFOLIO, STUDENT_INFO } from '../../data/ritualData';
import { cn } from '../../lib/utils';

const PILLAR_STYLES = [
  {
    icon: Shield,
    theme: 'blue',
    border: 'border-blue-500/20 dark:border-blue-400/20',
    bg: 'bg-linear-to-b from-blue-500/[0.04] via-blue-500/[0.01] to-transparent',
    headerBadge: 'bg-blue-500/10 text-blue-600 dark:bg-blue-400/20 dark:text-blue-300',
    tag: '보안 · 네트워크 · 원리 규명',
    taskBadge: 'bg-blue-500/10 text-blue-700 dark:bg-blue-400/20 dark:text-blue-300',
    cardHover: 'hover:border-blue-500/30 hover:shadow-blue-500/5',
  },
  {
    icon: Users2,
    theme: 'emerald',
    border: 'border-emerald-500/20 dark:border-emerald-400/20',
    bg: 'bg-linear-to-b from-emerald-500/[0.04] via-emerald-500/[0.01] to-transparent',
    headerBadge: 'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/20 dark:text-emerald-300',
    tag: '품질 자동화 · 웹 접근성 · 소통',
    taskBadge: 'bg-emerald-500/10 text-emerald-700 dark:bg-emerald-400/20 dark:text-emerald-300',
    cardHover: 'hover:border-emerald-500/30 hover:shadow-emerald-500/5',
  },
  {
    icon: Activity,
    theme: 'amber',
    border: 'border-amber-500/20 dark:border-amber-400/20',
    bg: 'bg-linear-to-b from-amber-500/[0.04] via-amber-500/[0.01] to-transparent',
    headerBadge: 'bg-amber-500/10 text-amber-600 dark:bg-amber-400/20 dark:text-amber-300',
    tag: '루틴 체계 · 레이아웃 · 지속 성장',
    taskBadge: 'bg-amber-500/10 text-amber-700 dark:bg-amber-400/20 dark:text-amber-300',
    cardHover: 'hover:border-amber-500/30 hover:shadow-amber-500/5',
  },
];

export const ResumePortfolioTab: React.FC = () => {
  return (
    <div className="mt-8 space-y-8">
      {/* Resume Draft Inset Card (T09-C14) */}
      <div className="relative overflow-hidden rounded-3xl border border-black/[0.06] bg-white/80 p-6 shadow-sm backdrop-blur-2xl sm:p-8 dark:border-white/[0.08] dark:bg-neutral-900/70">
        <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative flex flex-col gap-3 border-b border-black/[0.05] pb-5 sm:flex-row sm:items-center sm:justify-between dark:border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/30">
              <Layers className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-neutral-950 sm:text-lg dark:text-white">
                  자기소개서 초안 (약 1,000자 · T09-C14)
                </h3>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                지원자: <strong className="text-neutral-900 dark:text-white">{STUDENT_INFO.name}</strong> · 공백 포함 약
                1,066자 / 4대 필수 요소 완비
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:bg-emerald-400/20 dark:text-emerald-300">
              <Check className="h-3.5 w-3.5" />
              T09-C14 검증 통과
            </span>
          </div>
        </div>

        <div className="relative mt-6 space-y-4">
          {/* First Sentence */}
          <div className="rounded-2xl border border-blue-500/20 bg-linear-to-r from-blue-500/[0.08] to-blue-500/[0.02] p-4.5 sm:p-5 dark:border-blue-400/20 dark:from-blue-400/[0.08] dark:to-transparent">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold tracking-wider text-blue-600 uppercase dark:text-blue-400">
                ✍️ [학생이 직접 쓴 첫 문장]
              </span>
              <span className="text-[10px] font-semibold text-neutral-400">Opening Hook</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed font-bold text-blue-950 sm:text-base dark:text-blue-100">
              "{RESUME_AND_PORTFOLIO.firstSentence}"
            </p>
          </div>

          {/* Resume Body */}
          <div className="rounded-2xl border border-black/[0.05] bg-neutral-100/70 p-5 sm:p-6 dark:border-white/[0.06] dark:bg-neutral-800/50">
            <div className="flex items-center justify-between border-b border-black/[0.05] pb-3 dark:border-white/[0.06]">
              <span className="text-[11px] font-bold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
                📖 [자기소개서 본문 — 3대 핵심 강점 & 고비 극복 장면]
              </span>
              <span className="font-mono text-[10px] text-neutral-400">STAR 구조 기반</span>
            </div>
            <div className="mt-4 space-y-3.5 text-xs leading-relaxed whitespace-pre-line text-neutral-800 sm:text-sm dark:text-neutral-200">
              {RESUME_AND_PORTFOLIO.resumeBody}
            </div>
          </div>

          {/* Last Sentence */}
          <div className="rounded-2xl border border-indigo-500/20 bg-linear-to-r from-indigo-500/[0.08] to-indigo-500/[0.02] p-4.5 sm:p-5 dark:border-indigo-400/20 dark:from-indigo-400/[0.08] dark:to-transparent">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold tracking-wider text-indigo-600 uppercase dark:text-indigo-400">
                🎯 [학생이 직접 쓴 마지막 문장 / 지금 하고 싶은 것]
              </span>
              <span className="text-[10px] font-semibold text-neutral-400">Future Vision</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed font-bold text-indigo-950 sm:text-base dark:text-indigo-100">
              "{RESUME_AND_PORTFOLIO.lastSentence}"
            </p>
          </div>
        </div>
      </div>

      {/* Portfolio Framework Master Section (T09-C15) */}
      <div className="relative overflow-hidden rounded-3xl border border-black/[0.06] bg-white/80 p-6 shadow-sm backdrop-blur-2xl sm:p-8 dark:border-white/[0.08] dark:bg-neutral-900/70">
        <div className="pointer-events-none absolute -top-32 -left-32 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 -bottom-32 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

        {/* Section Header */}
        <div className="relative flex flex-col gap-3 border-b border-black/[0.05] pb-5 sm:flex-row sm:items-center sm:justify-between dark:border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg shadow-indigo-500/25">
              <Compass className="h-5 w-5" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-bold text-neutral-950 sm:text-lg dark:text-white">
                  포트폴리오 뼈대 (과제 1~8 연계 및 확장 슬롯 · T09-C15)
                </h3>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                개발자 <strong>{STUDENT_INFO.name}</strong>의 3대 핵심 강점 아래 과제 1~8번 산출물을 증거로 배치한
                뼈대입니다.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-bold text-indigo-700 dark:border-indigo-400/30 dark:bg-indigo-400/20 dark:text-indigo-300">
              <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
              8개 과제 연계 완료
            </span>
          </div>
        </div>

        {/* 3 Core Strength Pillars (2-column layout for maximum readability) */}
        <div className="relative mt-6 space-y-6">
          {RESUME_AND_PORTFOLIO.portfolioFramework.map((fw, idx) => {
            const style = PILLAR_STYLES[idx % PILLAR_STYLES.length];
            const PillarIcon = style.icon;

            return (
              <div
                key={fw.strengthTitle}
                className={cn(
                  'relative overflow-hidden rounded-2xl border p-5 shadow-xs backdrop-blur-2xl transition-all duration-200 hover:shadow-md sm:p-6',
                  style.border,
                  style.bg,
                )}
              >
                {/* Pillar Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/[0.05] pb-3.5 dark:border-white/[0.06]">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={cn(
                        'flex h-7 w-7 items-center justify-center rounded-xl text-xs font-black text-white shadow-xs',
                        idx === 0
                          ? 'bg-gradient-to-tr from-blue-600 to-cyan-600'
                          : idx === 1
                            ? 'bg-gradient-to-tr from-emerald-600 to-teal-600'
                            : 'bg-gradient-to-tr from-amber-600 to-orange-600',
                      )}
                    >
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold tracking-tight text-neutral-950 sm:text-base dark:text-white">
                        {fw.strengthTitle}
                      </h4>
                      <p className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
                        핵심 영역:{' '}
                        <span className="font-semibold text-neutral-800 dark:text-neutral-200">{style.tag}</span>
                      </p>
                    </div>
                  </div>

                  <span
                    className={cn(
                      'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold',
                      style.headerBadge,
                    )}
                  >
                    <PillarIcon className="h-3 w-3" />
                    PILLAR 0{idx + 1}
                  </span>
                </div>

                {/* Artifact Link Cards Grid (2-columns for spacious reading) */}
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {fw.relatedArtifacts.map((art) => (
                    <a
                      key={art.taskId}
                      href={art.artifactLink}
                      className={cn(
                        'group relative flex flex-col justify-between rounded-xl border border-black/[0.06] bg-white/95 p-4 shadow-2xs backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-white/[0.08] dark:bg-neutral-900/90',
                        style.cardHover,
                      )}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span
                            className={cn(
                              'inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-black',
                              style.taskBadge,
                            )}
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" />
                            {art.taskId}
                          </span>
                          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 transition-all group-hover:bg-blue-500 group-hover:text-white dark:bg-neutral-800 dark:text-neutral-400 dark:group-hover:bg-blue-500">
                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </span>
                        </div>

                        <div>
                          <h5 className="text-xs leading-snug font-bold text-neutral-950 decoration-blue-500 underline-offset-4 transition-all group-hover:text-blue-600 group-hover:underline sm:text-sm dark:text-white dark:group-hover:text-blue-400">
                            {art.taskName}
                          </h5>
                        </div>

                        <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">
                          {art.roleInStrength}
                        </p>
                      </div>

                      <div className="mt-3 flex items-center justify-between border-t border-black/[0.04] pt-2.5 text-[11px] font-semibold text-neutral-400 transition-colors group-hover:text-blue-600 dark:border-white/[0.06] dark:group-hover:text-blue-400">
                        <span>실전 증거 바로가기</span>
                        <span className="font-mono text-xs">➔</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Future Task Slots (T09-C15 Roadmap Architecture) */}
          <div className="relative overflow-hidden rounded-2xl border border-dashed border-purple-500/30 bg-linear-to-r from-purple-500/[0.04] via-indigo-500/[0.02] to-blue-500/[0.04] p-5 backdrop-blur-2xl sm:p-6 dark:border-purple-400/30">
            <div className="flex flex-col gap-2 border-b border-purple-500/10 pb-3.5 sm:flex-row sm:items-center sm:justify-between dark:border-purple-400/10">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-purple-500/15 text-purple-600 dark:text-purple-300">
                  <Milestone className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-950 dark:text-white">
                    향후 과제 연계 슬롯 (완성을 위해 의도적으로 비워둔 확장 영역 · T09-C15)
                  </h4>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                    향후 과제 10, 11, 12-13번이 완료되는 즉시 각 강점 기둥의 최신 증거로 연계 탑재됩니다.
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-purple-500/10 px-2.5 py-0.5 text-xs font-bold text-purple-700 sm:self-auto dark:bg-purple-400/20 dark:text-purple-300">
                <span className="h-1.5 w-1.5 animate-ping rounded-full bg-purple-500" />
                슬롯 예약 완료
              </span>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {RESUME_AND_PORTFOLIO.futureTaskSlots.map((slot) => (
                <div
                  key={slot.taskNum}
                  className="group relative flex flex-col justify-between rounded-xl border border-dashed border-black/15 bg-white/70 p-3.5 shadow-2xs backdrop-blur-md transition-all hover:border-purple-500/40 hover:bg-white dark:border-white/15 dark:bg-neutral-900/60 dark:hover:bg-neutral-900"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-black text-purple-700 dark:text-purple-300">
                        {slot.taskNum}
                      </span>
                      <span className="rounded-full bg-neutral-200/70 px-2 py-0.5 text-[9px] font-bold text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                        {slot.status}
                      </span>
                    </div>
                    <h5 className="text-xs font-bold text-neutral-900 dark:text-white">{slot.title}</h5>
                    <p className="text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400">
                      강점 기둥과 연계되어 향후 라이브 데모 및 GitHub 레포지토리가 연결될 전용 슬롯입니다.
                    </p>
                  </div>

                  <div className="mt-3 flex items-center justify-end font-mono text-[9px] font-semibold text-neutral-400">
                    <span>RESERVED</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* AI & Student Judgment 3 Lines (T09-C16) */}
      <div className="rounded-3xl border border-black/[0.06] bg-white/80 p-6 shadow-sm backdrop-blur-2xl sm:p-8 dark:border-white/[0.08] dark:bg-neutral-900/70">
        <div className="flex items-center gap-3 border-b border-black/[0.05] pb-4 dark:border-white/[0.06]">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white shadow-md">
            <Scale className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-neutral-950 sm:text-base dark:text-white">
              AI와 나의 판단 3줄 (T09-C16)
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              에이전트에게 맡긴 일, 학생이 직접 판단한 일, AI 제안을 따르지 않은 일
            </p>
          </div>
        </div>

        <div className="mt-5 space-y-3">
          <div className="flex items-start gap-3 rounded-2xl border border-blue-500/15 bg-blue-500/[0.04] p-4 text-xs sm:text-sm dark:border-blue-400/20 dark:bg-blue-400/[0.05]">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">
              ①
            </span>
            <div className="space-y-0.5">
              <strong className="font-bold text-blue-900 dark:text-blue-300">AI에게 맡긴 일:</strong>
              <p className="text-neutral-700 dark:text-neutral-300">{RESUME_AND_PORTFOLIO.aiJudgment.delegatedToAi}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.04] p-4 text-xs sm:text-sm dark:border-emerald-400/20 dark:bg-emerald-400/[0.05]">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-xs font-bold text-white">
              ②
            </span>
            <div className="space-y-0.5">
              <strong className="font-bold text-emerald-900 dark:text-emerald-300">내가 직접 판단한 일:</strong>
              <p className="text-neutral-700 dark:text-neutral-300">{RESUME_AND_PORTFOLIO.aiJudgment.studentJudged}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-rose-500/15 bg-rose-500/[0.04] p-4 text-xs sm:text-sm dark:border-rose-400/20 dark:bg-rose-400/[0.05]">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-rose-600 text-xs font-bold text-white">
              ③
            </span>
            <div className="space-y-0.5">
              <strong className="font-bold text-rose-900 dark:text-rose-300">AI 제안을 따르지 않은 일:</strong>
              <p className="text-neutral-700 dark:text-neutral-300">
                {RESUME_AND_PORTFOLIO.aiJudgment.rejectedAiProposal}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4-Line Quick Verification (T09-C17) */}
      <div className="rounded-3xl border border-black/[0.06] bg-white/80 p-6 shadow-sm backdrop-blur-2xl sm:p-8 dark:border-white/[0.08] dark:bg-neutral-900/70">
        <div className="flex items-center gap-3 border-b border-black/[0.05] pb-4 dark:border-white/[0.06]">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-neutral-800 to-neutral-600 text-white shadow-md">
            <HelpCircle className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-neutral-950 sm:text-base dark:text-white">
              짧은 확인 방법 4줄 (T09-C17)
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              과제 9의 핵심 기능을 4단계로 즉시 검증하는 방법입니다.
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-black/[0.05] bg-neutral-100/70 p-4.5 dark:border-white/[0.06] dark:bg-neutral-800/50">
            <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">STEP 01. 어디로 가나요</span>
            <p className="mt-1.5 text-xs leading-relaxed text-neutral-800 sm:text-sm dark:text-neutral-200">
              {RESUME_AND_PORTFOLIO.quickVerification4Lines.whereToGo}
            </p>
          </div>

          <div className="rounded-2xl border border-black/[0.05] bg-neutral-100/70 p-4.5 dark:border-white/[0.06] dark:bg-neutral-800/50">
            <span className="font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400">
              STEP 02. 세 단계 안에 무엇을 하나요
            </span>
            <p className="mt-1.5 text-xs leading-relaxed whitespace-pre-line text-neutral-800 sm:text-sm dark:text-neutral-200">
              {RESUME_AND_PORTFOLIO.quickVerification4Lines.whatToDoIn3Steps}
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-4.5 dark:border-emerald-400/20 dark:bg-emerald-400/[0.05]">
            <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
              STEP 03. 무엇이 보이면 통과인가요
            </span>
            <p className="mt-1.5 text-xs leading-relaxed text-neutral-800 sm:text-sm dark:text-neutral-200">
              {RESUME_AND_PORTFOLIO.quickVerification4Lines.whatShowsSuccess}
            </p>
          </div>

          <div className="rounded-2xl border border-rose-500/20 bg-rose-500/[0.04] p-4.5 dark:border-rose-400/20 dark:bg-rose-400/[0.05]">
            <span className="font-mono text-xs font-bold text-rose-600 dark:text-rose-400">
              STEP 04. 안 될 때 무엇이 보이나요
            </span>
            <p className="mt-1.5 text-xs leading-relaxed text-neutral-800 sm:text-sm dark:text-neutral-200">
              {RESUME_AND_PORTFOLIO.quickVerification4Lines.whatShowsFailure}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
