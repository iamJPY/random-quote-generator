// EXTRA CREDIT

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
  {
    quote: 'We are travelers on a cosmic journey, stardust, swirling and dancing in the eddies and whirlpools of infinity. Life is eternal. We have stopped for a moment to encounter each other, to meet, to love, to share. This is a precious moment. It is a little parenthesis in eternity.',
    source: 'Paulo Coelho',
    citation: 'The Alchemist',
    year: '1988',
    tag: 'Literature'
  },
  {
    quote: 'What surprises me most is “Man”, because he sacrifices his health in order to make money. Then he sacrifices money to recuperate his health. And then he is so anxious about the future that he doesn’t enjoy the present; The result being he doesn’t live in the present or the future; He lives as if he’s never going to die, and then he dies having never really lived.',
    source: 'Dalai Lama',
    tag: 'Life, Buddhism'
  },
  {
    quote: 'The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands in times of challenge and controversy',
    source: 'Martin Luther King Jr.',
    citation: 'Strength To Love',
    year: '1963',
    tag: 'Inspirational, Civil Rights'
  },
  {
    quote: 'Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure',
    source: 'Marianne Williamson',
    citation: 'A Return To Love: Reflections on the Principles of A Course in Miracles',
    year: '1992',
    tag: 'Inspirational'
  },
  {
    quote: 'Being realistic is the most commonly traveled road to mediocrity.',
    source: 'Will Smith',
    tag: 'Motivational, Comedian'
  },
  {
    quote: 'It is not that we have a short time to live, but that we waste a lot of it. Life is long enough, and a sufficiently generous amount has been given to us for the highest achievements if it were all well invested. But when it is wasted in heedless luxury and spent on no good activity, we are forced at last by death\'s final constraint to realize that it has passed away before we knew it was passing. So it is: we are not given a short life but we make it short, and we are not ill-supplied but wasteful of it...Life is long if you know how to use it',
    source: 'Seneca The Younger',
    citation: 'On The Shortness Of Life',
    tag: 'Philosophy'
  },
  {
    quote: 'You can fail at what you don\'t want, so you might as well take a chance on doing what you love',
    source: 'Jim Carrey',
    citation: 'Commencement Speech Maharishi University',
    year: '2014',
    tag: 'Inspirational, Comedian'
  },
  {
    quote: 'Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma — which is living with the results of other people’s thinking. Don’t let the noise of others’ opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary',
    source: 'Steve Jobs',
    citation: 'Stanford Commencement Address',
    year: '2005',
    tag: 'Inspirational, Business'
  },
  {
    quote: 'My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.',
    source: 'Maya Angelou',
    year: '2011',
    tag: 'Motivational, Poet'
  },
  {
    quote: 'It does not matter how slowly you go so long as you do not stop.',
    source: 'Confucius',
    year: '551 BC',
    tag: 'Philosophy'
  }
];

// Array of quotes that have been displayed once
var displayedQuotes = [];

// Selects a random quote object from the quotes array, then returns the randomly selected quote object
function getRandomQuote() {

  // If the quotes array is empty, reset (Once all quotes have been displayed once they can be cycled through again)
  if (!quotes.length) {
    quotes = displayedQuotes;
    displayedQuotes = [];
  }

  // Selects a random quote from the array, stores it in randomQuote variable
  // randomQuote is removed from the quotes array, and added to the displayedQuotes array (This is to allow each quote to display only once until ALL quotes have been displayed)
  // Returns the randomQuote
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length-1) + 1];
  var quoteIndex = quotes.indexOf(randomQuote)
  quotes.splice(quoteIndex, 1);
  displayedQuotes.push(randomQuote);

  return randomQuote;
}

// printQuote calls the getRandomQuote function and stores the returned quote object in a variable
// printQuote constructs a string containing the different properties of the quote object using the HTML template
function printQuote() {
  var randomQuote = getRandomQuote();

  var quote = randomQuote.quote;
  var source = randomQuote.source;
  var citation = randomQuote.citation;
  var year = randomQuote.year;
  var htmlString = '';

  // Display randomQuote properties only if they are defined in the randomQuote object
  if (!year && !citation) {
    htmlString = '<p class="quote">' + quote + '</p>' + '<p class ="source">' + source + '</p>';
  } else if (!year) {
    htmlString = '<p class="quote">' + quote + '</p>' + '<p class ="source">' + source + '<span class="citation">' + citation + '</span></p>';
  } else if (!citation) {
    htmlString = '<p class="quote">' + quote + '</p>' + '<p class ="source">' + source + '<span class="year">' + year + '</span></p>';
  } else {
    htmlString = '<p class="quote">' + quote + '</p>' + '<p class ="source">' + source + '<span class="citation">' + citation + '</span>' + '<span class="year">' + year + '</span></p>';
  }

  // Display the final HTML string to the page
  document.getElementById('quote-box').innerHTML = htmlString;

  // Log quote to console
  console.log(quote);

  // If the randomQuote length is more than 160 characters, make font size 35px
  if (quote.length > 200) {
    var quoteClass = document.getElementsByClassName('quote');
    quoteClass[0].style.fontSize = '40px';
  }

  // Change the background and button color to a random color each time the button is pressed
  changeBackgroundColor();
  changeButtonColor();

}

// When the quote changes, randomly change the background color of the page
function changeBackgroundColor () {
  var red = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  document.body.style.backgroundColor = rgbColor;
}

// When the quote changes, randomly change the background color of the button
function changeButtonColor () {
  var red = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  document.getElementById('loadQuote').style.backgroundColor = rgbColor;
}

// Refresh the quote after 30 seconds
setInterval(printQuote, 30000);
