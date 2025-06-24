import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, it, expect } from 'vitest';

describe('App', () => {
  it('visar att Sass fungerar', () => {
    render(<App />);
    expect(screen.getByText('Sass fungerar!')).toBeInTheDocument();
  });
}); 