import { describe, it, expect } from 'vitest';
import { personalData as d } from './personalData';

describe('personalData shape', () => {
  it('uses the display name Cole Richards', () => {
    expect(d.name).toBe('Cole Richards');
  });

  it('has the exact hero headline and kicker', () => {
    expect(d.hero.headline).toBe('Hard problems, end to end.');
    expect(d.hero.kicker).toBe('Problem solver · Builder · Applied data scientist');
  });

  it('has exactly 4 proof stats and 4 arc stages and 4 flagship stages', () => {
    expect(d.proof).toHaveLength(4);
    expect(d.arc.stages).toHaveLength(4);
    expect(d.flagship.stages).toHaveLength(4);
  });

  it('arc stages are Question, Analysis, Software, Field in order', () => {
    expect(d.arc.stages.map((s) => s.label)).toEqual([
      'Question', 'Analysis', 'Software', 'Field',
    ]);
  });

  it('has at least 4 selected-work items', () => {
    expect(d.work.length).toBeGreaterThanOrEqual(4);
  });

  it('serves exactly one résumé at /Cole_Richards_Resume.pdf', () => {
    expect(d.contact.resumeUrl).toBe('/Cole_Richards_Resume.pdf');
  });

  it('contains no service-track remnants', () => {
    const blob = JSON.stringify(d);
    for (const banned of ['Tillys', 'GlenAnnie', 'service résumé', 'Service Resume', 'serviceResumeUrl']) {
      expect(blob).not.toContain(banned);
    }
    expect(d).not.toHaveProperty('now');
    expect(d).not.toHaveProperty('secondaryWork');
  });

  it('never claims Cole built the Trident software alone', () => {
    const software = d.flagship.stages.find((s) => s.stage === 'Software');
    expect(software.body.toLowerCase()).toContain('most of');
  });
});
