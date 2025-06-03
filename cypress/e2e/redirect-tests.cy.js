Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('Dynamic Link Navigation Test', () => {
  const targetOriginDomain = 'azbklawyer.com';
  const wrightLawOfficesLinkTest = {
    linkText: 'Wright Law Offices',
    targetPath: '/',
    name: 'click Wright Law Offices link'
  };
  const pageLinkTests = [
    {
      url: 'https://www.wwblaw.com/saving-for-taxes-as-a-business/',
      tests: [
        {
          linkText: 'tax debt lawyer',
          targetPath: '/bankruptcy-overview/tax-debts-in-bankruptcy/',
          name: 'click tax debt lawyer link'
        },
        wrightLawOfficesLinkTest // Use the constant here
      ]
    },
    {
      url: 'https://www.leinartlaw.com/blog/offers-in-compromise-and-your-tax-debt/',
      tests: [
        {
          linkText: 'tax debt lawyer',
          targetPath: '/tempe-tax-debt-lawyer/',
          name: 'click tax debt lawyer link'
        },
        wrightLawOfficesLinkTest // Use the constant here
      ]
    },
    {
      url: 'https://attorneyok.com/avoiding-foreclosure-with-a-loan-modification/',
      tests: [
        {
          linkText: 'foreclosure lawyer',
          targetPath: '/scottsdale-foreclosure-lawyer/',
          name: 'click foreclosure lawyer link'
        },
        wrightLawOfficesLinkTest // Use the constant here
      ]
    },
    {
      url: 'https://www.injurylawyertulsa.com/common-reasons-for-wage-garnishment/',
      tests: [
        {
          linkText: 'garnishment lawyer',
          targetPath: '/phoenix-garnishment-lawyer/',
          name: 'click garnishment lawyer link'
        },
        wrightLawOfficesLinkTest // Use the constant here
      ]
    },
    {
      url: 'https://bcunninghamlaw.com/rebuilding-your-financial-health-after-chapter-7-bankruptcy/',
      tests: [
        {
          linkText: 'Chapter 7 bankruptcy lawyer',
          targetPath: '/bankruptcy-overview/chapter-7/',
          name: 'click Chapter 7 bankruptcy lawyer link'
        },
        wrightLawOfficesLinkTest // Use the constant here
      ]
    }
  ];
  const runLinkNavigationTest = (url, linkText, targetOrigin, targetPath) => {
    cy.visit(url);
    cy.contains(linkText).should('be.visible').scrollIntoView().click();
    cy.wait(1000); // Keep wait for now
    cy.origin(targetOrigin, { args: { targetPath: targetPath } }, ({ targetPath }) => {
      cy.url().should('contain', targetPath);
    });
  };

  pageLinkTests.forEach(pageTest => {
    pageTest.tests.forEach(linkTest => {
      it(`should visit ${pageTest.url} and ${linkTest.name}`, () => {
        runLinkNavigationTest(pageTest.url, linkTest.linkText, targetOriginDomain, linkTest.targetPath);
      });
    });
  });
});

