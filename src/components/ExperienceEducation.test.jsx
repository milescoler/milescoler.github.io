import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ExperienceEducation from './ExperienceEducation';

const experience = [{ role: 'Co-Founder & COO', company: 'Trident Ember Defense', period: 'Aug 2025 – Present', location: 'LA', note: 'n' }];
const education = [{ school: 'UCLA', degree: 'B.S. Statistics & Data Science', period: '2024–2026', detail: 'd' }];

describe('ExperienceEducation', () => {
  it('renders experience and education entries', () => {
    render(<ExperienceEducation experience={experience} education={education} />);
    expect(screen.getByText((content) => content.includes('Trident Ember Defense'))).toBeInTheDocument();
    expect(screen.getByText('UCLA')).toBeInTheDocument();
    expect(screen.getByText('B.S. Statistics & Data Science')).toBeInTheDocument();
  });
});
