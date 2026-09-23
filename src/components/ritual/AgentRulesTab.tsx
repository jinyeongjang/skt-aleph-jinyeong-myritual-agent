import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Sparkles, Send, Bot, ShieldAlert, CheckCircle2, Terminal, ArrowRight, Loader2 } from 'lucide-react';
import { AGENT_RULES, AGENT_RULE_PRIORITY, STUDENT_INFO } from '../../data/ritualData';
import { cn } from '../../lib/utils';

const PRESET_QUERIES = [
  '내 강점 후보를 반복 횟수와 함께 열 개 뽑아줘.',
  '서사 연결 규칙(④)을 적용해 내 고비와 회복 장면을 연결해줘.',
  '과장되거나 사실과 다른 강점 제안을 필터링해줘.',
];

export const AgentRulesTab: React.FC = () => {
  const [promptQuery, setPromptQuery] = useState(PRESET_QUERIES[0]);
  const [simulatedResponse, setSimulatedResponse] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  // Run AI Simulation
  const handleRunSimulation = (customQuery?: string) => {
    const queryToRun = customQuery || promptQuery;
    setIsSimulating(true);
    setSimulatedResponse(null);
    setTimeout(() => {
      setIsSimulating(false);
      if (queryToRun.includes('서사 연결') || queryToRun.includes('고비')) {
        setSimulatedResponse(`[에이전트 규칙 ④ (서사 연결) 기반 분석 완료 - ${STUDENT_INFO.name} 수강생]

규칙 ④ (서사 흐름 연결) 우선순위에 따라 연결된 회복탄력성 서사:

1. [고난 장면 (2025.10)]: 초기 웹 인프라 배포 프로젝트 장애 ➔ 원인 불명 임시 코드 덧대기로 정해진 시연 누락
2. [원칙 확립 (2025.11)]: "원리를 모르는 블랙박스 코드는 쓰지 않는다", "매일 사전 점검 루틴을 지킨다"
3. [ALEPH 재현 (2026.08.26)]: 복잡한 코드 에러 앞에서 회피하지 않고 밑단 로그를 끝까지 파고들어 문제 해결
4. [기술적 도약 (과제 8)]: WebAuthn DER 서명 바이트 불일치 문제 W3C 명세 분석 후 직접 파서 구현 완결

💡 서사 분석 결론: 실패를 회피하지 않고 원칙으로 승화시켜 실전 보안·인프라 역량으로 완성한 일관된 성장 궤적이 확인되었습니다.`);
      } else if (queryToRun.includes('과장') || queryToRun.includes('필터링')) {
        setSimulatedResponse(`[에이전트 규칙 ③ (교차 검증) & 학생 검토 필터링 리포트]

학생 본인 검토를 통해 삭제/정정된 과장 제안 항목 3건:

❌ 1. '전 팀원을 완벽히 장악한 카리스마형 리더십' 
   ➔ [지운 이유]: 혼자 이끄는 것이 아닌 팀원의 눈높이에서 조력하는 수평적 서포터였음.
   ➔ [정정]: '온기 있는 소통과 배움 나눔의 조력 리더십'

❌ 2. '선천적 직관 기반의 천재적 코딩 감각'
   ➔ [지운 이유]: 직관이 아닌 매일 아침 1등 도착과 당일 복습 루틴의 누적으로 이룬 성과임.
   ➔ [정정]: '루틴 기반의 꾸준한 실행력과 회복탄력성'

❌ 3. '모든 인프라 장애를 1초 만에 자동 복구하는 시스템 구축'
   ➔ [지운 이유]: 과장된 표현이며, W3C 명세를 꼼꼼히 대조해 원리를 규명한 실전 구현이었음.
   ➔ [정정]: 'W3C 표준 명세서 분석 및 WebAuthn DER 바이트 파서 구현'`);
      } else {
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
      }
    }, 400);
  };

  return (
    <div className="mt-8 space-y-8">
      {/* Priority Callout Widget */}
      <div className="relative overflow-hidden rounded-3xl border border-amber-500/20 bg-linear-to-r from-amber-500/10 via-amber-500/5 to-transparent p-5 backdrop-blur-xl sm:p-6 dark:border-amber-400/20 dark:from-amber-400/15 dark:via-amber-400/5">
        <div className="pointer-events-none absolute -top-12 -right-12 h-36 w-36 rounded-full bg-amber-500/10 blur-2xl dark:bg-amber-400/15" />
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-400 text-white shadow-lg shadow-amber-500/30">
            <Zap className="h-6 w-6" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/15 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-amber-700 uppercase dark:bg-amber-400/20 dark:text-amber-300">
                <ShieldAlert className="h-3 w-3" />
                규칙 충돌 시 우선순위 원칙 (T09-C05)
              </span>
              <span className="text-[10px] font-medium text-neutral-500 dark:text-neutral-400">1줄 절대 규격</span>
            </div>
            <p className="text-sm font-bold tracking-tight text-neutral-950 sm:text-base dark:text-white">
              {AGENT_RULE_PRIORITY}
            </p>
          </div>
        </div>
      </div>

      {/* 5 Rules iOS Cards Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold tracking-tight text-neutral-900 sm:text-base dark:text-white">
            에이전트 5대 작동 규칙 (T09-C03 ~ T09-C05)
          </h3>
          <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-semibold text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
            5개 규칙 완비
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AGENT_RULES.map((rule) => {
            const isHighestPriority = rule.id === 4;
            return (
              <div
                key={rule.id}
                className={cn(
                  'group relative flex flex-col justify-between rounded-3xl border border-black/[0.06] bg-white/80 p-6 shadow-sm backdrop-blur-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 dark:border-white/[0.08] dark:bg-neutral-900/70 dark:hover:shadow-black/40',
                  isHighestPriority &&
                    'bg-gradient-to-b from-blue-500/[0.03] to-transparent ring-2 ring-blue-500/40 dark:from-blue-400/[0.06]',
                )}
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        'flex h-8 w-8 items-center justify-center rounded-2xl text-xs font-black shadow-xs transition-transform group-hover:scale-110',
                        isHighestPriority
                          ? 'bg-blue-600 text-white shadow-blue-500/30'
                          : 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950',
                      )}
                    >
                      0{rule.id}
                    </span>
                    {isHighestPriority && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-bold text-blue-600 dark:bg-blue-400/20 dark:text-blue-300">
                        <Sparkles className="h-3 w-3" />
                        최우선 순위 (T09-C04)
                      </span>
                    )}
                  </div>

                  <div>
                    <span className="text-[11px] font-bold tracking-wider text-neutral-400 uppercase dark:text-neutral-500">
                      {rule.title}
                    </span>
                    <h4 className="mt-0.5 text-base font-bold text-neutral-950 sm:text-lg dark:text-white">
                      {rule.name}
                    </h4>
                  </div>

                  <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">{rule.description}</p>
                </div>

                <div className="mt-5 space-y-2.5 border-t border-black/[0.05] pt-4 dark:border-white/[0.06]">
                  <div className="rounded-2xl border border-black/[0.04] bg-neutral-100/90 p-3 text-[11px] leading-relaxed text-neutral-800 dark:border-white/[0.04] dark:bg-neutral-800/80 dark:text-neutral-200">
                    <strong className="font-bold text-neutral-950 dark:text-white">🎯 적용 예시:</strong> {rule.example}
                  </div>
                  <div className="flex items-start gap-1.5 px-1 text-[11px] text-neutral-500 dark:text-neutral-400">
                    <span className="shrink-0 text-amber-500">💡</span>
                    <span className="italic">{rule.rationale}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive AI Agent Siri/Intelligence Simulator Card */}
      <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-neutral-950 p-6 text-white shadow-2xl backdrop-blur-3xl sm:p-8 dark:border-white/15">
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-500/15 blur-3xl" />

        {/* Top Header */}
        <div className="relative flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
          <div className="flex items-center gap-3.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 shadow-lg shadow-blue-500/30">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-white sm:text-base">리추얼 인텔리전스 대화형 검증기</h3>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Live Engine
                </span>
              </div>
              <p className="text-xs text-neutral-400">5대 규칙을 실제로 적용하여 프롬프트를 시뮬레이션합니다</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[11px] text-neutral-400">
            <Terminal className="h-3.5 w-3.5 text-blue-400" />
            <span>AI Rule Simulator v1.0</span>
          </div>
        </div>

        {/* Preset Query Chips */}
        <div className="relative mt-5 space-y-2">
          <span className="text-[11px] font-semibold text-neutral-400">빠른 질의 프리셋:</span>
          <div className="flex flex-wrap gap-2">
            {PRESET_QUERIES.map((query, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setPromptQuery(query);
                  handleRunSimulation(query);
                }}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-medium transition-all active:scale-95',
                  promptQuery === query
                    ? 'border-blue-500/50 bg-blue-500/20 text-blue-200'
                    : 'border-white/10 bg-white/5 text-neutral-300 hover:border-white/20 hover:bg-white/10 hover:text-white',
                )}
              >
                <span>{query}</span>
                <ArrowRight className="h-3 w-3 opacity-60" />
              </button>
            ))}
          </div>
        </div>

        {/* Query Input Box */}
        <div className="relative mt-5 space-y-4">
          <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
            <input
              type="text"
              value={promptQuery}
              onChange={(e) => setPromptQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleRunSimulation();
              }}
              className="flex-1 rounded-2xl border border-white/15 bg-white/[0.07] px-4 py-3.5 text-xs font-medium text-white placeholder-neutral-500 transition-all focus:border-blue-500 focus:bg-white/10 focus:ring-2 focus:ring-blue-500/20 focus:outline-none sm:text-sm"
              placeholder="에이전트에게 질의할 프롬프트를 입력하세요..."
            />
            <button
              type="button"
              onClick={() => handleRunSimulation()}
              disabled={isSimulating}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-xs font-bold text-white shadow-xl shadow-blue-500/25 transition-all hover:brightness-110 active:scale-95 disabled:opacity-50 sm:text-sm"
            >
              {isSimulating ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>규칙 분석 중...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>분석 실행</span>
                </>
              )}
            </button>
          </div>

          {/* Output Display */}
          {simulatedResponse && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="relative overflow-hidden rounded-2xl border border-emerald-500/25 bg-emerald-950/30 p-5 font-mono text-xs leading-relaxed whitespace-pre-line text-emerald-200 shadow-inner sm:text-xs"
            >
              <div className="mb-2 flex items-center justify-between border-b border-emerald-500/20 pb-2 text-[10px] text-emerald-400">
                <span className="flex items-center gap-1 font-bold">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Analysis Output
                </span>
                <span>Generated by 5 Agent Rules</span>
              </div>
              {simulatedResponse}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
