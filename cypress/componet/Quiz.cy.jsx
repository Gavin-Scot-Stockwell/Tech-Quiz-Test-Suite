import React from 'react'
import Quiz from '../../client/src/components/Quiz'


describe('<Quiz />', () => {
    it('should render the ThoughtList component', () => {
      // see: https://on.cypress.io/mounting-react
        cy.mount(<Quiz />)
        
    });

  });

//   describe('<ThoughtList />', () => {
//     it('should render the ThoughtList component', () => {
//       // see: https://on.cypress.io/mounting-react
//       cy.mount(<ThoughtList 
//         thoughts={thoughts} 
//         title="Some Feed for Thought(s)..." />)
//     });
  
//     it('should render the ThoughtList component with the proper content', () => { 
//       cy.mount(<ThoughtList 
//         thoughts={thoughts} 
//         title="Some Feed for Thought(s)..." />)
//       cy.get('h3').should('have.text', 'Some Feed for Thought(s)...')
//       cy.get('.card').should('have.length', 2)
//       cy.get('.card').first().within(() => {
//         cy.get('h4').should('have.text', 'lernantino had this thought on 2023-10-07T15:22:12Z')
//         cy.get('p').should('have.text', 'I love learning about testing')
//       })
//       cy.get('.card').eq(1).within(() => {
//         cy.get('h4').should('have.text', 'gamonrarza had this thought on 2024-01-04T18:32:09Z')
//         cy.get('p').should('have.text', 'This is the coolest thing ever')
//       });
//     });
//   });
  