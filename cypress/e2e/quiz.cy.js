describe('Start Quiz', () => {
  context('Quiz Setup', () => {
    beforeEach(() => {
      // Stub the API request for starting the game
      cy.intercept('GET', '/api/questions/random', {
        statusCode: 200,
        body: [
          {
            question: "Is this a question?",
            answers: [
              { text: "No", isCorrect: true },
              { text: "Yes", isCorrect: false }
            ]
          },
          {
            question: "Is this the second question?",
            answers: [
              { text: "No", isCorrect: true },
              { text: "Yes", isCorrect: false }
            ]
          }
        ]
      }).as('getRandomQuestion');

      // Visit the game page
      cy.visit('/');
    });

    it('should render the start button initially', () => {
   
      cy.get('div.text-center').find('button.btn-primary').contains('Start Quiz').should('be.visible');
   
    });

    // if (!quizStarted) {
    //   return (
    //     <div className="p-4 text-center">
    //       <button className="btn btn-primary d-inline-block mx-auto" onClick={handleStartQuiz}>
    //         Start Quiz
    //       </button>
    //     </div>
    //   );
    // }

    it('should start the quiz when the start button is clicked', () => {
    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getRandomQuestion');
    cy.get('.card').should('be.visible');
    });

    it('should display the quiz completed message when the quiz is completed', () => {
      cy.get('button').contains('Start Quiz').click();
      cy.wait('@getRandomQuestion');

      // Simulate answering all questions
      cy.get('button').contains('1').click();
      cy.get('button').contains('2').click();

      cy.get('h2').contains('Quiz Completed').should('be.visible');
    });
  });
});