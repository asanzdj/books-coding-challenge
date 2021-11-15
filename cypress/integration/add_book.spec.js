describe('Creates a new book', () => {
  it('navigates into new book page', () => {
    cy.visit('/')
    cy.get('[data-cy="add-book"]').click()
    cy.location('pathname').should('match', /\/books\/new$/)
    cy.contains('h1', 'Add a new book').should('be.visible')
  })

  it('get fields error when empty fields', () => {
    cy.visit('/')
    cy.get('[data-cy="add-book"]').click()
    cy.get('[data-cy="submit-create"]').click()
    cy.get('[data-cy="text-field-error"]')
      .should('contain.text', 'Is required')
      .should('have.length', 2)
    cy.get('[data-cy="text-area-error"]')
      .should('contain.text', 'Is required')
      .should('have.length', 1)
  })

  it('creates the book', () => {
    cy.visit('/')
    cy.get('[data-cy="add-book"]').click()

    cy.fixture('new_book').then((book) => {
      cy.get('input[name="title"]').type(book.title)
      cy.get('input[name="author"]').type(book.author)
      cy.get('textarea[name="summary"]').type(book.summary)
      cy.get('[data-cy="score-star"]').eq(book.stars - 1).click()
    })
    cy.get('[data-cy="submit-create"]').click()

    cy.location('pathname').should('match', /\//)

    cy.fixture('new_book').then((book) => {
      cy.contains('p', book.title).should('be.visible')
    })
  })
})
