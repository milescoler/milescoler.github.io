import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the hero headline and all major sections', () => {
    const { container } = render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Hard problems, end to end.');
    for (const id of ['approach', 'flagship', 'work', 'experience', 'about', 'contact']) {
      expect(container.querySelector(`#${id}`)).toBeTruthy();
    }
  });

  it('has no service-track remnants in the DOM', () => {
    const { container } = render(<App />);
    const text = container.textContent;
    for (const banned of ['Tillys', 'GlenAnnie', 'service resume', 'Service Resume']) {
      expect(text).not.toContain(banned);
    }
  });
});
