import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Sparkles, Send } from 'lucide-react';
import { AGENT_RULES, AGENT_RULE_PRIORITY, STUDENT_INFO } from '../../data/ritualData';
import { cn } from '../../lib/utils';

export const AgentRulesTab: React.FC = () => {
  const [promptQuery, setPromptQuery] = useState('내 강점 후보를 반복 횟수와 함께 열 개 뽑아줘.');
  const [simulatedResponse, setSimulatedResponse] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

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

  return (
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
                <h4 className="mt-0.5 text-sm font-bold text-neutral-950 sm:text-base dark:text-white">{rule.name}</h4>
              </div>
              <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">{rule.description}</p>
            </div>

            <div className="mt-5 space-y-2 border-t border-black/[0.04] pt-4 text-xs dark:border-white/[0.06]">
              <div className="rounded-xl bg-neutral-100/80 p-3 text-[11px] text-neutral-700 dark:bg-neutral-800/60 dark:text-neutral-300">
                <strong className="font-semibold text-neutral-950 dark:text-white">적용 예시:</strong> {rule.example}
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
  );
};
