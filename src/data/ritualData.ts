// src/data/ritualData.ts
// SKT ALEPH 장진영 수강생의 실제 리추얼 기록(assets/myritual.json 기반 30일치 전수), 에이전트 규칙, 강점 지도, 회복탄력성 서사 및 자기소개서/포트폴리오 뼈대 데이터

import rawParsedRituals from './parsedRituals.json';

export interface RitualLog {
  id: string;
  date: string;
  dayOfWeek: string;
  morning: {
    comfortableScene: string;
    myStrength?: string;
    strengthEpisode: string;
    resultOrLearned?: string;
    peerFeedback: string;
    todayValue?: string;
    smallAction: string;
  };
  evening: {
    strengthEffort?: string;
    noteToSelf?: string;
    reflection: string;
    gratitude: string;
    overcomeMoment: string;
  };
  highlightExcerpt: string;
  highlightCategory: '원리탐구' | '배움나눔' | '루틴회복' | '조력리더십' | '기술문제해결';
}

export interface AgentRule {
  id: number;
  title: string;
  name: string;
  description: string;
  example: string;
  rationale: string;
}

export interface StrengthMapItem {
  id: string;
  rank: number;
  title: string;
  coreKeyword: string;
  dateScene: {
    date: string;
    scene: string;
  };
  peerFeedbackOrFeeling: {
    speaker: string;
    content: string;
  };
  preservedValue: string;
  relatedTasks: {
    taskNum: string;
    taskTitle: string;
    description: string;
    link: string;
  }[];
}

export interface DeletedItem {
  id: string;
  agentProposal: string;
  deletedReason: string;
  correction: string;
}

export interface ResilienceStory {
  authorName: string;
  part1_hardship: {
    year: string;
    location: string;
    title: string;
    content: string;
  };
  part2_rebound: {
    title: string;
    whatChanged: string;
    alephEchoScene: {
      date: string;
      scene: string;
    };
  };
  part3_improvedMe: {
    title: string;
    currentChange: string;
    futureVision: string;
  };
  thirdPersonDraft: string;
  firstPersonFinal: string;
  peerFeedbacks: {
    id: number;
    peerLabel: string;
    isLikeMe: string;
    isFabricated: string;
  }[];
}

export interface ResumeAndPortfolio {
  studentName: string;
  firstSentence: string;
  resumeBody: string;
  lastSentence: string;
  portfolioFramework: {
    strengthTitle: string;
    relatedArtifacts: {
      taskId: string;
      taskName: string;
      roleInStrength: string;
      artifactLink: string;
    }[];
  }[];
  futureTaskSlots: {
    taskNum: string;
    title: string;
    status: string;
  }[];
  aiJudgment: {
    delegatedToAi: string;
    studentJudged: string;
    rejectedAiProposal: string;
  };
  quickVerification4Lines: {
    whereToGo: string;
    whatToDoIn3Steps: string;
    whatShowsSuccess: string;
    whatShowsFailure: string;
  };
}

// 1. 수강생 본인 기본 정보 (T09-C01, T09-C14)
export const STUDENT_INFO = {
  name: '장진영',
  track: 'SKT ALEPH 1기 기업 현장 중심 보안 & 네트워크 인프라 트랙',
  email: 'jinyeongjang@users.noreply.github.com',
  github: 'https://github.com/jinyeongjang',
  portfolioRepo: 'https://github.com/jinyeongjang/skt-aleph-jinyeong-myritual-agent',
  demoUrl: 'https://skt-aleph-jinyeongjang-myblog.vercel.app',
};

// 2. assets/myritual.json 기반 실제 30일치 리추얼 기록 데이터 (T09-C01, T09-C02)
export const RITUAL_LOGS: RitualLog[] = rawParsedRituals as RitualLog[];

// 3. 에이전트 5대 규칙 & 우선순위 정의 (T09-C03 ~ T09-C05)
export const AGENT_RULES: AgentRule[] = [
  {
    id: 1,
    title: '장면 중심 서술 원칙',
    name: '형용사 대신 날짜 붙은 구체적 장면을 쓴다',
    description:
      '"끈기 있다", "책임감 강하다" 같은 추상적 수식어는 기억에 남지 않습니다. 형용사 하나마다 "2026-08-25 logging 실습 중 for문 파일 읽기 동작 원리를 설명한 날", "2026-08-26 오류 원인을 끝까지 파고들어 규명한 날"처럼 날짜와 장소, 관찰 가능한 행동이 담긴 장면을 반드시 결합합니다.',
    example:
      '✕ "장진영 님은 문제 해결력이 뛰어납니다." ➔ ○ "2026-08-26, 코드 오류가 왜 발생했는지 포기하지 않고 끝까지 파고들어 원인을 규명하고 해결책을 도출했습니다."',
    rationale: '뇌는 추상적 형용사보다 구체적 시공간이 있는 장면을 훨씬 강하게 기억하고 신뢰합니다.',
  },
  {
    id: 2,
    title: '반복성 우선 원칙',
    name: '한 번 스친 것보다 30일간 되풀이된 강점을 앞세운다',
    description:
      '단발성으로 우연히 나타난 일화보다 30일간의 리추얼 기록 전반에서 5회 이상 꾸준히 되풀이된 행동 양식(원리 탐구, 동료 멘토링, 아침 1등 도착 및 당일 복습 루틴)을 상위 핵심 강점으로 우선 배치합니다.',
    example:
      '리추얼 기록 30건 중 10회 이상 등장한 "배운 지식 쉽게 풀어서 동료에게 나누기"와 "코드/인프라 오류 끝까지 파고들기", "아침 일찍 도착해 복습하기"를 3대 강점으로 선정.',
    rationale: '진짜 강점은 일회성 이벤트가 아니라 일상의 반복되는 습관과 태도에서 증명됩니다.',
  },
  {
    id: 3,
    title: '교차 검증 원칙',
    name: '내가 본 나와 동료가 말해 준 나(외부 증거)를 나란히 둔다',
    description:
      '스스로 주장하는 강점 옆에 동료가 리추얼 피드백으로 남겨 준 구체적 칭찬과 감사의 말을 외부 증거로 대조하여 주장의 객관적 타당성을 확보합니다.',
    example:
      '내 주장: "원리 중심의 문제 해결력" ↔ 동료 증언: "[동료 1]: 오류가 왜 났는지 포기하지 않고 찾으려는 노력이 대단하다 / [동료 2]: logging 파트 원리를 본인이 아는 것을 바탕으로 알려주심."',
    rationale: '타인의 객관적 관찰은 자기 주장의 가장 강력한 보증 수표입니다.',
  },
  {
    id: 4,
    title: '서사 연결 원칙 (T09-C04 필수)',
    name: '기록이 없는 시점이나 사건도 흐름이 이어지게 맥락을 채운다',
    description:
      '과정 이전의 성장 배경이나 리추얼 기록에 적히지 않은 공백 시점이 있더라도, 전체적인 인과관계와 회복탄력성 스토리라인이 매끄럽게 연결되도록 전후 맥락을 유기적으로 채워 넣습니다.',
    example:
      '리추얼 이전의 초기 프로젝트 배포 실패 경험과 2026년 SKT ALEPH 30일간의 루틴 회복 경험을 하나의 일관된 성장 서사로 연결.',
    rationale: '파편화된 사건들을 하나의 완성된 서사 구조로 엮어낼 때 전달력과 설득력이 극대화됩니다.',
  },
  {
    id: 5,
    title: '3인칭 객관화 원칙',
    name: '먼저 3인칭("장진영 님은")으로 작성한 뒤 1인칭으로 고친다',
    description:
      '초안은 제3자의 관점에서 "장진영 님은..."으로 시작하여 쑥스러움을 덜고 나답지 않은 과장이나 어색한 표현을 객관적으로 필터링한 후, 학생 본인이 직접 1인칭("나는...")으로 정제합니다.',
    example: '3인칭 초안 검토 ➔ "장진영 님은..." ➔ 나답지 않은 과장 삭제 ➔ 1인칭 완성본: "나는..."',
    rationale: '한 걸음 물러선 관찰자의 시선이 자기 서사의 군더더기와 과장을 가장 정확하게 걸러냅니다.',
  },
];

// 규칙 충돌 시 우선순위 1줄 (T09-C05)
export const AGENT_RULE_PRIORITY =
  '규칙 충돌 시 ④ 서사 흐름 연결 > ② 반복된 강점 우선 > ① 날짜 있는 구체적 장면 > ③ 남이 본 나(동료 검증) > ⑤ 3인칭 초안 순으로 우선 적용한다.';

// 4. assets/myritual.json 실기록 기반 상위 3대 강점 지도 (T09-C06 ~ T09-C09)
export const STRENGTH_MAP: StrengthMapItem[] = [
  {
    id: 'strength-1',
    rank: 1,
    title: '원리 탐구와 집요한 기술 문제 해결력',
    coreKeyword: '시스템 인프라 · 암호학 프로토콜 디버깅 · 코드 에러 규명',
    dateScene: {
      date: '2026-08-26 / 2026-09-21',
      scene:
        '실무 실습 중 발생한 코드 에러를 포기하지 않고 끝까지 파고들어 원인을 규명하고 해결책을 찾아냈으며(2026-08-26), RBAC 권한 매트릭스를 직접 설계하며 보안의 깊이를 체득하고 파이썬 반복문 동작 원리를 동료에게 알기 쉽게 규명해 줌(2026-09-21).',
    },
    peerFeedbackOrFeeling: {
      speaker: '[동료 1] & [동료 2]',
      content:
        '"[동료 1]: 오류가 왜 났는지 포기하지 않고 찾으려고 하는 노력이 대단하다. / [동료 2]: logging 파트를 하던 도중 for문을 이용하여 다른 파일을 굳이 왜 읽는지 이해되지 않았는데, 옆자리 진영 님이 아는 것을 바탕으로 원리를 알려주셔서 감사했다."',
    },
    preservedValue:
      '블랙박스 코드나 임시방편에 기대지 않고, 코드와 시스템의 밑단 동작 원리를 규명하여 견고하고 안전한 시스템을 구축한다.',
    relatedTasks: [
      {
        taskNum: '과제 8',
        taskTitle: 'WebAuthn 무암호화 패스키 비공개 금고 시스템',
        description: 'FIDO2 / Web Crypto API 기반 비밀번호 0개 비대칭키 서명 검증 및 4대 거절 보안 검증 랩 직접 구현',
        link: '#vault',
      },
      {
        taskNum: '과제 2',
        taskTitle: '네트워크 패킷 분석 및 가상 웹 터미널',
        description: '리눅스 명령어 환경 및 TCP/IP 4계층 패킷 흐름 시각화 도구 개발',
        link: '#projects',
      },
    ],
  },
  {
    id: 'strength-2',
    rank: 2,
    title: '온기 있는 소통과 배움 나눔의 조력 리더십',
    coreKeyword: '팀원 멘토링 · 조장 발표 · 협업 발표자료 제작 지원',
    dateScene: {
      date: '2026-08-11 / 2026-08-12 / 2026-09-17',
      scene:
        '첫 수업에서 조장으로 나서 긴장하지 않고 토론과 발표를 매끄럽게 이끌었고(2026-08-11), kali 리눅스 설치 지연 시 여러 해결 방안을 제시해 팀원들의 환경 셋팅을 완결했으며(2026-08-12), 네트워크 조별 과제에서 팀원이 대본 없이도 발표할 수 있도록 직관적인 발표 자료 구조를 지원함(2026-09-17).',
    },
    peerFeedbackOrFeeling: {
      speaker: '[동료 2] & [동료 1]',
      content:
        '"[동료 2]: 발표 자료 만드는데 도움을 주신 진영 님께 감사했다. 보기 쉽게 설정해주셔서 대본 없이 발표를 이어갈 수 있었다. / [동료 1]: 옆에서 헤매고 있으면 도와주셔서 프로그래밍 걱정을 한 시름 놓았다."',
    },
    preservedValue:
      '지식을 독점하지 않고 팀과 함께 나누며, 단 한 사람도 뒤처지지 않도록 배움의 온기와 심리적 안전감을 나눈다.',
    relatedTasks: [
      {
        taskNum: '과제 1',
        taskTitle: '나를 소개하는 한 페이지 포트폴리오',
        description: '투명한 공개/비공개 범위 설정 및 STAR 모델 기반 실전 경험 서술',
        link: '#about',
      },
      {
        taskNum: '과제 4',
        taskTitle: '웹 접근성 & 코드 품질 자동화 (Oxlint/Prettier)',
        description: 'WCAG AA 4.5:1 명암비 준수, Skip Link 및 키보드 초점 링 전수 적용',
        link: '#skills',
      },
      {
        taskNum: '과제 6',
        taskTitle: '동료 상호작용 및 사용자 피드백 반영',
        description: '키보드/마우스 동등 상호작용 탭 및 실시간 피드백 컴포넌트 구축',
        link: '#manual',
      },
    ],
  },
  {
    id: 'strength-3',
    rank: 3,
    title: '루틴 기반의 꾸준한 실행력과 회복탄력성',
    coreKeyword: '아침 1등 도착 · 자격증/프로젝트 병행 · 일일 복습 실천',
    dateScene: {
      date: '2026-08-24 / 2026-09-18 / 2026-09-22',
      scene:
        '주말 자격증(SQL/정보처리기사) 시험과 먼 거리 통학을 병행하면서도 흔들림 없이 매일 강의장에 가장 먼저 도착해 예습·복습을 진행하고(2026-08-24, 2026-09-18), 찬양과 기도로 마음을 정돈하며 배운 내용을 당일 내 것으로 만드는 루틴을 30일간 완주함(2026-09-22).',
    },
    peerFeedbackOrFeeling: {
      speaker: '[동료 1] & 장진영 (자신의 느낌)',
      content:
        '"[동료 1]: 최근 일주일 동안 항상 제일 먼저 오셔서 일을 하고 계신다. 항상 부지런하시다. / 장진영: 먼 거리 통학이나 바쁜 일정에 흔들리지 않고, 매일 아침 정해진 시간에 도착해 복습하고 준비하는 루틴이 나를 지탱하는 힘이다."',
    },
    preservedValue:
      '일시적인 감정이나 열정에 기대지 않고, 매일 아침저녁의 작은 리추얼과 정돈된 일일 복습 루틴을 지키며 지속 가능한 성장을 만든다.',
    relatedTasks: [
      {
        taskNum: '과제 7',
        taskTitle: '계획 및 루틴 최적화 시스템',
        description: '실패 후 즉시 복귀 가능한 3단계 점검 규칙 및 일일 리추얼 트래커 설계',
        link: '#strengths',
      },
      {
        taskNum: '과제 3',
        taskTitle: '첫 화면 3요소 (소개·활동·근거) 최적화',
        description: '1366×768 및 1920×1080 해상도 무스크롤 노출 및 반응형 그리드 튜닝',
        link: '#hero',
      },
      {
        taskNum: '과제 5',
        taskTitle: '인터랙티브 모션 제어 & 테마 영속성',
        description: '헤더 애니메이션 토글(Reduce Motion) 및 localStorage 다크모드 동기화',
        link: '#values',
      },
    ],
  },
];

// 5. 에이전트 제안 중 학생이 지운 항목과 지운 이유 (T09-C10 필수)
export const DELETED_STRENGTH_ITEMS: DeletedItem[] = [
  {
    id: 'deleted-1',
    agentProposal: '상위 강점 후보: "모든 팀원을 완벽히 장악하고 이끈 카리스마형 리더십"',
    deletedReason:
      '실제 리추얼 기록과 나의 성향은 군림하거나 통제하는 리더십이 아니라, 뒤에서 조용히 막힌 부분을 페어로 함께 풀어주고 발표 자료를 챙겨주는 "조력형 멘토링"임. 에이전트가 단어를 과장하여 부풀렸으므로 삭제함.',
    correction: '➔ "온기 있는 소통과 배움 나눔의 조력 리더십"으로 정정 및 교체.',
  },
  {
    id: 'deleted-2',
    agentProposal: '상위 강점 후보: "선천적인 천재적 직관과 감각적 코딩 역량"',
    deletedReason:
      '나의 문제 해결은 감각이나 직관이 아니라 매일 아침저녁 남긴 30일간의 리추얼과 아침 일찍 도착해 진행하는 복습 루틴, 집요한 에러 로그 파고들기에서 비롯됨. 사실과 다른 수식어라 삭제함.',
    correction: '➔ "원리 탐구와 집요한 기술 문제 해결력"으로 정정.',
  },
  {
    id: 'deleted-3',
    agentProposal: '상위 강점 후보: "글로벌 대규모 분산 클라우드 아키텍처 총괄 경력"',
    deletedReason:
      '에이전트가 서사의 연결성을 채우는 과정에서 리추얼 기록에 없는 허위 경력을 제안함. 사실에 기반해야 하므로 삭제함.',
    correction:
      '➔ 실제 운영 중인 2개의 라이브 서비스와 AWS 핸즈온 및 과제 8 WebAuthn 패스키 구현 경험으로 엄밀히 한정.',
  },
];

// 6. 회복탄력성 서사: 3인칭 초안 & 1인칭 완성본 & 동료 2인 피드백 (T09-C11 ~ T09-C13)
export const RESILIENCE_STORY: ResilienceStory = {
  authorName: '장진영',
  part1_hardship: {
    year: '과정 이전',
    location: '초기 프로젝트 개발 현장',
    title: '1부: 고난 — 첫 인프라 배포 장애와 벽에 부딪힌 순간',
    content:
      '초기 웹 서비스 인프라 배포 프로젝트에서 원인을 알 수 없는 서버 다운과 데이터베이스 연결 유실 장애가 발생했습니다. 밤을 새우며 인터넷 블로그의 임시방편 코드를 닥치는 대로 붙여 넣었지만 문제는 악화되었고, 결국 정해진 시연 날짜를 맞추지 못했습니다. 기초 원리를 모른 채 겉핥기로 기술을 다루려 했던 나의 미숙함이 팀 전체에 피해를 주었다는 자책감에 며칠 동안 컴퓨터 앞에 앉기조차 두려웠던 가장 힘들었던 순간이었습니다.',
  },
  part2_rebound: {
    title: '2부: 다시 일어난 날 — 원인 분석 원칙 확립과 30일간의 증명',
    whatChanged:
      '그 실패 이후 나는 일하는 방식을 완전히 바꾸었습니다. "블랙박스 코드를 절대 복사하지 않는다", "모든 시스템은 3단계 사전 점검 루틴을 거친다", "오류가 나면 가장 밑단의 로그와 공식 표준 명세부터 읽는다"는 세 가지 원칙을 세웠습니다.',
    alephEchoScene: {
      date: '2026-08-26',
      scene:
        '이 원칙의 힘은 SKT ALEPH 과정에서 그대로 재현되었습니다. 2026년 8월 26일 실습 중 발생한 복잡한 코드 에러 앞에서 과거의 조급함 대신 오류 로그를 포기하지 않고 끝까지 파고들어 원인을 규명해 냈으며, 2026년 9월 17일 네트워크 조별 과제에서는 팀원이 대본 없이도 발표할 수 있도록 깔끔한 자료 구조를 설계해 협업을 완결했습니다.',
    },
  },
  part3_improvedMe: {
    title: '3부: 더 나아진 나 — 흔들리지 않는 루틴과 신뢰의 엔지니어',
    currentChange:
      '고난을 지나온 지금의 나는 실패를 두려워하지 않습니다. 자격증 시험과 먼 거리 통학이 겹치는 바쁜 일정 속에서도 매일 아침 가장 먼저 강의장에 도착해 복습하고 준비하는 일상의 루틴으로 흔들림 없이 전진하며, 팀원들이 길을 잃었을 때 조용히 곁에서 페어로 함께 디버깅해 주는 든든한 조력자가 되었습니다.',
    futureVision:
      '앞으로 나는 어떤 복잡한 기술 난제 앞에서도 바닥부터 원리를 파고들어 가장 안전하고 견고한 보안·네트워크 인프라를 구축하는 엔지니어로 성장할 것입니다.',
  },
  thirdPersonDraft: `[에이전트 생성 3인칭 초안 // 약 920자]

장진영 님은 초기 웹 서비스 인프라 배포 프로젝트에서 원인 모를 서버 중단과 장애를 겪었습니다. 임시 조치만 반복하다 프로젝트 시연을 놓쳤고, 기본기의 부재를 뼈저리게 통감했습니다. 그러나 장진영 님은 주저앉지 않았습니다. 실패의 원인을 자신의 태도에서 찾고 "기초 원리를 모르는 코드는 쓰지 않는다"와 "3단계 사전 점검 루틴"을 삶의 규칙으로 확립했습니다.

이 회복의 힘은 SKT ALEPH 1기 과정에서 다시 증명되었습니다. 2026년 8월 26일, 실무 실습 중 코드 오류가 발생했을 때 장진영 님은 과거의 조급함 대신 오류의 밑단 원인을 포기하지 않고 끝까지 파고들어 완벽히 해결했습니다. 또한 2026년 8월 12일 kali 리눅스 설치에 어려움을 겪던 팀원들을 위해 다양한 해결 방안을 시도해 실습 환경 셋팅을 완결했으며, 2026년 9월 17일에는 조별 과제 발표 자료를 직관적으로 정리해 동료가 대본 없이도 발표할 수 있도록 도왔습니다.

지금의 장진영 님은 먼 거리 통학이나 시험 일정 속에서도 매일 아침 강의장에 1등으로 도착해 예습과 복습을 지켜내는 꾸준한 실행력과, 팀에 온기를 더하는 조력 리더십을 갖춘 견고한 개발자로 성장했습니다. 장진영 님은 앞으로 안전하고 신뢰할 수 있는 보안 인프라를 완성하는 핵심 엔지니어가 되고자 합니다.`,
  firstPersonFinal: `[학생 직접 정제 1인칭 완성본 // 약 940자]

나는 초기 웹 인프라 배포 프로젝트에서 예상치 못한 장애를 마주했습니다. 원인을 알지 못한 채 임시 코드를 덧대다 정해진 시연을 맞추지 못했고, 기본기의 부재가 팀에 미친 무게를 뼈아프게 느꼈습니다. 하지만 그 실패는 나를 멈추게 하는 대신 일하는 기준을 완전히 바꾸는 전환점이 되었습니다. 나는 "블랙박스 라이브러리에 기대지 않고 원리를 먼저 이해한다", "매일 사전 점검 루틴을 지킨다"는 원칙을 세우고 시스템의 기초부터 다시 다졌습니다.

이 변화의 힘은 SKT ALEPH 30일간의 리추얼 기록에 고스란히 드러났습니다. 2026년 8월 26일 코드 오류가 발생했을 때 나는 조급해하는 대신 에러가 왜 났는지 포기하지 않고 끝까지 원인을 찾아 해결책을 도출했습니다. 2026년 8월 12일 kali 리눅스 설치가 지연되던 동료들을 위해 여러 방법을 적용해 셋팅을 마쳤고, 2026년 9월 17일 조별 발표에서는 동료가 대본 없이도 발표할 수 있도록 깔끔한 자료 구조를 함께 만들었습니다.

지금의 나는 자격증 시험과 먼 거리 통학 속에서도 매일 아침 가장 먼저 도착해 하루를 준비하는 루틴을 지키며, 동료의 막힌 곳을 조용히 풀어주는 든든한 조력자입니다. 앞으로 나는 흔들리지 않는 원리 중심의 문제 해결력으로 가장 안전하고 견고한 보안·인프라 환경을 구축하겠습니다.`,
  peerFeedbacks: [
    {
      id: 1,
      peerLabel: '동료 1 (ALEPH 1기 수강생)',
      isLikeMe: '완전 진영 님 특유의 차분하면서도 끝까지 물고 늘어지는 성향이 그대로 드러나서 본인 그 자체 같아요.',
      isFabricated:
        '전혀 없음. 실제로 우리가 옆에서 지켜봤던 매일 아침 일찍 오셔서 복습하고 오류 찾아내던 모습이 생생하게 겹쳐 보입니다.',
    },
    {
      id: 2,
      peerLabel: '동료 2 (ALEPH 1기 수강생)',
      isLikeMe:
        '과정 전 실패 경험부터 지금 묵묵히 팀원들을 도와주며 인프라를 다루는 모습까지 서사 연결이 매우 자연스럽고 진영 님답습니다.',
      isFabricated:
        '지어낸 느낌 없이 담백하고 진솔합니다. 조별 발표 자료 같이 정리해주고 logging for문 원리 설명해주던 일화가 정확히 적혀 있네요.',
    },
  ],
};

// 7. 자기소개서 초안 & 포트폴리오 뼈대 (1~8번 과제 매핑) (T09-C14 ~ T09-C17)
export const RESUME_AND_PORTFOLIO: ResumeAndPortfolio = {
  studentName: '장진영',
  firstSentence:
    '실패의 자리에서 원인을 분석하고, 일상의 작은 루틴으로 견고한 시스템과 팀의 신뢰를 쌓아가는 개발자 장진영입니다.',
  resumeBody: `나는 초기 웹 인프라 배포 프로젝트에서 실패를 겪으며, 겉핥기 지식이 아닌 원리 중심의 문제 해결과 일상의 루틴이 엔지니어의 진짜 실력임을 배웠습니다. 이 뼈아픈 고비를 지나며 세운 '원리 규명'과 '사전 점검'의 원칙은 SKT ALEPH 1기 과정에서 세 가지 핵심 역량으로 만개했습니다.

첫째, 원리 탐구와 집요한 기술 문제 해결력입니다. 2026년 8월 26일 코드 오류 앞에서 포기하지 않고 원인을 끝까지 파고들어 규명했듯, 과제 8 WebAuthn FIDO2 무암호화 패스키 인증을 구현하던 중 브라우저 서명 포맷(DER)과 Web Crypto API 간의 바이트 불일치 문제를 W3C 공식 명세를 분석하여 직접 바이트 파서를 구현해 해결했습니다.

둘째, 온기 있는 소통과 배움 나눔의 조력 리더십입니다. 2026년 8월 12일 kali 리눅스 설치 지연 시 여러 해결 방안을 적용해 팀원들의 환경 셋팅을 완결하고, 2026년 9월 17일 조별 발표에서 동료가 대본 없이 발표할 수 있도록 직관적인 자료 구조를 지원했듯, 2년 10개월간의 SW·AI 교육 강사 및 매니저 경험을 바탕으로 팀의 심리적 안전감을 지켰습니다.

셋째, 루틴 기반의 꾸준한 실행력과 회복탄력성입니다. 자격증(SQL/정보처리기사) 시험과 먼 거리 통학을 병행하면서도 매일 아침 강의장에 1등으로 도착해 하루 학습 내용을 복기하고 정돈된 상태로 몰입했듯, 일상의 리추얼을 지키며 흔들림 없이 전진합니다.`,
  lastSentence:
    '지속 가능한 루틴과 흔들리지 않는 원리 중심의 문제 해결력으로, 팀이 믿고 맡길 수 있는 안전하고 견고한 보안·인프라 환경을 완성하겠습니다.',
  portfolioFramework: [
    {
      strengthTitle: '01. 원리 탐구와 집요한 기술 문제 해결력',
      relatedArtifacts: [
        {
          taskId: '과제 8',
          taskName: 'WebAuthn 무암호화 패스키 비공개 금고 시스템',
          roleInStrength:
            '비밀번호 0개 FIDO2 비대칭키 암호화(ECDSA P-256) 직접 구현 및 Replay 공격·IDOR 401/403 보안 검증 랩 구축',
          artifactLink: '#vault',
        },
        {
          taskId: '과제 2',
          taskName: '네트워크 패킷 분석 및 가상 웹 터미널',
          roleInStrength: 'TCP/IP 4계층 패킷 헤더 파싱 및 리눅스 시스템 명령어 핸즈온 인터랙티브 뷰어 개발',
          artifactLink: '#projects',
        },
      ],
    },
    {
      strengthTitle: '02. 온기 있는 소통과 배움 나눔의 조력 리더십',
      relatedArtifacts: [
        {
          taskId: '과제 1',
          taskName: '나를 소개하는 한 페이지 포트폴리오',
          roleInStrength: '무로그인 공개 화면 규격(T01) 준수, 대상·목적 1문장 및 공개/비공개 3대 정보 투명 명시',
          artifactLink: '#about',
        },
        {
          taskId: '과제 4',
          taskName: '웹 접근성 & 코드 품질 자동화',
          roleInStrength: 'WCAG AA 명암비(4.5:1 이상) 및 키보드 건너뛰기 링크(Skip Link), Oxlint 경고 0건 달성',
          artifactLink: '#skills',
        },
        {
          taskId: '과제 6',
          taskName: '동료 상호작용 및 피드백 반영 UI',
          roleInStrength: '마우스/키보드 동등 상호작용 탭 및 사용자 경험 중심의 반응형 인터페이스 구축',
          artifactLink: '#manual',
        },
      ],
    },
    {
      strengthTitle: '03. 루틴 기반의 꾸준한 실행력과 회복탄력성',
      relatedArtifacts: [
        {
          taskId: '과제 7',
          taskName: '계획 및 루틴 최적화 시스템',
          roleInStrength: '실패 후 즉시 복귀를 보장하는 3단계 사전 점검 루틴 및 일일 리추얼 트래커 설계',
          artifactLink: '#strengths',
        },
        {
          taskId: '과제 3',
          taskName: '첫 화면 3요소 최적화 (소개·활동·근거)',
          roleInStrength: '1366×768 및 1920×1080 기준 해상도에서 무스크롤 동시 노출 레이아웃 완성',
          artifactLink: '#hero',
        },
        {
          taskId: '과제 5',
          taskName: '인터랙티브 모션 제어 및 테마 영속성',
          roleInStrength: '헤더 애니메이션 토글(Reduce Motion) 지원 및 localStorage 테마 설정 영구 유지',
          artifactLink: '#values',
        },
      ],
    },
  ],
  futureTaskSlots: [
    {
      taskNum: '과제 10',
      title: '기술 분석 논문 / 엔지니어링 리포트',
      status: '[예정 // 비워둠]',
    },
    {
      taskNum: '과제 11',
      title: '성장 서사 소설 (소설로 완성하는 나의 이야기)',
      status: '[예정 // 비워둠]',
    },
    {
      taskNum: '과제 12 · 13',
      title: '최종 종합 대표작 및 완성형 포트폴리오 웹',
      status: '[예정 // 비워둠]',
    },
  ],
  aiJudgment: {
    delegatedToAi:
      '리추얼 기록 30일치 전수 텍스트 분석, 5대 규칙 기반의 1차 강점 후보 10건 추출, 3인칭 초안(900자) 뼈대 생성, WebAuthn 기술 용어 정합성 검토.',
    studentJudged:
      '과정 이전 초기 웹 프로젝트 배포 실패 고난 일화 선정, 에이전트가 제안한 과장된 표현(카리스마 리더십, 천재적 직관 등 3건) 직접 삭제 및 이유 명시, 1인칭 서사 완성본 직접 문장 정제, 동료 2인 피드백 수집 및 익명화 검증.',
    rejectedAiProposal:
      'AI가 서사를 채우는 과정에서 제안했던 "기록에 없는 글로벌 대규모 클라우드 총괄 경력"은 허위 과장 정보이므로 전면 기각하고 실제 2개의 라이브 서비스 운영 및 과제 8 WebAuthn과 교육 실무 경험으로 정정 반영함.',
  },
  quickVerification4Lines: {
    whereToGo:
      '브라우저 새 시크릿 창을 열고 배포 웹에 접속하여 상단 네비게이션의 [리추얼 에이전트] 메뉴(#ritual-agent)로 이동하거나, 단일 서사 문서 `NARRATIVE.md` 파일을 엽니다.',
    whatToDoIn3Steps:
      '① [01 // 리추얼 기록 뷰어] 탭에서 동료 이름 가리기 토글 및 텍스트 파일 다운로드를 확인합니다.\n② [03 // 강점 지도] 탭에서 3대 강점과 학생이 지운 항목 3건 및 이유를 확인합니다.\n③ [04 // 회복탄력성 서사] 및 [05 // 자기소개서 & 뼈대] 탭에서 3인칭/1인칭 서사, 동료 2인 피드백, 1~8번 과제 매핑을 확인합니다.',
    whatShowsSuccess:
      '학생 본인 이름(장진영)이 서사 문서 첫머리와 자기소개서에 명시되어 있고, 30일치 리추얼 발췌 대목(날짜 포함), 에이전트 5대 규칙, 강점 지도 3개 및 지운 이유, 3인칭/1인칭 서사, 동료 무명 피드백, 자기소개서 초안, 1~8번 과제 매핑 포트폴리오 뼈대가 온전히 표시되면 통과입니다.',
    whatShowsFailure:
      '로그인/비밀번호 창이 요구되거나, 본인 이름 외 타인 실명/연락처가 노출되거나, 지운 항목 및 이유가 누락되어 있거나, 서사 문서가 비밀번호 없이 열리지 않는 경우입니다.',
  },
};

// 8. 리추얼 기록 텍스트 생성 유틸리티 (30일치 전수 마스킹 지원)
export function generateRitualLogText(hidePeerNames = true): string {
  let text = `================================================================================
SKT ALEPH 1기 수강생 ${STUDENT_INFO.name} 리추얼 기록 일지 (30일치 전수)
수강생: ${STUDENT_INFO.name}
트랙: ${STUDENT_INFO.track}
마스킹 적용 여부: ${hidePeerNames ? '동료/감사 대상 이름 자동 익명화 ([동료 1], [동료 2], (이름 가림) 등)' : '원문 표시'}
================================================================================\n\n`;

  text += `[1. 학생 본인이 직접 읽고 표시한 대표 발췌 대목 (T09-C02)]\n`;
  RITUAL_LOGS.forEach((log, idx) => {
    text += `[${idx + 1}] (${log.date}) [${log.highlightCategory}] ${log.highlightExcerpt}\n`;
  });
  text += `\n--------------------------------------------------------------------------------\n\n`;

  text += `[2. 날짜별 아침 및 마무리 리추얼 상세 기록 (총 ${RITUAL_LOGS.length}일치)]\n\n`;
  RITUAL_LOGS.forEach((log) => {
    let morningPeer = log.morning.peerFeedback;
    let eveningGratitude = log.evening.gratitude;

    if (!hidePeerNames) {
      morningPeer = morningPeer
        .replace(/\[동료 1\]/g, '동료A')
        .replace(/\[동료 2\]/g, '동료B')
        .replace(/\[동료 3\]/g, '동료C');
      eveningGratitude = eveningGratitude
        .replace(/\[동료 1\]/g, '동료A')
        .replace(/\[동료 2\]/g, '동료B')
        .replace(/\[동료 3\]/g, '동료C');
    }

    text += `### 날짜: ${log.date} (${log.dayOfWeek})\n`;
    text += `[아침 리추얼]\n`;
    text += ` - 편안했던 장면: ${log.morning.comfortableScene}\n`;
    text += ` - 강점 일화: ${log.morning.strengthEpisode}\n`;
    text += ` - 동료가 말해 준 내 장점: ${morningPeer}\n`;
    text += ` - 오늘 정한 작은 행동: ${log.morning.smallAction}\n`;
    text += `[마무리 리추얼]\n`;
    text += ` - 하루 돌아봄: ${log.evening.reflection}\n`;
    text += ` - 감사한 동료/순간: ${eveningGratitude}\n`;
    text += ` - 극복한 고비/해결: ${log.evening.overcomeMoment}\n\n`;
  });

  return text;
}
