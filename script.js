$(document).ready(function() {
    var randomNumber; 
    var randomQuote; 
    var randomAuthor;
    getQuote();
  function getQuote() {
    var quotes = [
    "What we think, we become.",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    "Hatred does not cease by hatred, but only by love.",
    "There are only two mistakes one can make along the road to truth; not going all the way, and not starting.",
    "It is better to conquer yourself than to win a thousand battles.",
    "It is better to travel well than to arrive.",
    "Even death is not to be feared by one who has lived wisely.",
    "With realization of one’s own potential and self-confidence in one’s ability, one can build a better world.",
    "If you can, help others; if you cannot do that, at least do not harm them.",
    "This is my simple religion. Our own brain, our own heart is our temple; the philosophy is kindness.",
    "Look at situations from all angles, and you will become more open.",
    "It is our mind, and that alone, that chains us or sets us free.",
    "Light must come from inside. You cannot ask the darkness to leave; you must turn on the light.",
    "There is no armor like perseverance.",
    "Let the sky outside awake a sky inside your mind.",
    "Do not let the behavior of others destroy your inner peace.",
    "Just one small positive thought in the morning can change your whole day.",
    "If it can be solved, there's no need to worry, and if it can't be solved, worry is of no use.",
    "Follow the three R's: - Respect for self. - Respect for others. - Responsibility for all your actions.",
    "When you transform your mind, everything you experience is transformed.",
    "The opportunity to experience yourself differently is always available.",
    "The bad news is you're falling through the air, nothing to hang on to, no parachute. The good news is, there's no ground.",
    "Be content with whatever you have and satisfied with whatever happens. Everything else will then fall naturally into place.",
    "Allow thoughts to arise and dissolve by themselves as a bird flies through the sky, leaving no trace.",
    "We are always in transition. If you can just relax with that, you'll have no problem.",
    "Becoming 'awake' involves seeing our confusion more clearly.",
    "Let yourself become that space that welcomes any experience without judgement.",
    "The epitome of the human realm is to be stuck in a huge traffic jam of discursive thought.",
    "You must personally accept the responsibility of improving your own life.",
    "This is bravery: using the challenge of daily life to sharpen our mind and open our heart.",
    "Movement is good for the body. Stillness is good for the mind.",
    "We humans have come to a crossroads in our history: we can either destroy the world or create a good future.",
    "The ultimate authority must always rest with the individual’s own reason and critical analysis."
    ]

    var authors = [
    " ~Buddha",
    " ~Buddha",
    " ~Buddha",
    " ~Buddha",
    " ~Buddha",
    " ~Buddha",
    " ~Buddha",
    " ~Dalai Lama",
    " ~Dalai Lama",
    " ~Dalai Lama",
    " ~Dalai Lama",
    " ~Dilgo Khyentse",
    " ~Sogyal Rinpoche",
    " ~Sogyal Rinpoche",
    " ~Sogyal Rinpoche",
    " ~Dalai Lama",
    " ~Dalai Lama",
    " ~Dalai Lama",
    " ~Dalai Lama",
    " ~Yongey Mingyur Rinpoche",
    " ~Yongey Mingyur Rinpoche",
    " ~Chogyam Trungpa",
    " ~HHDKR",
    " ~HHDKR",
    " ~Chogyam Trungpa",
    " ~Chogyam Trungpa",
    " ~Tsoknyi Rinpoche",
    " ~Chogyam Trungpa",
    " ~Chogyam Trungpa",
    " ~Sakyong Mipham",
    " ~Sakyong Mipham",
    " ~Sakyong Mipham",
    " ~Dalai Lama"
    ]

    randomNumber = Math.floor(Math.random() * (quotes.length));
    randomQuote = quotes[randomNumber];
    randomAuthor = authors[randomNumber];

    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);
}

    $("#tweet").on("click", function() {
        window.open("https://twitter.com/intent/tweet?text=" + randomQuote + randomAuthor);
    });

    $("#newQuote").on("click", function() {
      getQuote();
    });

});



