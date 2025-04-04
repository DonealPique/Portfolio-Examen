
describe("EventPlanner Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("1. Laadt de homepagina correct", () => {
    cy.contains("Alle Events").should("exist");
  });

  it("2. Navigeert naar /events-overview via navbar link", () => {
    cy.get('a[href="/events-overview"]').first().click();
    cy.url().should("include", "/events-overview");
  });

  it("3. Zoekbalk werkt op eventnaam", () => {
    cy.get('input[placeholder="Zoeken"]').type("Deep");
    cy.contains("Deep").should("exist");
  });

  it("4. Opent kalender filter bij klik op kalender-icoon", () => {
    cy.get("button img[alt='Calendar']").click();
    cy.get('input[type="date"]').should("exist");
  });

  it("5. Check of footer zichtbaar is", () => {
    cy.get("footer").should("be.visible");
  });

  it("6. Toont pagina titel of header", () => {
    cy.contains("Alle Events").should("exist");
  });

  it("7. Navbar bevat navigatie links", () => {
    cy.get("nav").within(() => {
      cy.contains("Events").should("exist");
      cy.contains("Contact").should("exist");
    });
  });

  it("8. Filter dropdown bestaat", () => {
    cy.get("select").should("have.length.at.least", 1);
  });

  it("9. Pagina bevat minimaal één event", () => {
    cy.get("a").contains("Bekijk event").should("exist");
  });

  it("10. Pagina bevat minimaal één afbeelding", () => {
    cy.get("img").should("have.length.at.least", 1);
  });
});
