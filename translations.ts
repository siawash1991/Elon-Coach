
import { TableRow, ReferenceRow, PromptSection } from './types';

interface LangContent {
  siteTitle: string;
  siteSubtitle: string;
  langToggle: string;
  howToUseTitle: string;
  howToUseSteps: { step: string; desc: string }[];
  coreFrameworkTitle: string;
  mentalOSTitle: string;
  superPromptTitle: string;
  specializedTitle: string;
  referenceTableTitle: string;
  compactTitle: string;
  tableHeaders: string[];
  refHeaders: string[];
  copyBtn: string;
  copied: string;
  exampleLabel: string;
  mentalOSData: TableRow[];
  superPrompt: string;
  superPromptExample: string;
  specializedPrompts: PromptSection[];
  refTableData: ReferenceRow[];
  compactPrompt: string;
  compactPromptExample: string;
}

export const content: Record<'en' | 'fa', LangContent> = {
  en: {
    siteTitle: "How to Think and Decide Like Elon Musk",
    siteSubtitle: "Created by Siavash's Experiences",
    langToggle: "فارسی",
    howToUseTitle: "How to Use This Framework",
    howToUseSteps: [
      { step: "1", desc: "Choose a prompt based on your specific challenge (e.g., Pricing, Growth, or Rebuilding)." },
      { step: "2", desc: "Click the red 'Copy' button to copy the framework to your clipboard." },
      { step: "3", desc: "Replace the red variables (e.g., {{PROBLEM_OR_SITUATION}}) with your own details." },
      { step: "4", desc: "Paste into an LLM like Claude, GPT-4, or Gemini to get a First-Principles analysis." }
    ],
    coreFrameworkTitle: "Core Framework Extraction",
    mentalOSTitle: "The Mental Operating System",
    superPromptTitle: "THE SUPER PROMPT: First Principles Problem Deconstructor",
    specializedTitle: "PROMPT SET: Specialized Applications",
    referenceTableTitle: "Complete Reference Table",
    compactTitle: "COMPACT VERSION: The One-Line Stack",
    tableHeaders: ["Principle", "Question", "What It Does"],
    refHeaders: ["#", "Tool", "Core Question", "Best Used When"],
    copyBtn: "Copy",
    copied: "Copied!",
    exampleLabel: "Filled Example / Usage",
    mentalOSData: [
      { principle: "Physics", question: "What are the physics of this problem?", whatItDoes: "Reveals hard constraints vs. perceived ones" },
      { principle: "Assumptions", question: "If I removed all assumptions, how would I solve this?", whatItDoes: "Breaks inherited mental models" },
      { principle: "Decomposition", question: "What are the fundamental components?", whatItDoes: "Atomizes complex problems" },
      { principle: "Ideation", question: "What’s optimal if cost didn’t exist?", whatItDoes: "Generates ideal-state first" },
      { principle: "Prioritization", question: "If I cut 90%, what remains?", whatItDoes: "Forces ruthless clarity" },
      { principle: "Pre-mortem", question: "If this failed, what’s the root cause?", whatItDoes: "Predicts failure modes" },
      { principle: "Contrarian", question: "What if I ignored industry norms?", whatItDoes: "Unlocks non-obvious paths" },
      { principle: "Fear vs. Reality", question: "What’s impossible vs. feels impossible?", whatItDoes: "Separates emotion from physics" },
      { principle: "MVB", question: "What’s the minimum viable breakthrough?", whatItDoes: "Finds the foundational leap" },
      { principle: "Clean Slate", question: "If I restarted today, what would I build?", whatItDoes: "Removes sunk cost bias" },
      { principle: "Hidden Constraints", question: "What constraints am I not questioning?", whatItDoes: "Exposes invisible ceilings" },
      { principle: "Physics-Only", question: "How would I solve this ignoring politics?", whatItDoes: "Removes social friction" },
      { principle: "10x Speed", question: "How would I achieve this 10x faster?", whatItDoes: "Forces creative compression" },
      { principle: "Scale", question: "What if this had to scale to millions?", whatItDoes: "Reveals structural weaknesses" },
      { principle: "Leverage", question: "Which part creates the most leverage?", whatItDoes: "Identifies the multiplier" }
    ],
    superPrompt: `<system>\nYou are a first-principles strategist combining the analytical rigor of a physicist with the creative ruthlessness of a founder who's built from zero multiple times. You don't accept inherited wisdom—you rebuild from fundamental truths.\n</system>\n\n<instructions>\nI'm going to give you a problem, challenge, or situation. Your job is to systematically deconstruct it using first-principles thinking, then reconstruct an optimal path forward.\n\nWork through these phases in order. Be thorough in your analysis before moving to solutions.\n\n<phase_1_physics>\n## 1. THE PHYSICS\nStrip this to objective reality:\n- What are the non-negotiable constraints (actual physics, not perceived)?\n- What forces are genuinely at play (attention, money, time, energy)?\n- What would a scientist say the "laws" of this domain are?\n- Where does energy actually come from and go in this system?\n</phase_1_physics>\n\n<phase_2_assumptions>\n## 2. THE ASSUMPTION AUDIT\nIdentify every inherited belief:\n- What am I assuming because "that's how it's done"?\n- Which of these assumptions are physics, and which are convention?\n- If I wiped the competitor whiteboard clean, what remains true?\n- What would someone with zero industry knowledge try?\n</phase_2_assumptions>\n\n<phase_3_decomposition>\n## 3. THE ATOMIC BREAKDOWN\nDecompose into fundamental components:\n- What are the 3-5 irreducible parts of this problem?\n- Which components are actually coupled vs. feel coupled?\n- What's the interaction between these atoms?\n- Which atom, if changed, changes everything?\n</phase_3_decomposition>\n\n<phase_4_ideal_state>\n## 4. THE UNCONSTRAINED IDEAL\nIf cost, time, and politics didn't exist:\n- What would the perfect solution look like?\n- What would make this a case study others reference?\n- What would the 10x version be vs. the incremental improvement?\n</phase_4_ideal_state>\n\n<phase_5_failure_modes>\n## 5. THE PRE-MORTEM\nIf this failed completely:\n- What would be the most likely root cause?\n- What failure modes am I not seeing because of optimism?\n- What would an enemy exploit?\n</phase_5_failure_modes>\n\n<phase_6_leverage_point>\n## 6. THE LEVERAGE POINT\nWhere is the multiplier?\n- Which 10% of effort would produce 90% of results?\n- What single change would cascade into many improvements?\n- What's the minimum viable breakthrough (not MVP)?\n</phase_6_leverage_point>\n\n<phase_7_synthesis>\n## 7. RECONSTRUCTED PATH\nNow rebuild from first principles:\n- Given everything above, what would you actually do?\n- What's the sequence? What's first, and why?\n- What should I stop doing immediately?\n- What hidden constraint should I challenge or remove?\n</phase_7_synthesis>\n\n</instructions>\n\n<output_format>\nStructure your response with clear headers for each phase. Be specific and concrete—no generic advice. Reference the actual physics and constraints you've identified.\n\nAfter the full analysis, provide:\n\n### TL;DR DECISION FRAMEWORK\n- **The actual problem:** [One sentence]\n- **The leverage point:** [The single highest-impact action]\n- **Stop doing:** [What to eliminate]\n- **The constraint to challenge:** [Hidden assumption to test]\n- **First move:** [Specific next action]\n</output_format>\n\n<my_problem>\n{{PROBLEM_OR_SITUATION}}\n</my_problem>`,
    superPromptExample: "I am trying to lower the cost of making orbital rocket engines by 10x.",
    specializedPrompts: [
      {
        title: "Content/Audience Growth Physics",
        content: `<instructions>\nAnalyze my content/audience growth challenge using first-principles physics.\n\n<context>\n{{DESCRIBE_YOUR_SITUATION}}\n</context>\n\nWork through these specific physics:\n\n1. ENERGY SOURCE (Attention Input)\n2. FRICTION (Conversion Surface)\n3. MOMENTUM (Compounding Forces)\n4. RESONANCE FREQUENCY (Topic-Audience Fit)\n5. TRANSMISSION LOSS (Shareability)\n\n**OUTPUT: The Physics Diagnosis**\n</instructions>`,
        example: "I am building a YouTube channel about technical coding tutorials, but my view count hasn't grown beyond 500 per video in 6 months."
      },
      {
        title: "Offer/Pricing First Principles",
        content: `<instructions>\nMy pricing/offer feels uncertain. Analyze it from first principles—not competitor benchmarks.\n\n<context>\n{{DESCRIBE_YOUR_OFFER_AND_CURRENT_PRICING}}\n</context>\n\nWork through:\n1. VALUE ENGINE\n2. VALUE CEILING\n3. WILLINGNESS-TO-PAY CURVES\n4. ASSUMPTION AUDIT\n5. THE RECONSTRUCTION\n</instructions>`,
        example: "I sell a $1,000 online course for aspiring freelancers. I want to know if I should charge $5,000 for a group coaching program instead."
      },
      {
        title: "Business Plateau Deconstructor",
        content: `<instructions>\nMy business has plateaued. Diagnose the fundamental components—not symptoms.\n\n<context>\n{{DESCRIBE_BUSINESS_AND_PLATEAU}}\n</context>\n\n1. MARKET PHYSICS\n2. VALUE PERCEPTION\n3. CAPACITY ARCHITECTURE\n4. ACQUISITION PHYSICS\n5. THE 90% CUT\n</instructions>`,
        example: "My web design agency has been stuck at $10k/month revenue for two years. I'm working 60 hours a week and can't find time to scale."
      },
      {
        title: "10x Speed Forcing Function",
        content: `<instructions>\nI have a project/goal with a timeline. Force me to find the 10x faster path.\n\n<current_plan>\n{{DESCRIBE_PROJECT_AND_TIMELINE}}\n</current_plan>\n\nWork through: ELIMINATE, PARALLELIZE, SUBSTITUTE, INVERT, SIMPLIFY.\n</instructions>`,
        example: "I plan to spend 6 months writing and self-publishing a comprehensive book on deep-sea biology."
      },
      {
        title: "Pre-Mortem Failure Predictor",
        content: `<instructions>\nI'm about to launch/start something. Run a rigorous pre-mortem.\n\n<what_im_launching>\n{{DESCRIBE_THE_INITIATIVE}}\n</what_im_launching>\n\nWork through: ROOT CAUSE, FAILURE MODES, VULNERABILITIES, ENEMY'S PLAYBOOK, INOCULATION.\n</instructions>`,
        example: "I am launching a new AI-powered mobile app that helps people track their daily carbon footprint."
      },
      {
        title: "Clean Slate Rebuild",
        content: `<instructions>\nRebuild from scratch.\n\n<current_state>\n{{DESCRIBE_WHAT_EXISTS_AND_HOW_IT_GOT_THERE}}\n</current_state>\n\n1. IF STARTING TODAY\n2. THE ELEGANT VERSION\n3. THE RUTHLESS CUT\n4. THE MODERN BUILD\n5. THE MIGRATION PATH\n</instructions>`,
        example: "I have a 10-year-old e-commerce site for pet supplies that has thousands of lines of messy legacy code and outdated features."
      },
      {
        title: "Hidden Constraint Exposer",
        content: `<instructions>\nExpose the hidden constraints.\n\n<situation>\n{{DESCRIBE_WHERE_YOU_RE_STUCK}}\n</situation>\n\nCheck: TIME, MONEY, CAPABILITY, PERMISSION, IDENTITY, SCALE.\n</instructions>`,
        example: "I want to start a space exploration startup but I believe I need $100M in funding and a PhD in Aerospace Engineering to even begin."
      },
      {
        title: "Unconstrained Ideal Generator",
        content: `<instructions>\nHelp me see the unconstrained ideal first.\n\n<what_im_designing>\n{{DESCRIBE_WHAT_YOU_ARE_BUILDING}}\n</what_im_designing>\n\n1. CATHEDRAL VERSION\n2. 10X VERSION\n3. REVERSE ENGINEERING\n</instructions>`,
        example: "I am designing a new type of urban public transportation system for a mid-sized city."
      },
      {
        title: "90% Cut Prioritizer",
        content: `<instructions>\nForce ruthless prioritization.\n\n<everything_on_my_plate>\n{{LIST_ALL_ITEMS}}\n</everything_on_my_plate>\n\n1. BRUTAL FILTER\n2. SURVIVAL TEST\n3. THE CUT LIST\n</instructions>`,
        example: "I am currently trying to learn 3 languages, build a startup, train for a marathon, and write a weekly blog post."
      },
      {
        title: "Contrarian Path Finder",
        content: `<instructions>\nFind the non-obvious path.\n\n<my_situation>\n{{DESCRIBE_YOUR_CHALLENGE}}\n</my_situation>\n\n1. NORM INVENTORY\n2. THE INVERSION\n3. CROSS-INDUSTRY THEFT\n</instructions>`,
        example: "I am trying to enter the saturated market of specialized project management software for creative teams."
      },
      {
        title: "Fear vs. Physics Separator",
        content: `<instructions>\nHelp me separate actual constraints from fear.\n\n<what_feels_impossible>\n{{DESCRIBE_THE_SITUATION}}\n</what_feels_impossible>\n\n1. IMPOSSIBILITY INVENTORY\n2. THE PHYSICS TEST\n3. THE FEAR DIAGNOSIS\n</instructions>`,
        example: "I want to quit my secure corporate job to become a full-time independent researcher, but it feels completely impossible due to financial safety."
      },
      {
        title: "Minimum Viable Breakthrough Finder",
        content: `<instructions>\nFind the breakthrough lever.\n\n<current_situation>\n{{DESCRIBE_WHERE_YOU_ARE}}\n</current_situation>\n\n1. DESIRED STATE CLARITY\n2. BREAKTHROUGH CANDIDATES\n3. THE MVB FILTER\n</instructions>`,
        example: "I have a small local bakery. I want to go from serving 50 customers a day to 1,000 without exponentially increasing labor costs."
      },
      {
        title: "Politics-Free Optimizer",
        content: `<instructions>\nSolve for physics only, ignoring political complexity.\n\n<situation_with_politics>\n{{DESCRIBE_THE_POLITICAL_COMPLEXITY}}\n</situation_with_politics>\n\n1. THE CLEAN ROOM\n2. THE PHYSICS-ONLY ANSWER\n3. THE POLITICAL TAX\n</instructions>`,
        example: "I need to restructure our company departments, but 3 of the senior managers are my close friends and would be unhappy with the changes."
      },
      {
        title: "Scale Stress-Tester",
        content: `<instructions>\nSee what breaks at 10x, 100x, 1000x.\n\n<what_im_building>\n{{DESCRIBE_YOUR_SYSTEM}}\n</what_im_building>\n\n1. BREAK POINT ANALYSIS\n2. SCALE-READY REBUILD\n</instructions>`,
        example: "I am building a peer-to-peer marketplace for renting high-end photography equipment."
      },
      {
        title: "Leverage Maximizer",
        content: `<instructions>\nFind the multipliers.\n\n<current_activities>\n{{LIST_WHAT_YOU_ARE_SPENDING_TIME_ON}}\n</current_activities>\n\n1. LEVERAGE CLASSIFICATION\n2. THE MULTIPLIER MAP\n3. THE SINGLE LEVER\n</instructions>`,
        example: "I spend my day on: responding to emails, fixing minor website bugs, 1-on-1 sales calls, and creating generic social media posts."
      }
    ],
    refTableData: [
      { id: "1", tool: "Physics Extraction", question: "What are the physics of this problem?", usage: "Problem feels complex or unclear" },
      { id: "2", tool: "Assumption Destruction", question: "If I removed all assumptions...", usage: "Stuck in conventional thinking" },
      { id: "3", tool: "Atomic Decomposition", question: "What are the fundamental components?", usage: "Problem feels monolithic" },
      { id: "4", tool: "Unconstrained Ideation", question: "What would optimal look like if cost didn't exist?", usage: "Thinking too small" },
      { id: "5", tool: "Ruthless Prioritization", question: "If I cut 90%, what remains?", usage: "Overwhelmed, scattered focus" },
      { id: "6", tool: "Pre-Mortem Engineering", question: "If this failed, what's the root cause?", usage: "About to launch something" },
      { id: "7", tool: "Contrarian Pathfinding", question: "What if I ignored industry norms?", usage: "Everyone's doing the same thing" },
      { id: "8", tool: "Fear/Reality Separation", question: "What's impossible vs. feels impossible?", usage: "Paralyzed by perceived limits" },
      { id: "9", tool: "MVB Finding", question: "What's the minimum viable breakthrough?", usage: "Growth is incremental" },
      { id: "10", tool: "Clean Slate Reconstruction", question: "If I restarted today, what would I build?", usage: "System has evolved messily" },
      { id: "11", tool: "Hidden Constraint Exposure", question: "What constraints am I not questioning?", usage: "Stuck at a ceiling" },
      { id: "12", tool: "Politics-Free Analysis", question: "What if I only cared about physics?", usage: "Social friction clouding judgment" },
      { id: "13", tool: "10X Compression", question: "What if I had to achieve this 10X faster?", usage: "Timeline feels fixed" },
      { id: "14", tool: "Scale Stress-Testing", question: "What would this look like at 100X?", usage: "Building something new" },
      { id: "15", tool: "Leverage Identification", question: "Which part creates the most leverage?", usage: "Doing many things, unclear ROI" }
    ],
    compactPrompt: `Analyze [MY PROBLEM]:\n\n1. What are the actual physics?\n2. What assumptions am I inheriting?\n3. What are the 3-5 fundamental components?\n4. What's the unconstrained ideal?\n5. What's the root cause of failure?\n6. What remains after a 90% cut?\n7. What's the minimum viable breakthrough?\n8. What's the hidden constraint?\n9. Where is the leverage?\n\nThen: What should I actually do, and what should I stop doing?`,
    compactPromptExample: "I want to start a private education platform that replaces traditional high schools."
  },
  fa: {
    siteTitle: "چطور مثل ایلان ماسک فکر کنیم و تصمیم بگیریم",
    siteSubtitle: "ساخته شده توسط تجربه‌های سیاوش",
    langToggle: "English",
    howToUseTitle: "نحوه استفاده از این مجموعه",
    howToUseSteps: [
      { step: "۱", desc: "پرامپت مورد نظر خود را بر اساس چالشی که دارید (قیمت‌گذاری، رشد، یا بازسازی) انتخاب کنید." },
      { step: "۲", desc: "روی دکمه قرمز رنگ 'کپی' کلیک کنید تا متن چارچوب در حافظه کپی شود." },
      { step: "۳", desc: "بخش‌هایی که با رنگ قرمز (مثلاً {{PROBLEM_OR_SITUATION}}) مشخص شده‌اند را با اطلاعات دقیق خود جایگزین کنید." },
      { step: "۴", desc: "متن نهایی را در یک مدل هوش مصنوعی مثل Claude یا GPT قرار دهید تا تحلیل 'اصول اولیه' را دریافت کنید." }
    ],
    coreFrameworkTitle: "استخراج چارچوب اصلی",
    mentalOSTitle: "سیستم عامل ذهنی",
    superPromptTitle: "ابر-پرامپت: تجزیه‌کننده مسئله بر اساس اصول اولیه",
    specializedTitle: "مجموعه پرامپت‌ها: کاربردهای تخصصی",
    referenceTableTitle: "جدول مرجع کامل",
    compactTitle: "نسخه فشرده: پشته تک‌خطی",
    tableHeaders: ["اصل", "سوال", "کارکرد آن"],
    refHeaders: ["#", "ابزار", "سوال اصلی", "بهترین زمان استفاده"],
    copyBtn: "کپی",
    copied: "کپی شد!",
    exampleLabel: "نمونه استفاده / مثال",
    mentalOSData: [
      { principle: "فیزیک", question: "فیزیک این مسئله چیست؟", whatItDoes: "محدودیت‌های واقعی را از تصورات جدا می‌کند" },
      { principle: "فرضیات", question: "اگر تمام فرضیات را حذف می‌کردم، چطور حلش می‌کردم؟", whatItDoes: "مدل‌های ذهنی موروثی را می‌شکند" },
      { principle: "تجزیه", question: "اجزای بنیادی چیستند؟", whatItDoes: "مسائل پیچیده را اتمی می‌کند" },
      { principle: "ایده‌پردازی", question: "اگر هزینه وجود نداشت، حالت بهینه چه بود؟", whatItDoes: "ابتدا حالت ایده‌آل را می‌سازد" },
      { principle: "اولویت‌بندی", question: "اگر ۹۰٪ را حذف کنم، چه چیزی باقی می‌ماند؟", whatItDoes: "وضوح بی‌رحمانه ایجاد می‌کند" },
      { principle: "تحلیل پیش‌مرگ", question: "اگر این شکست بخورد، علت اصلی چیست؟", whatItDoes: "حالت‌های شکست را پیش‌بینی می‌کند" },
      { principle: "خلاف جریان", question: "اگر هنجارهای صنعت را نادیده بگیرم چه؟", whatItDoes: "مسیرهای غیربدیهی را باز می‌کند" },
      { principle: "ترس در برابر واقعیت", question: "چه چیزی غیرممکن است در مقابل چه چیزی غیرممکن به نظر می‌رسد؟", whatItDoes: "احساس را از فیزیک جدا می‌کند" },
      { principle: "کمینه جهش", question: "کمینه جهش حیاتی چیست؟", whatItDoes: "برجسته‌ترین گام بنیادی را پیدا می‌کند" },
      { principle: "لوح پاک", question: "اگر امروز دوباره شروع می‌کردم، چه می‌ساختم؟", whatItDoes: "تعصب به هزینه‌های هدررفته را حذف می‌کند" },
      { principle: "محدودیت‌های پنهان", question: "کدام محدودیت‌ها را زیر سوال نمی‌برم؟", whatItDoes: "سقف‌های نامرئی را آشکار می‌کند" },
      { principle: "فقط فیزیک", question: "بدون در نظر گرفتن سیاست، چطور حلش می‌کردم؟", whatItDoes: "اصطکاک‌های اجتماعی را حذف می‌کند" },
      { principle: "سرعت ۱۰ برابری", question: "چطور ۱۰ برابر سریع‌تر به این برسم؟", whatItDoes: "فشرده‌سازی خلاقانه ایجاد می‌کند" },
      { principle: "مقیاس", question: "اگر قرار بود به میلیون‌ها نفر برسد چه؟", whatItDoes: "ضعف‌های ساختاری را نشان می‌دهد" },
      { principle: "اهرم", question: "کدام بخش بیشترین اهرم را ایجاد می‌کند؟", whatItDoes: "ضریب‌افزا را شناسایی می‌کند" }
    ],
    superPrompt: `<system>\nشما یک استراتژیست اصول اولیه هستید که دقت تحلیلی یک فیزیکدان را با بی‌رحمی خلاقانه بنیان‌گذاری که چندین بار از صفر ساخته، ترکیب می‌کند. شما خرد موروثی را نمی‌پذیرید - شما از حقایق بنیادی بازسازی می‌کنید.\n</system>\n\n<instructions>\nمن به شما یک مسئله، چالش یا موقعیت می‌دهم. وظیفه شما این است که به طور سیستماتیک آن را با استفاده از تفکر اصول اولیه تجزیه کنید و سپس یک مسیر بهینه برای حرکت به جلو بازسازی کنید.\n\nمراحل را به ترتیب طی کنید. قبل از حرکت به سمت راهکارها، در تحلیل خود دقیق باشید.\n\n<phase_1_physics>\n## ۱. فیزیک\nاین را به واقعیت عینی برگردانید:\n- محدودیت‌های غیرقابل مذاکره چیست (فیزیک واقعی، نه آنچه تصور می‌شود)؟\n- چه نیروهایی واقعاً در کار هستند (توجه، پول، زمان، انرژی)؟\n- یک دانشمند "قوانین" این حوزه را چه می‌نامد؟\n- انرژی واقعاً از کجا می‌آید و در این سیستم به کجا می‌رود؟\n</phase_1_physics>\n\n<phase_2_assumptions>\n## ۲. ممیزی فرضیات\nهر باور موروثی را شناسایی کنید:\n- چه چیزی را فرض می‌کنم چون "this is how it is done"؟\n- کدام یک از این فرضیات فیزیک هستند و کدام یک عرف؟\n- اگر تخته‌سفید رقبا را پاک می‌کردم، چه چیزی درست باقی می‌ماند؟\n- کسی که هیچ دانش تخصصی در این صنعت ندارد، چه چیزی را امتحان می‌کرد؟\n</phase_2_assumptions>\n\n<phase_3_decomposition>\n## ۳. تجزیه اتمی\nبه اجزای بنیادی تجزیه کنید:\n- ۳ تا ۵ بخش غیرقابل تجزیه این مسئله چیست؟\n- کدام اجزا واقعاً به هم متصل هستند در مقابل کدام‌ها فقط متصل به نظر می‌رسند؟\n- تعامل بین این اتم‌ها چیست؟\n- کدام اتم اگر تغییر کند، همه چیز را تغییر می‌دهد؟\n</phase_3_decomposition>\n\n<phase_4_ideal_state>\n## ۴. ایده‌آل بدون محدودیت\nاگر هزینه، زمان و سیاست وجود نداشت:\n- راهکار کامل چطور به نظر می‌رسید؟\n- چه چیزی باعث می‌شد این به یک مطالعه موردی تبدیل شود که دیگران به آن ارجاع دهند؟\n- نسخه ۱۰ برابری در مقابل بهبود تدریجی چه بود؟\n</phase_4_ideal_state>\n\n<phase_5_failure_modes>\n## ۵. تحلیل پیش‌مرگ\nاگر این کاملاً شکست می‌خورد:\n- محتمل‌ترین علت ریشه‌ای چه بود؟\n- چه حالت‌های شکستی را به خاطر خوش‌بینی نمی‌بینم؟\n- یک دشمن از کجا سوءاستفاده می‌کرد؟\n</phase_5_failure_modes>\n\n<phase_6_leverage_point>\n## ۶. نقطه اهرمی\nضریب‌افزا کجاست؟\n- کدام ۱۰٪ تلاش، ۹۰٪ نتایج را تولید می‌کند؟\n- کدام تغییر واحد باعث بهبودهای زنجیره‌ای می‌شود؟\n- کمینه جهش حیاتی (نه MVP) چیست؟\n</phase_6_leverage_point>\n\n<phase_7_synthesis>\n## ۷. مسیر بازسازی شده\nحالا از اصول اولیه دوباره بسازید:\n- با توجه به موارد بالا، واقعاً چه کار می‌کردید؟\n- ترتیب چیست؟ اول چه چیزی و چرا؟\n- چه کاری را باید بلافاصله متوقف کنم؟\n- کدام محدودیت پنهان را باید به چالش بکشم یا حذف کنم؟\n</phase_7_synthesis>\n\n</instructions>\n\n<output_format>\nپاسخ خود را با عناوین واضح برای هر فاز ساختاردهی کنید. مشخص و عینی باشید - نصیحت کلی نکنید. به فیزیک واقعی و محدودیت‌هایی که شناسایی کرده‌اید ارجاع دهید.\n\nبعد از تحلیل کامل، ارائه دهید:\n\n### خلاصه چارچوب تصمیم‌گیری (TL;DR)\n- **مسئله واقعی:** [یک جمله]\n- **نقطه اهرمی:** [تک‌اقدام با بالاترین تاثیر]\n- **توقف انجام:** [چه چیزی حذف شود]\n- **محدودیت برای چالش:** [فرض پنهانی برای آزمایش]\n- **اولین حرکت:** [اقدام بعدی مشخص]\n</output_format>\n\n<my_problem>\n{{PROBLEM_OR_SITUATION}}\n</my_problem>`,
    superPromptExample: "من به دنبال کاهش ۱۰ برابری هزینه ساخت موتورهای موشک مداری هستم.",
    specializedPrompts: [
      {
        title: "فیزیک رشد محتوا و مخاطب",
        content: `<instructions>\nچالش رشد محتوا/مخاطب من را با استفاده از فیزیک اصول اولیه تحلیل کنید.\n\n<context>\n{{DESCRIBE_YOUR_SITUATION}}\n</context>\n\nاین فیزیک‌های خاص را بررسی کنید:\n\n۱. منبع انرژی (ورودی توجه)\n۲. اصطکاک (سطح تبدیل)\n۳. تکانه (نیروهای مرکب)\n۴. فرکانس تشدید (تناسب موضوع و مخاطب)\n۵. تلفات انتقال (قابلیت اشتراک‌گذاری)\n\n**خروجی: تشخیص فیزیکی**\n</instructions>`,
        example: "من در حال ساخت یک کانال یوتیوب درباره آموزش‌های کدنویسی تخصصی هستم، اما تعداد بازدیدهایم در ۶ ماه اخیر از ۵۰۰ مورد برای هر ویدیو فراتر نرفته است."
      },
      {
        title: "اصول اولیه پیشنهاد و قیمت‌گذاری",
        content: `<instructions>\nقیمت‌گذاری/پیشنهاد من نامطمئن به نظر می‌رسد. آن را از اصول اولیه تحلیل کنید - نه بر اساس رقباء.\n\n<context>\n{{DESCRIBE_YOUR_OFFER_AND_CURRENT_PRICING}}\n</context>\n\nبررسی کنید:\n۱. موتور ارزش\n۲. سقف ارزش\n۳. منحنی‌های تمایل به پرداخت\n۴. ممیزی فرضیات\n۵. بازسازی\n</instructions>`,
        example: "من یک دوره آنلاین ۱۰۰۰ دلاری برای فریلنسرهای تازه‌کار می‌فروشم. می‌خواهم بدانم آیا باید به جای آن، ۵۰۰۰ دلار برای یک برنامه مربیگری گروهی دریافت کنم؟"
      },
      {
        title: "تجزیه‌کننده رکود کسب‌وکار",
        content: `<instructions>\nکسب‌وکار من متوقف شده است. اجزای بنیادی را تشخیص دهید - نه علائم را.\n\n<context>\n{{DESCRIBE_BUSINESS_AND_PLATEAU}}\n</context>\n\n۱. فیزیک بازار\n۲. درک ارزش\n۳. معماری ظرفیت\n۴. فیزیک جذب\n۵. حذف ۹۰ درصدی\n</instructions>`,
        example: "آژانس طراحی وب من دو سال است که روی درآمد ۱۰ هزار دلار در ماه ثابت مانده است. من هفته‌ای ۶۰ ساعت کار می‌کنم و نمی‌توانم زمانی برای گسترش پیدا کنم."
      },
      {
        title: "تابع اجبار سرعت ۱۰ برابری",
        content: `<instructions>\nمن پروژه/هدفی با یک جدول زمانی دارم. مرا مجبور کنید تا مسیر ۱۰ برابر سریع‌تر را پیدا کنم.\n\n<current_plan>\n{{DESCRIBE_PROJECT_AND_TIMELINE}}\n</current_plan>\n\nبررسی کنید: حذف، موازی‌سازی، جایگزینی، معکوس‌سازی، ساده‌سازی.\n</instructions>`,
        example: "قصد دارم ۶ ماه را صرف نوشتن و انتشار کتابی جامع درباره زیست‌شناسی اعماق دریا کنم."
      },
      {
        title: "پیش‌بینی‌کننده شکست پیش از شروع",
        content: `<instructions>\nمن در حال راه‌اندازی چیزی هستم. یک تحلیل پیش‌مرگ دقیق انجام دهید.\n\n<what_im_launching>\n{{DESCRIBE_THE_INITIATIVE}}\n</what_im_launching>\n\nبررسی کنید: علت ریشه‌ای، حالت‌های شکست، نقاط ضعف پنهان، نقشه دشمن، طرح واکسیناسیون.\n</instructions>`,
        example: "من در حال راه‌اندازی یک اپلیکیشن موبایل جدید مجهز به هوش مصنوعی هستم که به مردم کمک می‌کند ردپای کربن روزانه خود را ردیابی کنند."
      },
      {
        title: "بازسازی از لوح پاک",
        content: `<instructions>\nسیستم موجود را از صفر بازسازی کنید.\n\n<current_state>\n{{DESCRIBE_WHAT_EXISTS_AND_HOW_IT_GOT_THERE}}\n</current_state>\n\n۱. اگر امروز شروع می‌شد\n۲. نسخه ظریف\n۳. برش بی‌رحمانه\n۴. ساخت مدرن\n۵. مسیر مهاجرت\n</instructions>`,
        example: "من یک سایت تجارت الکترونیک ۱۰ ساله برای لوازم حیوانات خانگی دارم که هزاران خط کد قدیمی و ویژگی‌های منسوخ شده دارد."
      },
      {
        title: "افشاگر محدودیت‌های پنهان",
        content: `<instructions>\nمحدودیت‌های پنهانی که زیر سوال نمی‌برم را فاش کنید.\n\n<situation>\n{{DESCRIBE_WHERE_YOU_RE_STUCK}}\n</situation>\n\nبررسی: زمان، پول، توانایی، اجازه، هویت، مقیاس.\n</instructions>`,
        example: "من می‌خواهم یک استارتاپ اکتشاف فضایی راه بیندازم اما معتقدم برای شروع حتی به ۱۰۰ میلیون دلار سرمایه و دکتری مهندسی هوافضا نیاز دارم."
      },
      {
        title: "تولیدکننده ایده‌آل بدون محدودیت",
        content: `<instructions>\nکمک کنید ابتدا ایده‌آل بدون محدودیت را ببینم.\n\n<what_im_designing>\n{{DESCRIBE_WHAT_YOU_ARE_BUILDING}}\n</what_im_designing>\n\n۱. نسخه کاتدرال\n۲. نسخه ۱۰ برابری\n۳. مهندسی معکوس\n</instructions>`,
        example: "من در حال طراحی نوع جدیدی از سیستم حمل و نقل عمومی شهری برای یک شهر متوسط هستم."
      },
      {
        title: "اولویت‌بند با حذف ۹۰ درصدی",
        content: `<instructions>\nاولویت‌بندی بی‌رحمانه را اعمال کنید.\n\n<everything_on_my_plate>\n{{LIST_ALL_ITEMS}}\n</everything_on_my_plate>\n\n۱. فیلتر بی‌رحمانه\n۲. تست بقا\n۳. لیست حذفیات\n</instructions>`,
        example: "در حال حاضر سعی می‌کنم ۳ زبان یاد بگیرم، یک استارتاپ راه بیندازم، برای ماراتن تمرین کنم و هفته‌ای یک پست وبلاگ بنویسم."
      },
      {
        title: "مسیر یاب خلاف جریان",
        content: `<instructions>\nمسیر غیربدیهی را پیدا کنید.\n\n<my_situation>\n{{DESCRIBE_YOUR_CHALLENGE}}\n</my_situation>\n\n۱. موجودی هنجارها\n۲. معکوس‌سازی\n۳. سرقت بین‌صنعتی\n</instructions>`,
        example: "من سعی دارم وارد بازار اشباع شده نرم‌افزارهای مدیریت پروژه تخصصی برای تیم‌های خلاق شوم."
      },
      {
        title: "جداکننده ترس از فیزیک",
        content: `<instructions>\nکمک کنید محدودیت‌های واقعی را از ترس جدا کنم.\n\n<what_feels_impossible>\n{{DESCRIBE_THE_SITUATION}}\n</what_feels_impossible>\n\n۱. موجودی غیرممکن‌ها\n۲. تست فیزیک\n۳. تشخیص ترس\n</instructions>`,
        example: "می‌خواهم شغل شرکتی امن خود را رها کنم تا یک محقق مستقل تمام‌وقت شوم، اما به دلیل امنیت مالی کاملاً غیرممکن به نظر می‌رسد."
      },
      {
        title: "یابنده کمینه جهش حیاتی",
        content: `<instructions>\nاهرم جهش را پیدا کنید.\n\n<current_situation>\n{{DESCRIBE_WHERE_YOU_ARE}}\n</current_situation>\n\n۱. وضوح وضعیت مطلوب\n۲. کاندیداهای جهش\n۳. فیلتر MVB\n</instructions>`,
        example: "من یک نانوایی محلی کوچک دارم. می‌خواهم بدون افزایش تصاعدی هزینه‌های نیروی کار، از ۵۰ مشتری در روز به ۱۰۰۰ مشتری برسم."
      },
      {
        title: "بهینه‌ساز بدون سیاست",
        content: `<instructions>\nفقط برای فیزیک حل کنید، با نادیده گرفتن پیچیدگی‌های سیاسی.\n\n<situation_with_politics>\n{{DESCRIBE_THE_POLITICAL_COMPLEXITY}}\n</situation_with_politics>\n\n۱. اتاق تمیز\n۲. پاسخ فقط فیزیکی\n۳. مالیات سیاسی\n</instructions>`,
        example: "من باید بخش‌های شرکت را بازسازی کنم، اما ۳ نفر از مدیران ارشد دوستان صمیمی من هستند و از تغییرات ناراحت خواهند شد."
      },
      {
        title: "تست استرس مقیاس",
        content: `<instructions>\nببینید چه چیزی در مقیاس ۱۰، ۱۰۰ و ۱۰۰۰ برابری می‌شکند.\n\n<what_im_building>\n{{DESCRIBE_YOUR_SYSTEM}}\n</what_im_building>\n\n۱. تحلیل نقاط شکست\n۲. بازسازی آماده مقیاس\n</instructions>`,
        example: "من در حال ساخت یک پلتفرم همتا به همتا برای اجاره تجهیزات عکاسی رده بالا هستم."
      },
      {
        title: "بیشینه‌ساز اهرم",
        content: `<instructions>\nضریب‌افزاها را پیدا کنید.\n\n<current_activities>\n{{LIST_WHAT_YOU_ARE_SPENDING_TIME_ON}}\n</current_activities>\n\n۱. طبقه‌بندی اهرم\n۲. نقشه ضریب‌افزا\n۳. تک‌اهرم اصلی\n</instructions>`,
        example: "روز من صرف این کارها می‌شود: پاسخ به ایمیل‌ها، رفع باگ‌های جزئی وب‌سایت، تماس‌های فروش یک‌به‌یک و ایجاد پست‌های شبکه‌های اجتماعی عمومی."
      }
    ],
    refTableData: [
      { id: "۱", tool: "استخراج فیزیک", question: "فیزیک این مسئله چیست؟", usage: "وقتی مسئله پیچیده یا مبهم است" },
      { id: "۲", tool: "تخریب فرضیات", question: "اگر تمام فرضیات را حذف می‌کردم...", usage: "گیر کردن در تفکر سنتی" },
      { id: "۳", tool: "تجزیه اتمی", question: "اجزای بنیادی چیستند؟", usage: "وقتی مسئله یکپارچه و بزرگ به نظر می‌رسد" },
      { id: "۴", tool: "ایده‌پردازی بدون محدودیت", question: "اگر هزینه وجود نداشت، حالت بهینه چه بود؟", usage: "وقتی خیلی کوچک فکر می‌کنید" },
      { id: "۵", tool: "اولویت‌بندی بی‌رحمانه", question: "اگر ۹۰٪ را حذف کنم، چه می‌ماند؟", usage: "تمرکز پراکنده و غرق شدن در کار" },
      { id: "۶", tool: "مهندسی پیش‌مرگ", question: "اگر شکست بخورد، علت ریشه‌ای چیست؟", usage: "قبل از لانچ هر چیزی" },
      { id: "۷", tool: "مسیریابی خلاف جریان", question: "اگر هنجارهای صنعت را نادیده بگیرم چه؟", usage: "وقتی همه یک کار را انجام می‌دهند" },
      { id: "۸", tool: "تفکیک ترس/واقعیت", question: "چه چیزی غیرممکن است در مقابل چه چیزی حس می‌شود؟", usage: "فلج شدن توسط محدودیت‌های فرضی" },
      { id: "۹", tool: "یافتن MVB", question: "کمینه جهش حیاتی چیست؟", usage: "وقتی رشد تدریجی و کم است" },
      { id: "۱۰", tool: "بازسازی لوح پاک", question: "اگر امروز دوباره شروع می‌کردم چه می‌ساختم؟", usage: "وقتی سیستم نامنظم تکامل یافته" },
      { id: "۱۱", tool: "افشای محدودیت پنهان", question: "چه محدودیتی را زیر سوال نمی‌برم؟", usage: "گیر کردن زیر یک سقف نامرئی" },
      { id: "۱۲", tool: "تحلیل بدون سیاست", question: "اگر فقط به فیزیک اهمیت می‌دادم چه؟", usage: "وقتی اصطکاک اجتماعی قضاوت را ابری می‌کند" },
      { id: "۱۳", tool: "فشرده‌سازی ۱۰ برابری", question: "اگر باید ۱۰ برابر سریع‌تر انجام می‌شد چه؟", usage: "وقتی زمان ثابت به نظر می‌رسد" },
      { id: "۱۴", tool: "تست استرس مقیاس", question: "در مقیاس ۱۰۰ برابری چطور به نظر می‌رسد؟", usage: "ساختن چیزی جدید" },
      { id: "۱۵", tool: "شناسایی اهرم", question: "کدام بخش بیشترین اهرم را دارد؟", usage: "انجام کارهای زیاد با بازگشت سرمایه نامشخص" }
    ],
    compactPrompt: `تحلیل کن [مسئله من]:\n\n۱. فیزیک واقعی چیست؟\n۲. چه فرضیاتی را به ارث برده‌ام؟\n۳. اجزای بنیادی ۳-۵ گانه چیستند؟\n۴. ایده‌آل بدون محدودیت چیست؟\n۵. علت ریشه‌ای شکست چیست؟\n۶. بعد از حذف ۹۰٪ چه می‌ماند؟\n۷. کمینه جهش حیاتی چیست؟\n۸. محدودیت پنهان چیست؟\n۹. اهرم کجاست؟\n\nسپس: واقعاً چه کار کنم و چه کاری را متوقف کنم؟`,
    compactPromptExample: "من می‌خواهم یک پلتفرم آموزش خصوصی راه بیندازم که جایگزین دبیرستان‌های سنتی شود."
  }
};
