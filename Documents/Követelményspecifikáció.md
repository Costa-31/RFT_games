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
