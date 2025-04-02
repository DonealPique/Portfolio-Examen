# Project Omschrijving

## Opdrachtgever

![](../Portfolio-Examen/bewijs-material-opdrachten/Opdracht-1/Criterium-1/Endeavor_Group_logo.svg)

## Afdeling

Software Development

## Project team

- **Project manager:** Ties Noordhuis  
- **Teamleden:**
  - Doneal Piqué (Ik)
  - Shazib Syed  
  - Osman Umucu  
  - Nour Saf Yassine  
  - Anouk van Gemert  

## Projectdoel

Het doel van dit project was om een gebruiksvriendelijke, responsieve eventplanner te ontwikkelen voor **Endeavour**. Met deze planner kunnen gebruikers:

1. Events bekijken (komende en vorige events).
2. Events filteren op basis van verschillende criteria zoals datum, locatie, en type event.
3. Een suggestie indienen voor nieuwe events.
4. Responsieve ervaring bieden voor zowel desktop als mobiele apparaten.  

Het project is gerealiseerd met behulp van moderne technologieën zoals **React**, **Vite**, **TailwindCSS**, **PHP**, en **Docker**.

---

## Technologieën en frameworks

### 1. **React**  

React is gebruikt voor het bouwen van de frontend vanwege de component-gebaseerde structuur en het gemak van herbruikbare UI-componenten.

### 2. **Vite**  

Vite zorgt voor een snelle ontwikkelervaring door efficiënte bundeling en on-demand module loading.

### 3. **TailwindCSS**  

TailwindCSS is een utility-first CSS framework dat een snelle en consistente styling mogelijk maakt.

### 4. **PHP**  

PHP is gebruikt voor de backend om de API te ontwikkelen en gegevens uit de MySQL-database te halen.

### 5. **Docker**  

Docker is gebruikt om een container-gebaseerde setup te maken, waarmee zowel de database als de backend-omgeving eenvoudig kunnen worden geïnstalleerd en uitgevoerd.

---

## Installatie instructies

### Vereisten

- **Node.js** en **npm** (voor React en Vite)
- **PHP** (backend server)
- **Docker** (voor database-container)

### Installatie van het project

1. **Clone het project**  

   ```sh
   git clone <project-repository-url>
   cd project-folder


2. **Frontend Installeren**

Ga naar de frontend map en installeer alle dependencies.

```sh
cd frontend
npm install
npm run dev
```

Frontend draait nu op <http://localhost:5173>.

3. **Backend draaien**

Ga naar de backend map en start de PHP-server.

```sh
Copy code
cd backend
php -S localhost:8000
```

Backend draait nu op <http://localhost:8000>.

4. **Database Setup met Docker**

Start een MySQL-container:

``` sh
Copy code
docker run -d --name database \
    -p 3306:3306 \
    -e MYSQL_ROOT_PASSWORD=endeavour \
    -e MYSQL_DATABASE=eventdbase \
    -e MYSQL_USER=bit_academy \
    -e MYSQL_PASSWORD=bit_academy \
    mysql:latest
```

Start phpMyAdmin:

```sh
Copy code
docker run --name phpmyadmin -d --link database:db -p 8082:80 phpmyadmin
Database: draait op localhost:3306.
```

phpMyAdmin: bereikbaar via <http://localhost:8082>.

### **API Routes**  

| **Route**                               | **Beschrijving**                              |
|-----------------------------------------|-----------------------------------------------|
| `GET /alle-events.php`                  | Haal alle events op.                          |
| `GET /search-events.php?query=<term>`   | Zoek naar events op basis van zoekterm.       |
| `GET /upcoming-events.php`              | Haal 3 aankomende events op.                  |
| `GET /previous-events.php`              | Haal 3 vorige events op.                      |
| `GET /event-details.php?id=<event_id>`  | Haal details van een specifiek event op.      |
| `POST /suggest-event.php`               | Voeg een nieuw eventvoorstel toe.             |

---

### Referentie naar Bestanden

De bovenstaande routes kunnen ook teruggevonden worden in de volgende bestanden:  

- **`alle-events.php`**  
- **`search-events.php`**  
- **`upcoming-events.php`**  
- **`previous-events.php`**  
- **`event-details.php`**  
- **`suggest-event.php`**  

Deze bestanden bevatten de backend logica en API-functionaliteiten die gebruikt worden om data op te halen en te verwerken.

Voor aanvullende informatie over het uitvoeren en installeren ervan, zie README.md en docker-instruction.md.

## Project Draaiende Houden

Start de frontend:

``` sh
npm run dev
```

Start de backend:

```sh
php -S localhost:8000
```

Controleer de database met Docker:

Ga naar <http://localhost:8082> voor phpMyAdmin.
