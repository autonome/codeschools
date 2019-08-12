var Xray = require('x-ray');
var x = Xray();

var url = 'https://www.coursereport.com/schools';

x(url, 'ul#schools li', [{
  title: 'div.school-header a',
  coursereport: 'a:first-of-type@href',
  email: x('a:first-of-type@href', 'li[class=email]'),
  website: x('a:first-of-type@href', 'li[class=url]'),
  type: x('a:first-of-type@href', '.school-tracks a'),
  /*
  more: x('a:first-of-type@href', [{
    website: 'li[class=url] a@href',
    email: 'li[class=email] a',
    type: '.school-tracks a'
  }]),
  */
  locations: 'span.location',
  rating: '.rating-number',
}])
  .paginate('span.next a@href')
  //.limit(1)
  //.delay(1000)
  .write('results.json')
