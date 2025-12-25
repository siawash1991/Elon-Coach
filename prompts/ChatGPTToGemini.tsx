import React, { useState } from 'react';
import { Language } from '../types';

interface ChatGPTToGeminiProps {
  lang: Language;
  onBack: () => void;
  onToggleLang: () => void;
}

interface Translations {
  siteTitle: string;
  siteSubtitle: string;
  langToggle: string;
  pageTitle: string;
  pageDescription: string;
  howToUseTitle: string;
  howToUseSteps: { step: string; desc: string }[];
  promptTitle: string;
  copyBtn: string;
  copied: string;
  exampleLabel: string;
  promptExample: string;
  tipsTitle: string;
  tips: string[];
}

const translations: Record<Language, Translations> = {
  en: {
    siteTitle: "1% Prompt Repository",
    siteSubtitle: "Elite Prompts from World's Top 1%",
    langToggle: "فارسی",
    pageTitle: "Extract ChatGPT Memory to Gemini",
    pageDescription: "Extract your complete AI memory profile from ChatGPT in a structured format that can be imported into any other AI assistant like Gemini, Claude, or Grok.",
    howToUseTitle: "How to Use This Prompt",
    howToUseSteps: [
      { step: "1", desc: "Copy the prompt below and paste it into ChatGPT (the AI that has your saved memories)." },
      { step: "2", desc: "ChatGPT will generate a structured export of everything it knows about you." },
      { step: "3", desc: "Copy the generated summary and paste it into Gemini, Claude, or any other AI." },
      { step: "4", desc: "Your new AI will now have your complete context, preferences, and working style." }
    ],
    promptTitle: "Memory Extraction Prompt",
    copyBtn: "Copy",
    copied: "Copied!",
    exampleLabel: "What You'll Get",
    promptExample: "A structured summary under 800 words including: your role & goals, demographics, preferences, ongoing projects, skills, values, and 20+ memory snippets - all machine-parseable for any AI.",
    tipsTitle: "Pro Tips",
    tips: [
      "Make sure ChatGPT has your memories enabled before running this prompt",
      "The output is designed to be machine-parseable - paste it directly into other AIs",
      "Run this periodically to keep your AI profiles synchronized",
      "You can edit the exported summary before importing to other AIs"
    ]
  },
  fa: {
    siteTitle: "مخزن پرامپت‌های ۱ درصدی‌ها",
    siteSubtitle: "پرامپت‌های نخبگان از ۱ درصد برتر جهان",
    langToggle: "English",
    pageTitle: "استخراج حافظه ChatGPT به Gemini",
    pageDescription: "پروفایل کامل حافظه هوش مصنوعی خود را از ChatGPT در قالبی ساختارمند استخراج کنید که قابل انتقال به هر دستیار هوش مصنوعی دیگری مانند Gemini، Claude یا Grok باشد.",
    howToUseTitle: "نحوه استفاده از این پرامپت",
    howToUseSteps: [
      { step: "۱", desc: "پرامپت زیر را کپی کنید و در ChatGPT (هوش مصنوعی که حافظه‌های شما را دارد) قرار دهید." },
      { step: "۲", desc: "ChatGPT یک خروجی ساختارمند از همه چیزهایی که درباره شما می‌داند تولید می‌کند." },
      { step: "۳", desc: "خلاصه تولید شده را کپی کرده و در Gemini، Claude یا هر هوش مصنوعی دیگری قرار دهید." },
      { step: "۴", desc: "هوش مصنوعی جدید شما اکنون زمینه کامل، ترجیحات و سبک کاری شما را خواهد داشت." }
    ],
    promptTitle: "پرامپت استخراج حافظه",
    copyBtn: "کپی",
    copied: "کپی شد!",
    exampleLabel: "چه چیزی دریافت می‌کنید",
    promptExample: "یک خلاصه ساختارمند زیر ۸۰۰ کلمه شامل: نقش و اهداف، اطلاعات جمعیتی، ترجیحات، پروژه‌های در حال انجام، مهارت‌ها، ارزش‌ها و بیش از ۲۰ قطعه حافظه - همه قابل پردازش توسط هر هوش مصنوعی.",
    tipsTitle: "نکات حرفه‌ای",
    tips: [
      "قبل از اجرای این پرامپت مطمئن شوید که حافظه‌های ChatGPT فعال است",
      "خروجی به گونه‌ای طراحی شده که قابل پردازش توسط ماشین باشد - مستقیماً در هوش مصنوعی‌های دیگر قرار دهید",
      "این کار را به صورت دوره‌ای انجام دهید تا پروفایل‌های هوش مصنوعی شما همگام بمانند",
      "می‌توانید خلاصه صادر شده را قبل از وارد کردن به هوش مصنوعی‌های دیگر ویرایش کنید"
    ]
  }
};

const memoryTransferPrompt = `You are an expert AI memory summarizer and integrator. Based on everything you know about me and based on saved memories Your task is to produce a compact, structured, and export-ready summary that I can feed into other AI tools and agents to reproduce the same context and personalization.

Follow these rules exactly.

1) Role and purpose
- Start with a one-line role statement that describes the user's identity and primary objectives (e.g., "Role: Product designer and solo founder focusing on B2B SaaS; goal: accelerate prototyping and customer discovery").
- Next, provide a one-line usage guideline telling other AIs how to apply this memory (e.g., "Use these details to personalize recommendations, maintain continuity across sessions, and avoid repeating onboarding questions").

2) High-level categories (present as clear labeled sections)
Create the following sections with concise bullet points under each:

- Demographics & background: occupation/roles, education level, languages, major life constraints (e.g., caregiver, full-time job).
- Core preferences: communication style, decision style, preferred level of detail, tone (formal/casual), favorite tools/platforms, typical availability.
- Long-term goals: up to 6 prioritized goals with short deadlines if any.
- Ongoing projects: for each project include: title, one-sentence objective, current stage, key milestones, stakeholders/contacts, and next action.
- Skills & expertise: concise list of top skills and proficiency levels.
- Values & boundaries: ethical constraints, topics to avoid, privacy preferences.
- Health/accessibility notes: any accommodations, neurodiversity, disabilities, or required scheduling considerations.
- Contact & scheduling preferences: best ways/times to reach, meeting length preferences, timezone.
- Content & style guides: writing voice, formatting preferences (headings, lists), citation requirements, pronoun usage.
- Frequently used prompts/templates: list up to 8 essential prompts or templates the user often reuses (one line each).
- Short memory snippets: up to 20 critical facts (one-liners) the user always wants remembered (e.g., "prefers morning meetings", "avoids coffee").

3) Output constraints and format
- Keep the whole summary under 800 words.
- Use clear headers and bullet lists so the output is immediately machine-parseable.
- For each project and goal include a 1–2 line "action hint" that other AIs can execute next.
- Avoid any speculation or invented facts — only summarize what I paste. If information is missing for a required field, mark it as "[unknown]" rather than guessing.
- Output: the structured export-ready summary.`;

const ChatGPTToGemini: React.FC<ChatGPTToGeminiProps> = ({ lang, onBack, onToggleLang }) => {
  const t = translations[lang];
  const isRtl = lang === 'fa';

  const highlightVariables = (text: string) => {
    const parts = text.split(/(\{\{[^}]+\}\})/g);
    return parts.map((part, i) => {
      if (part.startsWith('{{') && part.endsWith('}}')) {
        return <span key={i} className="prompt-var">{part}</span>;
      }
      return part;
    });
  };

  const CopyButton = ({ text }: { text: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    return (
      <button
        onClick={handleCopy}
        className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-lg text-[10px] sm:text-xs font-bold transition-all duration-300 active:scale-95 shadow-lg whitespace-nowrap ${
          copied
            ? 'bg-green-600 text-white scale-105 ring-2 ring-green-400/50'
            : 'bg-emerald-600 hover:bg-emerald-500 text-white hover:shadow-emerald-500/20'
        }`}
      >
        {copied ? (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 sm:h-3.5 w-3 sm:w-3.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>{t.copied}</span>
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 sm:h-3.5 w-3 sm:w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>
            <span>{t.copyBtn}</span>
          </>
        )}
      </button>
    );
  };

  return (
    <div className={`min-h-screen pb-10 sm:pb-20 ${isRtl ? 'rtl text-right' : 'ltr text-left'}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 shadow-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={onBack}
              className="flex-shrink-0 p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-slate-400 ${isRtl ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent truncate">
                {t.siteTitle}
              </h1>
              <p className="text-[10px] sm:text-xs text-slate-400 opacity-80 truncate">{t.siteSubtitle}</p>
            </div>
          </div>
          <button
            onClick={onToggleLang}
            className="flex-shrink-0 px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-800 hover:bg-slate-700 rounded-full text-[10px] sm:text-sm font-semibold transition-all border border-slate-700 flex items-center gap-1.5 sm:gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5a18.022 18.022 0 01-3.839-5.512m12.93 12.48l-9.11-12.48M20 19l-9.11-12.48M10 7a14.59 14.59 0 01-2.018 3.97m0 0a14.542 14.542 0 01-3.012-3.97M9 18H8" />
            </svg>
            {t.langToggle}
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 mt-8 sm:mt-12 space-y-12 sm:space-y-20">
        {/* Page Title Section */}
        <section className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-emerald-600 via-teal-500 to-cyan-500 mb-6 shadow-2xl shadow-emerald-500/20">
            <span className="text-4xl sm:text-5xl">🧠</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">{t.pageTitle}</h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {t.pageDescription}
          </p>
        </section>

        {/* How to Use Section */}
        <section className="bg-slate-900/30 border border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/5 blur-[100px] -z-10"></div>
          <div className="mb-8 sm:mb-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 sm:mb-4">{t.howToUseTitle}</h2>
            <div className="h-1 w-16 sm:h-1.5 sm:w-24 bg-emerald-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {t.howToUseSteps.map((step, i) => (
              <div key={i} className="relative p-5 sm:p-6 bg-slate-800/40 rounded-xl sm:rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all group">
                <div className="text-3xl sm:text-4xl font-black text-emerald-600/10 absolute top-2 right-4 group-hover:text-emerald-600/20 transition-all">
                  {step.step}
                </div>
                <div className="flex flex-col h-full">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-600 text-white rounded-lg sm:rounded-xl flex items-center justify-center text-sm sm:text-base font-bold mb-3 sm:mb-4 shadow-lg shadow-emerald-600/20">
                    {step.step}
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Main Prompt */}
        <section>
          <div className="mb-6 sm:mb-8 border-l-4 border-emerald-500 pl-3 sm:pl-4 rtl:border-l-0 rtl:border-r-4 rtl:pr-3 sm:rtl:pr-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{t.promptTitle}</h2>
          </div>
          <div className="rounded-xl sm:rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden hover:border-slate-700 transition-all flex flex-col">
            <div className="bg-slate-800/50 border-b border-slate-800 px-4 sm:px-6 py-3 flex justify-between items-center gap-4">
              <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase tracking-widest truncate">
                Memory Transfer Prompt
              </span>
              <CopyButton text={memoryTransferPrompt} />
            </div>
            <div className="p-4 sm:p-6 md:p-10 bg-slate-950/30">
              <pre className={`text-slate-300 font-mono text-xs sm:text-sm leading-relaxed sm:leading-loose overflow-x-auto ${isRtl ? 'rtl text-right' : 'ltr text-left'}`}>
                {highlightVariables(memoryTransferPrompt)}
              </pre>
            </div>
            <div className={`p-4 sm:p-6 bg-slate-800/20 border-t border-slate-800/50 ${isRtl ? 'rtl' : 'ltr'}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500"></span>
                <span className="text-[10px] sm:text-xs font-bold text-cyan-500/80 uppercase tracking-wider">{t.exampleLabel}</span>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed italic">
                {t.promptExample}
              </p>
            </div>
          </div>
        </section>

        {/* Pro Tips */}
        <section className="bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-900 p-6 sm:p-10 md:p-14 rounded-3xl sm:rounded-[2.5rem] border border-emerald-900/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-emerald-500/10 blur-3xl rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-emerald-500 tracking-tight">{t.tipsTitle}</h2>
          <div className="space-y-4">
            {t.tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-slate-800/30 rounded-xl border border-slate-700/30">
                <div className="flex-shrink-0 w-6 h-6 bg-emerald-600 text-white rounded-lg flex items-center justify-center text-xs font-bold">
                  {i + 1}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-16 sm:mt-32 py-10 sm:py-16 border-t border-slate-800/50 text-center bg-slate-900/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-base sm:text-lg font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent mb-2">
            {t.siteTitle}
          </h2>
          <p className="text-slate-500 text-[10px] sm:text-sm">{t.siteSubtitle}</p>
          <div className="mt-6 sm:mt-8 flex justify-center gap-4 sm:gap-6">
            <div className="h-0.5 sm:h-1 w-8 sm:w-12 bg-slate-800 rounded-full"></div>
          </div>
          <p className="text-slate-600 text-[9px] sm:text-xs mt-6 sm:mt-8 max-w-xs mx-auto sm:max-w-none">
            © {new Date().getFullYear()} • AI Memory Transfer • Seamless AI Transition
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ChatGPTToGemini;
