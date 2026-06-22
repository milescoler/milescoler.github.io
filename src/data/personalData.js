import embercastImage from '../assets/cole/embercast.jpg';
import headshotImage from '../assets/cole/headshot.png';
import internalToolImage from '../assets/cole/internaltool.jpg';
import mappingImage from '../assets/cole/mapping.gif';

export const personalData = {
  name: 'Cole Richards',
  nav: [
    { label: 'Approach', href: '#approach' },
    { label: 'Trident', href: '#flagship' },
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    kicker: 'Problem solver · Builder · Applied data scientist',
    credential: 'UCLA Statistics & Data Science',
    headline: 'Hard problems, end to end.',
    subline:
      "I'm Cole Richards. I take problems from the raw question and the data through to working software — and, when it counts, out to the field. Recently: co-founded a wildfire-defense startup and wrote most of the software behind it. Now open to the right hard problems to work on next.",
  },
  proof: [
    { value: '$20K+', label: 'early revenue' },
    { value: '3', label: 'system installs' },
    { value: '8', label: 'person crew led' },
    { value: 'full', label: 'ops stack' },
  ],
  arc: {
    intro: 'Most people own one slice of this. I work the whole line.',
    stages: [
      { n: '01', label: 'Question', body: 'Start with the real problem and who it actually hurts.' },
      { n: '02', label: 'Analysis', body: 'Find the signal: statistics, geospatial, modeling.' },
      { n: '03', label: 'Software', body: 'Build the tool that puts the answer to work.' },
      { n: '04', label: 'Field', body: 'Take it to the real world and make it hold up.' },
    ],
  },
  flagship: {
    eyebrow: 'Flagship · Co-Founder & COO · Aug 2025 – Present',
    company: 'Trident Ember Defense',
    link: 'https://tridentemberdefense.com',
    problem:
      "Wildfires take homes through wind-driven embers, and passive prep leaves a gap in the moment that matters. Trident designs and installs active exterior sprinkler systems that pre-wet a home and its perimeter. Wet homes don't burn.",
    stages: [
      {
        stage: 'Question',
        body: 'Who needs active defense first — and how do you build a business that can deliver it across California?',
      },
      {
        stage: 'Analysis',
        body: 'Geospatial risk targeting in QGIS and ArcGIS — layering WUI zones, CAL FIRE hazard-severity zones, vegetation, and 30 years of fire perimeters to prioritize outreach.',
      },
      {
        stage: 'Software',
        body: 'Wrote most of the internal stack from scratch — CRM, quoter, 3D-print queue, 2D sprinkler-mapping tool, customer planner — on Supabase and Mapbox.',
      },
      {
        stage: 'Field',
        body: 'Led execution on site — 3 installs and $20K+ early revenue, including field lead on a 3,400 sq ft home with an 8-person crew.',
      },
    ],
    outcomes: '$20K+ early revenue · 3 system installs · 8-person crew · full ops stack shipped',
    media: [
      { src: mappingImage, alt: 'Animated wildfire burn-line timeline map', caption: 'Burn-line timeline, 5-year increments' },
      { src: internalToolImage, alt: 'Trident operations and sprinkler-planning tool', caption: 'Internal ops + planning stack' },
    ],
  },
  work: [
    {
      title: 'Sleep Forecasting from Wearable Signals',
      stack: ['Python', 'pandas', 'scikit-learn', 'statsmodels'],
      blurb:
        'End-to-end ML pipeline on multi-modal Apple Watch sensor data (HR, HRV, activity, steps, prior sleep) to predict next-night sleep quality. Engineered time-domain and lagged features for multi-day carryover; held-out-week time-series cross-validation; gradient boosting vs. linear models — step count and afternoon HR were the strongest predictors of REM.',
      arcTag: 'Analysis → Software',
      domainTag: 'Health & behavior',
      inProgress: true,
    },
    {
      title: 'California Wildfire Risk Model',
      stack: ['Python', 'GeoPandas', 'Plotly', 'Streamlit'],
      blurb:
        'ZIP-level wildfire risk classifier for LA County on noisy, incomplete spatial data — CAL FIRE hazard zones, 30-year fire-perimeter history, and vegetation indices. Validated against external ground truth (CA Dept. of Insurance non-renewal rates); deploying as a Streamlit dashboard.',
      arcTag: 'Analysis → Software',
      domainTag: 'Physical world',
      inProgress: true,
    },
    {
      title: 'EmberCast',
      stack: ['Swift', 'Public data APIs'],
      blurb:
        'A mobile app concept for live and historical wildfire conditions — a dashboard plus a wind-particle map — built to turn messy public data into something a homeowner or firefighter can read fast.',
      arcTag: 'Software',
      domainTag: 'Software product',
      inProgress: false,
      media: { src: embercastImage, alt: 'EmberCast mobile dashboard', caption: 'Conditions dashboard + map' },
    },
    {
      title: 'Geostatistical Kriging Analysis',
      stack: ['R', 'geoR', 'gstat'],
      blurb:
        'UCLA C173 coursework: ordinary and universal kriging with variogram fitting and PRESS cross-validation to predict environmental conditions across unsampled locations.',
      arcTag: 'Analysis',
      domainTag: 'Methods',
      inProgress: false,
    },
    {
      title: 'Airbnb Amenity Pricing Analysis',
      stack: ['R', 'tidyverse', 'glmnet'],
      blurb:
        'LASSO logistic regression with phrase-level amenity tokenization to identify which listing features predict above-median pricing. AUC evaluation with neighborhood-stratified confounding analysis.',
      arcTag: 'Analysis',
      domainTag: 'Methods',
      inProgress: false,
    },
  ],
  github: {
    note: 'More on GitHub',
    url: 'https://github.com/milescoler',
    repos: [
      { label: 'antonelli-vs-russell — F1 telemetry analysis', url: 'https://github.com/milescoler/antonelli-vs-russell' },
      { label: 'spotify-analyzer', url: 'https://github.com/milescoler/spotify-analyzer' },
    ],
  },
  experience: [
    {
      role: 'Co-Founder & COO',
      company: 'Trident Ember Defense',
      period: 'Aug 2025 – Present',
      location: 'LA & Ventura Counties',
      note: 'Software, geospatial targeting, planning, and field execution. Full case study above.',
    },
    {
      role: 'Inventory Specialist',
      company: 'UCLA Housing IT',
      period: 'Aug 2024 – Dec 2025',
      location: 'UCLA',
      note: 'Replaced a static inventory spreadsheet with a structured logging system — change history, audit trail, usage-trend analysis across thousands of assets. Managed inventory across 12+ product categories.',
    },
    {
      role: 'Accounts Analysis & Development',
      company: 'Esperer Holdings',
      period: 'Oct 2020 – Oct 2021',
      location: 'Santa Barbara',
      note: 'Automated daily account extraction and feature analysis for thousands of records; cut hours of manual work and rolled the workflow out across the team.',
    },
  ],
  education: [
    {
      school: 'University of California, Los Angeles',
      degree: 'B.S. Statistics & Data Science',
      period: 'Sep 2024 – Jun 2026',
      detail: 'Computation & Optimization (102B), Applied Geostatistics (C173), Regression & Data Mining (101C), Statistical Consulting (141XP), Probability (100A).',
    },
    {
      school: 'Santa Barbara City College',
      degree: 'A.S. Mathematics',
      period: 'Aug 2022 – May 2024',
      detail: 'GPA 3.98 · President\'s Honor Roll.',
    },
  ],
  about: {
    paragraphs: [
      'I came up through community college — an A.S. in Mathematics at SBCC — then a B.S. in Statistics & Data Science at UCLA. That path taught me how to work: show up, do the reading, take the harder course.',
      "What I care about is taking a hard problem all the way down — from the question and the data to software that ships and, when it counts, out to the field. I'm domain-agnostic: drawn to the physical world, health and human behavior, and software. I want to keep building things that are useful and grounded.",
    ],
    facts: [
      { label: 'Degree', value: 'B.S. Statistics & Data Science, UCLA' },
      { label: 'Location', value: 'Santa Monica → San Diego (Aug) · open to remote' },
      { label: 'Focus', value: 'Hard problems in the physical world, health, and software' },
      { label: 'Currently', value: 'Building Trident · open to what\'s next' },
    ],
    headshot: { src: headshotImage, alt: 'Cole Richards', caption: 'Cole Richards' },
    personal: {
      line: "None of this is separate from how I work — it's where the patience, the competitive edge, and the ability to read a room come from.",
      interests: ['Surfing', 'Volleyball coaching', 'Spearfishing', 'Yoga & meditation', 'Guitar', 'Soccer'],
    },
  },
  contact: {
    statement:
      'Open to the right hard problems — in software, data, or wherever they are. Easiest way to reach me is email.',
    email: 'milescoler@gmail.com',
    tridentEmail: 'cole@tridentemberdefense.com',
    phone: '424-757-3084',
    linkedin: 'https://www.linkedin.com/in/milescoler/',
    github: 'https://github.com/milescoler',
    resumeUrl: '/Cole_Richards_Resume.pdf',
  },
};
