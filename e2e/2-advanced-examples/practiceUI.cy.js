///<reference types="cypress"/>
const resource = require('../../support/resource');
describe ("saucedemo ui application",()=>{
    it.only("Step1 Logininto Site",()=>{
        cy.visit("https://demo.applitools.com/");
        cy.screenshot("homepage");
        cy.wait(3000);
        cy.ACMElogin("standard_user","secret_sauce");      
        })
})