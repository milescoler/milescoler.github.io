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
      "I'm Cole Richards. I like problems I can carry the whole way — from the first messy question to the data, the software, and the people who end up using it. I co-founded a wildfire-defense startup and built most of its software. Now I'm looking for the next one worth the work.",
  },
  proof: [
    { value: '$20K+', label: 'early revenue' },
    { value: '3', label: 'system installs' },
    { value: '8', label: 'person crew led' },
    { value: 'full', label: 'ops stack' },
  ],
  arc: {
    intro: "Most people do one part of this. I'd rather do all of it.",
    stages: [
      { n: '01', label: 'Question', body: "Work out what's actually broken, and who it hurts." },
      { n: '02', label: 'Analysis', body: 'Get into the data until it says something real.' },
      { n: '03', label: 'Software', body: 'Build the thing that turns that into a decision.' },
      { n: '04', label: 'Field', body: 'Put it in front of the real world and see what breaks.' },
    ],
  },
  flagship: {
    eyebrow: 'Flagship · Co-Founder & COO · Aug 2025 – Present',
    company: 'Trident Ember Defense',
    link: 'https://tridentemberdefense.com',
    problem:
      "A wildfire usually takes a house through wind-blown embers, and the standard prep does nothing in that window. Trident builds and installs exterior sprinkler systems that soak the roof and the yard before the fire gets there. Wet homes don't burn.",
    stages: [
      {
        stage: 'Question',
        body: 'Work out who needs this first, and how to actually run a business that can install it across California.',
      },
      {
        stage: 'Analysis',
        body: 'Score risk with QGIS and ArcGIS, layering fire-hazard zones, vegetation, and 30 years of burn history to decide where to knock on doors.',
      },
      {
        stage: 'Software',
        body: 'Wrote most of the internal stack from scratch: the CRM, quoter, 3D-print queue, sprinkler-mapping tool, and customer planner. Supabase and Mapbox under the hood.',
      },
      {
        stage: 'Field',
        body: 'Ran the installs on site: 3 jobs, $20K+ in early revenue, and crew lead on a 3,400 sq ft house with eight people.',
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
        "I pulled a couple of years of my own Apple Watch data to see how well one day predicts the next night's sleep. The surprise: step count and late-afternoon heart rate mattered most for REM. I was careful with the testing, so the result isn't just noise.",
      arcTag: 'Analysis → Software',
      domainTag: 'Health & behavior',
      inProgress: true,
    },
    {
      title: 'California Wildfire Risk Model',
      stack: ['Python', 'GeoPandas', 'Plotly', 'Streamlit'],
      blurb:
        'A map that scores wildfire risk down to the ZIP code across LA County, built from fire-hazard zones, 30 years of burn history, and vegetation data. I checked it against where insurers are actually dropping homes. Turning it into a dashboard anyone can open.',
      arcTag: 'Analysis → Software',
      domainTag: 'Physical world',
      inProgress: true,
    },
    {
      title: 'EmberCast',
      stack: ['Swift', 'Public data APIs'],
      blurb:
        "A phone app for checking wildfire conditions at a glance: a simple dashboard and a live wind map. The idea was to take scattered public data and make it readable in a few seconds, whether you're a homeowner or on a crew.",
      arcTag: 'Software',
      domainTag: 'Software product',
      inProgress: false,
      media: { src: embercastImage, alt: 'EmberCast mobile dashboard', caption: 'Conditions dashboard + map' },
    },
    {
      title: 'Geostatistical Kriging Analysis',
      stack: ['R', 'geoR', 'gstat'],
      blurb:
        'A coursework project on predicting environmental conditions for places nobody measured, using spatial statistics to fill in the gaps between sample points and checking how far off the guesses were.',
      arcTag: 'Analysis',
      domainTag: 'Methods',
      inProgress: false,
    },
    {
      title: 'Airbnb Amenity Pricing Analysis',
      stack: ['R', 'tidyverse', 'glmnet'],
      blurb:
        'Which Airbnb amenities actually push a listing above the median price? I worked it out from the listing text, then checked the answer held up neighborhood by neighborhood instead of just overall.',
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
      'I started at Santa Barbara City College with an A.S. in Math, then finished a B.S. in Statistics & Data Science at UCLA. That route taught me how to work: show up, do the reading, take the harder class.',
      "What I care about is finding ways to solve hard problems and being involved every step of the way — whether that's forming the question and finding the data, building software to fix the specific workflows in my own life, or going out in the field to see a wildfire-sprinkler installation through on a real customer's house for a company I built with my two best friends.",
    ],
    facts: [
      { label: 'Degree', value: 'B.S. Statistics & Data Science, UCLA' },
      { label: 'Location', value: 'Santa Monica → San Diego (Aug) · open to remote' },
      { label: 'Focus', value: 'Hard problems in the physical world, health, and software' },
      { label: 'Currently', value: 'Building Trident · open to what\'s next' },
    ],
    headshot: { src: headshotImage, alt: 'Cole Richards', caption: 'Cole Richards' },
    personal: {
      line: 'None of this is separate from how I work. The patience and the competitiveness come from the same place.',
      interests: ['Surfing', 'Volleyball coaching', 'Yoga & meditation', 'Guitar', 'Soccer'],
    },
  },
  contact: {
    statement:
      "I'm looking for a good problem to work on next — software, data, or something in between. Email's the best way to reach me.",
    email: 'milescoler@gmail.com',
    tridentEmail: 'cole@tridentemberdefense.com',
    phone: '424-757-3084',
    linkedin: 'https://www.linkedin.com/in/milescoler/',
    github: 'https://github.com/milescoler',
    resumeUrl: '/Cole_Richards_Resume.pdf',
  },
};
