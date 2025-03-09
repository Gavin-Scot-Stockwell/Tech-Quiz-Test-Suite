describe('Quiz question', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');
    });
  
    it('should display the title text on the screen', () => {
      cy.visit('http://localhost:3000/');
      cy.findByRole('heading', { name: 'Tech Thoughts' }).should('be.visible');
    });
  
    it('should not display any content in the thought submission form', () => {
      cy.get('form').findByPlaceholderText('Here\'s a new thought...').should('be.visible');
      cy.get('form div textarea').should('be.empty');
    });
  });
  