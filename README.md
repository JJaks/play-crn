This is a [Next.js](https://nextjs.org/) simulation/game written in Typescript and deployed on the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) made for gotoAndPlay.


# English
## Information about the app

I call it a simulation/game but more or less it's something in between a simulation and a random object generator with just some bells and whistles.

**Original task**

Originally the task had an app that would be inspired by the COVID-19 (SARS-CoV-2) pandemic and was as follows:
1. A simple page that asks the user for an input
2. Input is passed on to the app and the app will generate that amount of objects (boxes, circles - referred to as people)
3. Objects would randomly avoid each other and the cursor

**Added features**

1. Infection (Objects would get infected if they bump into each other)
2. Cure (infected objects would be cured after some time as the virus goes through it's lifecycle)
3. Infection spreads with a delay (there's always an incubation period with a virus)
4. You can change the amount of infected there are at the start

**How it works?**

Well good you asked, it basically works like this: User enters a random number of objects(people) they want.
Then the system renders the amount of random objects that will start moving around randomly, you choose how many of those objects are infected (it will change color).
When the infected object comes closer to another object it has a chance to infect them and so on the infection spreads.
Infection has multiple states that are displayed by the color of the object (red and dark green).

Red state is where the object is most infectious (just like SARS-CoV-2) followed by a second stage where the object is less infectious but can still infect others.
After some time, the infected objects in the second stage will be cured (the virus's lifecycle comes to an end).

Objects will try to avoid other objects and the cursor but sometimes they may hit others, this is done on purpose to simulate real life (sadly all of us don't follow the rules of keeping distance :( ). After a infected object has hit healthy object, it will take some time (about 2 seconds) for said object to get sick (this was made to simulate real life).

## About the development cycle

This project was started on 22.06.2021 and was finished on 28.06.2021.
Extra features were added on 29.06.2021 to finalize the app.

Collectively this took about 8-11 hours to make and finalize.
Most of that time was allocated towards trying to learn tsParticles library and it's non-existant documentation.

## Technologies used

1. Next.JS
2. React
3. Typescript
4. HTML5
5. CSS
6. tsParticles library

# Estonian
## Veebirakenduse info

Tegu on veebirakendusega, mis simuleerib päriselu koroona viirust oma nakkuvuse ja inimeste käitumise poolest.

**Originaalne ülesanne**

Algselt oli ülesandeks inspireerituna koroona olukorrast luua mäng:
1. Kus ekraanile genereeritakse x arv inimesi/blokki/kasti
2. Objektide arv peaks olema muudetav, lehele tulles peaks saama selle sisestada
3. Objektid peaksid vältima teineteist ja kursorit

**Lisatud funktsionaalsus**

1. Nakatamine - Kuigi algselt pidid kõik objektid teineteist vältima, mõtlesin, et oleks huvitav teha nii, et vahepeal objektid ei suuda teineteist vältida ja kui juhuslikult üks neist objektidest on nakatunud (haige), siis teist objekti puudutades nakatab ta teist objekti.
2. Paranemine (nakatunud objektid tervenevad ajapikku, simuleerimaks päriselus koroona viiruse käiku)
3. Viirustel on alati peite periood, kus nakatunud inimesel puuduvad sümptomid, sama on ka siin
4. Kasutaja saab valida mitu nakatunud objekti simulatsiooni alguses on

**Kuidas see töötab?**

Väga hea, et seda küsisite! Praktiliselt töötab kogu süsteem nii: kasutaja sisestab suvalise arvu mitut objekti(inimest) ta soovib simuleerida.
Süsteem siis genereerib vastavad objektid ning need objektid hakkavad suvaliselt ringi liikuma, kuid neist mõned on nakatunud (seda on näha vastavalt objekti värvist).
Kui nakatunud objekt liigub liiga ligidale mõnele teisele objektile, siis ta nakatab teist objekti ning käesoleva objekti värv ka muutub ning nii see nõiaring käib, kuni kas viirus saab läbi (nakatunud objektid paranevad ja uusi nakkusi juurde ei tule) või nakatab kõik objektid. Nakatunud objektidel on kaks staadiumi, mis on väljatoodud vastavalt nende värvidele (punane - värskelt nakatunu, tumeroheline - paranev objekt kelle sümptomid puuduvad, aga on võimeline teisi nakatama)

Punane staadium on kõige nakkusohtlikum, teine staadium on vähem nakkavam, kuid siiski selles staadiumis olevad objektid suudavad nakatada teisi objekte. 

Objektid üritavad teineteist ja kursorit vältida, kuid vahepeal võivad teineteisega ikka kokku põrgata, mis annab viirusele parema võimaluse levida. See on selleks, et simuleerida seda, kuidas ka päriselus kõik inimesed ei pea kinni reeglitest, et hoida distantsi.

## Arenduskäigust

Projektiga alustati 22.06.2021 ja lõpule sai 28.06.2021.
Lisafunktsioonid sai lisatud 29.06.2021 rakenduse viimistlemiseks.

Kokku läks kogu protsessi jaoks 8 kuni 11 tundi, millest enamus läks kasutatud tsParticles dokumentatsiooni lugemiseks ja selgeks saamiseks (pssst...seda dokumentatsiooni oli raske leida ja veel raskem oli sellest aru saada).

## Tehnoloogiad mida kasutati

1. Next.JS
2. React
3. Typescript
4. HTML5
5. CSS
6. tsParticles

