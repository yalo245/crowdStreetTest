import BasePage from '../pages/BasePage';

export default class LoginPage  extends BasePage {
  emailUser = () => cy.get('#email')
  passwordUser = () => cy.get('#password')
  enterYourLogin =() => cy.get('#btn_login')


  open() {
    super.open('invexp/accounts/login/');
  }
}