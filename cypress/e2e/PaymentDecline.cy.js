describe('Payment Regression', () => {
  it('DeclineCard', () => {
    cy.visit('https://www.amaysim.com.au/')
    cy.get('a[aria-label="Amaysim"]').should('be.visible')
    cy.get('a.plan-table-heading-link').click()


    //Selecting Plan
    cy.url().should('eq', 'https://www.amaysim.com.au/sim-plans') 
    cy.get('a[href="/mobile/cart/7-day-10gb"]').click()

    //Plan Details
    cy.url().should('eq', 'https://www.amaysim.com.au/mobile/cart/7-day-10gb') 
    cy.get('h4#product-header-price-desktop').contains('$10/7 days');
    cy.get('label.css-14b8rqd').click()
    cy.get('span.css-1tisfka').click()

    //Personal Details
    cy.url().should('eq', 'https://www.amaysim.com.au/mobile/your-details') 
    cy.get('input[name="firstName"]').type("Test")
    cy.get('input[name="lastName"]').type("Test")
    cy.get('input[name="dateOfBirth"]').type("02031990")
    cy.get('input[name="email"]').type("ad@amaysim.com")
    cy.get('input[name="password"]').type("Password")
    cy.get('input[name="contactNumber"]').type("0412345678")
    cy.get('input.react-autosuggest__input').type('Level 6, 17-19 Bridge St, SYDNEY NSW 2000').wait(3000).type('{enter}')
    cy.get('input[type="checkbox"]').check({ force: true })
    cy.get('button[value="continue"]').click()
    
    
    cy.wait(3000)
   
//credit card details
    cy.frameLoaded('iframe[title="Secure card number input frame"]')
    cy.iframe('iframe[title="Secure card number input frame"]')
    .find('[name="cardnumber"]').click().type("4242424242424242")
    cy.frameLoaded('iframe[title="Secure expiration date input frame"]')
    cy.iframe('iframe[title="Secure expiration date input frame"]')
    .find('[name="exp-date"]').click().type("0127")
    cy.frameLoaded('iframe[title="Secure expiration date input frame"]')
    cy.iframe('iframe[title="Secure CVC input frame"]')
    .find('[name="cvc"]').click().type("123")
    cy.get('input[type="checkbox"]').check({ force: true })
    cy.get('a.css-1957xzp').click()
    cy.get('div.css-cqbrkr').contains("Credit Card payment failed")



    
      

    


    

  })
})
