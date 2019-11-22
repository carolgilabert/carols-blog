context('Navigation', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should navigate to about', () => {
        cy.get('a[href="/about"]').click();
        cy.get('h1').should('have.text', 'About me');
        cy.location().should(location => {
            expect(location.pathname).to.eq('/about');
        });
    });
    it('should navigate to blog', () => {
        cy.get('a[href="/blog"]').click();
        cy.get('h1').should('have.text', 'Blog');
        cy.location().should(location => {
            expect(location.pathname).to.eq('/blog');
        });
    });
    it('should start at home', () => {
        cy.get('h1').should('have.text', `Hi! I'm Carol`);
        cy.location().should(location => {
            expect(location.pathname).to.eq('/');
        });
    });
});
