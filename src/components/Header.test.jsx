import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  it('résumé link has download attribute', () => {
    render(<Header name="Cole Richards" nav={nav} resumeUrl="/Cole_Richards_Resume.pdf" />);
    const resume = screen.getAllByRole('link', { name: /résumé/i })[0];
    expect(resume).toHaveAttribute('download');
  });

  it('toggles the mobile menu open and closed', async () => {
    const user = userEvent.setup();
    const { container } = render(<Header name="Cole Richards" nav={nav} resumeUrl="/Cole_Richards_Resume.pdf" />);
    const navEl = container.querySelector('nav');
    const toggle = screen.getByRole('button', { name: /toggle menu/i });
    expect(navEl.className).not.toContain('nav--open');
    await user.click(toggle);
    expect(navEl.className).toContain('nav--open');
    await user.click(toggle);
    expect(navEl.className).not.toContain('nav--open');
  });
});
