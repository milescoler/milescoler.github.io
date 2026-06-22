import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';

const nav = [{ label: 'Work', href: '#work' }, { label: 'Contact', href: '#contact' }];

describe('Header', () => {
  it('renders the name and nav links', () => {
    render(<Header name="Cole Richards" nav={nav} resumeUrl="/Cole_Richards_Resume.pdf" />);
    expect(screen.getByText('Cole Richards')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Work' })).toHaveAttribute('href', '#work');
  });

  it('links the résumé', () => {
    render(<Header name="Cole Richards" nav={nav} resumeUrl="/Cole_Richards_Resume.pdf" />);
    const resume = screen.getAllByRole('link', { name: /résumé/i })[0];
    expect(resume).toHaveAttribute('href', '/Cole_Richards_Resume.pdf');
  });
});
