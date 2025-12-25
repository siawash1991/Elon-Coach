import React, { useState } from 'react';
import { Language, RouterState } from './types';
import HomePage from './HomePage';
import ElonMuskPrompt from './prompts/ElonMuskPrompt';
import ChatGPTToGemini from './prompts/ChatGPTToGemini';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('fa');
  const [router, setRouter] = useState<RouterState>({ page: 'home' });

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'fa' : 'en');
  };

  const navigateToPrompt = (slug: string) => {
    setRouter({ page: 'prompt', promptSlug: slug });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setRouter({ page: 'home' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render the appropriate page based on router state
  if (router.page === 'prompt' && router.promptSlug) {
    switch (router.promptSlug) {
      case 'elon-musk-thinking':
        return (
          <ElonMuskPrompt
            lang={lang}
            onBack={navigateToHome}
            onToggleLang={toggleLang}
          />
        );
      case 'chatgpt-memory-to-gemini':
        return (
          <ChatGPTToGemini
            lang={lang}
            onBack={navigateToHome}
            onToggleLang={toggleLang}
          />
        );
      default:
        // If unknown prompt, go back to home
        return (
          <HomePage
            lang={lang}
            onNavigate={navigateToPrompt}
            onToggleLang={toggleLang}
          />
        );
    }
  }

  // Default: Home page
  return (
    <HomePage
      lang={lang}
      onNavigate={navigateToPrompt}
      onToggleLang={toggleLang}
    />
  );
};

export default App;
