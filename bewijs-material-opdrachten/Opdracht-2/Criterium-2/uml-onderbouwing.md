# 🔍 Onderbouwing – Endeavour Eventplanner

## 🔐 Beveiliging (Security)

We hebben React gebruikt omdat het automatisch dingen zoals XSS-aanvallen (gevaarlijke code in invoervelden) tegenhoudt.

Onze API is gemaakt met PHP en draait in Docker. Dit zorgt ervoor dat alles in een veilige omgeving blijft en niet zomaar stuk kan gaan.

Als iemand naar een event zoekt dat niet bestaat, krijgt diegene een 404-error te zien in plaats van een fout die gevoelige info laat zien.

## ⚖️ Ethisch (Ethiek)

We hebben de site makkelijk en duidelijk gemaakt, zodat iedereen het kan gebruiken, zonder technische kennis.

We verzamelen geen rare of onnodige data van gebruikers. Je hoeft niet in te loggen of een account te maken.

Je hoeft alleen een naam en idee op te geven bij het suggestieformulier – niks meer.

We gaan een privacyverklaring maken zodat gebruikers weten wat er met hun data gebeurt (spoiler: bijna niks).

## 🔒 Privacy

We slaan geen persoonlijke gegevens op zoals IP-adressen of cookies.

Je kunt de hele site gebruiken zonder account. We verzamelen alleen suggesties voor nieuwe events.

Alle data wordt via onze API’s opgehaald en verstuurd in JSON-formaat, wat veilig en duidelijk is.

In de toekomst kan Endeavour via een aparte beheerpagina zelf events toevoegen. Dat is afgeschermd voor gewone gebruikers. (Niet gemaakt)

## ✅ Samenvatting

We hebben goed nagedacht over veiligheid, privacy en ethiek. Alles is simpel, duidelijk en veilig gemaakt. Er wordt geen onnodige data verzameld en alles werkt via veilige routes tussen de website, API en database.
