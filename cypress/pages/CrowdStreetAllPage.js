import BasePage from '../pages/BasePage';

export default class CrowdStreetAllPage  extends BasePage {
logOutButton = () => cy.get('[data-react-toolbox="button"]').first()
singInButton = () => cy.get('[data-react-toolbox="button"]').contains('Sing In')

  open() {
    super.open('invexp/properties/all');
  }
}
