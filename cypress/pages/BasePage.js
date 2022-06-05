export default class BasePage {
  
  open(path) {
    cy.visit(path);
  }
}