var list = ["👽", "👾", "🤖", "🎃", "✌", "🤘", "🖖", "⚡", "🔥", "❄", "🍕", "🍔", "🌮", "🍩", "🍺",  "🎸", "🎮", "🚀", "🍗"];

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
