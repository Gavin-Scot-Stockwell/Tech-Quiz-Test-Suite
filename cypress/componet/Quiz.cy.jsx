import Quiz from '../../client/src/components/Quiz';
import { mount } from '@cypress/react';
import '@testing-library/cypress/add-commands';
import { question } from '../fixtures/question.json';

describe('<Quiz />', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/questions/random', {
      statusCode: 200,
    }).as('getRandomQuestion');
  });

  it('should render the start button initially', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').should('be.visible');
  });

  it('should start the quiz when the start button is clicked', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getRandomQuestion');
    cy.get('.card').should('be.visible');
  });

  it('should display the quiz completed message when the quiz is completed', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getRandomQuestion');

    // Simulate answering all questions
    question.forEach((_, index) => {
      cy.get('button').contains(index + 1).click();
    });

    cy.get('h2').contains('Quiz Completed').should('be.visible');
  });

  it('should display the score when the quiz is completed', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getRandomQuestion');

    // Simulate answering all questions
    question.forEach((_, index) => {
      cy.get('button').contains(index + 1).click();
    });

    cy.get('.alert-success').should('contain.text', `Your score:`);
  });

  it('should allow taking a new quiz after completion', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getRandomQuestion');

    // Simulate answering all questions
    question.forEach((_, index) => {
      cy.get('button').contains(index + 1).click();
    });

    cy.get('button').contains('Take New Quiz').click();
    cy.get('button').contains('Start Quiz').should('be.visible');
  });
});