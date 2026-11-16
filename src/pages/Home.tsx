import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    title: "간호학개론 배움 노트", place: "전공 수업", date: "1학년 · 전공 탐색",
    text: "간호의 의미와 간호사의 역할을 나만의 언어로 정리해요.",
    tags: ["전공 이해", "간호 가치관"], kind: "기초 학습", icon: "✧",
    learned: "간호는 아픈 사람을 돕는 마음뿐 아니라 지식과 책임감도 필요한 일이라는 것을 배웠어요. 수업에서 만난 간호사의 다양한 역할을 정리하며 내가 되고 싶은 간호사의 모습을 생각해 봤어요.",
    goal: "수업이 끝난 뒤 핵심 개념 세 가지와 궁금한 점 한 가지를 적고, 교재를 다시 읽으며 답을 찾아보려 해요.",
  },
  {
    title: "함께 배우는 전공 스터디", place: "학과 친구들과의 소모임", date: "1학년 · 학교 적응",
    text: "낯선 전공 용어를 함께 풀어 보고, 서로의 질문을 나눠요.",
    tags: ["협력", "학습 습관"], kind: "학교생활", icon: "♧",
    learned: "혼자 이해했다고 생각한 내용도 친구에게 설명하려니 막히는 부분이 있었어요. 모르는 것을 솔직하게 질문하고 서로의 속도를 존중하는 태도가 함께 배우는 데 중요하다는 걸 느꼈어요.",
    goal: "매주 한 번 교재의 어려운 용어를 함께 정리하고, 돌아가며 설명하는 시간을 가져보려 해요. 출처가 불분명한 내용은 교재와 수업 자료로 확인할 거예요.",
  },
  {
    title: "나를 돌아보는 성찰일지", place: "개인 학습 기록", date: "1학년 · 나 알아가기",
    text: "잘한 점 하나, 어려웠던 점 하나를 적으며 나를 알아가요.",
    tags: ["자기이해", "주간 회고"], kind: "자기성찰", icon: "♡",
    learned: "처음부터 모든 것을 잘하려 하기보다 작은 배움을 꾸준히 쌓는 것이 중요하다고 느꼈어요. 상대의 이야기를 잘 듣는 나의 강점과, 질문을 망설이는 습관을 함께 돌아봤어요.",
    goal: "한 주를 마칠 때 배운 점과 감정을 기록하고, 다음 주에 시도할 작은 행동을 하나 정하려 해요. 수업에서 궁금한 점을 한 번 이상 질문하는 것부터 시작할 거예요.",
  },
];

const growthGoals = [
  { stage: "적응", title: "나에게 맞는 공부 습관 찾기", text: "수업 일정과 복습 시간을 정하고, 일주일에 한 번 학습 과정을 돌아보려 해요." },
  { stage: "기초", title: "전공의 기본을 차근차근 쌓기", text: "낯선 용어를 정리하고, 모르는 내용은 교재와 질문으로 이해해 가려 해요." },
  { stage: "소통", title: "경청하고 함께 배우는 사람 되기", text: "조별 활동에서 친구의 의견을 끝까지 듣고, 내 생각도 차분하게 전하려 해요." },
];

export default function Home() {
  const [filter, setFilter] = useState("전체");
  const [selected, setSelected] = useState<(typeof experiences)[number] | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!selected) return;
    dialog.current?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [selected]);
  return (
    <div className="portfolio min-h-screen bg-[#fafbf8] text-[#263d35] [word-break:keep-all]">
      <a href="#home" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:p-3">본문으로 바로가기</a>
      <header className="border-b border-[#dfe5dc] bg-[#fafbf8]">
        <div className="mx-auto flex h-22 max-w-[1200px] items-center justify-between gap-4 px-6 lg:px-10">
          <a href="#home" className="flex items-center gap-3 text-lg font-semibold tracking-tight"><span className="flex size-8 items-center justify-center rounded-full bg-[#e8eee3] text-[#59734e]">✳</span> 서정현<span className="hidden text-sm font-normal text-[#7a867a] sm:inline">간호 포트폴리오</span></a>
          <nav aria-label="주요 메뉴" className="flex items-center gap-4 text-sm md:gap-7"><a href="#about" className="hover:text-[#6e865a]">소개</a><a href="#experience" className="hover:text-[#6e865a]">배움과 활동</a><a href="#education" className="hidden hover:text-[#6e865a] sm:block">교육 이수</a><a href="#growth" className="hidden hover:text-[#6e865a] sm:block">성장 계획</a><a href="#contact" className="rounded-full border border-[#c7d1bf] px-4 py-2">연락하기 <span aria-hidden="true">↗</span></a></nav>
        </div>
      </header>
      <main id="home" className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <section className="grid items-center gap-10 py-14 md:grid-cols-[1.12fr_1fr] md:gap-16 md:py-20">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-[#edf1e7] px-3 py-1.5 text-xs text-[#506447]"><span aria-hidden="true" className="size-1.5 rounded-full bg-[#708b5b]"/> 간호학과 1학년의 배움 기록</div>
            <h1 className="text-[38px] font-medium leading-[1.4] tracking-[-0.04em] sm:text-[52px]">간호의 첫걸음,<br/>사람을 향한 배움.</h1>
            <p className="mt-6 max-w-sm text-[15px] leading-[1.9] text-[#6c786f]">도움이 필요한 사람 곁에 서고 싶어<br/>간호학을 배우기 시작했어요.<br/>기초부터 차근차근 성장하는 1학년 서정현이에요.</p>
            <a href="#experience" className="mt-9 inline-flex items-center gap-8 rounded-full bg-[#354e3f] px-6 py-3.5 text-sm text-white hover:bg-[#46644e]">나의 배움 기록 살펴보기 <span aria-hidden="true">↗</span></a>
            <div className="mt-10 flex items-center gap-3 text-xs text-[#7d877c]"><span aria-hidden="true" className="h-px w-7 bg-[#b9c6b1]"/> 간호학과 1학년 <span aria-hidden="true" className="text-[#bdc6b8]">/</span> 학습 활동과 목표는 예시예요</div>
          </div>
          <div className="relative mb-5">
            <div className="absolute -right-3 -top-3 h-full w-full rounded-t-[140px] rounded-b-2xl border border-[#d7dfcf]"/>
            <img src="/images/nursing-stethoscope.jpg" width="1100" height="733" fetchPriority="high" alt="밝은 천 위에 놓인 청진기 흑백 사진" className="relative h-[330px] w-full rounded-t-[140px] rounded-b-2xl object-cover object-[60%_center] md:h-[415px]"/>
            <div className="absolute -bottom-5 -left-3 flex items-center gap-4 rounded-xl border border-[#e4e8df] bg-white px-5 py-4 shadow-[0_8px_30px_#2b42200a] md:-left-7"><span aria-hidden="true" className="flex size-10 items-center justify-center rounded-full bg-[#edf2e8] text-xl">♡</span><div><p className="text-sm font-medium">처음이라 더 소중한 배움.</p><p className="mt-1 text-xs text-[#85907f]">오늘의 질문이 내일의 성장이 되도록</p></div></div>
          </div>
        </section>
        <section id="about" className="border-y border-[#dde4d8] py-9">
          <div className="grid gap-5 md:grid-cols-[1fr_1.6fr] md:gap-12">
            <div><p className="text-xs text-[#7d8977]">나의 시작 이야기 · 예시</p><h2 className="mt-2 text-2xl font-medium tracking-tight">간호를 선택한 이유</h2></div>
            <p className="max-w-xl text-sm leading-8 text-[#6c786f]">누군가에게 필요한 순간, 곁에서 힘이 되는 사람이 되고 싶었어요. 그 마음을 지식과 책임감으로 이어가고 싶어 간호학을 선택했어요. 아직 배울 것이 많지만, 잘 듣고 질문하는 태도부터 길러가려 해요.</p>
          </div>
          <div className="mt-8 grid gap-6 border-t border-[#e2e7dd] pt-7 sm:grid-cols-3">
            {[['♡','먼저 듣는 마음','상대의 이야기를 끝까지 들어요.'],['✧','질문하는 용기','모르는 것을 배움의 시작으로 삼아요.'],['♧','꾸준한 작은 실천','오늘 배운 내용을 한 번 더 돌아봐요.']].map(([icon,title,text])=><div key={title} className="flex items-start gap-3"><span aria-hidden="true" className="mt-1 text-2xl text-[#829173]">{icon}</span><div><h3 className="text-sm font-semibold">{title}</h3><p className="mt-2 text-xs leading-6 text-[#7b8477]">{text}</p></div></div>)}
          </div>
        </section>
        <section id="experience" className="py-16">
          <div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-xs text-[#7d8977]">수업에서, 친구들과, 나의 일상에서</p><h2 className="mt-2 text-[29px] font-medium tracking-[-0.04em]">배움과 활동</h2></div><div role="group" className="flex gap-1 rounded-full bg-[#eef1ea] p-1" aria-label="활동 분류">{["전체","기초 학습","학교생활","자기성찰"].map(x=><button key={x} onClick={()=>setFilter(x)} aria-pressed={filter===x} className={`min-h-11 rounded-full px-3 py-2 text-xs transition-colors sm:px-4 ${filter===x?'bg-white text-[#334a38] shadow-sm':'text-[#75806f] hover:text-[#334a38]'}`}>{x}</button>)}</div></div>
          <p className="mt-4 text-xs leading-6 text-[#7b8477]">1학년에 맞춘 구성 예시예요. 실제 수강 과목과 참여 활동에 맞게 바꿀 수 있어요.</p>
          <p className="sr-only" role="status">{filter === "전체" ? "전체 활동 3개" : `${filter} 활동 1개`}</p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">{experiences.filter(x=>filter==="전체"||x.kind===filter).map((item,i)=><button key={item.title} onClick={()=>setSelected(item)} className="group overflow-hidden rounded-xl border border-[#e0e5db] bg-white text-left transition-colors hover:border-[#9aaf8d]"><div className={`relative flex h-40 items-center justify-center ${i%2===0?'bg-[#eaf0e6]':'bg-[#edf0e9]'}`}><span className="absolute left-5 top-4 rounded-full bg-white/75 px-3 py-1 text-[11px] text-[#56694a]">{item.kind} · 예시</span><span aria-hidden="true" className="text-[65px] font-light text-[#7f9771]">{item.icon}</span><span className="absolute bottom-4 right-5 text-xs text-[#83917a]">배움의 기록</span></div><div className="p-6"><p className="text-[11px] text-[#85907e]">{item.date} · 예시</p><h3 className="mt-2 text-lg font-semibold">{item.title}</h3><p className="mt-2 text-xs leading-6 text-[#788272]">{item.text}</p><div className="mt-5 flex items-center justify-between"><div className="flex gap-2">{item.tags.map(t=><span key={t} className="rounded bg-[#f2f4ef] px-2 py-1 text-[10px] text-[#6c7c60]">{t}</span>)}</div><span className="text-[#627953]" aria-hidden="true">↗</span></div></div></button>)}</div>
        </section>
        <section id="education" aria-labelledby="education-heading" className="mb-16 border-t border-[#dde4d8] pt-12">
          <p className="text-xs text-[#5e6d57]">관심을 넓혀가는 배움</p>
          <h2 id="education-heading" className="mt-2 text-[29px] font-medium tracking-tight">교육 이수</h2>
          <article className="mt-7 grid overflow-hidden rounded-2xl border border-[#dfe5d9] bg-white md:grid-cols-[1.05fr_1fr]">
            <a href="/images/seo-jeonghyeon-ai-ethics-certificate.jpeg" target="_blank" rel="noopener noreferrer" className="group flex items-center bg-[#eef1eb] p-5 sm:p-8" aria-label="서정현 AI 윤리 과정 수료증 원본 보기 (새 탭)">
              <img src="/images/seo-jeonghyeon-ai-ethics-certificate.jpeg" width="1649" height="1275" loading="lazy" alt="서정현의 Global MOOC on the Ethics of AI 수료증. 수료일 2026년 9월 7일. UNESCO, LG AI Research, Coursera 표기." className="h-auto w-full border border-[#d9dfd5] shadow-sm transition-opacity group-hover:opacity-85" />
            </a>
            <div className="flex flex-col justify-center p-6 sm:p-9">
              <span className="self-start rounded-full bg-[#edf2e8] px-3 py-1.5 text-xs font-medium text-[#48603d]">수료 완료</span>
              <h3 className="mt-5 text-2xl font-medium tracking-tight">AI 윤리 온라인 과정</h3>
              <p className="mt-2 text-sm leading-7 text-[#5e6d57]" lang="en">Global MOOC on the Ethics of AI</p>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex flex-wrap gap-x-5 gap-y-1"><dt className="w-14 shrink-0 text-[#5e6d57]">수료일</dt><dd><time dateTime="2026-09-07">2026년 9월 7일</time></dd></div>
                <div className="flex flex-wrap gap-x-5 gap-y-1"><dt className="w-14 shrink-0 text-[#5e6d57]">과정 개발</dt><dd>UNESCO · LG AI Research</dd></div>
                <div className="flex flex-wrap gap-x-5 gap-y-1"><dt className="w-14 shrink-0 text-[#5e6d57]">플랫폼</dt><dd>Coursera</dd></div>
              </dl>
              <p className="mt-6 border-t border-[#e2e7dd] pt-5 text-xs leading-6 text-[#5e6d57]">첨부한 수료증에 기재된 내용을 바탕으로 정리했어요. 간호 전문 자격이 아닌 온라인 교육 수료 기록이에요.</p>
              <a href="/images/seo-jeonghyeon-ai-ethics-certificate.jpeg" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-4 self-start rounded-full border border-[#c7d1bf] px-5 text-sm hover:bg-[#edf2e8]">수료증 원본 보기 <span className="sr-only">(새 탭)</span><span aria-hidden="true">↗</span></a>
            </div>
          </article>
        </section>
        <section id="projects" aria-labelledby="projects-heading" className="mb-16 border-t border-[#dde4d8] pt-12">
          <div className="mb-7"><p className="text-xs text-[#5e6d57]">전공 밖으로 넓혀가는 관심</p><h2 id="projects-heading" className="mt-2 text-[29px] font-medium tracking-tight">디지털 프로젝트</h2></div>
          <article className="grid gap-7 rounded-2xl border border-[#dfe5d9] bg-white p-6 sm:p-9 md:grid-cols-[1.35fr_1fr] md:gap-12">
            <div className="min-w-0">
              <span className="inline-block rounded-full bg-[#edf2e8] px-3 py-1.5 text-xs text-[#48603d]">데이터 시각화</span>
              <h3 className="mt-5 text-2xl font-medium leading-snug tracking-tight">SK하이닉스 공시 데이터 대시보드</h3>
              <p lang="en" className="mt-2 text-sm text-[#5e6d57]">SK hynix Financial Intelligence</p>
              <p className="mt-5 max-w-lg text-sm leading-8 text-[#5e6d57]">사업·반기·분기보고서를 바탕으로 매출과 이익, 수익성과 재무안정성을 살펴보는 웹 페이지예요. 장기 재무 흐름과 보고서별 상세 수치를 한곳에 정리한 구성이에요.</p>
              <a href="https://hsc-class01.github.io/JH_SKhynix/" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-5 rounded-full bg-[#354e3f] px-5 text-sm text-white hover:bg-[#46644e]">프로젝트 살펴보기 <span className="sr-only">(새 탭)</span><span aria-hidden="true">↗</span></a>
            </div>
            <div className="flex flex-col justify-center rounded-xl bg-[#f2f5ee] p-6">
              <h4 className="text-sm font-semibold">이런 구성을 볼 수 있어요</h4>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-[#5e6d57]">
                <li className="border-b border-[#dce4d4] pb-4">최근 공시 핵심 지표와 장기 재무 흐름</li>
                <li className="border-b border-[#dce4d4] pb-4">공시 수집 현황과 보고서별 상세 수치</li>
                <li>국내 비교 기업 정보</li>
              </ul>
              <p className="mt-6 text-xs leading-6 text-[#5e6d57]">연결 페이지에 소개된 내용을 기준으로 정리했어요. 실제 지표 표시는 해당 페이지의 데이터 수집 상태에 따라 달라져요.</p>
            </div>
          </article>
        </section>
        <section id="growth" className="mb-16 grid gap-8 rounded-2xl bg-[#edf1e8] p-8 md:grid-cols-[1fr_1.5fr] md:p-10">
          <div><p className="text-xs text-[#738167]">지금부터 키워갈 나의 기본</p><h2 className="mt-3 text-2xl font-medium tracking-tight">나의 성장 계획</h2><p className="mt-4 text-sm leading-7 text-[#6c7a63]">빠른 성과보다 꾸준한 배움을.<br/>작은 목표부터 실천하려 해요.</p><p className="mt-5 inline-block rounded-full border border-[#cbd6c0] px-3 py-1 text-xs text-[#6c7a63]">앞으로의 목표 · 예시</p></div>
          <div className="space-y-5">{growthGoals.map(({stage,title,text})=><div key={stage} className="flex gap-5 border-b border-[#d6dfcd] pb-5 last:border-0 last:pb-0"><span className="shrink-0 pt-0.5 text-xs text-[#718461]">{stage}</span><div><h3 className="text-sm font-medium">{title}</h3><p className="mt-2 max-w-md text-xs leading-6 text-[#7b8673]">{text}</p></div></div>)}</div>
        </section>
        <section id="contact" className="flex flex-wrap items-center justify-between gap-6 border-t border-[#dce3d7] py-12"><div><h2 className="text-2xl font-medium tracking-tight">더 나은 간호를 향한 연결</h2><p className="mt-3 text-sm text-[#77816f]">함께 배우고 성장할 기회를 기다려요.</p></div><div className="text-right"><p className="text-sm">이메일을 준비하고 있어요</p><p className="mt-2 text-xs text-[#7d8776]">실제 연락처로 변경할 수 있어요</p></div></section>
      </main>
      <footer className="border-t border-[#e2e7dd] py-6"><div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-2 px-6 text-[11px] text-[#8a9282] lg:px-10"><p>서정현의 1학년 간호 포트폴리오 · 학습 활동과 목표는 예시</p><p>서툰 시작도, 소중한 배움의 기록이에요.</p></div></footer>
      {selected && <dialog ref={dialog} onClose={()=>setSelected(null)} aria-labelledby="record-title" className="portfolio fixed inset-0 m-auto max-h-[85dvh] w-[calc(100%-2.5rem)] max-w-lg overflow-y-auto overscroll-contain rounded-2xl bg-[#fafbf8] p-8 text-[#263d35] backdrop:bg-[#182b23]/40">
        <div className="flex items-center justify-between"><span className="text-xs text-[#6b805e]">{selected.kind} · 예시 기록</span><button onClick={()=>dialog.current?.close()} className="min-h-11 rounded-full border border-[#d8dfd1] px-4 text-sm hover:bg-[#e8eee2]">닫기</button></div>
        <h2 id="record-title" className="mt-6 text-2xl font-semibold">{selected.title}</h2>
        <p className="mt-2 text-xs text-[#7a8672]">{selected.place} · {selected.date} · 예시</p>
        <h3 className="mt-7 text-sm font-semibold">배운 점</h3><p className="mt-2 text-sm leading-8 text-[#6b7864]">{selected.learned}</p>
        <h3 className="mt-5 text-sm font-semibold">다음 배움의 목표</h3><p className="mt-2 text-sm leading-8 text-[#6b7864]">{selected.goal}</p>
        <p className="mt-6 border-t border-[#dce3d5] pt-4 text-xs leading-6 text-[#839079]">이 기록은 구성 예시예요. 실제 환자를 식별할 수 있는 정보는 기록하지 않아요.</p>
      </dialog>}
    </div>
  );
}
