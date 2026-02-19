

# blackjack-game
This project is a Blackjack game built with Next.js and JavaScript.

## Beskrivelse
Dette projekt er et Blackjack spil bygget med JavaScript og Next.js.
Spillet følger klassiske Blackjack regler, hvor spilleren konkurrerer mod dealeren.

Spillets logik er adskilt fra brugergrænsefladen for at sikre en ren arkitektur og vedligeholdelse.

## Funktioner

- Standardkortspil med 52 kort
- Tilfældig blanding
- Beregning af korrekt håndværdi (es = 1 eller 11)
- Hit og Stand funktionalitet
- Automatisk spil for dealeren (træk indtil 17)
- Logik til bestemmelse af vinder
- Genstart uden at genindlæse siden
- Enhedstest for spillets kernelogik

## Tech Stack

- JavaScript
- React
- Next.js
- Jest (Enhedstest)

## Projektstruktur

src/
- app/    => UI og sider
- komponenter/  =>  UI komponenter
- lib/    => Spillogik
- tests   => Enhedstests

## Sådan kører du projektet

1. Installer afhængigheder:

npm install

2. Start udviklingsserver:

npm run dev

3. Åbn browseren på:
http://localhost:3000

## Kør tests

npm test
npm run test:coverage

## Arkitektur

Spillogik er opdelt i:
src/lib/blackjack.js

UI håndterer kun tilstand og rendering , mens al spil-logik ligger i src/lib.

Dette følger:
- Princippet om enkeltansvar
- Separation of Concerns

## Running with Docker

Build image:

    docker build -t blackjack-game .

Run container:

    docker run -p 3000:3000 blackjack-game

Open browser:
http://localhost:3000


## Forfatter
Mansoureh Safarian Toosi






# Blackjack Game

## Description
This project is a Blackjack game built with JavaScript and Next.js.
The game follows classic Blackjack rules where the player competes against the dealer.

The game logic is separated from the UI layer to ensure clean architecture and maintainability.

## Features

- Standard 52 card deck
- Random shuffling
- Correct hand value calculation (Ace = 1 or 11)
- Hit and Stand functionality
- Dealer automatic play (draw until 17)
- Winner determination logic
- Restart without page reload
- Unit tests for core game logic

## Tech Stack

- JavaScript
- React
- Next.js
- Jest (Unit testing)

## Project Structure

src/
- app/  UI and pages
- components/  UI components
- lib/  Game logic
- tests  Unit tests

## How to Run the Project

1. Install dependencies:

npm install

2. Start development server:

npm run dev

3. Open browser at:
http://localhost:3000

## Run Tests

npm test

## Architecture

Game logic is separated into:
src/lib/blackjack.js

UI handles only state and rendering.

This follows:
- Single Responsibility Principle
- Separation of Concerns

## Author

Mansoureh Safarian Toosi
