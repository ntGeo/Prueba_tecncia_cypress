describe('Prueba técnica', () => {
    it('Ingreso a página', () => {
        cy.visit('https://www.demoblaze.com/index.html');
    });

    it('Flujo de compra', () => {
        // Selecciona y agrega a carro el primer producto de la categoría telefono
        cy.contains('Phones').click()
        cy.wait(3000)
        cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click()
        cy.get('.col-sm-12 > .btn').click()
        
        //Valido si telefono seleccionado esta en carro
        cy.get('.name').invoke('text').then((txt1) => {
            cy.get('#cartur').click()
            cy.contains(txt1)
        })

        // Selecciona y agrega a carro el primer producto de la categoría laptop
        cy.get('.active > .nav-link').click()
        cy.contains('Laptops').click()
        cy.wait(3000)
        cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click()
        cy.get('.col-sm-12 > .btn').click()

        //Valido si laptop seleccionado esta en carro
        cy.get('.name').invoke('text').then((txt1) => {
            cy.get('#cartur').click()
            cy.contains(txt1)
        })

        // Selecciona y agrega a carro el primer producto de la categoría Monitor
        cy.get('.active > .nav-link').click()
        cy.contains('Monitors').click()
        cy.wait(3000)
        cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click()
        cy.get('.col-sm-12 > .btn').click()

        //Valido si monitor seleccionado esta en carro
        cy.get('.name').invoke('text').then((txt1) => {
            cy.get('#cartur').click()
            cy.contains(txt1)
        })

        // Se muestra carro de compra
        cy.get('.col-lg-1 > .btn').click()
        //Completa formulrario
        cy.wait(2000)
        cy.get('#name').type('Geovanni Atavales')
        cy.get('#country').type('Chile')
        cy.get('#city').type('Santiago')
        //defino número de tarjeta como constante
        const card = '124578' 
        cy.get('#card').type(card)
        cy.get('#month').type('10')
        cy.get('#year').type('29')

        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

        cy.get('.lead')
        cy.contains(card)
    });
});