# Wireframes

ASCII wireframes for all layouts and views.

---

## Home Page (`/`) — Desktop (lg+)

```
┌─────────────────────────────────────────────────────────────────────┐
│ NAVBAR                                                               │
│  [TM] Tarun Mahapatra              [Home]  [Me]  [Resume ↓]         │
└─────────────────────────────────────────────────────────────────────┘

┌──────────────────┐  ┌─────────────────────────┐  ┌───────────────┐
│  LEFT SIDEBAR    │  │  FEED (center)           │  │ RIGHT SIDEBAR │
│  (3/12 col)      │  │  (6/12 col)              │  │  (3/12 col)   │
│                  │  │                          │  │               │
│ ┌──────────────┐ │  │ ┌──────────────────────┐ │  │ ┌───────────┐ │
│ │  [TM avatar] │ │  │ │ 🔍 Search posts...  ✕│ │  │ │ ✉ Contact │ │
│ │  Name        │ │  │ └──────────────────────┘ │  │ │ email     │ │
│ │  Headline    │ │  │                          │  │ │ LinkedIn  │ │
│ │  Role · City │ │  │ ┌──────────────────────┐ │  │ │ GitHub    │ │
│ │              │ │  │ │ [Featured] · Jun 2025│ │  │ └───────────┘ │
│ │ [About Me]   │ │  │ │                      │ │  │               │
│ │ [Resume ↓]   │ │  │ │ Post Title →         │ │  │ ┌───────────┐ │
│ └──────────────┘ │  │ │                      │ │  │ │ 💼 Experi-│ │
│                  │  │ │ Markdown preview...  │ │  │ │ ence →    │ │
│ ┌──────────────┐ │  │ │                      │ │  │ │ ·         │ │
│ │ 💼 Skills    │ │  │ │ [tag] [tag]          │ │  │ │  SE2 Dell │ │
│ │ [Python]     │ │  │ └──────────────────────┘ │  │ │  tags...  │ │
│ │ [RAG] [Neo4j]│ │  │                          │  │ │ ·         │ │
│ │ [gray tag]   │ │  │ ┌──────────────────────┐ │  │ │  SE Dell  │ │
│ └──────────────┘ │  │ │ [Featured] · Jan 2024│ │  │ │  tags...  │ │
│                  │  │ │                      │ │  │ │ ·  ...    │ │
│ ┌──────────────┐ │  │ │ Post Title →         │ │  │ └───────────┘ │
│ │ 🎓 Education │ │  │ │                      │ │  │               │
│ │ B.Tech, CS   │ │  │ │ Markdown preview...  │ │  │ ┌───────────┐ │
│ │ KIIT Univ.   │ │  │ │                      │ │  │ │ ★ Featured│ │
│ │ 2019—2023    │ │  │ │ [tag] [tag]          │ │  │ │ Post 1    │ │
│ └──────────────┘ │  │ └──────────────────────┘ │  │ │ Post 2    │ │
│                  │  │                          │  │ │ Post 3    │ │
│  [sticky]        │  │         ...              │  │ └───────────┘ │
└──────────────────┘  └─────────────────────────┘  │               │
                                                    │  [sticky]     │
                                                    └───────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│ FOOTER                                                               │
│  © 2026 Tarun Mahapatra. Built with React, Vite & Tailwind.         │
│                                              [✉] [in] [gh]          │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Home Page (`/`) — Mobile (< lg)

```
┌────────────────────────┐
│ NAVBAR                 │
│ [TM] Tarun Mahapatra   │
└────────────────────────┘

┌────────────────────────┐
│  LEFT SIDEBAR          │
│  [TM] Name · Headline  │
│  Role · City           │
│  [About Me] [Resume]   │
│  Skills tags...        │
│  Education             │
└────────────────────────┘

┌────────────────────────┐
│  FEED                  │
│  🔍 Search...          │
│  ┌────────────────────┐│
│  │ Post Card          ││
│  │ title · date       ││
│  │ preview...         ││
│  │ [tag] [tag]        ││
│  └────────────────────┘│
│  ...                   │
└────────────────────────┘

┌────────────────────────┐
│  RIGHT SIDEBAR         │
│  Contact · Experience  │
│  Featured              │
└────────────────────────┘

┌────────────────────────┐
│ FOOTER                 │
└────────────────────────┘
```

---

## Me Page (`/me`) — Desktop Bento Grid (`max-w-5xl`, `grid-cols-12`)

```
┌─────────────────────────────────────────────────────────────────────┐
│ NAVBAR                                                               │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  [1] HERO BANNER  (col-span-12)                                      │
│  bg: indigo-50 → white gradient                                      │
│                                                                      │
│  [TM]  Tarun Mahapatra                                               │
│        AI Engineer @ Dell Technologies — GenAI Backend...            │
│        Building backend systems for GenAI-powered support...         │
│                                                                      │
│  [✉ Email]  [in LinkedIn]  [gh GitHub]  [↓ Resume]                  │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────┐ ┌─────────────────────┐ ┌───────────────────┐
│  [2a] EXPERIENCE    │ │  [2b] COMPANY        │ │  [2c] LOCATION    │
│  💼 3+ years        │ │  🏢 Dell Technologies │ │  📍 Bangalore, IN │
│  (md:col-span-4)    │ │  (md:col-span-4)     │ │  (md:col-span-4)  │
└─────────────────────┘ └─────────────────────┘ └───────────────────┘

┌──────────────────────────────┐ ┌──────────────────────────────────┐
│  [3] WHO I AM                │ │  [4] CORE STACK                  │
│  (md:col-span-5)             │ │  (md:col-span-7)                 │
│                              │ │                                  │
│  I'm an AI Engineer at       │ │  [Python] [LLM Orchestration]    │
│  Dell Technologies...        │ │  [RAG] [Agentic AI] [Neo4j]     │
│                              │ │  [Prompt Eng.] [Vector DBs]     │
│  I started in full-stack...  │ │  [MCP]                          │
└──────────────────────────────┘ └──────────────────────────────────┘

┌─────────────────────────────────────────┐ ┌───────────────────────┐
│  [5] EXPERIENCE  (md:col-span-8)        │ │  [6] HOBBIES          │
│                                         │ │  (md:col-span-4)      │
│ ▌ Feb 2025—Present       [● Current]   │ │  ❤                    │
│   Software Engineer 2 — Dell           │ │                       │
│   · Building GenAI orchestration...    │ │  Outside of work, I   │
│   [Python] [Neo4j] [RAG]              │ │  spend most of my     │
│                                         │ │  time playing         │
│ ▌ Aug 2023—Jan 2025                    │ │  football...          │
│   Software Engineer — Dell             │ ├───────────────────────┤
│   · Automated SAP tasks (−80% time)   │ │  [6b] ACTIVITIES      │
│   [Python] [Selenium] [React.js]      │ │  ⚡                    │
│                                         │ │                       │
│ ▌ Jan 2023—May 2023                    │ │  I'm part of Dell's   │
│   Winter Intern — Dell                 │ │  Football Club and    │
│   · Migrated tool to Spring Boot...   │ │  play in local        │
│   [Java] [Spring Boot] [Angular]      │ │  tournaments...       │
│                                         │ └───────────────────────┘
│ ▌ May 2022—Jul 2022                    │
│   Summer Intern — Dell                 │
│   · Built PDF extraction tool...      │
│   [Python] [OpenCV]                   │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  [7] PHOTO CAROUSEL  (col-span-12)  [TODO]                           │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                       │
│  │ img  │ │ img  │ │ img  │ │ img  │ │ img  │  ← scrollable        │
│  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘                       │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  [8] LET'S CONNECT CTA  (col-span-12)                               │
│  "Let's connect."                                                    │
│  Open to work opportunities, collaborations, or just a good chat.   │
│  [✉ email]  [in LinkedIn]  [gh GitHub]                              │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│ FOOTER                                                               │
└─────────────────────────────────────────────────────────────────────┘
```

### Mobile behaviour (< `md`)
- All cells collapse to `col-span-12` — single full-width column
- Stat cards: 2-per-row at `sm` (`sm:col-span-6`), full width below that
- Experience and Hobbies+Activities stack vertically (no side-by-side)

---

## Post Detail (`/post/:id`) — Desktop

```
┌─────────────────────────────────────────────────────────────────────┐
│ NAVBAR                                                               │
└─────────────────────────────────────────────────────────────────────┘

                  ┌───────────────────────────┐
                  │  ← Back to feed           │
                  │                           │
                  │ ┌─────────────────────┐   │
                  │ │ [Category] · Date   │   │
                  │ │                     │   │
                  │ │ Post Title (h1)     │   │
                  │ │ Subtitle            │   │
                  │ │                     │   │
                  │ │ ─────────────────── │   │
                  │ │                     │   │
                  │ │ ## Section Heading  │   │
                  │ │ Paragraph text...   │   │
                  │ │                     │   │
                  │ │ - bullet            │   │
                  │ │ - bullet            │   │
                  │ │                     │   │
                  │ │ Paragraph text...   │   │
                  │ │                     │   │
                  │ │ ─────────────────── │   │
                  │ │ [tag] [tag] [tag]   │   │
                  │ └─────────────────────┘   │
                  └───────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│ FOOTER                                                               │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Search Interaction (Feed)

```
Before search:
┌──────────────────────────────┐
│ 🔍  Search posts by title... │
└──────────────────────────────┘
[ Post Card 1 ]
[ Post Card 2 ]
[ Post Card 3 ]

While typing "rag":
┌──────────────────────────────┐
│ 🔍  rag                    ✕ │
└──────────────────────────────┘
[ Post Card 1 — matches "RAG" tag ]

No results:
┌──────────────────────────────┐
│ 🔍  xyzabc                 ✕ │
└──────────────────────────────┘
┌──────────────────────────────┐
│  No posts match "xyzabc"     │
└──────────────────────────────┘
```
