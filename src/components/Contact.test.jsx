import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

const contact = {
  statement: 'Open to the right hard problems.',
  email: 'milescoler@gmail.com',
  tridentEmail: 'cole@tridentemberdefense.com',
  phone: '424-757-3084',
  linkedin: 'https://www.linkedin.com/in/milescoler/',
  github: 'https://github.com/milescoler',
  resumeUrl: '/Cole_Richards_Resume.pdf',
};

describe('Contact', () => {
  it('renders the statement and a mailto email link', () => {
    render(<Contact contact={contact} />);
    expect(screen.getByText(contact.statement)).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /milescoler@gmail.com/ })[0])
      .toHaveAttribute('href', 'mailto:milescoler@gmail.com');
  });

  it('links GitHub and résumé', () => {
    render(<Contact contact={contact} />);
    expect(screen.getByRole('link', { name: /github\.com\/milescoler/ })).toHaveAttribute('href', contact.github);
    expect(screen.getByRole('link', { name: /résumé/i })).toHaveAttribute('href', contact.resumeUrl);
  });

  it('builds a tel: href by stripping non-digits from the phone', () => {
    render(<Contact contact={contact} />);
    expect(screen.getByRole('link', { name: /424-757-3084/ })).toHaveAttribute('href', 'tel:4247573084');
  });
});
