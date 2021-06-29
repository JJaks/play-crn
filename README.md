This is a [Next.js](https://nextjs.org/) game written in Typescript and deployed on the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

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

**How it works?**

Well good you asked, it basically works like this: User enters a random number of objects(people) they want.
Then the system renders the amount of random objects that will start moving around randomly, one of those objects is infected (it will change color).
When the infected object comes closer to another object it has a chance to infect them and so on the infection spreads.
Infection has multiple states that are displayed by the color of the object (red and dark green).

Red state is where the object is most infectious (just like SARS-CoV-2) followed by a second stage where the object is less infectious but can still infect others.
After some time, the infected objects in the second stage will be cured (the virus's lifecycle comes to an end).

Objects will try to avoid other objects and the cursor but sometimes they may hit others, this is done on purpose to simulate real life (sadly all of us don't follow the rules of keeping distance :( ).


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


