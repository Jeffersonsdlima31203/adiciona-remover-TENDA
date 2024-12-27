describe('Tenda - produtos', () => {
  it('boleto', () => {
    cy.visit('https://marketplace-alpha.tendaatacado.com.br/')
    cy.get('.ButtonClose > .svgIcon').click()
    cy.get('.disclaimer-container > [data-cy="btn-"]').click()
    cy.get('.text-hello').click()
    cy.get('#login').type('jeffersonsdlima@gmail.com')
    cy.get('#password').type('8H1EAiTrgy*')
    cy.get('.row_action_login > [data-cy="btn-"]').click()
    cy.wait(5000)
    cy.get('.hot-link-name').click()
    cy.wait(5000)

    cy.get(':nth-child(2) > .showcase-card-content > .menu-actions-icons > .ButtonBuyComponent > [data-cy="btn-"]').click()
    cy.wait(10000)

    cy.get('.LogoComponent > .svgIcon').click()
    cy.contains('button','Adicionar').click()
    cy.screenshot()

    cy.get('.icon-cart-ball > .svgIcon').click()

    //selecionar todos no carrinho
    cy.get('.bet-actions > label > input').click({force: true})
    cy.get('.icon-trash').click()
    cy.get('.modal-footer > .btn').click()
    cy.wait(2000)
    

   


   


  })
})
