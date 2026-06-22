import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Flagship from './Flagship';

const flagship = {
  eyebrow: 'Flagship · Co-Founder & COO · Aug 2025 – Present',
  company: 'Trident Ember Defense',
  link: 'https://tridentemberdefense.com',
  problem: 'Wet homes don\'t burn.',
  stages: [
    { stage: 'Question', body: 'q' },
    { stage: 'Analysis', body: 'a' },
    { stage: 'Software', body: 'wrote most of the stack' },
    { stage: 'Field', body: 'f' },
  ],
  outcomes: '$20K+ early revenue · 3 system installs',
  media: [{ src: '/m.gif', alt: 'map', caption: 'map' }],
};

describe('Flagship', () => {
  it('renders company, problem, four stages, outcomes, and link', () => {
    render(<Flagship flagship={flagship} />);
    expect(screen.getByText('Trident Ember Defense')).toBeInTheDocument();
    expect(screen.getByText(flagship.problem)).toBeInTheDocument();
    for (const s of ['Question', 'Analysis', 'Software', 'Field']) {
      expect(screen.getByText(s)).toBeInTheDocument();
    }
    expect(screen.getByText(flagship.outcomes)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /tridentemberdefense/i })).toHaveAttribute('href', flagship.link);
  });
});
