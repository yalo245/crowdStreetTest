import CreateAnAccountPage from "../pages/CreateAnAccountPage";
import CrowdStreetAllPage from "../pages/CrowdStreetAllPage";

const createAnAccountPage = new CreateAnAccountPage();
const crowdStreetAllPage = new CrowdStreetAllPage();

import { faker } from '@faker-js/faker';

describe('User registration', () => {
  it('should verify that user can register, then login and logout', () => {
    const testUser = {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      password: 'Aa123123!',
    };

    // Registration
    createAnAccountPage.open()
    createAnAccountPage.createAnAccount(testUser)
    createAnAccountPage.userName().should('be.visible', `Hi ${testUser.firstname}`)

    //Log out
    crowdStreetAllPage.logOutButton().click()
    createAnAccountPage.createAccount().should('be.visible')

    //login
    cy.login(testUser.email, testUser.password)
  })
})
