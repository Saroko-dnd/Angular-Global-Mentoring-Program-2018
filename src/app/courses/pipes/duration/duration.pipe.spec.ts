import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  const durationPipe = new DurationPipe();

  it('It should convert minutes in string (format hh h mm min)', () => {
    expect(durationPipe.transform(100)).toBe('1h 40min');
  });

  it('It should convert minutes in string (format mm min) if there is less than 60 minutes', () => {
    expect(durationPipe.transform(45)).toBe('45min');
  });
});
