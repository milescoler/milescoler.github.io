import embercastImage from '../assets/cole/embercast.jpg';
import fieldImage from '../assets/cole/field.png';
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
    eyebrow: 'Student founder working at the intersection of data, GIS, and field operations',
    title: 'I build operational systems for real-world problems.',
    backgroundImage: {
      src: fieldImage,
      alt: 'Trident Ember Defense installation work in the field',
    },
    lede:
      'I am a UCLA Statistics & Data Science student graduating in June 2026, and I spend most of my time building tools, mapping risk, and making complex work more usable.',
    body:
      'Right now that means wildfire resilience, GIS analysis, startup operations, and hands-on execution through Trident Ember Defense. I care about work that improves how people live and helps protect the places we depend on.',
  },
  profile: {
    intro:
      'The site should frame me as technical, grounded, and capable of turning ideas into operating systems, not just prototypes.',
    headshot: {
      src: headshotImage,
      alt: 'Cole Richards headshot',
      variant: 'headshot',
      tag: 'Headshot',
      label: 'Cole Richards',
      note: 'UCLA Statistics & Data Science student, founder, and engineer.',
    },
    paragraphs: [
      'I transferred to UCLA after earning associate degrees in Mathematics and Computer Science at Santa Barbara City College. That path gave me a strong quantitative base, but what really drives me is using technical skill in environments that are messy, physical, and high stakes.',
      'At Trident Ember Defense, I have built the company’s CRM, quoting workflows, inventory tooling in Supabase, a 2D sprinkler-system mapping tool, and the public-facing website. I have also planned and run installations, designed systems, and used geospatial analysis to identify high-risk wildfire areas and the homes inside them.',
      'I want my work to sit at the point where data, communication, and execution meet. I care about building tools that solve hard problems, but I also care about the people around me and the future of the planet we share.',
    ],
    facts: [
      { label: 'Current role', value: 'Founder and COO, Trident Ember Defense' },
      { label: 'Degree', value: 'B.S. in Statistics & Data Science, UCLA' },
      { label: 'Expected graduation', value: 'June 2026' },
      { label: 'Working style', value: 'Structured, visual, detail-driven' },
    ],
  },
  focusAreas: [
    {
      icon: 'flame',
      title: 'Wildfire resilience',
      description:
        'I want to keep building in climate-adjacent spaces where the work has immediate stakes and a visible effect on communities.',
    },
    {
      icon: 'map',
      title: 'GIS and geospatial analysis',
      description:
        'I use mapping and geospatial tools to move from broad risk patterns to specific operational decisions and target areas.',
    },
    {
      icon: 'tools',
      title: 'Operational software',
      description:
        'I like building the internal systems that keep a team organized: quoting, inventory, CRM, admin tools, dashboards, and planning workflows.',
    },
    {
      icon: 'shield',
      title: 'Field execution',
      description:
        'I am comfortable in the physical side of the work too, leading installs, translating plans clearly, and solving problems under real constraints.',
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
        'I co-founded Trident Ember Defense to help protect homes in wildfire-prone areas. My role spans software, GIS targeting, operations, installation planning, and client-facing execution.',
      highlights: [
        'Built the CRM, quoting tool, inventory system, 2D sprinkler-mapping software, and internal admin tooling from scratch.',
        'Designed dozens of exterior wildfire sprinkler systems and helped save hundreds of planning hours through better digital workflows.',
        'Performed geospatial analysis to identify high-risk wildfire areas and support outreach to the homes that need protection most.',
        'Led a one-day installation on a 3,400-square-foot two-story home, coordinating an 8-person crew and translating weeks of planning into field execution.',
      ],
      tools: ['Supabase', 'Swift', 'HTML', 'CSS', 'JavaScript', 'Vite', 'Mapbox', 'Netlify', 'GIS'],
      link: 'https://tridentemberdefense.com',
    },
    {
      role: 'Inventory Specialist',
      company: 'UCLA Housing IT',
      period: 'Aug 2024 - Present',
      location: 'UCLA',
      summary:
        'I support technology operations across UCLA Housing and Hospitality and look for ways to make tracking and restocking more systematic.',
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
        'This was where I first learned that automation can change how a team works day to day. I built faster Excel-based workflows and trained the team to use them.',
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
      category: 'GIS + Risk Analysis',
      title: 'Wildfire Risk Targeting',
      description:
        'I use geospatial analysis to find the neighborhoods and properties where wildfire protection work is most urgent, then connect that analysis to practical outreach and installation planning.',
      points: [
        'Combines wildfire conditions, local risk patterns, and property-level targeting.',
        'Supports Trident’s partner conversations and helps focus effort where it can matter most.',
        'Represents the clearest bridge between my UCLA coursework and startup execution.',
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
      category: 'Mobile + Forecasting',
      title: 'EmberCast',
      description:
        'A mobile app concept and working tool for viewing wildfire conditions through dashboard and map views, designed for homeowners and firefighters who need usable information quickly.',
      points: [
        'Displays hourly, weekly, and historical condition views from public data sources.',
        'Includes a live wind-particle map and risk preview for spatial awareness.',
        'Pushes me toward the kind of GIS-informed product work I want to keep doing.',
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
        'Current emphasis on GIS, geospatial analysis, statistics, and applied data work.',
        'Targeting roles in climate tech, GIS, wildfire resilience, data science, research, and consulting.',
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
      'Outside of school and startup work, I want this site to show that I am energized by movement, nature, and community. Surfing, hiking, volleyball, yoga, meditation, guitar, and time with my dog Toby are all part of how I stay sharp and grounded.',
    featuredImage: {
      src: lifestyleImage,
      alt: 'Cole Richards lifestyle photo outdoors',
      variant: 'portrait',
      tag: 'Outside work',
      label: 'A life that stays close to the outdoors',
      note: 'The work matters, but so does where and how I live.',
    },
    interests: [
      { icon: 'wave', title: 'Surfing', detail: 'A real part of how I reset and think.' },
      { icon: 'mountain', title: 'Outdoors', detail: 'Hiking, ocean time, and staying close to California landscapes.' },
      { icon: 'grid', title: 'Volleyball', detail: 'Coaching UCLA women’s club volleyball and playing indoor and beach.' },
      { icon: 'school', title: 'Practice', detail: 'Yoga, meditation, guitar, and a 2022 ashram work-study in Hawaii.' },
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
      'I am looking for a place where I can have a strong impact on the well-being of other people or on the future of our planet, ideally while staying close to outdoor, real-world work.',
  },
};
