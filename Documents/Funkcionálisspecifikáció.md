# Funkciónális specifikáció

## 1. Bevezetés

Alapvetően az online játékok a társadalom egy széles körét érinti és érdekli. Viszont nem sok ember szeretne rá pénzt áldozni mivel nincs abban a társadalmi helyzetben, hogy megengedhetné magának, vagy csak egyszerűen nem szándékozik rá tekinteni többként, mint szórakozás vagy nevéből adódóan játékként. Ezért gondoltuk - én és munkatársaim -, hogy nem lenne rossz ötlet elkészíteni egy olyan internetes oldalt, ahol az egyén képes játékokkal játszani anélkül, hogy bármilyen fizetési kötelezettsége legyen a játék használatához. 

## 2. Jelenlegi helyzet

A megrendelő egy egyszerű és könnyen kezelhető alkalmazást szeretne,ahol a felhasználók több játékkal játszhatnak. Az említett szoftvert a megrendelő webes felületen szeretné használni. Az ügyfél ragaszkodott egy egyszerű és könnyen kezelhető oldalhoz. Az ügyfél ragaszkodott még ahhoz is, hogy az oldal szabványos legyen, és ez mellett még egy modern dizájnt és külsőt is kapjon. Jelenleg a program létrehozásához, elkészítéséhez szükséges adatokat, tevékenységeket discord segítségével, minden héten, hetente többször is egyeztetjük.
## 3. Vágyálom rendszer

A fejlesztőcsapat célja egy valósággal megegyező oldal létrehozása, melyben több játékkal tudunk játszani. A felhasználó könnyen tudja váltogatni a játékokat és könnyű a játék kezelhetősége.

## 4. Feltételek

Az alkalmazásunk létrehozásának alapfeltétele, a JavaScript, vagy valamilyen más webprogramozási nyelv. HTML-ben írjuk meg az oldal leíró részét, és ezzel szabványosítjuk azt. CSS-el adunk az oldalunknak külsőt, amivel igényesen, dizájnosan és modernek fog kinézni.

## 5. Jelenlegi üzleti folyamatok modellje

A mai világban a legtöbb embernek nincs elegendő ideje, hogy egy élvezhető, könnyen kezelhető alakalmi játékkal játsszon, anélkül hogy ki kellene mozdulnia az illető komfortzónájából, bár van rengeteg és még annál is több online felületen elérhető játékokkal foglalkozó weboldal, ezeknek a hátránya, hogy:

- Fizetős játékok

Ezért arra jutottunk, én és a munkatársaim, hogy egy ingyenes, alkalmi játékot szimuláló oldalt hozzunk létre, amely felkelti azon emberek érdeklődését akiket mindig is érdekeltek az internetes játékok.Ezért mi egyszerű játék megalkotására törekszünk, amelyek nem mellesleg ingyenesek, élvezhetőek és még kifinomultak is, ezenfelül pedig a legkevesebb úgynevezett "bug"-al rendelkezők.

## 6. Igényelt üzleti folyamatok modellje

Az oldalt azért hozzuk létre, hogy a Tetrist kedvelő emberek szabadidejükben tudjanak játszani egy egyszerű és könnyen kezelhető oldalon a játékkal. A könnyű kezelhetőségnek köszönhetően, percek alatt már a játék felülületén tudunk lenni.

## 7. Használati esetek 

A Játékos az alábbi tevékenységeket végezheti a "Tetrisz játékban":

-Elindíthatja a játékot, azután tudja irányítani az elemeket a játékban.

A Játékos az alábbi tevékenységeket végezheti a "Snake játékban":

-Elindíthatja a játékot, azután tudja irányítani a kígyót a játékban és fel tudja venni az elemeket.

A Játékos az alábbi tevékenységeket végezheti a "Breakout játékban":

-Elindíthatja a játékot, azután tudja irányítani az elemet a játékban.

## 8. Képernyő tervek

Fontosabb képernyők:

-részlet a "Tetrisz" játékból
![](./Img/tetris.png)

-részlet a "Snake" játékból
![](./Img/snake.png)

-részlet a "Breakout" játékból
![](./Img/Breakout.png)

## 9. Forgatókönyvek

Játékmenet forgatókönyve: "Tetris"
Szereplők: Webalkalmazás

A space karakter használatával tudjuk elindítani a játékot. A játékot a nyíl billentyűzetek segítségével tudjuk irányítani, valamint a w,a,s,d billentyűkkel.

-Fel nyíl / W: Forgatja az elemeket.
-Jobb nyíl / A: Mozgatja az elemeket jobbra.
-Bal nyíl / D: Mozgatja az elemeket balra.
-Le nyíl / S: Az elemeket azonnal lerakja

Játékmenet forgatókönyve: "Snake"
Szereplők: Webalkalmazás

A space karakter használatával tudjuk elindítani a játékot. A játékot a nyíl billentyűzetek segítségével tudjuk irányítani, valamint a w,a,s,d billentyűkkel.

-Fel nyíl / W: felfelé mozog.
-Jobb nyíl / A: Jobbra mozog.
-Bal nyíl / D: Balra mozog.
-Le nyíl / S: Lefelé mozog.

Játékmenet forgatókönyve: "Breakout"
Szereplők: Webalkalmazás

A space karakter használatával tudjuk elindítani a játékot. A játékot a nyíl billentyűzetek segítségével tudjuk irányítani, valamint a a,d billentyűkkel.

-Jobb nyíl / A: Jobbra mozog.
-Bal nyíl / D: Balra mozog.
