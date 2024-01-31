import { StepLogin } from "../helper/step.cy";

const step = new StepLogin();

describe('Sauce Demo login', () => {
    beforeEach('website', () => {
        cy.viewport(1366, 768);
        cy.visit("https://www.saucedemo.com/v1/index.html");
    });

    it('login valid', () => {
        step.sauceDemo1();
    });

    it('login invalid 1 (No username)', () => {
        step.sauceDemo2();
    });

    it('login invalid 2 (No password)', () => {
        step.sauceDemo3();
    });
});