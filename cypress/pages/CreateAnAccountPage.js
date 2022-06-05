import BasePage from '../pages/BasePage';

export default class CreateAnAccountPage  extends BasePage {

  createAccount = () => cy.contains('Create An Account')
  firstName = () => cy.get('[data-testid="firstName"]')
  lastName = () => cy.get('[data-testid="lastName"]')
  emailField = () => cy.get('[data-testid="email"]')
  password = () => cy.get('[data-testid="password"]')
  confirmPassword = () => cy.get('[data-testid="confirm-password"]')
  checkbox = () => cy.get('[data-testid="hasAgreedTos"]')
  createButton = () => cy.get('[data-testid="submit-button"]')
  userName = () => cy.get('.top-menu').find('.head-link')

  radioButtonsCheck() {
    cy.get('[data-testid="accreditedRadioGroup"]').find('[type="radio"]').then(radioButtons => {
      cy.wrap(radioButtons)
        .first()
        .check({force: true})
        .should('be.checked')
      cy.wrap(radioButtons)
        .eq(1)
        .check({force: true})
      cy.wrap(radioButtons)
        .first()
        .should('not.be.checked')
    })
  }


  createAnAccount({firstname, lastname, email, password}) {
    this.firstName().type(firstname)
    this.lastName().type(lastname)
    this.emailField().type(email)
    this.password().type(password)
    this.confirmPassword().type(password)
    this.radioButtonsCheck()
    this.checkbox().check({force: true})
    cy.wait(500)
    cy.clickRecaptcha()
    this.createButton().click()
  }

  open() {
    super.open('invexp/accounts/create-account');
  }
}