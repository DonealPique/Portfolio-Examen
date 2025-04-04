# ✅ Testrapport – Event Planner

## 🔎 Samenvatting

In totaal zijn er **10 geautomatiseerde end-to-end tests** uitgevoerd met Cypress. Deze tests zijn gericht op het controleren van de basisfunctionaliteiten van de EventPlanner applicatie, zoals de homepagina, navigatie, zoekfunctionaliteit en filters. De tests zijn succesvol uitgevoerd op de lokale development server via `http://localhost:5173`.

---

## 📋 Testresultaten

| #  | Testnaam                    | Wat werd getest                                              | Verwacht resultaat                                       | Resultaat |
|----|-----------------------------|---------------------------------------------------------------|-----------------------------------------------------------|----------|
| 1  | Laadt de homepagina         | Controleren of de startpagina goed laadt                     | Pagina bevat "Alle Events"                                | ✅ Pass  |
| 2  | Navigatie via navbar link   | Gaat naar /events-overview via navbar link                   | URL bevat `/events-overview`                             | ✅ Pass  |
| 3  | Zoekbalk op eventnaam       | Gebruiker zoekt op "beach"                                    | Event met “beach” zichtbaar                                | ✅ Pass  |
| 4  | Kalender openen             | Klik op kalender icoon toont kalender input                  | `<input type="date">` is zichtbaar                        | ✅ Pass  |
| 5  | Footer zichtbaar            | Footer wordt getoond op de pagina                            | `<footer>` is zichtbaar                                   | ✅ Pass  |
| 6  | Pagina titel                | Controleren of de header correct getoond wordt               | "Alle Events" is zichtbaar                                | ✅ Pass  |
| 7  | Navigatielinks in navbar    | Navbar bevat "Events" en "Contact"                           | Beide knoppen zichtbaar                                   | ✅ Pass  |
| 8  | Filter dropdowns bestaan    | Controleren of filter dropdowns beschikbaar zijn             | Minimaal 1 `<select>` aanwezig                            | ✅ Pass  |
| 9  | Minstens één event aanwezig | Pagina toont ten minste één event met “Bekijk event” knop    | Knop met tekst “Bekijk event” is aanwezig                 | ✅ Pass  |
| 10 | Pagina bevat afbeeldingen   | Controleren of er afbeeldingen zijn op de eventcards         | Minstens 1 `<img>` element zichtbaar                      | ✅ Pass  |

---

## 📌 Conclusie

Alle 10 testcases zijn **met succes doorlopen**, wat betekent dat de meeste onderdelen wel werken.

De homepage laadt zoals verwacht, de zoekfunctionaliteit werkt prima, filters zijn aanwezig, en de navigatie tussen pagina’s werkt soepel. De kalenderinput en eventafbeeldingen worden correct weergegeven en ook de structuur van de pagina, zoals de navbar en footer, zijn zichtbaar en functioneel.

🔧 Tijdens eerdere tests was er wat gedoe met selectors (zoals `.EventCard` die niet bestond), maar dit is opgelost door de selectors aan te passen naar wat echt in de DOM voorkomt. Dit laat ook zien dat debugging en inspectie van je code belangrijk is bij testen.

---
