const typewriter = new Typewriter('#typewriter', {
    loop: true,
    delay: 50
  });

  typewriter.typeString('<style="text-align: center">Hello, I\'m Efren Marin')
    .pauseFor(2000)
    .typeString('<br><style="text-align: center">I\'m a Front-end developer')
    .pauseFor(2000)
    .changeDeleteSpeed(5)
    .deleteChars(19)
    .typeString('Back-end developer')
    .pauseFor(2000)
    .deleteChars(19)
    .typeString('<strong> Full-Stack developer<strong>')
    .pauseFor(4500)
    .deleteAll(5)
    .typeString('Let\'s Build Something Together')
    .pauseFor(7000)
    .deleteAll(5)
    .start();



$(window).on('beforeunload', function() {
  $('body').hide();
  $(window).scrollTop(0);
});
