// here we make a function called makeMarquee
function makeMarquee() {
  const title = 'FIFTY Music Festival — November 10–12, Desert Valley';
  // an array is a list of things
  // ['lawrence', 'rik', 'milan', 'ryan', 'adam', 'krista']
  // here we make a new empty array with 50 spaces in it
  // then we fill it with the text from our title (50 times)
  // we then join them all together as one text string using a ' — '
  const marqueeText = new Array(50).fill(title).join(' — ');
  // querySelector and querySelectorAll are the same as $ in jQuery
  const marquee = document.querySelector('.marquee span');
  // using innerHTML lets us set the content inside an element
  marquee.innerHTML = marqueeText;
}

// here we actually run our makeMarquee function
makeMarquee();
