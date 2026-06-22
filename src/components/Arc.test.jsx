import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Arc from './Arc';

const arc = {
  intro: 'Most people own one slice of this. I work the whole line.',
  stages: [
    { n: '01', label: 'Question', body: 'q' },
    { n: '02', label: 'Analysis', body: 'a' },
    { n: '03', label: 'Software', body: 's' },
    { n: '04', label: 'Field', body: 'f' },
  ],
};

describe('Arc', () => {
  it('renders the intro and all four stage labels', () => {
    render(<Arc arc={arc} />);
    expect(screen.getByText(arc.intro)).toBeInTheDocument();
    for (const label of ['Question', 'Analysis', 'Software', 'Field']) {
      expect(screen.getByText(label)).toBeInTheDocument();
    }
  });
});
