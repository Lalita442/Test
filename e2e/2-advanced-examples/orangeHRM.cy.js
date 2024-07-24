/*login using class*/
///<reference types="cypress"/>
const resource = require('../../support/resource');
describe('OrangeHRMLogin',()=>{
    it.only('loginverification',()=>{
        cy.visit(resource.HRM_BASE_URL);
        cy.wait(3000);
        cy.screenshot("homepage");
        /*const ln=new Login();
        ln.setUserName("Admin")
        ln.setPassword("admin123")
        ln.clickSubmit();
        cy.wait(2000);
        cy.screenshot("Dashboard");
        ln.verifyLogin();*/
        cy.HRMlogin("Admin","admin123");    
    })
}) 

//login using fixture/pom//
/*import Login from "../2-advanced-examples/pageObjects/loginPage.cy"
describe('OrangeHRMLogin',()=>{
it.only('loginverification',()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.fixture('example').then((data)=>{
        const ln=new Login();
        ln.setUserName(data.username)
        ln.setPassword(data.password)
        ln.clickSubmit();
        ln.verifyLogin();
    })
})
})*/
