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
    title: 'I want to build work that moves people and makes the world better.',
    backgroundImage: {
      src: lifestyleImage,
      alt: 'Cole Richards outdoors in California',
    },
    lede:
      'The recent work happens to be in wildfire, mapping, and field operations. The deeper motivation is bigger than any one domain.',
    body:
      'I care most about the outdoors, the people I share it with, and building things that inspire positive change. Surfing, volleyball, soccer, music, and time outside shape how I think. What I want long term is to build useful systems, strong teams, and real-world products that help create a more beautiful future for our families and for the world we leave behind.',
  },
  profile: {
    intro:
      'The site should frame me as technical, grounded, and capable of turning ideas into operating systems, not just prototypes.',
    headshot: {
      src: headshotImage,
      alt: 'Cole Richards headshot',
      variant: 'headshot',
      tag: '',
      label: 'Cole Richards',
      note: 'UCLA Statistics & Data Science student, founder, and engineer.',
    },
    paragraphs: [
      'I transferred to UCLA after earning associate degrees in Mathematics and Computer Science at Santa Barbara City College. That path gave me a strong quantitative base, but the part I care about most is building things that matter in real life, not just in theory.',
      'A lot of my recent work has been in wildfire, mapping, weather, and other outdoor systems. That is part of the story, but it is not the whole story. What drives me most is a love for the outdoors, sports, music, and the kind of work that brings energy, beauty, and meaning into people’s lives.',
      'At Trident Ember Defense, that has meant building software, planning systems, and field operations that protect what matters. Long term, I want to keep growing as a builder and operator whose work inspires people, creates positive change, and helps shape a better future for our communities and families.',
    ],
    facts: [
      { label: 'Current role', value: 'Founder and COO, Trident Ember Defense' },
      { label: 'Degree', value: 'B.S. in Statistics & Data Science, UCLA' },
      { label: 'Expected graduation', value: 'June 2026' },
      { label: 'Primary interest', value: 'Mission-driven systems, products, and applied data science' },
    ],
  },
  focusAreas: [
    {
      icon: 'flame',
      title: 'Real-world impact',
      description:
        'I want to build work that improves people’s lives in tangible ways and pushes others to create positive change too.',
    },
    {
      icon: 'map',
      title: 'Dynamic systems',
      description:
        'I am drawn to systems that are physical, fast-moving, and difficult to predict, especially when better decisions matter.',
    },
    {
      icon: 'tools',
      title: 'Outdoors and sport',
      description:
        'The outdoors, surfing, volleyball, soccer, and music are not side interests for me. They shape the kind of products, communities, and energy I want to build around.',
    },
    {
      icon: 'shield',
      title: 'Operational execution',
      description:
        'I like building the tools, systems, and workflows that help a team move from ideas into action.',
    },
  ],
  metrics: [
    {
      value: '10+',
      label: 'Internal tools deployed',
      detail: 'Built for operations, quoting, mapping, inventory, and admin workflows.',
    },
    {
      value: 'Hundreds',
      label: 'Hours of planning saved',
      detail: 'Cut down hand-drawn mapping and repetitive business-admin work.',
    },
    {
      value: '8-person',
      label: 'Crew led in the field',
      detail: 'Coordinated installers and communicated plans on active job sites.',
    },
    {
      value: '3 properties',
      label: 'Completed installs so far',
      detail: 'With site visits on 10 properties and dozens of system designs underway.',
    },
  ],
  work: [
    {
      role: 'Founder and COO',
      company: 'Trident Ember Defense',
      period: '2024 - Present',
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
        'Reflects my interest in building products that translate complexity into something useful, intuitive, and motivating for real people.',
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
        'Targeting roles where I can help build tools, teams, and experiences that create meaningful positive change.',
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
      'Outside of school and startup work, I spend a lot of time surfing, playing volleyball and soccer, playing guitar, practicing yoga and meditation, and hanging out with my dog Toby. That part of my life is not separate from my ambition. It is where a lot of it comes from. I want to build a life and a body of work that helps people feel more connected, more inspired, and more invested in making the world better.',
    featuredImage: {
      src: lifestyleImage,
      alt: 'Cole Richards lifestyle photo outdoors',
      variant: 'portrait',
      tag: 'Outside work',
      label: 'A life that stays close to the outdoors',
      note: 'The kind of future I want to help build starts with how I choose to live now.',
    },
    interests: [
      { icon: 'wave', title: 'Surfing', detail: 'A real part of how I reset and think.' },
      { icon: 'mountain', title: 'Outdoors', detail: 'Ocean time, hiking, and staying close to California landscapes.' },
      { icon: 'grid', title: 'Sports', detail: 'Volleyball, soccer, and the energy of team environments.' },
      { icon: 'school', title: 'Music and practice', detail: 'Guitar, yoga, meditation, and a 2022 ashram work-study in Hawaii.' },
    ],
    mediaPlaceholders: [
      {
        tag: 'Placeholder',
        label: 'Surf or beach image',
        note: 'Use a candid image that feels personal, not staged.',
      },
      {
        tag: 'Placeholder',
        label: 'Volleyball or UCLA life',
        note: 'Coach/player energy belongs here.',
      },
      {
        tag: 'Placeholder',
        label: 'Toby or hiking photo',
        note: 'This helps keep the site human and memorable.',
      },
    ],
  },
  contact: {
    primaryEmail: 'milescoler@gmail.com',
    tridentEmail: 'cole@tridentemberdefense.com',
    linkedinUrl: 'https://www.linkedin.com/in/milescoler/',
    githubUrl: 'https://github.com/milescoler',
    resumeUrl: '/Cole-Richards-Resume.pdf',
    statement:
      'I am looking for work where I can keep growing as a builder, operator, and data scientist while helping create a world that is healthier, more inspiring, and more worth inheriting.',
  },
};
