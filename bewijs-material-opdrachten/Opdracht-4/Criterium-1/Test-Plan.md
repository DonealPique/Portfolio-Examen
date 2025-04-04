# Test plan

📄 **Bestand:** `EventPlanner_spec.cy.js`  
📁 **Locatie:** [Test Code](/bewijs-material-opdrachten/Opdracht-4/Criterium-1/cypress/e2e/EventPlanner_spec.cy.js)

---

## ✅ Inhoud van de 10 testcases

| #  | Testnaam                                  | Wat wordt getest                                                               | Verwachte resultaat                                           |
|----|--------------------------------------------|----------------------------------------------------------------------------------|---------------------------------------------------------------|
| 1  | Laadt de homepagina                        | Controle of de startpagina juist wordt weergegeven                              | Pagina bevat tekst "Alle Events"                             |
| 2  | Navigatie via navbar link                 | Navigeert via link naar `/events-overview`                                      | URL bevat `/events-overview`                                |
| 3  | Zoekbalk op eventnaam                     | Gebruiker kan zoeken op "Deep"                                                  | Event met "Deep" zichtbaar                                   |
| 4  | Kalender openen                            | Bij klik op kalendericoon wordt kalenderinput getoond                           | `input[type="date"]` bestaat                                |
| 5  | Footer zichtbaar                           | Footer is aanwezig op de pagina                                                 | `footer` zichtbaar                                           |
| 6  | Pagina titel                               | De pagina bevat een header met tekst                                            | "Alle Events" zichtbaar                                     |
| 7  | Navigatielinks in navbar                  | Navbar bevat knoppen zoals "Events" en "Contact"                                | Beide knoppen zichtbaar                                     |
| 8  | Filter dropdowns bestaan                  | Er is minimaal één `<select>` dropdown                                          | Lengte van selects ≥ 1                                       |
| 9  | Minstens één event aanwezig               | Er is minstens één event zichtbaar via “Bekijk event” knop                      | Knop met "Bekijk event" bestaat                             |
| 10 | Pagina bevat afbeeldingen                 | Er zijn één of meerdere `<img>` elementen                                       | Minstens 1 afbeelding zichtbaar                             |

---

## Screenshot van gelukte test resultaten

![](/bewijs-material-opdrachten/Opdracht-4/Criterium-2/test-resultaten.png)

---

## 🧪 Hoe voer je de Cypress testen uit?

1. Start je project lokaal in frontend folder:
```bash
npm run dev
```

2. Open Cypress:
```bash
npx cypress open
```

3. Selecteer `EventPlanner_spec.cy.js` onder `cypress/e2e` in het menu dat verschijnt.

4. De tests worden visueel uitgevoerd in de browser.

---