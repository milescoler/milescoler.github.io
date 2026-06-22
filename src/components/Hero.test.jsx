import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

const hero = {
  kicker: 'Problem solver · Builder · Applied data scientist',
  credential: 'UCLA Statistics & Data Science',
  headline: 'Hard problems, end to end.',
  subline: 'I take problems end to end.',
};
const proof = [{ value: '$20K+', label: 'early revenue' }, { value: '3', label: 'system installs' }];
const contact = { email: 'a@b.com', linkedin: 'https://x', github: 'https://y', resumeUrl: '/r.pdf' };

describe('Hero', () => {
  it('renders the headline and kicker', () => {
    render(<Hero hero={hero} proof={proof} contact={contact} />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Hard problems, end to end.');
    expect(screen.getByText(hero.kicker)).toBeInTheDocument();
  });

  it('renders the proof stats', () => {
    render(<Hero hero={hero} proof={proof} contact={contact} />);
    expect(screen.getByText('$20K+')).toBeInTheDocument();
    expect(screen.getByText('system installs')).toBeInTheDocument();
  });

  it('renders an email action', () => {
    render(<Hero hero={hero} proof={proof} contact={contact} />);
    expect(screen.getByRole('link', { name: /email/i })).toHaveAttribute('href', 'mailto:a@b.com');
  });
});
