const BASE = 'http://localhost:5173';
const linkSel = 'a:contains("Bekijk event")';
const OVER = `${BASE}/events-overview`;

describe('EventPlanner Tests', () => {
  it('Homepagina laadt en toont 6 EventCards', () => {
    cy.visit(BASE);
    cy.get(linkSel, { timeout: 6000 })
      .should('have.length', 6);
  });

  it('Navigeert naar Event-overview en toont 9 EventCards', () => {
    cy.visit(BASE);
    cy.contains('Bekijk alle events').click();
    cy.url().should('include', '/events-overview');

    cy.get(linkSel, { timeout: 6000 })
      .should('have.length', 9);
  });


  it('Navigeert naar EventCard en controleert de details', () => {
    cy.visit(BASE);

    cy.get(linkSel, { timeout: 6000 })
      .first()
      .click();

    cy.url().should('match', /http:\/\/localhost:5173\/events-bekijken\/1/);

    cy.contains('Deepracerday').should('exist');
  });

  it('Zoekt naar een specifiek event via zoekbalk', () => {
    cy.visit(BASE);

    cy.get('input[placeholder="Zoeken"]')
      .type('Beach');

    cy.get(linkSel, { timeout: 6000 })
      .should('have.length.at.least', 1)
      .parent()
      .contains('Beach');
  });

  it('Filtert events op locatie (Office)', () => {
    cy.visit(BASE);

    cy.get('select').last().select('Office');

    cy.get(linkSel, { timeout: 6000 }).each(($a) => {
      cy.wrap($a)
        .parent()
        .contains('Office');
    });
  });

  it('Filtert op type (Aankomende Evenementen)', () => {
    cy.visit(BASE);

    cy.get('select').first().select('Aankomende Evenementen');

    cy.get(linkSel, { timeout: 6000 })
      .should('have.length.at.least', 1)
      .parent()
      .contains(/^\d{4}-\d{2}-\d{2}$/);
  });

  it('Filtert op specifieke datum via kalender-input', () => {
    cy.visit(OVER);

    cy.get('button img[alt="Calendar"]').click();
    cy.get('input[type="date"]').type('2024-06-17').blur();

    cy.get(linkSel, { timeout: 6000 })
      .should('have.length', 1)
      .parent()
      .contains('2024-06-17');
  });

  it('Bladert maanden met Next/Previous-pijlen', () => {
    cy.visit(BASE);

    const nextBtn = 'button img[alt="Next"]';
    const prevBtn = 'button img[alt="Previous"]';

    cy.get(nextBtn).click().click();
    cy.contains('February 2024').should('be.visible');

    cy.get(linkSel, { timeout: 6000 }).each(($a) => {
      cy.wrap($a)
        .parent()
        .contains(/^2024-02/);
    });

    cy.get(prevBtn).click();
    cy.contains('January 2024').should('be.visible');

    cy.get(prevBtn).click();
    cy.contains('Selecteer een maand').should('be.visible');

    cy.get(linkSel, { timeout: 6000 })
      .should('have.length', 6)
  });

  it('EventStats toont na animatie de correcte waarden', () => {
    cy.visit(BASE);
    cy.scrollTo('bottom');
    cy.wait(8000);

    cy.contains("Vrijmibo's")
      .parent().parent()
      .within(() => {
        checkStat('5', 'Aankomende events');
        checkStat('20', 'Afgelopen events');
        checkStat('9', 'Trips in verschillende landen');
        checkStat('???', "Vrijmibo's");
      });
  });

  function checkStat(expectedValue, label) {
    cy.contains(label)
      .should('exist')
      .prev()
      .invoke('text')
      .then((text) => {
        expect(text.trim()).to.eq(expectedValue);
      });
  }

  it('Combinatie­filter (type + locatie + zoek) werkt én reset toont weer ≥ 2 cards', () => {
    cy.visit(OVER);

    cy.get('select').first().select('Eerdere Evenementen');
    cy.get('select').last().select('Office');
    cy.get('input[placeholder="Zoeken"]').type('Maandafsluiting');

    cy.get(linkSel, { timeout: 6000 }).should('have.length.at.least', 1);

    cy.get('select').first().select('Alle soorten events');
    cy.get('select').last().select('');
    cy.get('input[placeholder="Zoeken"]').clear();

    cy.get(linkSel, { timeout: 6000 }).should('have.length.at.least', 2);
  });
});