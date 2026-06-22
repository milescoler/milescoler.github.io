import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SectionLabel, Stat, Plate } from './primitives';

describe('primitives', () => {
  it('SectionLabel renders eyebrow and heading', () => {
    render(<SectionLabel eyebrow="Work" title="Selected work" />);
    expect(screen.getByText('Work')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Selected work' })).toBeInTheDocument();
  });

  it('Stat renders value and label', () => {
    render(<Stat value="$20K+" label="early revenue" />);
    expect(screen.getByText('$20K+')).toBeInTheDocument();
    expect(screen.getByText('early revenue')).toBeInTheDocument();
  });

  it('Plate renders an image with alt and a caption', () => {
    render(<Plate src="/x.png" alt="a map" caption="a caption" />);
    expect(screen.getByAltText('a map')).toBeInTheDocument();
    expect(screen.getByText('a caption')).toBeInTheDocument();
  });
});
