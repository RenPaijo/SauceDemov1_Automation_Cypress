/// <reference types="cypress" />

import { Locator } from "./locator.cy"

const locator = new Locator();

export class Method{

    loginValid(){
        cy.get(locator.username).click().type('standard_user');
        cy.get(locator.pass).click().type('secret_sauce');
    }

    checkLoginValid(){
        cy.get(locator.username).should('have.value', 'standard_user');
        cy.get(locator.pass).should('have.value', 'secret_sauce');
    }

    clickBtn(){
        cy.get(locator.lgBtn).click();
    }

    verifDashboard(){
        cy.get(locator.appLogoDash).should('be.exist');
    }

    loginInvalid1(){
        cy.get(locator.username).clear();
        cy.get(locator.pass).type('secret_sauce');
    }

    checkLoginInvalid1(){
        cy.get(locator.username).should('have.value', '');
        cy.get(locator.pass).should('have.value', 'secret_sauce');
    }

    errorUser1(){
        cy.get(locator.h3).should('be.exist').contains('Username is required');
    }

    loginInvalid2(){
        cy.get(locator.username).type('standard_user');
        cy.get(locator.pass).clear();
    }

    checkLoginInvalid2(){
        cy.get(locator.username).should('have.value', 'standard_user');
        cy.get(locator.pass).should('have.value', '');
    }

    errorUser2(){
        cy.get(locator.h3).should('be.exist').contains('Password is required')
    }

}