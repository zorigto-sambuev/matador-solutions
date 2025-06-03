describe('azbklawyer.com Link Validation', () => {
  const pathsToValidate = [
    '/',
    '/bankruptcy-overview/chapter-7/',
    '/bankruptcy-overview/chapter-11/',
    '/bankruptcy-overview/chapter-13/',
    '/contact-us/'
  ];

  pathsToValidate.forEach(path => {
    it(`should successfully visit ${path}`, () => {
      cy.visit(path);
      cy.url().should('include', path);
      // You could add more assertions here, e.g., check for a common element:
      // cy.contains('Wright Law Offices').should('be.visible');
    });
  });
});
