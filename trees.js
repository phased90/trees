var letters = {
  a: [" ### ",
      "#   #",
      "#####",
      "#   #",
      "#   #"],
  b: ["#### ",
      "#   #",
      "#### ",
      "#   #",
      "#### "],
  c: [" ### ",
      "#   #",
      "#    ",
      "#   #",
      " ### "],
  d: ["#### ",
      "#   # ",
      "#   #",
      "#   # ",
      "#### "],
  e: ["#####",
      "#    ",
      "#####",
      "#    ",
      "#####"],
  f: ["#####",
      "#    ",
      "#####",
      "#    ",
      "#    "],
  g: [" ### ",
      "#    ",
      "#  ##",
      "#   #",
      " ### "],
  h: ["#   #",
      "#   #",
      "#####",
      "#   #",
      "#   #"],
  i: ["#####",
      "  #  ",
      "  #  ",
      "  #  ",
      "#####"],
  j: ["#####",
      "   # ",
      "   # ",
      "#  # ",
      " ##  "],
  k: ["#   #",
      "#  # ",
      "###  ",
      "#  # ",
      "#   #"],
  l: ["#    ",
      "#    ",
      "#    ",
      "#    ",
      "#####"],
  m: ["#   #",
      "## ##",
      "# # #",
      "#   #",
      "#   #"],
  n: ["#   #",
      "##  #",
      "# # #",
      "#  ##",
      "#   #"],
  o: [" ### ",
      "#   #",
      "#   #",
      "#   #",
      " ### "],
  p: ["#### ",
      "#   #",
      "#### ",
      "#    ",
      "#    "],
  q: [" ##  ",
      "#  # ",
      "#  # ",
      "# ## ",
      " ## #"],
  r: ["#### ",
      "#   #",
      "#### ",
      "#  # ",
      "#   #"],
  s: [" ####",
      "#    ",
      " ### ",
      "    #",
      "#### "],
  t: ["#####",
      "  #  ",
      "  #  ",
      "  #  ",
      "  #  "],
  u: ["#   #",
      "#   #",
      "#   #",
      "#   #",
      " ### "],
  v: ["#   #",
      "#   #",
      " # # ",
      " # # ",
      "  #  "],
  w: ["#   #",
      "#   #",
      "# # #",
      "# # #",
      " # # "],
  x: ["#   #",
      " # # ",
      "  #  ",
      " # # ",
      "#   #"],
  y: ["#   #",
      " # # ",
      "  #  ",
      "  #  ",
      "  #  "],
  z: ["#####",
      "   # ",
      "  #  ",
      " #   ",
      "#####"],
  ' ': ["   ",
        "   ",
        "   ",
        "   ",
        "   "],
  '.': ["  ",
        "  ",
        "  ",
        "  ",
        "# "],
  '\'': [" #",
         " #",
         "  ",
         "  ",
         "  "],
  ':': ["   ",
        "#  ",
        "   ",
        "#  ",
        "   "],
  '-': ["     ",
        "     ",
        " ### ",
        "     ",
        "     "],
  '*': ["  #  ",
        " # # ",
        "# # #",
        " # # ",
        "  #  "],
  '%': ["##  #",
        "## # ",
        "  #  ",
        " # ##",
        "#  ##"],
  '_': ["     ",
        "     ",
        "     ",
        "     ",
        "#####"],
  '(': [" #  ",
        "#   ",
        "#   ",
        "#   ",
        " #  "],
  ')': ["  # ",
        "   #",
        "   #",
        "   #",
        "  # "],
  '!': ["  #  ",
        "  #  ",
        "  #  ",
        "     ",
        "  #  "],
  '+': ["  #  ",
        "  #  ",
        "#####",
        "  #  ",
        "  #  "],
  '=': ["     ",
        "#####",
        "     ",
        "#####",
        "     "],
  '/': ["    #",
        "   # ",
        "  #  ",
        " #   ",
        "#    "],
  '#': [" # # ",
        "#####",
        " # # ",
        "#####",
        " # # "],
  '?': [" ##  ",
        "#  # ",
        "  #  ",
        "     ",
        "  #  "],
  '"': [" # # ",
        " # # ",
        "     ",
        "     ",
        "     "],
  ',': ["  ",
        "  ",
        "  ",
        "  ",
        " #",
        "# "],
  '1': [" #   ",
        "##   ",
        " #   ",
        " #   ",
        " #   "],
  '2': [" ### ",
        "#   #",
        "  ## ",
        " #   ",
        "#####"],
  '3': ["####  ",
        "    # ",
        " ###  ",
        "    # ",
        "####  "],
  '4': ["   ## ",
        "  # # ",
        " #####",
        "    # ",
        "    # "],
  '5': ["#####",
        "#    ",
        "#### ",
        "    #",
        "#### "],
  '6': [" ### ",
        "#    ",
        "#### ",
        "#   #",
        " ### "],
  '7': ["#####",
        "   # ",
        "  #  ",
        "  #  ",
        "  #  "],
  '8': [" ### ",
        "#   #",
        " ### ",
        "#   #",
        " ### "],
  '9': [" ### ",
        "#   #",
        " ####",
        "    #",
        " ### "],
  '0': [" ### ",
        "#   #",
        "# # #",
        "#   #",
        " ### "]
}

var canvas = {
  array: [],
  width: 0,
  height: 0,
  init: function(w,h) {
    this.width  = w++; //drawable width does not include newlines
    this.height = h;

    this.array = Array(w);
    for (var i = 0; i < w; i++) {
      this.array[i] = Array(h);
    }
    for (var i = 0; i < w; i++) {
      for (var j = 0; j < h; j++) {
        this.array[i][j] = ((i == w-1) ? '\n' : ' ');
      }
    }
  },
  set: function(x,y,c) {
    c = c || '+';
    if (x >= 0 && y >= 0 && x < this.width && y < this.height) {
      this.array[x][y] = c;
    }
  },
  toString: function() {
    var output = "";
    for (var j = 0; j < canvas.height; j++) {
      for (var i = 0; i  <= canvas.width; i++) {
        output += this.array[i][j];
      }
    }
    return output;
  }
}

var tree = {
  'top'  : '^',
  'left' : '/',
  'right': '\\',
  'base' : '|'
}

function printLetter(x, y, l, c) {
  c = c || '#'
  var letter = letters[l]
  for (var j = 0; j < letter.length; j++) {
    for (var i = 0; i < letter[0].length; i++) {
      canvas.set(x+i, y+j, (letters[l][j][i] == ' ' ? ' ' : c));
    }
  }
}

function stringLength(s) {
  var length = 0;
  s = s.toLowerCase();
  for (var i = 0; i < s.length; i++) {
    length += letters[s[i]][0].length + 1;
  }
  return length;
}

function printWord(x, y, w) {
  w = w.toLowerCase();
  var offset = 0;
  for (var i = 0; i < w.length; i++) {
    printLetter(x+offset, y, w[i]);
    offset += letters[w[i]][0].length + 1;
  }
}

function printString(x,y,s) {
  s = s.toLowerCase();
  var words = s.split(" ");
  var offsetx = 0;
  var offsety = 0;
  for (var i = 0; i < words.length; i++) {
    if (x + offsetx + stringLength(words[i] + " ") < canvas.width) {
      printWord(x+offsetx, y+offsety, words[i]+" ");
    } else {
      offsetx = 0;
      offsety += 7;
      if ((y + offsety + 5) >= canvas.height) {
        return;
      }
      printWord(x, y+offsety, words[i]+" ");
    }
    offsetx += stringLength(words[i] + " ");
  }
}

function drawBox(x1, y1, x2, y2, c) {
  c = c || '+';
  if (x2 < x1) {
    var swap = x1;
    x1 = x2;
    x1 = swap;
  }
  if (y2 < y1) {
    var swap = y1;
    y1 = y2;
    y1 = swap;
  }
  for (var i = x1; i <= x2; i++) {
    canvas.set(i, y1, c);
    canvas.set(i, y2, c);
  }
  for (var i = y1; i <= y2; i++) {
    canvas.set(x1, i, c);
    canvas.set(x2, i, c);
  }
}

function drawLine(x1, y1, x2, y2, c) {
  if (x2 < x1) {
    var swapx = x1;
    var swapy = y1;
    x1 = x2;
    y1 = y2;
    x1 = swapx;
    x2 = swapy;
  }

  c = c || '+';
  var run    = x2 - x1;
  var rise   = y2 - y1;
  var slope  = rise/run; //couldn't resist
  if (x1 == x2) {
    if (y2 < y1) {
      var swap = y1;
      y1 = y2;
      y2 = swap;
    }
    for (var i = y1; i < y2; i++) {
      canvas.set(x1, y1 + i, c);
    }
    return;
  }
	var add    = 0;
  for (var i = 0; i < run; i++) {
    canvas.set(x1 + i, y1 + Math.round(add), c);
		add += slope;
  }
}

//x and y are center coordinates, r is radius
function drawCircle(x, y, r, c) {
  c = c || '#';
  var j = 0;
  for (var i = 0; i < r; i++) {
    j = Math.round(r * Math.sin(Math.acos(i / r)));
    console.log(`i = ${i}, j = ${j}`)
    canvas.set(x + i, y + j, c);
    canvas.set(x + i, y - j, c);
    canvas.set(x - i, y + j, c);
    canvas.set(x - i, y - j, c);
  }
}

//top left and bottom right corners of the tree's bounding box
function makeTree(x1, y1, x2, y2) {
  var width  = x2 - x1;
  var height = y2 - y1;
  var layerHeight = Math.round(height/width/2);
  var layers = Math.round(height/layerHeight);
  console.log("Height: " + height);
  console.log("Width: " + width);
  console.log("layers: " + layers);
  console.log("layerHeight: " + layerHeight);
  for (var i = 0; i < layers; i++) {
    for (var j = 0; j < layerHeight; j++) {
      canvas.set(x1 + j, y2 - j - (i * layerHeight), tree['left']);
      canvas.set(x2 - j, y2 - j - (i * layerHeight), tree['right']);
    }
  }
}

function applyBorder(c) {
  c = c || '#';
  drawBox(0, 0, canvas.width-1, canvas.height-1, c);
}

function lipsumTest() {
  printString(3,2, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum");
  $('#forest').html(canvas.toString());
}

function boxTest() {
  applyBorder('#');
  var step = Math.floor(canvas.width/11);
  for (var i = 0; i < 10; i++) {
    drawBox(5+i*step, 5, 5+step*(i+1), canvas.height - 10, 'O');
  }
  $('#forest').html(canvas.toString());
}

function checkerBoardTest() {
  var xStep = Math.round(canvas.width/15);
  var yStep = Math.round(canvas.height/15);
  for (var i = 1; i <= 15; i++) {
    drawLine(0, i*yStep, canvas.width-1, i*yStep, '.');
    drawLine(i*xStep, 0, i*xStep, canvas.height-1, ':');
  }
  $('#forest').html(canvas.toString());
}

function circleTest() {
  drawCircle(100, 25, 20);
}

$(window).on('load', function() {
  w = Math.floor($(window).width() / $('#forest').width());
  h = Math.floor($(window).height() / ($('#forest').height()/2));
  canvas.init(w,h);
  // checkerBoardTest();
  lipsumTest();
  // circleTest();
  applyBorder();
  $('#forest').html(canvas.toString());
});
