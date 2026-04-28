import embercastImage from '../assets/cole/embercast.jpg';
import headshotImage from '../assets/cole/headshot.png';
import internalToolImage from '../assets/cole/internaltool.jpg';
import lifestyleImage from '../assets/cole/lifestyle.png';
import mappingImage from '../assets/cole/mapping.gif';

export const personalData = {
  name: 'Cole Richards',
  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Projects', href: '#projects' },
    { label: 'Now', href: '#now' },
    { label: 'Life', href: '#life' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    eyebrow: 'UCLA Statistics & Data Science · Class of 2026',
    title: 'Builder, analyst, people person.',
    titleAccent: 'people person',
    backgroundImage: {
      src: lifestyleImage,
      alt: 'Cole Richards outdoors in California',
    },
    lede:
      "I co-founded a wildfire defense startup, ship the software that runs it, and led an 8-person crew on a 3,400 sq ft install. I'm finishing a B.S. in Statistics & Data Science at UCLA.",
    body:
      "Looking for entry-level data analyst and data scientist roles starting June 2026. Open to part-time data work or customer-facing roles in the meantime — coaching, events, hospitality, sales.",
  },
  proof: [
    { value: '$20K+', label: 'Early revenue closed at Trident' },
    { value: '3', label: 'Wildfire installations executed' },
    { value: '8', label: 'Person crew led on-site' },
    { value: '3.98', label: 'GPA at SBCC, transferred to UCLA' },
  ],
  now: {
    intro:
      "Two tracks open right now. Same person, two different things you might want to hire me for.",
    tracks: [
      {
        kind: 'data',
        label: 'Data work',
        title: 'Data analyst / data scientist',
        timeframe: 'Full-time from June 12, 2026 · Part-time now (10–20 hrs/wk)',
        body:
          'Statistical modeling, time-series, geospatial. Drawn to health, human behavior, and the physical world. Open to LA, San Diego (from August), or remote.',
        resumeLabel: 'Download data resume',
        resumeUrl: '/Cole_Richards_Resume.pdf',
      },
      {
        kind: 'service',
        label: 'Customer-facing',
        title: 'Coaching · events · hospitality · sales',
        timeframe: 'Available now in Santa Monica · San Diego from August',
        body:
          "I've coached a UCLA club volleyball team, run bar and floor at events, and held a sales role through a year of college. I'm composed, fast on my feet, and good with people.",
        resumeLabel: 'Download service resume',
        resumeUrl: '/Cole_Richards_Resume_Service.pdf',
      },
    ],
  },
  profile: {
    headshot: {
      src: headshotImage,
      alt: 'Cole Richards headshot',
      variant: 'headshot',
      tag: '',
      label: 'Cole Richards',
      note: 'UCLA Statistics & Data Science student, founder, and engineer.',
    },
    paragraphs: [
      "I transferred to UCLA after earning A.A. degrees in Mathematics and Computer Science at SBCC with a 3.98 GPA. The path through community college taught me how to work — show up, do the reading, ask the question, take the harder course. The path through UCLA gave me applied geostatistics, regression, time-series, and experimental design.",
      "Most of what I've built outside class is at Trident Ember Defense, a wildfire defense startup I co-founded last August. I write the software (CRM, quoter, 2D mapping tool, inventory, customer planner), run the spatial analysis that drives where we focus, and handle the field execution when it's time to actually install. That mix of analysis, product, and on-the-ground work is the work I want to keep doing.",
      "Outside that I coach UCLA's women's club volleyball team, surf, play soccer, and spend time with my dog Toby. I'm a people person with a competitive edge — that's the throughline whether I'm leading an 8-person install crew, running practice, or pairing with someone on a model.",
    ],
    facts: [
      { label: 'Current role', value: 'Co-founder & COO, Trident Ember Defense' },
      { label: 'Degree', value: 'B.S. Statistics & Data Science, UCLA' },
      { label: 'Graduating', value: 'June 2026' },
      { label: 'Focus', value: 'Health, human behavior, and physical-world data' },
    ],
  },
  work: [
    {
      role: 'Co-Founder & COO',
      company: 'Trident Ember Defense',
      period: 'Aug 2025 – Present',
      location: 'Los Angeles & Ventura Counties',
      summary:
        "I co-founded Trident to help protect homes in wildfire-prone areas. I own software, geospatial targeting, planning, and lead field execution.",
      highlights: [
        'Built and shipped the full internal stack from scratch — CRM, quoter, 3D print queue, 2D sprinkler mapping tool, customer planner, marketing site — using Supabase, Mapbox, and Vite.',
        'Drove client targeting through geospatial risk analysis in QGIS and ArcGIS, layering WUI zones, Fire Hazard Severity Zones, and vegetation data to prioritize outreach across high-risk California.',
        'Closed and executed 3 installations generating $20K+ in early revenue, including field lead on a 3,400 sq ft residential project with an 8-person crew.',
      ],
      tools: ['Supabase', 'Mapbox', 'QGIS', 'ArcGIS', 'JavaScript', 'Vite', 'Swift'],
      link: 'https://tridentemberdefense.com',
    },
    {
      role: 'Inventory Specialist',
      company: 'UCLA Housing IT',
      period: 'Aug 2024 – Dec 2025',
      location: 'UCLA',
      summary:
        'Tech operations across UCLA Housing & Hospitality. I focused on making tracking, audit history, and restocking more systematic than what was there.',
      highlights: [
        'Replaced a static inventory spreadsheet with a structured logging system, enabling change history, audit trail, and usage trend analysis across thousands of assets.',
        'Managed inventory across 12+ product categories for campus housing operations, supporting device setup, intake, and data accuracy.',
      ],
      tools: ['Inventory systems', 'Operations', 'Process improvement'],
    },
    {
      role: 'Accounts Analysis & Development',
      company: 'Esperer Holdings',
      period: 'Oct 2020 – Oct 2021',
      location: 'Santa Barbara',
      summary:
        "Where I first saw what a small piece of automation can do for a team's day. I built faster Excel-based workflows and trained the team to use them.",
      highlights: [
        'Automated daily account extraction and feature analysis for thousands of records.',
        'Cut hours of repetitive manual work and rolled the workflow out across the team.',
      ],
      tools: ['Excel', 'Workflow design', 'Team training'],
    },
  ],
  secondaryWork: {
    eyebrow: 'Other recent work',
    title: 'Customer-facing roles',
    description:
      "Roles that built the people-side. They're on my service resume in detail; here's the short version.",
    items: [
      {
        role: 'Volleyball Coach',
        company: "UCLA Women's Club Indoor Volleyball",
        period: 'Sep 2024 – Apr 2026',
        note: 'Designed and ran practices for a competitive club team. Coaching plus mentoring; managed scheduling, equipment, and team comms.',
      },
      {
        role: 'Server & Event Staff',
        company: 'GlenAnnie Golf Course',
        period: 'Dec 2023 – Aug 2024',
        note: 'Weddings, quinceañeras, wine tastings, corporate outings. Ran the bar during events; got comfortable fast in any room.',
      },
      {
        role: 'Sales Associate',
        company: 'Tillys, Santa Barbara',
        period: 'Dec 2022 – Dec 2023',
        note: 'Hit and exceeded targets by knowing the products and actually listening. Customers came back and remembered me.',
      },
    ],
  },
  projects: [
    {
      category: 'Spatial Analysis · Field Strategy',
      title: 'Wildfire Risk Targeting',
      description:
        'Spatial workflow that identifies where wildfire defense work is most urgent, then connects that to outreach and installation planning at Trident.',
      points: [
        'Layers WUI zones, CAL FIRE Fire Hazard Severity Zones, vegetation data, and 30-year fire perimeter history.',
        'Drives partner conversations and focuses field effort where it matters most.',
        'How I like to work: analysis, product thinking, and execution all at the same time.',
      ],
      stack: ['ArcGIS', 'QGIS', 'GeoPandas', 'R (geoR, gstat)'],
      media: {
        src: mappingImage,
        alt: 'Animated wildfire burn-line timeline map',
        variant: 'tall',
        minimalCaption: true,
        note: 'Burn-line timeline from the 1990s onward, in 5-year increments.',
      },
    },
    {
      category: 'Product · Live Conditions',
      title: 'EmberCast',
      description:
        'A mobile app concept for viewing wildfire conditions through dashboard and map views — built for homeowners and firefighters who need usable information fast.',
      points: [
        'Hourly, weekly, and historical condition views from public data sources.',
        'Live wind-particle map and risk preview for spatial awareness.',
        'A take on translating complexity into something clear and useful.',
      ],
      stack: ['Swift', 'Public data APIs', 'Mapping interfaces'],
      media: {
        src: embercastImage,
        alt: 'EmberCast mobile dashboard screenshot',
        variant: 'portrait',
        minimalCaption: true,
        note: 'Wildfire conditions dashboard and map views.',
      },
    },
    {
      category: 'Internal Tools · Mapping',
      title: 'Trident Ops & Planning Stack',
      description:
        'Built the company\'s internal tools and mapping workflows together, because quoting, inventory, planning, and layout design needed to connect — not live in separate systems.',
      points: [
        'CRM, quoting, inventory, and admin workflows in one connected internal system.',
        '2D sprinkler planning tool that made roofline and eave layouts faster to revise.',
        'Cut manual coordination while making field execution more precise.',
      ],
      stack: ['Supabase', 'Mapbox', 'Vite', 'JavaScript', 'Netlify'],
      media: {
        src: internalToolImage,
        alt: 'Trident operations and sprinkler planning tool screenshot',
        variant: 'landscape',
        minimalCaption: true,
        note: 'Planning, customer tracking, and install prep in one workflow.',
      },
    },
  ],
  inProgressProjects: {
    eyebrow: 'In progress',
    title: 'What I\'m building right now',
    items: [
      {
        title: 'Personal Health & Training Load Analysis',
        stack: 'Python · pandas · statsmodels · matplotlib',
        description:
          'Longitudinal analysis of my own Apple Watch and training data, modeling relationships between training load, recovery, sleep, and HRV across surfing, volleyball, and strength training. Time-series decomposition, autocorrelation, mixed-effects regression for repeated measures.',
      },
      {
        title: 'California Wildfire Risk Model',
        stack: 'Python · GeoPandas · Plotly · Streamlit',
        description:
          'ZIP-level wildfire risk score for LA County combining CAL FIRE hazard zones, 30-year fire perimeter history, and vegetation indices. Validating against CA Dept. of Insurance non-renewal rates. Deploying as a Streamlit dashboard.',
      },
      {
        title: 'Geostatistical Kriging Analysis',
        stack: 'R · geoR · gstat',
        description:
          'UCLA C173 coursework. Ordinary and universal kriging with variogram fitting and PRESS cross-validation to predict environmental conditions across unsampled locations.',
      },
      {
        title: 'Airbnb Amenity Pricing Analysis',
        stack: 'R · tidyverse · glmnet',
        description:
          'LASSO logistic regression with phrase-level amenity tokenization to identify which listing features predict above-median pricing. AUC evaluation with neighborhood-stratified confounding analysis.',
      },
    ],
  },
  education: [
    {
      school: 'University of California, Los Angeles',
      degree: 'B.S. Statistics & Data Science',
      period: 'Sep 2024 – Jun 2026',
      location: 'Los Angeles',
      notes: [
        'Coursework: Applied Geostatistics (C173), Computation & Optimization (102B), Design & Analysis of Experiments (141XP), Regression & Data Mining, Probability.',
      ],
    },
    {
      school: 'Santa Barbara City College',
      degree: 'A.A. Mathematics · A.A. Computer Science',
      period: 'Aug 2022 – May 2024',
      location: 'Santa Barbara',
      notes: ['3.98 GPA · President\'s Honor Roll.'],
    },
  ],
  personal: {
    summary:
      "Outside school and Trident, I surf, play volleyball and soccer, coach, play guitar, practice yoga, and hang out with my dog Toby. None of that is separate from how I work — it's where the patience, the competitive edge, and the ability to read a room come from.",
    featuredImage: {
      src: lifestyleImage,
      alt: 'Cole Richards lifestyle photo outdoors',
      variant: 'portrait',
      tag: 'Outside work',
      label: 'A life that stays close to the outdoors',
      note: 'How I live shapes the kind of work I want to keep doing.',
    },
    interests: [
      { title: 'Surfing' },
      { title: 'Volleyball coaching' },
      { title: 'Spearfishing' },
      { title: 'Yoga & meditation' },
      { title: 'Guitar' },
    ],
  },
  contact: {
    primaryEmail: 'milescoler@gmail.com',
    tridentEmail: 'cole@tridentemberdefense.com',
    phone: '424-757-3084',
    linkedinUrl: 'https://www.linkedin.com/in/milescoler/',
    githubUrl: 'https://github.com/milescoler',
    resumeUrl: '/Cole_Richards_Resume.pdf',
    serviceResumeUrl: '/Cole_Richards_Resume_Service.pdf',
    statement:
      "Easiest way to reach me is email. If you're hiring for a data role starting June 2026, or for part-time customer-facing work in LA or San Diego right now, I'd like to hear about it.",
  },
};
