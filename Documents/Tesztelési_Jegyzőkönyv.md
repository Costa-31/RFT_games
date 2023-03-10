# Teszt jegyzőkönyv
### Main Project
|  Dokumentum címe: (azonosítója) |  Tetris_RFT |
|---|:-:|
| **Minősítés: (állapot)**  |  Továbbfejlesztés |
| **Verziószám:**  |  1.1 Beta |
| **Projekt név:** |  Játék web portal |
| **Készítette:** | RFTeam |
| **Utolsó mentés kelte:** | 2023.01.17 |
| **Dokumentum célja:** | A projekt aktuális állapotának felmérése

### Projektben résztvevő fejlesztők:
|  Név |  Szerepkör |
|---|---|
| Kázmér László  | fejlesztő  |
| Bodó Zoltán  | fejlesztő |
| Sidlovszki Dominik |  fejlesztő |

## 1. Bevezetés

A tesztelés célja a projektben megtalálható felépítésbeli, vagy formatervezési hibák feltárása.

### 1.1 Tesztelési terv hatóköre, célja:

A tesztelési terv célja a tesztelés teljeskörűségének biztosítása, a tesztelés során alkalmazott eljárások és megoldások meghatározása.

### 1.2 Elvárások

#### A teszttervvel szemben felállított alap elvárások:

- Az olvasó ismeri az alapdokumentumokat, amelyek meghatározzák a rendszert.
- A projektcsapat felelős a tesztadatok előállításáért.

## 2. Szükséges erőforrások
Ez a fejezet a teszteléshez szükséges erőforrásokat fejti ki.

### 2.1 Feladatkörök és felelősségek (tesztcsapat meghatározása)
| Feladatkör  |  Felelősség/tevékenység |  Személy  |
|---|---|---|
| **Tesztelő, Teszt-koordinátor:** |  A teszt végrehajtása, észrevételek dokumentálása, teszt dokumentáció archiválása.Tesztterv készítése.  A tesztterv jóváhagyatása a projektmenedzserrel.  A teszt forgatókönyvek létrehozása  inkonzisztenciák kezelése.  Helyes és időbeni hibakezelés.  Szükség esetén problémák delegálása a projekt menedzsernek.  Végső riport készítése.  Teszt dokumentum archiválása.  Az észrevételek státuszának követése, ill. dokumentálása | Bodó Zoltán, Kázmér László, Sidlovszki Dominik |
| **Szakértő:**  |  A szakértő az észrevételeket elemzi és megoldást javasol. | - |
|**Projektvezető:**| A projekt ellenőrzése és felügyelése | - |

### 2.2 Tesztadatok
A teszt végrehajtásához szükséges rekordok (tesztadatok) száma: ---
A tesztadatok elkészítéséért és feltöltéséért felelős személy: ---

A tesztadatoknak az alábbi követelményeknek kell megfelelniük:
- Az adatbázisba felvitt adatoknak csakis az UTF-8 kódtáblában található karaktereket szabad tartalmaznia.

## 3. Tesztelési terv
Ez a fejezet leírja a teszt típusát, a metodikáját és a riportkészítés módszerét. Emellett meghatározza a tesztelvárásokat, a teszt-esetek elvárt eredményeit, sikerességének kritériumait, a kockázatok kezelését és a hatáskörön kívül eseteket.

### 3.1 Fejlesztői teszt
A fejlesztői tesztelés célja a rendszer alapvető funkcióinak ellenőrzése, a hibakezelés és az alapvető funkciók működésének vizsgálata
**Módszere:**
A program SQL adatbázisa "DUMMY" (*Nem valós*) adatokkal kerül feltöltésre a tesztelés alatt.
Ezen adatok többségét úgynevett "Lorem Ipsum" típusú, véletlenül generált adat teszi ki.

### 3.2 Prototípus (modul) teszt
A prototípus tesztelés (vagy másik nevén modultesztelés) célja a rendszer már működő moduljainak önálló tesztelése, a modulon belüli hibák azonosításának és kiküszöbölésének érdekében. 
**Módszere:**
A program adatbázisába valós adatok kerülnek betöltésre.

### 3.3 Integrációs teszt
Az integrációs teszt célja a rendszer más rendszerekhez történő illesztésének vizsgálata, a több rendszeren keresztül átívelő funkciók tesztelésének érdekében. Az adatmigrációs tesztelés az integrációs teszteléshez tartozik, ennek lényege, hogy a bevezetendő rendszerbe áttöltik azokat az adatokat, amelyekkel a rendszer dolgozni fog, és letesztelik a betöltött adatok, illetve az adatokat kezelő funkciók helyességét. 
**Módszere:**
A program adatbázisába valós adatok kerülnek betöltésre.

### 3.4 Elfogadási teszt
Az elfogadási teszt (angolul User Acceptance Test) célja a rendszer teljes funkcionalitásának vizsgálata a felhasználók szemszögéből
**Módszere:**
A teszt egy kontroll csoporttal zajlik, egy külső cégen keresztül.

### 3.5 Terheléses teszt
A terheléses teszt célja a tervezett kapacitások, valamint a rendelkezésre álló növekedési potenciál meghatározása.
**Módszere:**
A próba telepítést követően egy meghívott tesztközönséggel zajlik, szimulálva egy átlagos napi használatot.

### 3.6 Biztonsági teszt (audit):
Biztonsági tesztelésre akkor van szükség, ha a rendszer szenzitív (pl. személyes vagy pénzügyi) adatokat kezel, vagy szabadon elérhető az internetről. 
**Módszere:**
A tesztet egy megbízott külső cég végzi.

### 3.7 Go live teszt
A go-live teszt egy próbaélesítés, melynek során a korábbi rendszerek továbbra is üzemelnek annak érdekében, hogy az élesítéskor keletkező problémák ne befolyásolják a normál üzemi működést.
**Módszere:**
A próbatelepítés a megrendelő által választott webtárhelyen történik, a programot a jövőben üzemeltető adminisztrátorok közreműködésével élesítik.

### 3.8 Tesztelési feladatok, teszt-esetek leírása
A tesztelési feladat a következő teszt-eseteket foglalja magában:
- Fejlesztői teszt
- Prototípus (modul)

## 4 Tesztelési ütemterv, függőségek – tesztforgatókönyv

### 4.1 Tesztelési jelentés
A tesztelési jelentést a tesztkoordinátor készíti el. Ez egy részletes áttekintése a lefutott teszteknek, azok eredményeinek, státuszának és a megjegyzéseknek.
A tesztkoordinátor juttatja el a projektmenedzsernek a tesztelési jelentést. 

## 5. Tesztjegyzőkönyv
### 5.1 Tesztelési jegyzőkönyv - 1. Példa

|   |   |
|---|---|
| A teszt-eset leírás és célja:  | Weboldal megjelenítés |
| A tesztelt folyamat/funkció leírása:  | Design, Navigation |
| A tesztelés előfeltételei:  | - |
| A tesztelés dátuma és időpontja:  | 2022.12.18. |
| A tesztet végző személy(ek):  | Bodó Zoltán |
| A tesztelt rendszer beállításai:  |Html, CSS, JavaScript|
| A teszt-eset elvárt eredménye:  | Hibátlan megjelenítés |
| A tesztelés eredménye:  | Sikeres |
| Megjegyzések:  | További fejlesztésre szorul |

**Tesztelést elvégezte**

|   |   |
|---|---|
|  Név: | Bodó Zoltán |
|  Szervezeti egység/ beosztás: | fejlesztő |
|  Dátum: | 2022.12.18. |

### 5.2 Tesztelési jelentés - 2. Példa
|   |   |
|---|---|
| A hivatkozott tesztjegyzőkönyvek rövid leírása és eredménye:  | Játékok kifejlesztése |
| A tesztelt folyamatok/funkciók/modulok leírása: | JavaScript |
| A tesztadatok típusa:  | JavaScript |
| A tesztelés eredménye:  | Sikertelen |
| Megjegyzések:  | Korrigálni a sikertelen funkciókat |

**Tesztelést elvégezte**

|   |   |
|---|---|
|  Név: | Kázmér László, Sidlovszki Dominik, Bodó Zoltán |
|  Szervezeti egység/ beosztás: | fejlesztők |
|  Dátum: | 2023.1.8. |

### 5.3 Jóváhagyások

|   |   |
|---|---|
| A hivatkozott tesztjegyzőkönyvek rövid leírása és eredménye:  | Játékok kifejlesztése |
| A tesztelt folyamatok/funkciók/modulok leírása: | JavaScript |
| A tesztadatok típusa:  | JavaScript |
| A tesztelés eredménye:  | Sikeres |
| Megjegyzések:  | Működőképes weblap |

**Tesztelést elvégezte**

|   |   |
|---|---|
|  Név: | Kázmér László, Sidlovszki Dominik, Bodó Zoltán |
|  Szervezeti egység/ beosztás: | fejlesztők |
|  Dátum: | 2023.1.17. |
