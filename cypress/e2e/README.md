
# Amaysim Automation Exercise

This project is for the automation exercises of Amaysim. 




## Description
This is to test the purchase of a 7-day mobile plan, where failed 
credit card payments don’t sometimes register as a failure. 
## Getting Started

Dependencies

* Windows 11
* Cypress 12.17.3 is installed
* Google Chrome - Version 115.0.5790.171 is installed
* Edge - Version 115.0.1901.200 is installed
* iFrame Plugin for Cypress is installed. See https://www.npmjs.com/package/cypress-iframe for the instructions. 
* 


## Installing

* In the command.js file makes sure this command is added: 

    import 'cypress-iframe';

* Download the file folders at https://github.com/adrianepoldo/cypressautomation 


## Executing the Program

* Open command line from the the project folder
* Use this command to run: 

    npx cypress run --spec "cypress/e2e/PaymentDecline.cy.js"
## Authors

- [@adrianepoldo](https://github.com/adrianepoldo)


## Version History

* 0.1 Initial Release

