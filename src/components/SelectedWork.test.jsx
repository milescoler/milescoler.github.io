import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SelectedWork from './SelectedWork';

const work = [
  { title: 'CA Wildfire Risk Model', stack: ['Python'], blurb: 'b', arcTag: 'Analysis', domainTag: 'Physical world', inProgress: true },
  { title: 'EmberCast', stack: ['Swift'], blurb: 'b2', arcTag: 'Software', domainTag: 'Software product', inProgress: false },
];
const github = { note: 'More on GitHub', url: 'https://github.com/milescoler', repos: [{ label: 'antonelli-vs-russell', url: 'https://x' }] };

describe('SelectedWork', () => {
  it('renders each work item with stack and tags', () => {
    render(<SelectedWork work={work} github={github} />);
    expect(screen.getByText('CA Wildfire Risk Model')).toBeInTheDocument();
    expect(screen.getByText('EmberCast')).toBeInTheDocument();
    expect(screen.getByText('Physical world')).toBeInTheDocument();
  });

  it('marks in-progress items', () => {
    render(<SelectedWork work={work} github={github} />);
    expect(screen.getByText(/in progress/i)).toBeInTheDocument();
  });

  it('renders the GitHub line', () => {
    render(<SelectedWork work={work} github={github} />);
    expect(screen.getByRole('link', { name: /antonelli-vs-russell/i })).toHaveAttribute('href', 'https://x');
  });
});
