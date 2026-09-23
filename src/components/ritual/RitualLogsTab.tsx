import React, { useState } from 'react';
import {
  Sparkles,
  Check,
  Clock,
  Sun,
  Moon,
  Bookmark,
  Search,
  X,
  SlidersHorizontal,
  Sunrise,
  Sunset,
  Heart,
  ShieldCheck,
  Flame,
  Users,
} from 'lucide-react';
import morningSkyImg from '../../assets/morning-sky.png';
import eveningSkyImg from '../../assets/evening-sky.png';
import { RITUAL_LOGS } from '../../data/ritualData';
import { cn } from '../../lib/utils';

type TimeSlotFilter = 'all' | 'morning' | 'evening';

export const RitualLogsTab: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<TimeSlotFilter>('all');
  const hidePeerNames = true;

  const categories = ['전체', '원리탐구', '배움나눔', '루틴회복', '조력리더십', '기술문제해결'] as const;

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

  return (
    <div className="mt-8 space-y-8">
      {/* Top Live Weather Atmosphere Dashboard Banner - Large Panoramic Showcase */}
      <div className="relative min-h-[300px] overflow-hidden rounded-3xl border border-black/[0.08] shadow-2xl backdrop-blur-2xl transition-all duration-300 sm:min-h-[360px] md:min-h-[380px] dark:border-white/[0.12]">
        {/* Background Sky Image according to timeSlot */}
        <div className="absolute inset-0 z-0">
          {timeSlot === 'morning' ? (
            <div
              className="h-full w-full bg-cover bg-center transition-all duration-700 hover:scale-105"
              style={{ backgroundImage: `url(${morningSkyImg})` }}
            >
              <div className="h-full w-full bg-gradient-to-t from-black/85 via-black/40 to-black/15 backdrop-blur-[0.5px]" />
            </div>
          ) : timeSlot === 'evening' ? (
            <div
              className="h-full w-full bg-cover bg-center transition-all duration-700 hover:scale-105"
              style={{ backgroundImage: `url(${eveningSkyImg})` }}
            >
              <div className="h-full w-full bg-gradient-to-t from-black/85 via-black/45 to-black/20 backdrop-blur-[0.5px]" />
            </div>
          ) : (
            <div className="grid h-full w-full grid-cols-2 transition-all duration-700">
              <div
                className="relative h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${morningSkyImg})` }}
              >
                <div className="h-full w-full bg-gradient-to-t from-black/85 via-black/40 to-black/15" />
              </div>
              <div
                className="relative h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${eveningSkyImg})` }}
              >
                <div className="h-full w-full bg-gradient-to-t from-black/85 via-black/45 to-black/20" />
              </div>
            </div>
          )}
        </div>

        {/* Floating Top Indicators */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 p-6 sm:p-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/35 px-4 py-1.5 font-mono text-xs font-semibold text-white shadow-lg backdrop-blur-md">
            {timeSlot === 'morning' ? (
              <>
                <Sunrise className="h-4 w-4 text-amber-300" />
                <span>07:40 AM 기상 & 사전준비 루틴</span>
              </>
            ) : timeSlot === 'evening' ? (
              <>
                <Sunset className="h-4 w-4 text-indigo-300" />
                <span>11:00 PM 회고 & 감사 루틴</span>
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4 text-amber-300" />
                <span>일일 리추얼 풀 사이클 (13주 여정)</span>
              </>
            )}
          </span>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-950/60 px-3.5 py-1.5 text-xs font-semibold text-emerald-200 shadow-lg backdrop-blur-md">
            <Check className="h-3.5 w-3.5 text-emerald-400" />
            성장 컨디션 100%
          </span>
        </div>

        {/* Bottom Dashboard Content & Metrics */}
        <div className="relative z-10 flex flex-col justify-end gap-6 p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            {/* Left: Weather Status & Motto */}
            <div className="max-w-2xl space-y-2">
              <h3 className="text-2xl font-black tracking-tight text-white drop-shadow-lg sm:text-3xl md:text-4xl">
                {timeSlot === 'morning'
                  ? '☀️ 상쾌한 아침 · 몰입과 준비의 일출'
                  : timeSlot === 'evening'
                    ? '🌙 차분한 저녁 · 감사와 회복탄력성의 밤'
                    : '🌤️ 아침의 에너지와 저녁의 성찰이 깃든 리추얼 날씨'}
              </h3>
              <p className="text-xs leading-relaxed text-neutral-100 drop-shadow-md sm:text-sm">
                {timeSlot === 'morning'
                  ? '매일 아침 가장 먼저 강의장에 도착해 복습하고 동료들과 페어로 문제를 해결하는 아침 기록'
                  : timeSlot === 'evening'
                    ? '하루의 고비를 딛고 일어서며 동료와 멘토에게 전한 따뜻한 감사와 회복탄력성 회고'
                    : '아침 7시 40분의 상쾌한 시작부터 밤 11시의 깊은 회고까지 날짜별로 연결된 13주 성장 아카이브'}
              </p>
            </div>

            {/* Right: Weather Metric Capsules */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5">
              <div className="rounded-2xl border border-white/20 bg-black/40 p-3.5 text-center shadow-lg backdrop-blur-xl transition-transform hover:scale-105">
                <span className="text-[10px] font-medium text-neutral-300 sm:text-xs">리추얼 로그</span>
                <p className="mt-1 text-base font-black text-white sm:text-xl">{RITUAL_LOGS.length}일치</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-black/40 p-3.5 text-center shadow-lg backdrop-blur-xl transition-transform hover:scale-105">
                <span className="text-[10px] font-medium text-neutral-300 sm:text-xs">핵심 강점</span>
                <p className="mt-1 text-base font-black text-amber-300 sm:text-xl">3대 강점</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-black/40 p-3.5 text-center shadow-lg backdrop-blur-xl transition-transform hover:scale-105">
                <span className="text-[10px] font-medium text-neutral-300 sm:text-xs">감사·피드백</span>
                <p className="mt-1 text-base font-black text-emerald-300 sm:text-xl">100% 완비</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Student-Selected Highlights (Weather App Highlights Widget) */}
      <div className="rounded-3xl border border-black/[0.05] bg-neutral-100/70 p-5 backdrop-blur-xl sm:p-6 dark:border-white/[0.06] dark:bg-neutral-800/40">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5 text-neutral-900 dark:text-white">
            <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-blue-500 text-white shadow-sm shadow-blue-500/30">
              <Bookmark className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold sm:text-base">
                학생 본인이 직접 선별한 핵심 리추얼 발췌 대목 (T09-C02)
              </h3>
              <span className="text-[11px] text-neutral-400">수강생 장진영이 전수 정독 후 고른 주요 장면 및 일화</span>
            </div>
          </div>
          <span className="self-start rounded-full bg-blue-500/10 px-3 py-1 font-mono text-[11px] font-semibold text-blue-600 sm:self-auto dark:bg-blue-400/10 dark:text-blue-400">
            핵심 {RITUAL_LOGS.length}편 선별
          </span>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          {RITUAL_LOGS.map((log) => (
            <div
              key={`highlight-${log.id}`}
              className="group flex flex-col justify-between rounded-2xl border border-black/[0.04] bg-white/90 p-4 shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-black/[0.1] hover:shadow-md dark:border-white/[0.06] dark:bg-neutral-900/90 dark:hover:border-white/[0.15]"
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

      {/* Filter Toolbar: TimeSlot Segment + Category Chips + Search */}
      <div className="space-y-4">
        {/* Top Row: TimeSlot Tabs & Search Bar */}
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          {/* Weather TimeSlot Segmented Switcher */}
          <div className="flex rounded-2xl bg-neutral-200/60 p-1 backdrop-blur-xl dark:bg-neutral-800/70">
            <button
              type="button"
              onClick={() => setTimeSlot('all')}
              className={cn(
                'flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all',
                timeSlot === 'all'
                  ? 'bg-white text-neutral-950 shadow-sm dark:bg-neutral-700 dark:text-white'
                  : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white',
              )}
            >
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              <span>전체 리추얼</span>
            </button>
            <button
              type="button"
              onClick={() => setTimeSlot('morning')}
              className={cn(
                'flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all',
                timeSlot === 'morning'
                  ? 'bg-amber-500 text-white shadow-sm shadow-amber-500/30'
                  : 'text-neutral-500 hover:text-amber-600 dark:text-neutral-400 dark:hover:text-amber-400',
              )}
            >
              <Sunrise className="h-3.5 w-3.5" />
              <span>☀️ 아침 리추얼</span>
            </button>
            <button
              type="button"
              onClick={() => setTimeSlot('evening')}
              className={cn(
                'flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all',
                timeSlot === 'evening'
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                  : 'text-neutral-500 hover:text-indigo-600 dark:text-neutral-400 dark:hover:text-indigo-400',
              )}
            >
              <Sunset className="h-3.5 w-3.5" />
              <span>🌙 마무리 리추얼</span>
            </button>
          </div>

          {/* iOS Style Search Input */}
          <div className="relative min-w-[260px]">
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

      {/* Full Daily Ritual Weather Cards - 2 Columns */}
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
              setTimeSlot('all');
            }}
            className="mt-4 rounded-xl bg-neutral-100 px-4 py-1.5 text-xs font-semibold text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
          >
            필터 초기화
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                className="flex flex-col justify-between overflow-hidden rounded-3xl border border-black/[0.06] bg-white/85 shadow-lg backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-black/[0.15] hover:shadow-2xl dark:border-white/[0.08] dark:bg-neutral-900/75 dark:hover:border-white/[0.2]"
              >
                {/* Card Top Title Row */}
                <div className="flex items-center justify-between border-b border-black/[0.04] bg-neutral-50/80 px-5 py-3.5 text-xs dark:border-white/[0.06] dark:bg-neutral-800/50">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-950 font-mono text-[11px] font-bold text-white shadow-xs dark:bg-white dark:text-neutral-950">
                      {idx + 1}
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-mono text-sm font-bold text-neutral-950 sm:text-base dark:text-white">
                        {log.date}
                      </span>
                      <span className="text-xs font-medium text-neutral-400">({log.dayOfWeek})</span>
                    </div>
                  </div>
                  <span className="rounded-full bg-neutral-200/70 px-3 py-1 text-xs font-semibold text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                    {log.highlightCategory}
                  </span>
                </div>

                {/* Morning & Evening Weather Pod Cards */}
                <div className="flex flex-1 flex-col gap-5 p-5">
                  {/* Morning Ritual Weather Pod - Large Image Showcase */}
                  {timeSlot !== 'evening' && (
                    <div className="overflow-hidden rounded-2xl border border-amber-500/20 bg-amber-500/[0.03] shadow-md transition-colors dark:border-amber-400/20 dark:bg-amber-400/[0.03]">
                      {/* Large Weather Sky Showcase Window for Morning */}
                      <div
                        className="relative flex h-36 flex-col justify-between overflow-hidden bg-cover bg-center p-4 text-white sm:h-40"
                        style={{ backgroundImage: `url(${morningSkyImg})` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/15 backdrop-blur-[0.5px]" />
                        <div className="relative z-10 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-amber-500/80 text-white shadow-md backdrop-blur-md">
                              <Sunrise className="h-4 w-4" />
                            </span>
                            <span className="text-sm font-bold tracking-tight text-white drop-shadow-md">
                              아침 리추얼
                            </span>
                          </div>
                          <span className="rounded-full border border-amber-400/30 bg-black/40 px-2.5 py-1 font-mono text-[11px] font-semibold text-amber-200 backdrop-blur-md">
                            ☀️ 07:40 AM 사전준비
                          </span>
                        </div>

                        <div className="relative z-10">
                          <span className="inline-block rounded-xl border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium text-white/95 backdrop-blur-md">
                            🌄 {log.morning.comfortableScene.slice(0, 38)}...
                          </span>
                        </div>
                      </div>

                      {/* Morning Content Blocks */}
                      <div className="space-y-3 p-4 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
                        <div className="rounded-xl border border-amber-500/10 bg-amber-500/[0.04] p-3 dark:border-amber-400/10 dark:bg-amber-400/[0.04]">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 dark:text-amber-300">
                            <Sun className="h-3.5 w-3.5" />
                            <span>편안했던 장면</span>
                          </div>
                          <p className="mt-1.5 text-xs text-neutral-800 dark:text-neutral-200">
                            {log.morning.comfortableScene}
                          </p>
                        </div>

                        <div className="rounded-xl border border-amber-500/10 bg-amber-500/[0.04] p-3 dark:border-amber-400/10 dark:bg-amber-400/[0.04]">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 dark:text-amber-300">
                            <Flame className="h-3.5 w-3.5" />
                            <span>강점 발휘 일화</span>
                          </div>
                          <p className="mt-1.5 text-xs text-neutral-800 dark:text-neutral-200">
                            {log.morning.strengthEpisode}
                          </p>
                        </div>

                        <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-3 text-xs text-amber-950 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-200">
                          <div className="flex items-center gap-1.5 font-bold">
                            <Users className="h-3.5 w-3.5 text-amber-700 dark:text-amber-300" />
                            <span>동료 피드백</span>
                          </div>
                          <p className="mt-1.5 leading-relaxed">{morningPeer}</p>
                        </div>

                        <div className="flex items-start gap-1.5 pt-1 text-xs text-neutral-500 dark:text-neutral-400">
                          <span className="shrink-0 font-semibold text-neutral-700 dark:text-neutral-300">
                            🎯 작은 행동:
                          </span>
                          <span>{log.morning.smallAction}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Evening Ritual Weather Pod - Large Image Showcase */}
                  {timeSlot !== 'morning' && (
                    <div className="overflow-hidden rounded-2xl border border-indigo-500/20 bg-indigo-500/[0.03] shadow-md transition-colors dark:border-indigo-400/20 dark:bg-indigo-400/[0.03]">
                      {/* Large Weather Sky Showcase Window for Evening */}
                      <div
                        className="relative flex h-36 flex-col justify-between overflow-hidden bg-cover bg-center p-4 text-white sm:h-40"
                        style={{ backgroundImage: `url(${eveningSkyImg})` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 backdrop-blur-[0.5px]" />
                        <div className="relative z-10 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-indigo-600/80 text-white shadow-md backdrop-blur-md">
                              <Sunset className="h-4 w-4" />
                            </span>
                            <span className="text-sm font-bold tracking-tight text-white drop-shadow-md">
                              마무리 리추얼
                            </span>
                          </div>
                          <span className="rounded-full border border-indigo-400/30 bg-black/40 px-2.5 py-1 font-mono text-[11px] font-semibold text-indigo-200 backdrop-blur-md">
                            🌙 11:00 PM 회고 & 극복
                          </span>
                        </div>

                        <div className="relative z-10">
                          <span className="inline-block rounded-xl border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium text-white/95 backdrop-blur-md">
                            🌌 {log.evening.reflection.slice(0, 38)}...
                          </span>
                        </div>
                      </div>

                      {/* Evening Content Blocks */}
                      <div className="space-y-3 p-4 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
                        <div className="rounded-xl border border-indigo-500/10 bg-indigo-500/[0.04] p-3 dark:border-indigo-400/10 dark:bg-indigo-400/[0.04]">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-800 dark:text-indigo-300">
                            <Moon className="h-3.5 w-3.5" />
                            <span>하루 돌아봄</span>
                          </div>
                          <p className="mt-1.5 text-xs text-neutral-800 dark:text-neutral-200">
                            {log.evening.reflection}
                          </p>
                        </div>

                        <div className="rounded-xl border border-purple-500/20 bg-purple-500/10 p-3 text-xs text-purple-950 dark:border-purple-400/20 dark:bg-purple-400/10 dark:text-purple-200">
                          <div className="flex items-center gap-1.5 font-bold">
                            <Heart className="h-3.5 w-3.5 text-purple-700 dark:text-purple-300" />
                            <span>감사한 순간</span>
                          </div>
                          <p className="mt-1.5 leading-relaxed">{eveningGratitude}</p>
                        </div>

                        <div className="rounded-xl border border-blue-500/10 bg-blue-500/[0.04] p-3 dark:border-blue-400/10 dark:bg-blue-400/[0.04]">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-blue-800 dark:text-blue-300">
                            <ShieldCheck className="h-3.5 w-3.5" />
                            <span>극복한 고비</span>
                          </div>
                          <p className="mt-1.5 text-xs text-neutral-800 dark:text-neutral-200">
                            {log.evening.overcomeMoment}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
