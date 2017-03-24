$.jribbble.setToken('0cd1ef6639b1a1d539d62e32712fa8568de32815169192bb33ffd7c698ccb64e');

$.jribbble.users('fernando').shots({
  per_page: 9
}).then(function(shots) {
      var html = [];

      shots.forEach(function(shot) {
        // See the Dribbble docs for all available shot properties.
        html.push('<li class="shots--shot shots--reveal">');
        html.push('<a href="' + shot.html_url + '">');
        html.push('<img src="' + shot.images.normal + '">');
        html.push('</a></li>');
      });

      $('.shots').html(html.join(''));
    });

var list = ["👽", "👾", "🤖", "🎃", "✌", "🤘", "🖖"];

function shuffle(array) {
  var i = array.length,
  j = 0,
  temp;

  while(i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array[0];
}

// function getRandomEmoji(list) {
//   return list[Math.floor(list.length * Math.random())];
// }

document.getElementById("emoji").innerHTML = shuffle(list);