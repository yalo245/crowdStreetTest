import LoginPage from "../pages/LoginPage";

const loginPage = new LoginPage();

Cypress.Commands.add("clickRecaptcha", () => {
  cy.window().then(win => {
    win.document
      .querySelector("iframe[src*='recaptcha']")
      .contentDocument.getElementById("recaptcha-token")
      .click();
  });
});

Cypress.Commands.add('login', (email, password) => {
  loginPage.open()
  loginPage.emailUser().type(email);
  loginPage.passwordUser().type(password);
  loginPage.enterYourLogin().click();
})
