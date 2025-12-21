
import React, { useState } from 'react';
import { content } from './translations';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('fa');
  const t = content[lang];
  const isRtl = lang === 'fa';

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'fa' : 'en');
  };

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
          : 'bg-red-600 hover:bg-red-500 text-white hover:shadow-red-500/20'
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

  const PromptBox = ({ text, title, example }: { text: string; title?: string; example?: string }) => (
    <div className="rounded-xl sm:rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden hover:border-slate-700 transition-all flex flex-col">
      {/* Prompt Toolbar */}
      <div className="bg-slate-800/50 border-b border-slate-800 px-4 sm:px-6 py-3 flex justify-between items-center gap-4">
        <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase tracking-widest truncate">
          {title || "Prompt Template"}
        </span>
        <CopyButton text={text} />
      </div>
      {/* Prompt Content */}
      <div className="p-4 sm:p-6 md:p-10 bg-slate-950/30">
        <pre className={`text-slate-300 font-mono text-xs sm:text-sm leading-relaxed sm:leading-loose overflow-x-auto ${isRtl ? 'rtl text-right' : 'ltr text-left'}`}>
          {highlightVariables(text)}
        </pre>
      </div>
      {/* Example Section */}
      {example && (
        <div className={`p-4 sm:p-6 bg-slate-800/20 border-t border-slate-800/50 ${isRtl ? 'rtl' : 'ltr'}`}>
          <div className="flex items-center gap-2 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
            <span className="text-[10px] sm:text-xs font-bold text-orange-500/80 uppercase tracking-wider">{t.exampleLabel}</span>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed italic">
            {example}
          </p>
        </div>
      )}
    </div>
  );

  return (
    <div className={`min-h-screen pb-10 sm:pb-20 ${isRtl ? 'rtl text-right' : 'ltr text-left'}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 shadow-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center gap-4">
          <div className="min-w-0">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent truncate">
              {t.siteTitle}
            </h1>
            <p className="text-[10px] sm:text-xs text-slate-400 opacity-80 truncate">{t.siteSubtitle}</p>
          </div>
          <button 
            onClick={toggleLang}
            className="flex-shrink-0 px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-800 hover:bg-slate-700 rounded-full text-[10px] sm:text-sm font-semibold transition-all border border-slate-700 flex items-center gap-1.5 sm:gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5a18.022 18.022 0 01-3.839-5.512m12.93 12.48l-9.11-12.48M20 19l-9.11-12.48M10 7a14.59 14.59 0 01-2.018 3.97m0 0a14.542 14.542 0 01-3.012-3.97M9 18H8" />
            </svg>
            {t.langToggle}
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 mt-8 sm:mt-12 space-y-16 sm:space-y-24">
        {/* How to Use Section */}
        <section className="bg-slate-900/30 border border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 blur-[100px] -z-10"></div>
          <div className="mb-8 sm:mb-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 sm:mb-4">{t.howToUseTitle}</h2>
            <div className="h-1 w-16 sm:h-1.5 sm:w-24 bg-red-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {t.howToUseSteps.map((step, i) => (
              <div key={i} className="relative p-5 sm:p-6 bg-slate-800/40 rounded-xl sm:rounded-2xl border border-slate-700/50 hover:border-red-500/50 transition-all group">
                <div className="text-3xl sm:text-4xl font-black text-red-600/10 absolute top-2 right-4 group-hover:text-red-600/20 transition-all">
                  {step.step}
                </div>
                <div className="flex flex-col h-full">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-600 text-white rounded-lg sm:rounded-xl flex items-center justify-center text-sm sm:text-base font-bold mb-3 sm:mb-4 shadow-lg shadow-red-600/20">
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

        {/* Core Framework */}
        <section>
          <div className="mb-6 sm:mb-8 border-l-4 border-red-500 pl-3 sm:pl-4 rtl:border-l-0 rtl:border-r-4 rtl:pr-3 sm:rtl:pr-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{t.coreFrameworkTitle}</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 sm:mt-2 font-medium">{t.mentalOSTitle}</p>
          </div>
          <div className="overflow-x-auto rounded-xl sm:rounded-2xl border border-slate-800 bg-slate-900/50 shadow-2xl backdrop-blur-sm">
            <table className="w-full text-[11px] sm:text-sm">
              <thead className="bg-slate-800/80 text-slate-300">
                <tr>
                  {t.tableHeaders.map((h, i) => (
                    <th key={i} className="px-3 sm:px-6 py-3 sm:py-5 text-start font-bold uppercase tracking-wider whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {t.mentalOSData.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-800/40 transition-colors group">
                    <td className="px-3 sm:px-6 py-3 sm:py-4 font-bold text-red-400 group-hover:text-red-300 transition-colors align-top sm:align-middle">{row.principle}</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-100 italic leading-relaxed min-w-[150px] sm:min-w-0">{row.question}</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-400 group-hover:text-slate-300 transition-colors min-w-[150px] sm:min-w-0">{row.whatItDoes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-[10px] text-slate-500 flex items-center justify-center gap-2 sm:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            Swipe left to see more
          </div>
        </section>

        {/* Super Prompt */}
        <section>
          <div className="mb-6 sm:mb-8 border-l-4 border-red-500 pl-3 sm:pl-4 rtl:border-l-0 rtl:border-r-4 rtl:pr-3 sm:rtl:pr-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{t.superPromptTitle}</h2>
          </div>
          <PromptBox text={t.superPrompt} title="THE SUPER PROMPT" example={t.superPromptExample} />
        </section>

        {/* Specialized Prompts */}
        <section>
          <div className="mb-6 sm:mb-8 border-l-4 border-red-500 pl-3 sm:pl-4 rtl:border-l-0 rtl:border-r-4 rtl:pr-3 sm:rtl:pr-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{t.specializedTitle}</h2>
          </div>
          <div className="grid gap-10 sm:gap-16">
            {t.specializedPrompts.map((p, i) => (
              <div key={i} className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-orange-400 flex items-center gap-2 sm:gap-3">
                  <span className="text-slate-600 font-mono text-base sm:text-lg">{(i + 1).toString().padStart(2, '0')}</span>
                  <span className="h-px flex-grow bg-slate-800"></span>
                  <span className="truncate">{p.title}</span>
                </h3>
                <PromptBox text={p.content} title={`APPLICATION ${i + 1}`} example={p.example} />
              </div>
            ))}
          </div>
        </section>

        {/* Reference Table */}
        <section>
          <div className="mb-6 sm:mb-8 border-l-4 border-red-500 pl-3 sm:pl-4 rtl:border-l-0 rtl:border-r-4 rtl:pr-3 sm:rtl:pr-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{t.referenceTableTitle}</h2>
          </div>
          <div className="overflow-x-auto rounded-xl sm:rounded-2xl border border-slate-800 bg-slate-900/50 shadow-2xl backdrop-blur-sm">
            <table className="w-full text-[11px] sm:text-sm">
              <thead className="bg-slate-800/80 text-slate-300">
                <tr>
                  {t.refHeaders.map((h, i) => (
                    <th key={i} className="px-3 sm:px-6 py-3 sm:py-5 text-start font-bold uppercase tracking-wider whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {t.refTableData.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-800/40 transition-colors group">
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-600 font-mono text-[9px] sm:text-xs">{row.id}</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 font-bold text-red-400 group-hover:text-red-300 transition-colors whitespace-nowrap">{row.tool}</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-100 italic leading-relaxed min-w-[150px] sm:min-w-0">{row.question}</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-400 group-hover:text-slate-300 transition-colors min-w-[150px] sm:min-w-0">{row.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-[10px] text-slate-500 flex items-center justify-center gap-2 sm:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            Swipe left to see more
          </div>
        </section>

        {/* Compact Version */}
        <section className="bg-gradient-to-br from-red-950/40 via-slate-900 to-slate-900 p-6 sm:p-10 md:p-14 rounded-3xl sm:rounded-[2.5rem] border border-red-900/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-red-500/10 blur-3xl rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-red-500 tracking-tight">{t.compactTitle}</h2>
          <PromptBox text={t.compactPrompt} title="ONE-LINE STACK" example={t.compactPromptExample} />
        </section>
      </main>

      <footer className="mt-16 sm:mt-32 py-10 sm:py-16 border-t border-slate-800/50 text-center bg-slate-900/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-base sm:text-lg font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-2">
            {t.siteTitle}
          </h2>
          <p className="text-slate-500 text-[10px] sm:text-sm">{t.siteSubtitle}</p>
          <div className="mt-6 sm:mt-8 flex justify-center gap-4 sm:gap-6">
             <div className="h-0.5 sm:h-1 w-8 sm:w-12 bg-slate-800 rounded-full"></div>
          </div>
          <p className="text-slate-600 text-[9px] sm:text-xs mt-6 sm:mt-8 max-w-xs mx-auto sm:max-w-none">
            © {new Date().getFullYear()} • Fundamental Thinking Framework • Designed with Ruthless Clarity
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
