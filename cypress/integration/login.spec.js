describe("Login", function() {

  it('Login with valid credential', function () {

    cy.visit('/')

    cy.intercept('POST', 'invexp/investorexperience-unauth/auth/login?')
      .as('userLogin')

    cy.login('testnew@test.com', 'Test1234!')

    cy.wait('@userLogin')
      .then((interception) => {

        cy.url()
          .should('include', '/invexp/properties/all')

        window.localStorage.setItem('userUuid', interception.response.body.userUuid)
        expect(interception.response.body.userEmail).to.eq('testnew@test.com')
        expect(interception.response.statusCode).to.eq(200)
      })
  })
})
