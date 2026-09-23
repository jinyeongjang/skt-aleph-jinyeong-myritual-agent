import React from 'react';
import { Layers, Clock, Compass, ExternalLink } from 'lucide-react';
import { RESUME_AND_PORTFOLIO } from '../../data/ritualData';

export const ResumePortfolioTab: React.FC = () => {
  return (
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
            📝 리추얼 기록 및 회복탄력성 서사를 바탕으로 현재 완성도 높은 자기소개서 본문을 집필 및 검토하고 있습니다.
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
          <h3 className="text-sm font-bold sm:text-base">포트폴리오 뼈대 (1~8번 과제 매핑 및 향후 슬롯 · T09-C15)</h3>
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
            <strong className="font-semibold text-neutral-950 dark:text-white">1. 어디로 가나요:</strong>{' '}
            {RESUME_AND_PORTFOLIO.quickVerification4Lines.whereToGo}
          </p>
          <p>
            <strong className="font-semibold text-neutral-950 dark:text-white">2. 세 단계 안에 무엇을 하나요:</strong>
            <br />
            <span className="whitespace-pre-line text-neutral-500 dark:text-neutral-400">
              {RESUME_AND_PORTFOLIO.quickVerification4Lines.whatToDoIn3Steps}
            </span>
          </p>
          <p>
            <strong className="font-semibold text-neutral-950 dark:text-white">3. 무엇이 보이면 통과인가요:</strong>{' '}
            {RESUME_AND_PORTFOLIO.quickVerification4Lines.whatShowsSuccess}
          </p>
          <p>
            <strong className="font-semibold text-neutral-950 dark:text-white">4. 안 될 때 무엇이 보이나요:</strong>{' '}
            {RESUME_AND_PORTFOLIO.quickVerification4Lines.whatShowsFailure}
          </p>
        </div>
      </div>
    </div>
  );
};
