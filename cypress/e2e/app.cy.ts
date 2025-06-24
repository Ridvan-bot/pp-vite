import { describe, it } from 'vitest';
import { cy } from 'cypress';
describe('App', () => {
  it('visar att Sass fungerar', () => {
    cy.visit('/');
    cy.contains('Sass fungerar!').should('be.visible');
  });
}); 