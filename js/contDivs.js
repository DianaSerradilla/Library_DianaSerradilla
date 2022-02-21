var divs = document.getElementsByClassName("inner_enlace").length;
var resultado = document.getElementById("intro__contador");


if (divs >= 1) {
  resultado.innerHTML = divs + " loaded items ";

} else {
  resultado.innerHTML = "No items loaded.";

}