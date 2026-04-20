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
    { label: 'Education', href: '#education' },
    { label: 'Life', href: '#life' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    eyebrow: 'UCLA Statistics & Data Science · Graduating June 2026',
    title: 'Data work that holds up in real conditions.',
    titleAccent: 'in real conditions',
    backgroundImage: {
      src: lifestyleImage,
      alt: 'Cole Richards outdoors in California',
    },
    lede:
      'Weather, fire, human behavior, physical systems. Recent work: a wildfire startup I co-founded in Southern California, geospatial modeling, and full-stack operations software.',
    body:
      'Looking for entry-level data analyst and data science roles starting June 2026, with part-time availability now.',
  },
  availability: [
    { label: 'Availability', value: 'Part-time now (10–20 hrs/week) · Full-time from June 12, 2026' },
    { label: 'Location',     value: 'Santa Monica through summer · San Diego from August · Open to remote' },
    { label: 'Target roles', value: 'Data Analyst · Data Scientist · Product Analyst' },
  ],
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
      "I transferred to UCLA after earning associate degrees in Mathematics and Computer Science at Santa Barbara City College. That path gave me a strong quantitative base — statistics, geospatial modeling, programming — but what I care about most is building things that matter in real life, not just in theory.",
      "A lot of my recent work has been in wildfire, mapping, and operations at a startup I co-founded. The throughline across all of it is the same: using data and software to understand real-world systems and help people make better decisions. I'm most interested in work on health, human behavior, and the physical world — domains where modeling connects to outcomes that actually matter.",
      "At Trident Ember Defense, that has meant building software, planning systems, and field operations that protect homes in high-risk areas. Long term, I want to keep growing as a data scientist and builder, doing practical work that's useful, grounded, and worth spending time on.",
    ],
    facts: [
      { label: 'Current role', value: 'Founder and COO, Trident Ember Defense' },
      { label: 'Degree', value: 'B.S. in Statistics & Data Science, UCLA' },
      { label: 'Expected graduation', value: 'June 2026' },
      { label: 'Primary interest', value: 'Health, behavior, and physical-world data science' },
    ],
  },
  work: [
    {
      role: 'Founder and COO',
      company: 'Trident Ember Defense',
      period: 'Aug 2025 – Present',
      location: 'Santa Monica / Los Angeles and Ventura Counties',
      summary:
        'I co-founded Trident Ember Defense to help protect homes in wildfire-prone areas. My role spans software, operations, targeting, installation planning, and client-facing field execution.',
      highlights: [
        'Built the CRM, quoting tool, inventory system, 2D sprinkler-mapping software, and internal admin tooling from scratch.',
        'Designed dozens of exterior wildfire sprinkler systems and helped save hundreds of planning hours through better digital workflows.',
        'Used spatial analysis to identify high-risk wildfire areas and connect wildfire conditions to property-level targeting.',
        'Led a one-day installation on a 3,400-square-foot two-story home, coordinating an 8-person crew and translating weeks of planning into field execution.',
      ],
      tools: ['Supabase', 'Swift', 'HTML', 'CSS', 'JavaScript', 'Vite', 'Mapbox', 'Netlify', 'GIS'],
      link: 'https://tridentemberdefense.com',
    },
    {
      role: 'Inventory Specialist',
      company: 'UCLA Housing IT',
      period: 'Aug 2024 - Dec 2025',
      location: 'UCLA',
      summary:
        'I supported technology operations across UCLA Housing and Hospitality and looked for ways to make tracking, visibility, and restocking more systematic.',
      highlights: [
        'Managed inventory records for technology assets across housing and hospitality operations.',
        'Supported hardware intake, device setup, and database accuracy for campus technology systems.',
        'Helped shape more predictive and organized approaches to restocking and inventory visibility.',
      ],
      tools: ['Inventory systems', 'Operations', 'Device management', 'Process improvement'],
    },
    {
      role: 'Accounts Analysis and Development',
      company: 'Esperer Holdings',
      period: 'Oct 2020 - Oct 2021',
      location: 'Santa Barbara',
      summary:
        'This was where I first learned that structured analysis and automation can change how a team works day to day. I built faster Excel-based workflows and trained the team to use them.',
      highlights: [
        'Automated daily account extraction and feature analysis for thousands of records.',
        'Improved internal tracking and removed hours of repetitive manual work.',
        'Rolled the new workflow out across the team and made it part of normal operations.',
      ],
      tools: ['Excel', 'Operations analysis', 'Workflow design', 'Team training'],
    },
  ],
  projects: [
    {
      category: 'Spatial Analysis + Field Strategy',
      title: 'Wildfire Risk Targeting',
      description:
        'I use spatial analysis to find where wildfire protection work is most urgent, then connect that analysis to practical outreach and installation planning.',
      points: [
        'Combines wildfire conditions, local risk patterns, and property-level targeting in one spatial workflow.',
        'Supports Trident’s partner conversations and helps focus effort where it can matter most.',
        'Shows how I like to connect analysis, product thinking, and execution in the real world.',
      ],
      stack: ['ArcGIS', 'QGIS', 'R geospatial libraries', 'GIS workflows'],
      media: {
        src: mappingImage,
        alt: 'Animated wildfire burn-line timeline map',
        variant: 'tall',
        minimalCaption: true,
        note: 'Burn-line timeline from the 1990s onward, shown in 5-year increments.',
      },
    },
    {
      category: 'Product Concept + Live Conditions',
      title: 'EmberCast',
      description:
        'A mobile app concept and working tool for viewing wildfire conditions through dashboard and map views, designed for homeowners and firefighters who need usable information quickly.',
      points: [
        'Displays hourly, weekly, and historical condition views from public data sources.',
        'Includes a live wind-particle map and risk preview for spatial awareness.',
        'Reflects my interest in building products that translate complexity into something clear and useful for real people.',
      ],
      stack: ['Swift', 'Public data APIs', 'Mapping interfaces', 'Forecast visualization'],
      media: {
        src: embercastImage,
        alt: 'EmberCast mobile dashboard screenshot',
        variant: 'portrait',
        minimalCaption: true,
        note: 'Wildfire conditions dashboard and map views.',
      },
    },
    {
      category: 'Internal Tools + Mapping',
      title: 'Operations and Planning Tools',
      description:
        'I built Trident’s internal tools and mapping workflows together, because quoting, inventory, planning, and layout design all needed to connect instead of living in separate systems.',
      points: [
        'Combined CRM, quoting, inventory, and admin workflows into clearer internal systems.',
        'Built the sprinkler planning workflow that made roofline and eave layouts faster and easier to revise.',
        'Reduced manual coordination while making field execution more precise.',
      ],
      stack: ['Supabase', 'Mapbox', 'HTML', 'CSS', 'JavaScript', 'Vite', 'Netlify'],
      media: {
        src: internalToolImage,
        alt: 'Trident operations and sprinkler planning tool screenshot',
        variant: 'landscape',
        minimalCaption: true,
        note: 'Planning, customer tracking, and install preparation in one workflow.',
      },
    },
  ],
  education: [
    {
      school: 'University of California, Los Angeles',
      degree: 'B.S. in Statistics & Data Science',
      period: 'Sep 2024 - Jun 2026',
      location: 'Los Angeles',
      notes: [
        'Graduating in June 2026.',
        'Current emphasis on statistics, applied modeling, and building systems that hold up in the real world.',
        'Most interested in mission-driven product, operations, and data work with a strong human component.',
        'Targeting roles where I can help build tools and systems that are genuinely useful.',
      ],
    },
    {
      school: 'Santa Barbara City College',
      degree: 'Associate Degrees in Mathematics and Computer Science',
      period: 'Aug 2022 - May 2024',
      location: 'Santa Barbara',
      notes: [
        'Graduated with a 3.98 GPA.',
        "Earned President's Honor Roll recognition.",
        'Built the quantitative and programming foundation for later work in data and operations.',
      ],
    },
  ],
  personal: {
    summary:
      'Outside of school and startup work, I spend a lot of time surfing, playing volleyball and soccer, playing guitar, practicing yoga and meditation, and hanging out with my dog Toby. That part of my life is not separate from my ambition. It has a lot to do with the kind of work I want to do and the kind of person I want to be.',
    featuredImage: {
      src: lifestyleImage,
      alt: 'Cole Richards lifestyle photo outdoors',
      variant: 'portrait',
      tag: 'Outside work',
      label: 'A life that stays close to the outdoors',
      note: 'How I live has a lot to do with the kind of work I want to keep doing.',
    },
    interests: [
      { title: 'Surfing' },
      { title: 'Outdoors' },
      { title: 'Sports' },
      { title: 'Music and practice' },
    ],
  },
  contact: {
    primaryEmail: 'milescoler@gmail.com',
    tridentEmail: 'cole@tridentemberdefense.com',
    linkedinUrl: 'https://www.linkedin.com/in/milescoler/',
    githubUrl: 'https://github.com/milescoler',
    resumeUrl: '/Cole_Richards_Resume.pdf',
    statement:
      "I'm looking for entry-level data analyst or data science roles starting June 2026, with part-time work (10–20 hrs/week) available now. Especially interested in health, human behavior, and physical-science data work at companies doing something thoughtful and grounded in the real world. Based in Santa Monica through summer, relocating to San Diego in August — open to LA, remote, or San Diego roles.",
  },
};
