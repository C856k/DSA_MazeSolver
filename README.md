Algoritme: Jeg har brugt Depth-First Search til at løse labyrinten. Denne algoritme er valgt, da den er enkel og effektiv til at finde en hvilken som helst vej ud af labyrinten uden at garantere den korteste vej.

Rekursiv vs. Stack: Jeg har brugt en kombination af rekursive opkald og en stack til at gemme ruten. Algoritmen er baseret på rekursiv dybde-først søgning, hvor jeg besøger hver celle i labyrinten ved at udforske nabo-cellerne. Ruten gemmes i en stack, hvor jeg tilføjer celler, når de besøges, og fjerner dem, hvis backtracking er nødvendig.

Beregning af ruten: Jeg har beregnet ruten i ét hug. Når algoritmen har fundet vejen fra start til mål, vises den færdige rute i labyrinten uden animation.

Visning af backtracking: Jeg har valgt kun at vise den færdige rute uden at vise backtracking. Dette betyder, at backtracking-celler ikke vises i labyrinten, og kun den endelige rute præsenteres. Dette giver en mere klar og enkel visualisering af den løste labyrint.

Link til deployed version:
https://kind-desert-0c5238b03.5.azurestaticapps.net 
