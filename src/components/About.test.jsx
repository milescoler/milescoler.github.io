import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from './About';

const about = {
  paragraphs: ['p one', 'p two'],
  facts: [{ label: 'Degree', value: 'B.S. Statistics & Data Science, UCLA' }],
  headshot: { src: '/h.png', alt: 'Cole Richards', caption: 'Cole Richards' },
  personal: { line: 'where the patience comes from', interests: ['Surfing', 'Guitar'] },
};

describe('About', () => {
  it('renders paragraphs, facts, headshot, and interests', () => {
    render(<About about={about} />);
    expect(screen.getByText('p one')).toBeInTheDocument();
    expect(screen.getByText('B.S. Statistics & Data Science, UCLA')).toBeInTheDocument();
    expect(screen.getByAltText('Cole Richards')).toBeInTheDocument();
    expect(screen.getByText('Surfing')).toBeInTheDocument();
  });
});
