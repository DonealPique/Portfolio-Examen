# 💡 Verbetervoorstellen – Event Planner Project

Tijdens de scrum meetings kregen we feedback en op basis daarvan de verbetervoorstellen geschreven.

## ✅ Criterium 5.1 – Op basis van testen

Tijdens het testen met Cypress hebben we gezien dat de meeste functionaliteiten goed werkten, maar er waren ook wat dingen die opvielen of beter konden. Hier zijn drie verbetervoorstellen op basis van de testresultaten:

### 1. Verbetering van selectorgebruik (bijv. `.EventCard` werkte niet)

- **Waarom?** Sommige selectors klopten niet met de HTML in de app, waardoor Cypress de elementen niet kon vinden.
- **Verbetering:** Beter gebruik maken van unieke `data-testid` of `id`-attributen zodat Cypress ze makkelijk kan selecteren.
- **Voordeel:** Minder kans op test failures door vage of niet bestaande selectors.

### 2. Automatisch wachten op content

- **Waarom?** Sommige tests faalden omdat Cypress te snel probeerde te checken of iets bestond (bijv. eventcards).
- **Verbetering:** Gebruik maken van `cy.wait()` of checken op API-responses voordat de assertions gebeuren.
- **Voordeel:** Minder flaky tests en betrouwbaardere testresultaten.

### 3. Formulier-feedback testen

- **Waarom?** In de UI zie je bij het invullen van een suggestie-formulier een bedankbericht, maar dat is nu lastig te testen.
- **Verbetering:** Voeg duidelijke feedback-elementen toe met unieke ID's of testdata zodat Cypress kan controleren of het echt is ingediend.
- **Voordeel:** Betere testbare gebruikerservaring, ook voor formulieren.

---

## 🚀Criterium 5.2 – Op basis van oplevering

Tijdens het bouwen en opleveren van de applicatie zijn er een aantal dingen opgevallen die beter kunnen:

### 1. Verbeterde mobiele optimalisatie

- **Waarom?** Sommige secties waren op mobiel niet netjes uitgelijnd of overschreven elkaar.
- **Verbetering:** Meer gebruik maken van Tailwind’s responsive utilities zoals `md:`, `sm:`, `lg:` voor betere controle.
- **Voordeel:** Gladdere gebruikservaring op alle devices.

### 2. Foutafhandeling bij API’s

- **Waarom?** Als een event niet gevonden wordt of de server is offline, krijgt de gebruiker nu geen duidelijke melding.
- **Verbetering:** Voeg fallback-meldingen toe zoals “Er is iets misgegaan, probeer opnieuw”.
- **Voordeel:** Meer duidelijkheid voor de gebruiker + betere UX.

### 3. Code splitting & cleanup

- **Waarom?** Sommige componenten waren vrij groot of deden meerdere dingen tegelijk (bijv. `EventOverview`).
- **Verbetering:** Maak kleinere componenten per functie of logica.
- **Voordeel:** Beter onderhoudbare code en makkelijker om bugs te vinden.

---

## 🧠 Criterium 5.3 – Op basis van reflectie

Het project was pittig en uitdagend, zeker omdat we weinig ervaring hadden met React. Toch hebben we veel geleerd. Hier zijn drie verbetervoorstellen op basis van mijn eigen reflectie:

### 1. Eerder verdelen van taken

- **Waarom?** In het begin werkten we wat rommelig waardoor veel pas op het einde samenkwam.
- **Verbetering:** Direct duidelijke taakverdeling + per persoon vaste onderdelen of componenten.
- **Voordeel:** Minder stress op het einde + betere planning.

### 2. Tijd reserveren voor testen & fixen

- **Waarom?** Veel fixes gebeurden in de laatste dagen voor de oplevering.
- **Verbetering:** Vanaf de 2e sprint structureel testtijd inplannen in de planning.
- **Voordeel:** Minder bugs op het einde + stabielere oplevering.

### 3. Betere communicatie bij afwezigheid

- **Waarom?** Een teamlid (Anouk) haakte zonder iets te zeggen af, wat voor verwarring zorgde.
- **Verbetering:** Afspreken dat iedereen updates geeft in een groepschat, ook bij ziekte of uitval.
- **Voordeel:** Beter overzicht, eerlijkere werkverdeling en minder misverstanden.

---

### Kwam uit de retrospective meeting

[Retrospective meeting](/bewijs-material-opdrachten/Opdracht-8/Criterium-1/retrospective.md)

---
