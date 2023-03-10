## Követelmény Specifikáció

### Áttekintés 

Sokak számára kedvelt, kedves régi emlékeket felidéző weboldalt igyekeztünk alkotni. Manapság nem találni játéktermeket, klasszikus játékgépeket, ahol az ember önfeledten töltheti szabadidejét, pénzét nem sajnálva. Ennek okán készítettük el ezt a weboldalt, ami az akkoir emlékeket, versenyzéseket, rekorddöntéseket igyekszik előidézni a retro játékok segítségével, mindezt költségek nélkül. Az egyéni pontszámokat egy táblázatban mentjük el, ahonnan lekérdezhető bármikor a legjobb eredmény. Ezt a funkciót csak bejelentkezett felhasználók esetén tudjuk eltárolni, így aki veresenyszerűen szeretné próbáratenni ügyességét ebben a játékban, neki előbb regisztrálnia kell, és utánna már indulhat is a rekordkísérlet.

### Jelenlegi helyzet

Jelenleg egy játék van amiből ki szeretnénk indulni. Ezek a játékok köré, szeretnénk felépíteni egy navigációkkal, funkciókkal ellátott weboldalt, ahol a játékok a főközpontú elemek. Ezt a weboldal HTML, CSS, JavaScript nyelvekkel van ellátva, ami igyekszik a felhasználó számára minél egyszerűbb, mégis lényegretőrő kezelhetőséget biztosít. A weboldalt szeretnénk további funkciókkal kibővíteni.

### Jelenlegi üzelti folyamatok 

A megrendelő szeretné, ha maga a játék nem csak az adott felhasználónál, az adott alkalommal mutatná a legjobb eredményét. Az elképzelés, hogy egy eredménytábla legyen elérhető a felhasnzálók számára, ahol mindenki láthatja, ki tartja a legnagyobb pontszámot, és amennyiben valaki azt eléri, esetleg túllépi, ő vegye át a helyezést. Terveink szerint ezt MySQL adatbázis segítségével, és szerver oldali kommunikációval igyekszünk megvalósítani.

### Igényelt üzleti folyamatok 

Jelenleg free-to-use alapon működik maga a Tetris alkalmazás, és a további játékok, amelyk mindenki számára elérhető. Ez azonban jelenlegi formályában, idővel egyhangúvá válik, és a megrendelő úgy véli, hogy a versenyhelyzet megteremtésével a felhasználók köre kibővül, és látogatottabb lesz a weboldal. Regisztráció bevezetésével, ezt létre tudjuk hozni, és esetleg későbbi felmerülő gondolatokat is meg tudunk majd ezáltal valósítani.

### Vágyálom rendszer 

A projekt célja egy olyan weboldal létrehozása, ahol a retro élményeket lehet feleleveníteni. A cél egy könnyen átlátható és felhasználóbarát játékgép szimulátoros oldal létrehozása, a modernebb modulokkal kiegészítve, ahol a felhasználók a regisztráció után be tudnak lépni a saját fiókjukba, amivel azt érjük el, hogy minden felhasználónak külön meglegyen az egyéni rekordja. A játékot mindenki használhatja, de csak a regisztrált játékosok pontjai lesznek elmentve.

### Funkcionális követelmények 

A felhasználót az oldal betöltése után, a "home" oldal fogajda majd, ahonnan tud navigálni kedve szerint. Van külön regisztrációs és "login" ablak, ami garantálja majd a játék során szerzett pont elmentését. Továbbá megtalálható maga a játék amely egy új oldalra navigálja a felhasználót, ahol elkezdheti a játékot. Ezeken kívül megtalálható két további ablak, amelyek a kontakt és a "scoreboard". A kontakt ablaknál a fejlesztőket találják míg a "scoreboard" ablaknál a legjobb eredményt kilistázva.

### Fogalomtár 

Free-to-use --> Ingyenesen használható

Home --> A weboldal fő ablaka, amely elsőnek megjelenik a betöltést követően

Login --> Bejelentkezés

Scoreboard --> Ponttábla

### Rendszerre vonatkozó törvények 

A Weboldalhoz való hozzáférést és annak használatát az alkalmazandó jogszabályok és jelen Felhasználási Feltételek és Adatkezelési tájékoztatók (a továbbiakban Felhasználási Feltételek) szabályozzák. Az alkalmazást használók (a továbbiakban: a Felhasználók) elfogadják a jelen felhasználási feltételeket. Amennyiben ezen Felhasználási Feltételeket és az Oldal Tájékoztatóját nem fogadják el, abban az esetben nem jogosultak az oldal használatára.

A jelen Felhasználási Feltételekre vonatkozóan a magyar jog az irányadó, tekintet nélkül a nemzetközi magánjog előírásaira. Az Alkalmazás Felhasználói kifejezetten hozzájárulnak ahhoz, hogy jogvita esetén a magyar hatóságoknak és bíróságoknak kizárólagos joghatóságuk van a magyar jog alapján.

### Általános Információk

A Weboldalhoz való hozzáférést és annak használatát az alkalmazandó jogszabályok és jelen Felhasználási Feltételek és Adatkezelési tájékoztatók (a továbbiakban Felhasználási Feltételek) szabályozzák. Az alkalmazést használok (a továbbiakban: a Felhasználók)elfogadják a jelen felhasználási feltételeket.Amennyiben ezen Felhasználási Feltételekés az Oldal Tájékoztatóját nem fogadjákel, abban az esetben nem jogsultak az oldal használatára. A jelen Felhasználási Feltételekre vontatkozóan a magyar jog az irányadó és útmató,tekintet nélkül a nemzetközi magánjog előírásaira. Az Alkalmazás Felhasználói kifejezetten hozzájárulnak ahhoz,hogy jogvita esetén a magyar hatóságoknakés bíróságoknak kizárólagos joghatóságukvan a magyar jog alapján.

### Szellemi tulajdon

A weboldal és valamennyi kapcsolódó védjegy,szerzői jogi alkotás és egyéb akár bejgyzett,akár be nem jegyzett szellemi tulajdon( a továbbiakban együttesen:Szellemi Tulajdon) tulajdonosa a AFTP-1-No.-2 Szolgálatató,valamint az alkalmazáshoz részt vett partnerek. A kizárólagos jogosultságot biztosító szellemi tulajdonjgok - angolul Intellectual property vagy röviden IP - alkalmassak arra,hogy a szellemi alkotásokat forgalomképes vagyoni jogokká formálják:ezek tekinthetőek a művészeti, kutatási és fejlesztési tevékenységek eredményeinek, piaci hordozójának. Egy terméken számos IP jog állhat fenn egyszerre: az alapul fekvő műszaki megoldást szabadolom védheti,a külső kialakítás formatervezési mintaoltalom útján biztosíthat kiemelt piaci pozíciót, a működéshez szükséges szoftver, valamint annak grafikus felhasználó felülete pedig külön-külön is jogi védelem alatt állhatnak. A Felhasználók a weboldalt a Szellemi Tulajdon maximális tiszteletben tartásával jogsultak használni.A Szellemi Tulajdon kiterjed különösen, de nem kizárólagosan, valamennyi, szoftverre illetve fényképre, szövegre, grafikára, zenére, adatbázisra. A Szellemi Tulajdonnak tilos bárminemű bitorlása, másolása, megsértése vagy átdolgozása, és tilos azt bármilyen egyéb módon megsérteni, azt a jogsosulatlanul felhasználni,megterhelni vagy továbbadni, azzal bármilyen módon rendelkezni, visszaálni esetlegesen. Ezen szabályok megsértése nagyon komoly jogi következményekkel jár, akár azonnali hatályú megszüntetése mellett a megfelelő jogi lépések megtételét - beleértve esetleges büntetőjogi lépések megtételét is - vonja maga után a Felhasználóval, más jogsértő személlyel szemben a Tulajdonos vagy a Szellemi Tulajdon egyéb jogosultjai által.

### Használat

Bárki lehet felhasználói aki természetes személyek. Az Oldal díjmentesen vehető igénybe, kizárólag privát, azaz nem üzletszerű módon és célra, kizárólag a jelen Felhasználási Feltételek szerint. Az Oldal letöltéséért és használatáért az adatforgalmat biztosító szolgáltató külön díjat számíthat fel. Az ezzel kapcsolatos esetlegesen felmerülő költségek a Felhasználót terhelik.

A Felhasználási Feltételek és az Oldal működésének a módosítására, az Oldal működésének a megszüntetésére a Tulajdonos bármikor jogosult, a Felhasználó előzetes értesítése nélkül. Az Oldalhoz való hozzáférést a Tulajdonos bármikor visszavonhatja akár az adott Felhasználóra nézve, akár szélesebb körben vagy teljeskörűen előzetes értesítés, figyelmeztetés nélkül.

### Felelősségi szabályok

Az új Ptk. a kártérítési felelősség szabályozása körében több ponton igen lényeges változtatásokat vezet be. A legjelentősebb változás a szerződésen kívüli (deliktuális) károkozásért és a szerződésszegéssel (kontraktuális) okozott károkért való felelősség egymástól való elszakítása, a két felelősség egymástól független szabályozása. A különválasztás lényege abban áll, hogy míg a szerződésszegésért való felelősség esetén szakít a régi Ptk. felróhatósági alapú felelősségi rendszerével, addig a szerződésen kívül okozott károkért való felelősség továbbra is a károkozó felróhatóságán alapul. A kontraktuális felelősség két ponton tér el a deliktuálistól: a szigorúbb kimentés [6:142. §] és a megtérítendő károk köre [6:143. §] vonatkozásában. Ezeken kívül viszont a 6:144. §-ában írt utaló szabállyal az új Ptk. is megtartja a kártérítési felelősségi jog egységét, mert az abban írtak szerint a kontraktuális felelősségre is alkalmazni rendeli a deliktuális felelősség szabályait.

### Technikai követelmények

Az Oldal használatához szükséges technikai feltételek: Android operációs rendszer 4.0.3, vagy későbbi verziójával ellátott mobiltelefon, vagy tablet, vagy iOS operációs rendszer 9.0, vagy későbbi verziójával ellátott mobiltelefon,vagy tablet, vagy egy asztali számítógép ami Windows 7, vagy későbbi verziójával rendelkezik, valamint a használathoz megfelelő sávszélességű internetelérés. A technikai feltételeket az Oldal megnyitásához és használatához a Felhasználónak kell teljesítenie. A technikai feltételek nem teljesüléséért a Fejlesztők nem vonható felelősségre. Ugyanígy nem vonhatók felelősségre a Fejlesztők az Oldal használatából a készüléken bekövetkező adatvesztésért, meghibásodásért. A Fejlesztők kizárnak minden kártérítési felelősséget az Oldalhoz csatlakozó minden külső szerver által nyújtott, vagy megjelenített adattal, információval kapcsolatban is.

Az Oldal bizonyos funkciói csak regisztrációt követően vehetők használatba. A megjelenítés kizárólag a Google Chrome, Safari, Opera, Microsoft Edge felületén keresztül támogatott.

Amennyiben más készüléken szándékozik megnyitni az oldalt az új eszközön nem igényel újabb regisztrációt és a korábbi, programban tárolt információk is elérhetőek maradnak bejelentkezést követően.

### Garancia és kártérítés 

Az Oldal használatához a felhasználói oldalon szükséges – fent meghatározott, vagy bármely egyéb - technikai feltételeket a Felhasználónak kell biztosítania, teljesítenie. Ezen technikai feltételek nem teljesüléséért az Intézményvezető nem vonható felelősségre. Ugyanígy nem vonható felelősségre az Intézményvezető az Oldal használatából adódóan a készüléken bekövetkező adatvesztésért, meghibásodásért. Az Intézményvezető kizár minden kártérítési felelősséget az Oldalhoz csatlakozó minden külső szoftver által nyújtott (így kiemelten az adatok átvétele) vagy megjelenített adattal, információval kapcsolatban. Az Intézményvezető nem vállal garanciát az Oldal megszakításmentes működéséért, valamint vis major hibákért. Az ebből eredő adatvesztésért, tartalom vesztésért az Intézményvezető szintén nem tartozik kártérítési felelősséggel.

### Egyéb rendelkezések

Jelen Felhasználási Feltételekben nem szabályozott kérdésekben a hatályos jogszabályok – különösen, de nem kizárólagosan a Polgári Törvénykönyvről szóló 2013. évi V. törvény, az Európai Parlament és Tanács 2016. április 27-i (EU) 2016/679. Rendelete a természetes személyeknek a személyes adatok kezelése tekintetében történő védelméről és az ilyen adatok szabad áramlásáról, valamint a 95/46/EK irányelv hatályon kívül helyezéséről, az információs önrendelkezési jogról és az információ szabadságról szóló 2011. évi CXII. törvény, a szerzői jogról szóló 1999. évi LXXVI. törvény, valamint az elektronikus kereskedelmi szolgáltatások, valamint az információs társadalommal összefüggő szolgáltatások egyes kérdéseiről szóló 2001. évi CVIII. törvény – rendelkezései az irányadóak.

### Követelménylista 

|   Modul   | ID |  Név   |  Verzió  |
|-----------|----|--------|----------|
|Jogosultság| K1 | Bejelentkezés|1.0|
|Jogosultság| K2 | Regisztráció|1.0|
|Jogosultság| K3 | Jogosultsági szintek|1.0|
|Modifikáció| K4 | Elfelejtett felhasználónév/jelszó|1.0|
|Felület| K5 | Scoreboard|1.0|
|Felület| K6 | Játék|1.0|
|Felület| K7 | Kontakt|1.0|
|Felület| K8 | User felület|1.0|
|Adatbázis| K9 | Adatbázis rendszer|1.0|
|Szerver| K10 | Szerver rendszer|1.0|

### Kapcsolat

Az Oldal támogatását az Üzemeltető végzi munkanapokon, 8:00 és 16:00 között. Az Oldal működésével kapcsolatban a Felhasználó a RFT_Tetris@gmail.com e-mail címre küldheti kérdéseit, amelyre az Üzemeltető a fenti időszakban válaszol. Forduljon hozzánk teljes bizalommal.

### Kifejtés 

#### ID

- K1  A felhasználó a "Bejelentkezés" gombbal be tud jelentkezni a megadott felhasználónév és jelszó párossal. Ha bármelyik mező hiányzik, vagy hibásan van kitöltve, azt tudatja velünk a rendszer.

- K2  A "Regisztráció" gombra kattintva a felhasználó megadhatja az oldal használatához szükséges adatokat: "Felhasználó" mezőbe egy egyedi felhasználónevet; "e-mail" mezőbe a saját érvényes e-mail címét; "Jelszó" mezőbe egy egyedi kulcsszót, amit harmadik személynek semmiféleképpen nem adhatunk ki.
Ha bármelyik mező hiányzik, vagy hibásan van kitöltve, azt tudatja velünk a rendszer.

- K3  Felhasználói-Rendszerhozzáférés, elmentésre kerül az elért legmagasabb pontszáma, látható más játékosok számára.

- K4 Ha a felhasználó elfelejtette a felhasználónevét vagy jelszavát, akkor ezzel az opcióval egy Adminhoz tud fordulni e-mail címen keresztül.

- K5 Egy lista a pontokról (legmagasabb pontszám).

- K6 A felhasználónak lehetősége van a játékot elkezdeni a megveleő gombra kattintva.

- K7 Ez egy információs felület, amin keresztül a felhasználók hozzáférhetnek az oldalt szerkeztő csapattagok nevéhez.

- K8 Ez egy felület az user fiókkal rendelkező felhasználók számára. Tartalmazza az elért pontszámokat.

- K9 Adatbázis kapcsolat megtervezése és létrehozása.

- K10 Szerveroldal megtervezése, adatbázis - felhasználó közötti kommunikáció megvalósítása, autentikáció. 