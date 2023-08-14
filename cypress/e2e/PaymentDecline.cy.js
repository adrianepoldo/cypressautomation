import homepage from "../PageObjects/homepage.js";
import plan from "../PageObjects/selectingPlan.js";
import cart from "../PageObjects/cart.js";
import Customer from "../PageObjects/CustomerDetails.js";
import cardDetails from "../PageObjects/cardDetails.js";


describe('Payment Regression', () => {
  it('DeclineCard', () => {

    
    cy.visit('https://www.amaysim.com.au/')
    
    //homepage
    const hm=new homepage();
    hm.verifyLogo()
    hm.clickShowMore()


    //Selecting Plan
    cy.url().should('eq', 'https://www.amaysim.com.au/sim-plans') 
    
    const pln=new plan();
    pln.click7days();


    //Cart
    cy.url().should('eq', 'https://www.amaysim.com.au/mobile/cart/7-day-10gb') 

    const crt=new cart();

    crt.verifyHeader();
    crt.clickNewNumTab();
    crt.selectPhySim();

    //Customer Details
    cy.url().should('eq', 'https://www.amaysim.com.au/mobile/your-details') 
    
    const cust=new Customer;
    cust.fillForm();

    
    cy.wait(3000)
   
//credit card details

const crd=new cardDetails;
    crd.fillStripeCard();
    

  })
})