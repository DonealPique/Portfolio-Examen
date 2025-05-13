# ✅ Testrapport – Event Planner

## 🔎 Samenvatting

In totaal zijn er **10 geautomatiseerde end-to-end tests** uitgevoerd met Cypress. Deze tests zijn gericht op het controleren van de belangrijkste functionaliteiten van de EventPlanner applicatie, zoals de homepagina, navigatie, zoekfunctionaliteit, kaartweergave en filters. De tests zijn succesvol uitgevoerd op de lokale development server via `http://localhost:5173`.

---

| #  | Testnaam                                 | Beschrijving testscenario                                     | Resultaat  |
| -- | ---------------------------------------- | ------------------------------------------------------------- | ---------- |
| 1  | Homepagina laadt en toont 6 kaarten      | API laadt, 6 kaarten zichtbaar met knop “Bekijk event”        | ✅ Geslaagd |
| 2  | Events Overview toont 9 kaarten          | Navigatie via knop, 9 kaarten zichtbaar op `/events-overview` | ✅ Geslaagd |
| 3  | Klik op kaart navigeert naar detail      | Klik op eerste kaart toont correcte eventdetailpagina         | ✅ Geslaagd |
| 4  | Zoekfilter werkt op “Beach”              | Zoekinput filtert en toont relevante resultaten               | ✅ Geslaagd |
| 5  | Filtert op locatie “Office”              | Dropdown laat alleen “Office” kaarten zien                    | ✅ Geslaagd |
| 6  | Filtert op type “upcoming”               | Kaarten tonen alleen aankomende events met datums             | ✅ Geslaagd |
| 7  | Filtert via kalender op specifieke datum | Enkel kaart met 2024-06-17 zichtbaar                          | ✅ Geslaagd |
| 8  | Bladeren met maandpaginatie              | Next → February 2024, Prev → January, terug naar reset        | ✅ Geslaagd |
| 9  | EventStats telt correct                  | Scroll → "5", "20", "9", "???" getoond onder de juiste labels | ✅ Geslaagd |
| 10 | Combinatiefilter reset                   | Filteren met 3 criteria en reset → ≥2 kaarten zichtbaar       | ✅ Geslaagd |

---

## 📌 Conclusie

Alle testen zijn succesvol doorlopen en tonen aan dat de kernfunctionaliteiten van de EventPlanner goed functioneren. De combinatie van filters, navigatie, tellercomponenten en visuele validatie zorgen voor een complete dekking van de gebruikerservaring.

✅ Resultaat: 10/10 tests geslaagd.

---
