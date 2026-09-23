import React from 'react';
import { Trash2, ChevronRight } from 'lucide-react';
import { DELETED_STRENGTH_ITEMS, STRENGTH_MAP } from '../../data/ritualData';

export const StrengthMapTab: React.FC = () => {
  return (
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
  );
};
