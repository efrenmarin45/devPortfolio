const typewriter = new Typewriter('#typewriter', {
    loop: true,
    delay: 50
  });

  typewriter.typeString('<style="text-align: center">Hello, I\'m Efren Marin')
    .pauseFor(2500)
    .typeString('<br><style="text-align: center">I\'m a Front-end developer')
    .pauseFor(2500)
    .changeDeleteSpeed(5)
    .deleteChars(19)
    .typeString('Back-end developer')
    .pauseFor(2500)
    .deleteChars(19)
    .typeString('<strong> Full-Stack developer!<strong>')
    .pauseFor(2500)
    .deleteAll(5)
    .typeString('Welcome!')
    .pauseFor(10000)
    .deleteAll(5)
    .start();