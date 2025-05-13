# Test plan

📄 **Bestand:** `eventplanner_spec.cy.js`  
📁 **Locatie:** [Test Code](/bewijs-material-opdrachten/Opdracht-4/Criterium-1/cypress/e2e/EventPlanner_spec.cy.js)

---

## ✅ Inhoud van de 10 testcases

| #  | Testnaam                                       | Wat wordt getest                                                            | Verwachte resultaat                                       |
| -- | ---------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------- |
| 1  | Laadt de homepagina en toont 6 kaarten         | Homepagina laadt correct en toont precies 6 kaarten via backend             | 6 eventkaarten zichtbaar met “Bekijk event”               |
| 2  | Navigeert naar overzicht en toont 9 kaarten    | Link stuurt je naar `/events-overview` waar 9 kaarten zichtbaar moeten zijn | URL bevat `/events-overview` + 9 kaarten zichtbaar        |
| 3  | Klik op kaart navigeert naar detailpagina      | Eerste kaart wordt aangeklikt → detailpagina laadt met juiste info          | URL eindigt op `/events-bekijken/1` + content zichtbaar   |
| 4  | Zoeken naar “Beach” via zoekbalk               | Typen van “Beach” filtert de kaarten                                        | Minimaal 1 kaart met “Beach” zichtbaar                    |
| 5  | Locatiefilter op “Office”                      | Selecteer locatie Office → alle kaarten tonen locatie Office                | Kaarten bevatten tekst “Office”                           |
| 6  | Filteren op type “Aankomende Evenementen”      | Type-filter tonen alleen ‘upcoming’ events met juiste datumnotatie          | Datum + minimaal 1 kaart zichtbaar                        |
| 7  | Filter via kalender – 17 juni 2024             | Kalender openen en filteren op datum 2024-06-17                             | Slechts 1 kaart zichtbaar met datum “2024-06-17”          |
| 8  | Maand-paginatie met Next/Prev pijlen           | Bladeren door maanden werkt correct en filtert de juiste kaarten            | Label verandert, kaarten tonen bijbehorende datums        |
| 9  | Tellers in EventStats kloppen visueel          | Scroll naar EventStats en controleer 4 tellers op juiste waarden            | "5", "20", "9", "???" worden getoond bij de juiste labels |
| 10 | Combinatiefilter (type + locatie + zoek) reset | Zet 3 filters aan en reset ze daarna → check dat ≥2 kaarten terugkomen      | Initieel matcht 1 kaart, na reset ≥2 kaarten zichtbaar    |

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

3. Selecteer `eventplanner_spec.cy.js` onder `cypress/e2e` in het menu dat verschijnt.

4. De tests worden visueel uitgevoerd in de browser.

---