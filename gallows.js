var password = "Bez pracy nie ma kołaczy";
password = password.toUpperCase();

var length = password.length;
var loses = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

var password1 = "";

for (i = 0; i < length; i++) {
  if (password.charAt(i) == " ") password1 = password1 + " ";
  else password1 = password1 + "-";
}

function showPassword() {
  document.getElementById("board").innerHTML = password1;
}

window.onload = start;

var letter = new Array(35);

letter[0] = "A";
letter[1] = "Ą";
letter[2] = "B";
letter[3] = "C";
letter[4] = "Ć";
letter[5] = "D";
letter[6] = "E";
letter[7] = "Ę";
letter[8] = "F";
letter[9] = "G";
letter[10] = "H";
letter[11] = "I";
letter[12] = "J";
letter[13] = "K";
letter[14] = "L";
letter[15] = "Ł";
letter[16] = "M";
letter[17] = "N";
letter[18] = "Ń";
letter[19] = "O";
letter[20] = "Ó";
letter[21] = "P";
letter[22] = "Q";
letter[23] = "R";
letter[24] = "S";
letter[25] = "Ś";
letter[26] = "T";
letter[27] = "U";
letter[28] = "V";
letter[29] = "W";
letter[30] = "X";
letter[31] = "Y";
letter[32] = "Z";
letter[33] = "Ż";
letter[34] = "Ź";

function start() {
  var divContent = "";

  for (i = 0; i <= 34; i++) {
    var element = "lit" + i;
    divContent =
      divContent +
      '<div class="letters" onclick="check(' +
      i +
      ')" id="' +
      element +
      '">' +
      letter[i] +
      "</div>";
    if ((i + 1) % 7 == 0)
      divContent = divContent + '<div style="clear:both;"></div>';
  }
  document.getElementById("alphabet").innerHTML = divContent;

  showPassword();
}

String.prototype.setElement = function(place, bid) {
  if (place > this.length - 1) return this.toString();
  else return this.substr(0, place) + bid + this.substr(place + 1);
};

function check(nr) {
  var checked = false;

  for (i = 0; i < length; i++) {
    if (password.charAt(i) == letter[nr]) {
      password1 = password1.setElement(i, letter[nr]);
      checked = true;
    }
  }
  if (checked == true) {
    yes.play();
    var element = "lit" + nr;
    document.getElementById(element).style.background = "#003300";
    document.getElementById(element).style.color = "#00C000";
    document.getElementById(element).style.cursor = "default";
    document.getElementById(element).style.border = "3px solid #00C000";
    showPassword();
  } else {
    no.play();
    var element = "lit" + nr;
    document.getElementById(element).style.background = "#330000";
    document.getElementById(element).style.color = "#C00000";
    document.getElementById(element).style.cursor = "default";
    document.getElementById(element).style.border = "3px solid #C00000";
    document.getElementById(element).setAttribute("onclick", ";");

    loses++;
    var picture = "img/s" + loses + ".jpg";
    document.getElementById("gallow").innerHTML =
      '<img src="' + picture + '"alt=""/>';
  }

  if (password == password1)
    document.getElementById("alphabet").innerHTML =
      "Wygrana !</br> " +
      password +
      '<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';

  if (loses >= 9)
    document.getElementById("alphabet").innerHTML =
      "Przegrana...</br> " +
      password +
      '<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';

  showPassword();
}
