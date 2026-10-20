export interface LocalizedText {
  id: string;
  en: string;
}

export interface ExperienceItem {
  role: LocalizedText;
  company: string;
  period: LocalizedText;
  location?: string;
  highlightBadge?: LocalizedText;
  bullets: LocalizedText[];
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: LocalizedText;
  period: LocalizedText;
  impactBadge: LocalizedText;
  description: LocalizedText;
  architectureNote: LocalizedText;
  tags: string[];
  diagramType: 'uangku' | 'uilib' | 'tiketmart' | 'llama' | 'forum' | 'chatbot';
}

export const profileData = {
  fullName: 'Ghazi Taqiyya Al Anshari',
  shortName: 'Taqiyya Ghazi',
  headline: {
    id: 'Full-Stack, Cloud & Generative AI Engineer',
    en: 'Full-Stack, Cloud & Generative AI Engineer',
  },
  location: {
    id: 'Jakarta Selatan, DKI Jakarta, Indonesia',
    en: 'South Jakarta, Indonesia',
  },
  email: 'taqiyyaghazi@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/taqiyya-ghazi/',
    github: 'https://github.com/taqiyyaghazi',
    medium: 'https://medium.com/@taqiyyaghazi',
    website: 'https://taqiyyaghazi.com/',
  },
  hero: {
    statusBadge: {
      id: 'Terbuka untuk Kolaborasi & Peluang Engineering',
      en: 'Open for Engineering Roles & High-Impact Collaboration',
    },
    titlePrefix: {
      id: 'Merancang Sistem Terdistribusi, UI Library, &',
      en: 'Architecting Scalable Systems, UI Libraries, &',
    },
    titleHighlight: {
      id: 'Pipeline Generative AI.',
      en: 'Generative AI Pipelines.',
    },
    summary: {
      id: 'Software Engineer dengan 3+ tahun pengalaman membangun ekosistem produk berskala 200.000+ pengguna, mengoptimalkan infrastruktur cloud & modular monolith, merancang Design System modern, serta mengaudit kode tingkat lanjut di bidang Back-End Architecture dan Generative AI.',
      en: 'Software Engineer with 3+ years of experience building production systems serving 200,000+ users, consolidating cloud infrastructure & modular monoliths, crafting modern Design Systems, and auditing advanced Back-End Architecture and Generative AI pipelines.',
    },
  },
  metrics: [
    {
      value: '-50%',
      label: {
        id: 'Biaya Infrastruktur Cloud',
        en: 'Cloud Infrastructure Cost',
      },
      detail: {
        id: 'Konsolidasi microservices ke NestJS modular monolith untuk 200.000+ user dengan 99.9% uptime',
        en: 'Consolidated fragmented microservices into a high-performance NestJS modular monolith for 200K+ users',
      },
    },
    {
      value: '3x',
      label: {
        id: 'Kecepatan Delivery Frontend',
        en: 'Faster Frontend Velocity',
      },
      detail: {
        id: 'Memangkas waktu rilis fitur dari 3 hari menjadi 1 hari lewat Vokraf UI Library & Storybook 8',
        en: 'Cut feature delivery from 3 days to 1 day via Vokraf UI Library (React, Next.js, Tailwind, Storybook 8)',
      },
    },
    {
      value: '270+',
      label: {
        id: 'Audit Proyek & Code Review',
        en: 'Advanced Code Reviews',
      },
      detail: {
        id: 'Rating kepuasan 4.9/5.0 di 5 kelas mahir Dicoding (Clean Architecture, DDD, & Stable Diffusion)',
        en: '4.9/5.0 satisfaction rating across 5 expert Dicoding courses (DDD, Clean Architecture & Stable Diffusion)',
      },
    },
    {
      value: '-80%',
      label: {
        id: 'Waktu Rilis CI/CD Pipeline',
        en: 'CI/CD Delivery Time Cut',
      },
      detail: {
        id: 'Otomatisasi GitHub Actions dengan pengujian berlapis Vitest, Jest, Cypress, dan Playwright E2E',
        en: 'Automated GitHub Actions pipelines integrated with Vitest, Jest, Cypress, and Playwright E2E suites',
      },
    },
  ],
  skillGroups: [
    {
      category: {
        id: 'Backend & Sistem Terdistribusi',
        en: 'Backend & Distributed Systems',
      },
      items: [
        'Node.js',
        'NestJS (Modular Monolith)',
        'TypeScript',
        'Express.js',
        'Hapi.js',
        'Python (Flask)',
        'PostgreSQL',
        'Redis',
        'RabbitMQ',
        'Clean Architecture & DDD',
      ],
    },
    {
      category: {
        id: 'Frontend, Mobile & Design System',
        en: 'Frontend, Mobile & Design Systems',
      },
      items: [
        'React 19',
        'Next.js',
        'Astro',
        'Tailwind CSS',
        'Storybook 8',
        'Class Variance Authority (CVA)',
        'Redux',
        'Flutter (Vertical Slice)',
        'React Native',
        'Nuxt.js',
      ],
    },
    {
      category: {
        id: 'AI, LLM & Data Science',
        en: 'AI, LLM & Data Science',
      },
      items: [
        'LLaMA 3.1 Fine-Tuning (LoRA/QLoRA)',
        'RAG & LangChain',
        'GRPO',
        'Stable Diffusion Pipelines',
        'Gemini AI API',
        'PyTorch & Hugging Face',
        'LSTM + Attention NLP',
        'Streamlit',
      ],
    },
    {
      category: {
        id: 'Cloud, DevOps & Observability',
        en: 'Cloud, DevOps & Observability',
      },
      items: [
        'Docker & Docker Compose',
        'GitHub Actions CI/CD',
        'AWS & Google Cloud',
        'Alibaba Cloud & DigitalOcean',
        'NGINX Hardening',
        'ELK Stack (Elasticsearch/Kibana)',
        'Sentry',
        'Playwright / Cypress / Jest / Vitest',
      ],
    },
  ],
  coreExperience: [
    {
      role: {
        id: 'Full Stack Engineer',
        en: 'Full Stack Engineer',
      },
      company: 'Vokraf',
      period: {
        id: 'Okt 2023 – Mei 2026 (2 thn 8 bln)',
        en: 'Oct 2023 – May 2026 (2 yrs 8 mos)',
      },
      location: 'Jakarta Selatan, Indonesia',
      highlightBadge: {
        id: '200.000+ Pengguna · 99.9% Uptime',
        en: '200,000+ Users · 99.9% Uptime',
      },
      bullets: [
        {
          id: 'Memangkas biaya infrastruktur bulanan hingga 50% untuk platform dengan 200.000+ pengguna melalui konsolidasi microservices terfragmentasi menjadi NestJS modular monolith berperforma tinggi di Alibaba Cloud & DigitalOcean.',
          en: 'Slashed monthly cloud infrastructure costs by 50% for a 200,000+ user platform by consolidating fragmented microservices into a high-performance NestJS modular monolith deployed via Docker on Alibaba Cloud & DigitalOcean.',
        },
        {
          id: 'Mempercepat delivery fitur frontend hingga 3x lipat (dari 3 hari ke 1 hari) dengan merancang Vokraf UI Library berbasis React, Next.js, Tailwind CSS, dan Storybook guna menjamin 100% konsistensi desain.',
          en: 'Accelerated frontend feature velocity by 3x (from 3 days to 1 day) by architecting the Vokraf UI Library with React, Next.js, Tailwind CSS, and Storybook for 100% design consistency.',
        },
        {
          id: 'Mengurangi waktu rilis (delivery time) hingga 80% melalui pipeline GitHub Actions yang terintegrasi dengan automated testing Vitest, Jest, dan Playwright E2E.',
          en: 'Reduced release delivery time by 80% via GitHub Actions CI/CD pipelines integrated with Vitest, Jest, and Playwright E2E automation.',
        },
        {
          id: 'Menerapkan observability terpusat (Elasticsearch, Kibana/ELK, Sentry) serta mengoptimasi PostgreSQL konkurensi tinggi untuk ribuan peserta program Kartu Prakerja.',
          en: 'Implemented centralized observability (ELK Stack & Sentry) and tuned high-concurrency PostgreSQL workloads supporting thousands of simultaneous Kartu Prakerja learners.',
        },
      ],
      tags: ['NestJS', 'Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'ELK Stack', 'Sentry', 'Playwright'],
    },
    {
      role: {
        id: 'Full Stack Developer',
        en: 'Full Stack Developer',
      },
      company: 'Telkomsel',
      period: {
        id: 'Jan 2023 – Sep 2023 (9 bln)',
        en: 'Jan 2023 – Sep 2023 (9 mos)',
      },
      location: 'Jakarta, Indonesia',
      highlightBadge: {
        id: 'Enterprise Vendor Management',
        en: 'Enterprise Vendor Management',
      },
      bullets: [
        {
          id: 'Merancang dan memodernisasi arsitektur platform manajemen vendor internal "Verona" milik Telkomsel guna meningkatkan maintainability, skalabilitas, dan performa aplikasi.',
          en: 'Architected and modernized Telkomsel’s internal vendor management platform ("Verona") to significantly improve code maintainability and runtime performance.',
        },
      ],
      tags: ['Full-Stack Architecture', 'JavaScript/TypeScript', 'Enterprise Web', 'RESTful API', 'Relational DB'],
    },
    {
      role: {
        id: 'Project Leader / AI Developer',
        en: 'Project Leader / AI Developer',
      },
      company: 'Central AI (PT Central Artificial Intelligence)',
      period: {
        id: 'Jun 2022 – Des 2022 (7 bln)',
        en: 'Jun 2022 – Dec 2022 (7 mos)',
      },
      highlightBadge: {
        id: 'Memimpin 4 Produk AI',
        en: 'Led 4 Production AI Products',
      },
      bullets: [
        {
          id: 'Memimpin pengembangan end-to-end 4 produk berbasis kecerdasan buatan: Central Chatbot (PaaS), Central Notula (speech-to-text meeting notes), Central OCR, dan Central POS.',
          en: 'Led the end-to-end engineering and delivery of 4 AI-driven applications: Central Chatbot (PaaS), Central Notula, Central OCR, and Central POS.',
        },
      ],
      tags: ['Python', 'Flask', 'NLP', 'OCR', 'Speech Processing', 'Product Leadership'],
    },
    {
      role: {
        id: 'AI Researcher & Independent Study',
        en: 'AI Researcher & Independent Study',
      },
      company: 'BISA AI Academy & Orbit Future Academy',
      period: {
        id: 'Agu 2021 – Agu 2022 (1 thn)',
        en: 'Aug 2021 – Aug 2022 (1 yr)',
      },
      highlightBadge: {
        id: 'Riset Terapan NLP & Deep Learning',
        en: 'Applied NLP & Deep Learning Research',
      },
      bullets: [
        {
          id: 'Menyelesaikan riset terapan dan spesialisasi AI-HACKER pada domain Data Science, Natural Language Processing (NLP), Speech Processing with Deep Learning, Computer Vision, dan Fullstack Python.',
          en: 'Completed intensive applied AI research across Data Science, Natural Language Processing (NLP), Speech Processing with Deep Learning, Computer Vision, and Python engineering.',
        },
      ],
      tags: ['Deep Learning', 'NLP', 'Computer Vision', 'Python', 'Data Science'],
    },
  ] satisfies ExperienceItem[],
  mentorshipExperience: [
    {
      role: {
        id: 'External Code Reviewer',
        en: 'External Code Reviewer',
      },
      company: 'Dicoding Academy',
      period: {
        id: 'Mar 2026 – Sekarang',
        en: 'Mar 2026 – Present',
      },
      highlightBadge: {
        id: '270+ Submisi · Rating 4.9 / 5.0 · Reviewer of the Month',
        en: '270+ Submissions · 4.9 / 5.0 Rating · Reviewer of the Month',
      },
      bullets: [
        {
          id: 'Menilai dan membimbing 270+ submisi proyek siswa pada 5 kelas pemrograman tingkat lanjut dengan rating kepuasan 4.9/5.0 serta meraih penghargaan Reviewer of the Month (Juli 2026).',
          en: 'Evaluated and mentored 270+ advanced student project submissions across 5 courses with a 4.9/5.0 satisfaction rating, earning the Reviewer of the Month award (July 2026).',
        },
        {
          id: 'Mengaudit pipeline Generative AI (Stable Diffusion: txt2img, inpainting/outpainting, refiner pattern, antarmuka Streamlit, tuning Guidance Scale/Steps, dan efisiensi VRAM/GPU).',
          en: 'Audited Generative AI pipelines (Stable Diffusion image generation, inpainting/outpainting, refiner patterns, Streamlit UIs, hyperparameter tuning, and GPU/VRAM optimization).',
        },
        {
          id: 'Memvalidasi arsitektur Back-End tingkat Expert: Clean Architecture, Domain-Driven Design (DDD), automated test suites (Jest Unit/Integration/Functional), dan CI/CD GitHub Actions.',
          en: 'Validated Expert-level Back-End architectures: Clean Architecture, strict dependency rules, Domain-Driven Design (DDD), Jest test suites, and GitHub Actions CI/CD.',
        },
        {
          id: 'Memeriksa implementasi RESTful API (Express/Hapi), PostgreSQL native, autentikasi JWT, caching Redis, message broker RabbitMQ, serta hardening NGINX (Rate Limiting & SSL/HTTPS).',
          en: 'Reviewed production-grade RESTful APIs (Express/Hapi), native PostgreSQL, JWT auth, Redis caching, RabbitMQ brokers, and NGINX security hardening (Rate Limiting & SSL/HTTPS).',
        },
      ],
      tags: ['Clean Architecture', 'DDD', 'Stable Diffusion', 'PostgreSQL', 'Redis', 'RabbitMQ', 'NGINX', 'Jest'],
    },
    {
      role: {
        id: 'Generative AI & Data Science Facilitator',
        en: 'Generative AI & Data Science Facilitator',
      },
      company: 'IDCamp Indosat Ooredoo Hutchison',
      period: {
        id: 'Jan 2026 – Mei 2026',
        en: 'Jan 2026 – May 2026',
      },
      highlightBadge: {
        id: 'Alur GenAI Engineer & Data Scientist Mahir',
        en: 'GenAI Engineer & Expert Data Scientist Tracks',
      },
      bullets: [
        {
          id: 'Memfasilitasi peserta pada alur Generative AI Engineer: rekayasa prompt, arsitektur LLM, fine-tuning, dan integrasi pipeline AI ke aplikasi produksi.',
          en: 'Mentored scholarship engineers in the Generative AI track covering prompt engineering, LLM architectures, model fine-tuning, and production AI pipelines.',
        },
        {
          id: 'Mendampingi peserta alur Data Scientist Mahir dalam pembedahan dataset kompleks, pemodelan machine learning, dan implementasi end-to-end data science.',
          en: 'Guided advanced Data Science cohorts through complex dataset exploration, machine learning modeling, and end-to-end deployment.',
        },
      ],
      tags: ['LLM', 'Fine-Tuning', 'Prompt Engineering', 'Machine Learning', 'Data Science'],
    },
    {
      role: {
        id: 'AWS, Back-End & DevOps Learning Path Facilitator',
        en: 'AWS, Back-End & DevOps Learning Path Facilitator',
      },
      company: 'Dicoding Indonesia & IDCamp',
      period: {
        id: 'Agu 2023 – Apr 2025 (Multi-Kohort)',
        en: 'Aug 2023 – Apr 2025 (Multi-Cohort)',
      },
      highlightBadge: {
        id: '76% Rata-rata Kelulusan di Kelas Expert',
        en: '76% Avg Graduation Rate in Expert Tracks',
      },
      bullets: [
        {
          id: 'AWS Back-End Academy (Jul–Des 2024): Membimbing 2 kohort berurutan dari Intermediate hingga Expert Back-End dengan rata-rata kelulusan 76% (72% lulus di kelas tersulit Back-End Expert).',
          en: 'AWS Back-End Academy (Jul–Dec 2024): Mentored 2 consecutive cohorts from Intermediate to Expert Back-End, achieving a 76% average graduation rate (72% in the flagship Expert class).',
        },
        {
          id: 'IDCamp Back-End Facilitator (Jan–Apr 2025): Mengajarkan RESTful API Express.js, migrasi PostgreSQL, Redis, RabbitMQ, JWT, serta hands-on lab "Architecting on AWS".',
          en: 'IDCamp Back-End Facilitator (Jan–Apr 2025): Led hands-on labs on Express.js, PostgreSQL migrations, Redis, RabbitMQ, JWT, and "Architecting on AWS".',
        },
        {
          id: 'DevOps Facilitator (Agu–Okt 2023): Membimbing 25 pendidik profesional dalam mengadopsi praktik DevOps modern dan cloud engineering.',
          en: 'DevOps Facilitator (Aug–Oct 2023): Coached 25 professional educators in adopting modern DevOps pipelines and cloud engineering practices.',
        },
      ],
      tags: ['AWS Cloud', 'Back-End Expert', 'DevOps', 'Express.js', 'PostgreSQL', 'Redis', 'RabbitMQ'],
    },
  ] satisfies ExperienceItem[],
  projects: [
    {
      id: 'uangku',
      title: 'Uangku — AI Personal Finance',
      subtitle: {
        id: 'Aplikasi Keuangan dengan Engine "Daily Breath" & Gemini OCR',
        en: 'Personal Finance App with "Daily Breath" Engine & Gemini OCR',
      },
      period: {
        id: 'Mar 2026 – Sekarang',
        en: 'Mar 2026 – Present',
      },
      impactBadge: {
        id: 'Adaptive Daily Budget · AI Receipt OCR',
        en: 'Adaptive Daily Budget · AI Receipt OCR',
      },
      description: {
        id: 'Aplikasi manajemen keuangan personal dengan algoritma kalkulasi unik "Daily Breath" (Remaining Budget / Days Remaining) yang otomatis menyesuaikan batas aman pengeluaran harian agar bebas overspending.',
        en: 'Personal finance mobile application powered by the "Daily Breath" calculation engine (Remaining Budget / Days Remaining) that dynamically recalibrates daily spending limits to prevent overspending.',
      },
      architectureNote: {
        id: 'Feature-Based Vertical Slice Architecture dengan database lokal Drift (SQLite), sinkronisasi cloud Firebase, serta Gemini AI untuk OCR struk belanja & natural language parsing.',
        en: 'Built on Feature-Based Vertical Slice Architecture with local-first Drift (SQLite) storage, Firebase sync, and Gemini AI API for receipt OCR and natural language transaction parsing.',
      },
      tags: ['Flutter', 'Vertical Slice', 'Drift (SQLite)', 'Firebase', 'Gemini AI API', 'Ocean Flow UI'],
      diagramType: 'uangku',
    },
    {
      id: 'vokraf-ui',
      title: 'Vokraf UI Library',
      subtitle: {
        id: 'Centralized Design System & Komponen UI Ekosistem LMS',
        en: 'Centralized Design System & Reusable UI Component Library',
      },
      period: {
        id: 'Des 2023 – Mar 2024',
        en: 'Dec 2023 – Mar 2024',
      },
      impactBadge: {
        id: '3x Kecepatan Delivery · 100% Konsistensi UI',
        en: '3x Faster Delivery · 100% UI Consistency',
      },
      description: {
        id: 'Pustaka komponen UI terpusat dan sistem token desain untuk menyatukan pengalaman produk di seluruh ekosistem Learning Management System (LMS) Vokraf.',
        en: 'Centralized UI component library and design token architecture unifying product experiences across the Vokraf Learning Management System (LMS) ecosystem.',
      },
      architectureNote: {
        id: 'Komponen type-safe berbasis varian menggunakan Class Variance Authority (CVA), React 19, Next.js, dan dokumentasi interaktif di Storybook 8.',
        en: 'Variant-driven, strictly typed components built with React 19, Next.js, Tailwind CSS, Class Variance Authority (CVA), and interactive Storybook 8 documentation.',
      },
      tags: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'CVA', 'Storybook 8'],
      diagramType: 'uilib',
    },
    {
      id: 'tiketmart',
      title: 'Tiketmart — Flash-Sale Ticketing',
      subtitle: {
        id: 'Platform Tiket End-to-End Berbasis Domain-Driven Design',
        en: 'High-Concurrency Event & Ticketing Platform with DDD',
      },
      period: {
        id: 'Proyek Arsitektur Unggulan',
        en: 'Featured Architecture Project',
      },
      impactBadge: {
        id: 'Flash-Sale Ready · Xendit Payment',
        en: 'Flash-Sale Ready · Xendit Payment',
      },
      description: {
        id: 'Platform pemesanan tiket event end-to-end yang dirancang khusus untuk menangani lonjakan trafik flash sale tanpa race condition maupun overbooking kursi.',
        en: 'End-to-end event ticketing platform engineered to withstand flash-sale traffic spikes while preventing seat overbooking and race conditions.',
      },
      architectureNote: {
        id: 'Penerapan ketat Domain-Driven Design (DDD), orkestrasi pembayaran Xendit, locking & caching Redis untuk inventori tiket real-time, serta PostgreSQL.',
        en: 'Strict Domain-Driven Design (DDD) boundaries, Xendit payment gateway orchestration, Redis distributed caching for flash-sale concurrency, and PostgreSQL.',
      },
      tags: ['NestJS', 'Next.js', 'Domain-Driven Design', 'Redis', 'PostgreSQL', 'Xendit'],
      diagramType: 'tiketmart',
    },
    {
      id: 'llama-rag',
      title: 'LLaMA 3.1 Fine-Tuning & RAG',
      subtitle: {
        id: 'Riset Optimasi LLM dengan LoRA/QLoRA, GRPO & RAG Pipeline',
        en: 'LLM Optimization with LoRA/QLoRA, GRPO & RAG Architecture',
      },
      period: {
        id: 'Riset AI & LLM Engineering',
        en: 'AI Research & LLM Engineering',
      },
      impactBadge: {
        id: 'LoRA / QLoRA · GRPO · Vector RAG',
        en: 'LoRA / QLoRA · GRPO · Vector RAG',
      },
      description: {
        id: 'Implementasi pipeline Large Language Model menyeluruh mulai dari parameter-efficient fine-tuning, alignment kebijakan reward, hingga retrieval konteks dokumen presisi tinggi.',
        en: 'End-to-end Large Language Model pipeline combining parameter-efficient fine-tuning, reward policy alignment, and high-precision document retrieval.',
      },
      architectureNote: {
        id: 'Mencakup Fine-Tuning LLaMA 3.1 dengan LoRA/QLoRA, Generative Reward Policy Optimization (GRPO), dan orkestrasi Retrieval-Augmented Generation (RAG) via LangChain.',
        en: 'Combines LLaMA 3.1 LoRA/QLoRA fine-tuning, Generative Reward Policy Optimization (GRPO), and LangChain Retrieval-Augmented Generation (RAG) workflows.',
      },
      tags: ['Python', 'PyTorch', 'LLaMA 3.1', 'LoRA/QLoRA', 'GRPO', 'LangChain', 'Hugging Face'],
      diagramType: 'llama',
    },
    {
      id: 'forum-app',
      title: 'Forum App — Automated SPA',
      subtitle: {
        id: 'Platform Diskusi Interaktif dengan State Terpusat & CI/CD Penuh',
        en: 'Interactive Discussion Platform with Redux & Full Test Automation',
      },
      period: {
        id: 'Jan 2023',
        en: 'Jan 2023',
      },
      impactBadge: {
        id: 'Unit + E2E Tested · Auto CI/CD',
        en: 'Unit + E2E Tested · Auto CI/CD',
      },
      description: {
        id: 'Aplikasi web forum diskusi interaktif yang mengelola state asinkron kompleks (threads, votes, leaderboards) dengan jaminan kualitas otomatis dari commit hingga produksi.',
        en: 'Interactive discussion forum web app managing complex asynchronous state (threads, voting, leaderboards) with automated quality gates from commit to production.',
      },
      architectureNote: {
        id: 'State management terpusat dengan Redux Toolkit, Unit Testing via Jest, End-to-End (E2E) testing via Cypress, dan pipeline CI/CD GitHub Actions ke Vercel.',
        en: 'Centralized state management with Redux, Jest unit tests, Cypress E2E test suites, and automated GitHub Actions CI/CD deployment to Vercel.',
      },
      tags: ['React', 'Redux', 'React Router', 'Tailwind CSS', 'Jest', 'Cypress', 'GitHub Actions'],
      diagramType: 'forum',
    },
    {
      id: 'chatbot-central',
      title: 'Central AI — Chatbot PaaS',
      subtitle: {
        id: 'Platform Chatbot Product-as-a-Service untuk Otomatisasi CS',
        en: 'Product-as-a-Service Chatbot Platform for Enterprise Support',
      },
      period: {
        id: 'Feb 2022 – Mar 2022',
        en: 'Feb 2022 – Mar 2022',
      },
      impactBadge: {
        id: 'Embeddable Widget · Custom NLP Admin',
        en: 'Embeddable Widget · Custom NLP Admin',
      },
      description: {
        id: 'Platform SaaS/PaaS yang memungkinkan klien korporat melatih model NLP kustom, mengatur respons otomatis, dan menyematkan widget chat langsung ke website mereka.',
        en: 'Multi-tenant PaaS platform enabling enterprise teams to train custom NLP intents, tune automated responses, and embed interactive webchat widgets.',
      },
      architectureNote: {
        id: 'Backend inferensi NLP berbasis Python & Flask, dashboard manajemen model real-time, serta skrip widget ringan lintas domain.',
        en: 'Python & Flask NLP inference backend paired with a custom model-tuning admin dashboard and a lightweight cross-origin webchat widget.',
      },
      tags: ['Python', 'Flask', 'NLP Model', 'Embeddable Widget', 'Bootstrap', 'REST API'],
      diagramType: 'chatbot',
    },
  ] satisfies ProjectItem[],
  education: {
    university: 'Universitas Sebelas Maret (UNS)',
    degree: {
      id: 'Sarjana Matematika (S.Si / S.Mat)',
      en: 'Bachelor of Mathematics (B.Sc. in Mathematics)',
    },
    period: '2019 – 2023',
    gpa: '3.50 / 4.00',
    thesisTitle:
      'Implementation of LSTM Algorithm with Attention Mechanism for Sentiment Analysis on Indonesian Marketplace Product Review Data.',
    focusAreas: [
      'Computational Mathematics',
      'Neural Networks',
      'Mathematical Statistics',
      'Artificial Intelligence',
      'Computer Programming',
    ],
    leadership: [
      {
        role: {
          id: 'Ketua Umum — HIMATIKA FMIPA UNS (2021)',
          en: 'President / Chairman — HIMATIKA FMIPA UNS (2021)',
        },
        detail: {
          id: 'Memimpin 65 pengurus dalam mengeksekusi 40 program kerja & 51 agenda; membawa organisasi meraih Juara Umum FMIPA UNS Active Awards.',
          en: 'Led 65 board members across 40 work programs & 51 agendas; steered the organization to win General Champion at the FMIPA UNS Active Awards.',
        },
      },
      {
        role: {
          id: 'Menteri Koordinator Sentral — BEM FMIPA UNS (2022)',
          en: 'Coordinating Minister — BEM FMIPA UNS (2022)',
        },
        detail: {
          id: 'Mengoordinasikan Kementerian Riset & Data, Kementerian Ekonomi Kreatif, serta Kementerian Media & Informasi.',
          en: 'Supervised and aligned the Ministries of Research & Data, Creative Economy, and Media & Information.',
        },
      },
    ],
  },
  awards: [
    {
      title: 'Reviewer of the Month',
      issuer: 'Dicoding Indonesia',
      date: {
        id: 'Juli 2026',
        en: 'July 2026',
      },
      description: {
        id: 'Apresiasi atas konsistensi dan kualitas audit kode berstandar industri kepada ratusan siswa di kelas pemrograman tingkat mahir.',
        en: 'Awarded for outstanding consistency and industry-grade architectural feedback across hundreds of advanced student code submissions.',
      },
    },
    {
      title: 'Top 500 Teams — Indonesian Digital Tribe',
      issuer: 'Kementerian BUMN Republik Indonesia',
      date: {
        id: 'Mei 2022',
        en: 'May 2022',
      },
      description: {
        id: 'Perancangan inovasi platform "Sikostan" yang menghubungkan mahasiswa perantau dengan ekosistem UMKM lokal.',
        en: 'Selected among Top 500 national teams for designing "Sikostan", a digital platform connecting university students with local MSME ecosystems.',
      },
    },
    {
      title: 'Pengelola Bidang Kemahasiswaan & Alumni Terbaik',
      issuer: 'FMIPA Universitas Sebelas Maret',
      date: {
        id: 'Okt 2021',
        en: 'Oct 2021',
      },
      description: {
        id: 'Juara Umum FMIPA UNS Active Awards dengan kemenangan di 3 kategori: Visionary, Achievement Orientation, dan Customer Satisfaction.',
        en: 'Secured General Champion at the FMIPA UNS Active Awards, winning 3 categories: Visionary, Achievement Orientation, and Customer Satisfaction.',
      },
    },
  ],
  certifications: [
    {
      title: {
        id: 'Pengembangan Generative AI Berbasis LLM',
        en: 'Generative AI Engineering with LLMs',
      },
      issuer: 'Dicoding Academy',
      badge: 'GenAI & LLM',
    },
    {
      title: {
        id: 'Belajar Membangun Arsitektur Microservices',
        en: 'Building Microservices Architecture',
      },
      issuer: 'Dicoding Academy',
      badge: 'Distributed Systems',
    },
    {
      title: {
        id: 'Menjadi Google Cloud Architect',
        en: 'Google Cloud Architect Path',
      },
      issuer: 'Dicoding Academy',
      badge: 'Cloud Infrastructure',
    },
    {
      title: {
        id: 'Machine Learning Operations (MLOps)',
        en: 'Machine Learning Operations (MLOps)',
      },
      issuer: 'Dicoding Academy',
      badge: 'Production ML',
    },
  ],
};
