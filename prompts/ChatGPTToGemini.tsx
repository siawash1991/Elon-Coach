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
    pageDescription: "Transfer your conversation context, preferences, and learned patterns from ChatGPT to Google Gemini for a seamless AI transition.",
    howToUseTitle: "How to Use This Prompt",
    howToUseSteps: [
      { step: "1", desc: "Open ChatGPT and ask it to summarize what it knows about you from your conversation history." },
      { step: "2", desc: "Copy the summary and paste it into the prompt below where indicated." },
      { step: "3", desc: "Use this prompt in Google Gemini to transfer your context and preferences." },
      { step: "4", desc: "Gemini will now understand your working style, preferences, and past context." }
    ],
    promptTitle: "Memory Transfer Prompt",
    copyBtn: "Copy",
    copied: "Copied!",
    exampleLabel: "Example Usage",
    promptExample: "I've been using ChatGPT for 6 months for coding assistance. It knows my preferred languages (Python, TypeScript), coding style, and that I work on AI projects.",
    tipsTitle: "Pro Tips",
    tips: [
      "Ask ChatGPT to be thorough in describing your preferences and patterns",
      "Include specific projects, topics, or domains you frequently discuss",
      "Mention your communication style preferences (brief vs detailed, technical vs simple)",
      "Transfer incrementally - start with core preferences, then add details over time"
    ]
  },
  fa: {
    siteTitle: "مخزن پرامپت‌های ۱ درصدی‌ها",
    siteSubtitle: "پرامپت‌های نخبگان از ۱ درصد برتر جهان",
    langToggle: "English",
    pageTitle: "استخراج حافظه ChatGPT به Gemini",
    pageDescription: "زمینه مکالمات، ترجیحات و الگوهای یادگرفته شده خود را از ChatGPT به Google Gemini منتقل کنید تا یک انتقال بی‌درز هوش مصنوعی داشته باشید.",
    howToUseTitle: "نحوه استفاده از این پرامپت",
    howToUseSteps: [
      { step: "۱", desc: "ChatGPT را باز کنید و از آن بخواهید خلاصه‌ای از آنچه از تاریخچه مکالمات شما درباره شما می‌داند ارائه دهد." },
      { step: "۲", desc: "خلاصه را کپی کنید و در جای مشخص شده در پرامپت زیر قرار دهید." },
      { step: "۳", desc: "این پرامپت را در Google Gemini استفاده کنید تا زمینه و ترجیحات خود را منتقل کنید." },
      { step: "۴", desc: "Gemini اکنون سبک کاری، ترجیحات و زمینه قبلی شما را درک خواهد کرد." }
    ],
    promptTitle: "پرامپت انتقال حافظه",
    copyBtn: "کپی",
    copied: "کپی شد!",
    exampleLabel: "نمونه استفاده",
    promptExample: "من ۶ ماه است که از ChatGPT برای کمک در کدنویسی استفاده می‌کنم. زبان‌های مورد علاقه من (Python، TypeScript)، سبک کدنویسی و اینکه روی پروژه‌های هوش مصنوعی کار می‌کنم را می‌داند.",
    tipsTitle: "نکات حرفه‌ای",
    tips: [
      "از ChatGPT بخواهید در توصیف ترجیحات و الگوهای شما دقیق باشد",
      "پروژه‌ها، موضوعات یا حوزه‌های خاصی که مکرراً بحث می‌کنید را شامل کنید",
      "سبک ارتباطی مورد نظر خود را ذکر کنید (مختصر یا مفصل، تخصصی یا ساده)",
      "به تدریج انتقال دهید - با ترجیحات اصلی شروع کنید، سپس جزئیات را اضافه کنید"
    ]
  }
};

// Placeholder prompt - will be updated when user provides the actual content
const memoryTransferPrompt = `<system>
You are about to receive context about a user who has been working with another AI assistant (ChatGPT). Your goal is to understand and internalize their preferences, working style, and context to provide seamless, personalized assistance.
</system>

<instructions>
I'm transferring my conversation context from ChatGPT to you. Below is a summary of what ChatGPT learned about me through our interactions. Please:

1. **Absorb this context** - Understand my preferences, working style, and background
2. **Acknowledge key patterns** - Confirm what you've understood about me
3. **Maintain consistency** - Apply these preferences in our future conversations
4. **Ask clarifying questions** - If anything is unclear or you need more context

<my_context_from_chatgpt>
{{PASTE_CHATGPT_SUMMARY_HERE}}
</my_context_from_chatgpt>

After processing this, please:
1. Summarize what you understand about my preferences and working style
2. Highlight the top 3-5 key things you'll remember about me
3. Ask any clarifying questions if needed
4. Confirm you're ready to assist with this context in mind
</instructions>

<additional_context>
{{ANY_ADDITIONAL_NOTES_OR_PREFERENCES}}
</additional_context>`;

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
