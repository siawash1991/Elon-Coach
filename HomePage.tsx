import React from 'react';
import { Language, Post } from './types';
import { posts } from './posts';

interface HomePageProps {
  lang: Language;
  onNavigate: (slug: string) => void;
  onToggleLang: () => void;
}

interface HomeTranslations {
  siteTitle: string;
  siteSubtitle: string;
  langToggle: string;
  heroTitle: string;
  heroDescription: string;
  promptsTitle: string;
  viewPrompt: string;
}

const homeContent: Record<Language, HomeTranslations> = {
  en: {
    siteTitle: "1% Prompt Repository",
    siteSubtitle: "Elite Prompts from World's Top 1%",
    langToggle: "فارسی",
    heroTitle: "Welcome to the 1% Prompt Repository",
    heroDescription: "We have used the power of combining different AI models — from Gemini and Claude to Perplexity and Grok — to create exclusive prompt collections from the world's top 1% performers. Each prompt is carefully crafted to help you think, decide, and execute like the elite.",
    promptsTitle: "Prompt Collection",
    viewPrompt: "View Prompt"
  },
  fa: {
    siteTitle: "مخزن پرامپت‌های ۱ درصدی‌ها",
    siteSubtitle: "پرامپت‌های نخبگان از ۱ درصد برتر جهان",
    langToggle: "English",
    heroTitle: "به مخزن پرامپت‌های ۱ درصدی‌ها خوش آمدید",
    heroDescription: "ما از قدرت ترکیب هوش مصنوعی‌های مختلف — از Gemini و Claude گرفته تا Perplexity و Grok — استفاده کردیم تا برای شما مجموعه‌های خاص پرامپت از افراد ۱ درصد برتر دنیا بسازیم. هر پرامپت با دقت طراحی شده تا به شما کمک کند مثل نخبگان فکر کنید، تصمیم بگیرید و اجرا کنید.",
    promptsTitle: "مجموعه پرامپت‌ها",
    viewPrompt: "مشاهده پرامپت"
  }
};

const PostCard: React.FC<{
  post: Post;
  lang: Language;
  onClick: () => void;
}> = ({ post, lang, onClick }) => {
  const isRtl = lang === 'fa';

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/50 hover:-translate-y-1"
    >
      {/* Cover Image / Gradient */}
      <div className={`aspect-square bg-gradient-to-br ${post.coverGradient} relative overflow-hidden`}>
        {post.coverImage ? (
          <img
            src={post.coverImage}
            alt={post.title[lang]}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-7xl sm:text-8xl opacity-80 group-hover:scale-110 transition-transform duration-300">
              {post.icon}
            </span>
          </div>
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-slate-900 px-4 py-2 rounded-full text-sm font-bold">
            {homeContent[lang].viewPrompt}
          </div>
        </div>
        {/* Category Badge */}
        <div className={`absolute top-3 ${isRtl ? 'right-3' : 'left-3'}`}>
          <span className="bg-black/50 backdrop-blur-sm text-white text-[10px] sm:text-xs px-2.5 py-1 rounded-full font-medium">
            {post.category[lang]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={`p-4 sm:p-5 ${isRtl ? 'text-right' : 'text-left'}`}>
        <h3 className="font-bold text-base sm:text-lg text-white mb-2 line-clamp-2 group-hover:text-orange-400 transition-colors">
          {post.title[lang]}
        </h3>
        <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 leading-relaxed">
          {post.description[lang]}
        </p>
      </div>
    </div>
  );
};

const HomePage: React.FC<HomePageProps> = ({ lang, onNavigate, onToggleLang }) => {
  const t = homeContent[lang];
  const isRtl = lang === 'fa';

  return (
    <div className={`min-h-screen pb-10 sm:pb-20 ${isRtl ? 'rtl text-right' : 'ltr text-left'}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 shadow-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center gap-4">
          <div className="min-w-0">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent truncate">
              {t.siteTitle}
            </h1>
            <p className="text-[10px] sm:text-xs text-slate-400 opacity-80 truncate">{t.siteSubtitle}</p>
          </div>
          <button
            onClick={onToggleLang}
            className="flex-shrink-0 px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-800 hover:bg-slate-700 rounded-full text-[10px] sm:text-sm font-semibold transition-all border border-slate-700 flex items-center gap-1.5 sm:gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5a18.022 18.022 0 01-3.839-5.512m12.93 12.48l-9.11-12.48M20 19l-9.11-12.48M10 7a14.59 14.59 0 01-2.018 3.97m0 0a14.542 14.542 0 01-3.012-3.97M9 18H8" />
            </svg>
            {t.langToggle}
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <section className="mt-8 sm:mt-16 mb-12 sm:mb-20">
          <div className="text-center max-w-3xl mx-auto">
            {/* Decorative Elements */}
            <div className="flex justify-center gap-2 mb-6">
              <span className="text-3xl sm:text-4xl">🧠</span>
              <span className="text-3xl sm:text-4xl">⚡</span>
              <span className="text-3xl sm:text-4xl">🚀</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white via-purple-200 to-orange-200 bg-clip-text text-transparent leading-tight">
              {t.heroTitle}
            </h2>

            <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              {t.heroDescription}
            </p>

            {/* AI Logos Bar */}
            <div className="mt-8 sm:mt-10 flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-slate-500">
              <span className="flex items-center gap-2 text-xs sm:text-sm font-medium bg-slate-800/50 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Claude
              </span>
              <span className="flex items-center gap-2 text-xs sm:text-sm font-medium bg-slate-800/50 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Gemini
              </span>
              <span className="flex items-center gap-2 text-xs sm:text-sm font-medium bg-slate-800/50 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Perplexity
              </span>
              <span className="flex items-center gap-2 text-xs sm:text-sm font-medium bg-slate-800/50 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Grok
              </span>
              <span className="flex items-center gap-2 text-xs sm:text-sm font-medium bg-slate-800/50 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                ChatGPT
              </span>
            </div>
          </div>
        </section>

        {/* Prompts Grid - Instagram Style */}
        <section>
          <div className="mb-6 sm:mb-8 border-l-4 border-purple-500 pl-3 sm:pl-4 rtl:border-l-0 rtl:border-r-4 rtl:pr-3 sm:rtl:pr-4">
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">{t.promptsTitle}</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                lang={lang}
                onClick={() => onNavigate(post.slug)}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-16 sm:mt-32 py-10 sm:py-16 border-t border-slate-800/50 text-center bg-slate-900/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-base sm:text-lg font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-2">
            {t.siteTitle}
          </h2>
          <p className="text-slate-500 text-[10px] sm:text-sm">{t.siteSubtitle}</p>
          <div className="mt-6 sm:mt-8 flex justify-center gap-4 sm:gap-6">
            <div className="h-0.5 sm:h-1 w-8 sm:w-12 bg-slate-800 rounded-full"></div>
          </div>
          <p className="text-slate-600 text-[9px] sm:text-xs mt-6 sm:mt-8 max-w-xs mx-auto sm:max-w-none">
            © {new Date().getFullYear()} • 1% Prompt Repository • Powered by AI Fusion
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
