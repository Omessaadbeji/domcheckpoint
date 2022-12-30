var items = document.getElementsByTagName("i");
items[0].addEventListener("click", function f1() {
  if (items[0].style.color == "black") items[0].style.color = "red";
  else items[0].style.color = "black";
});
items[1].addEventListener("click", function f1() {
  if (items[1].style.color == "black") items[1].style.color = "red";
  else items[1].style.color = "black";
});
items[2].addEventListener("click", function f1() {
  if (items[2].style.color == "black") items[2].style.color = "red";
  else items[2].style.color = "black";
});
var butt = document.getElementsByClassName("minus-btn");
var butt2 = document.getElementsByClassName("plus-btn");
var price = document.getElementsByClassName("price");
var Q = document.getElementsByClassName("Quant");
var dlete = document.getElementsByClassName("delete");
var iitem = document.getElementsByClassName("Item");
var total = document.getElementById("finalPrice");
var count = 1;
var prix = Number(price[0].textContent);
var count1 = 1;
var prix1 = Number(price[1].textContent);
var count2 = 1;
var prix2 = Number(price[2].textContent);
butt[0].addEventListener("click", function f2() {
  if (Q[0].value > 1) {
    count -= 1;
    Q[0].value = count;
    prix = 1379 * count;
    price[0].innerHTML = prix;
    total.value = prix + prix1 + prix2;
  }
});
butt2[0].addEventListener("click", function f3() {
  count += 1;
  Q[0].value = count;
  prix = 1379 * count;
  price[0].innerHTML = prix;
  total.value = prix + prix1 + prix2;
});

butt[1].addEventListener("click", function f12() {
  if (Q[1].value > 1) {
    count1 -= 1;
    Q[1].value = count1;
    prix1 = 176 * count1;
    price[1].innerHTML = prix1;
    total.value = prix + prix1 + prix2;
  }
});
butt2[1].addEventListener("click", function f13() {
  count1 += 1;
  Q[1].value = count1;
  prix1 = 176 * count1;
  price[1].innerHTML = prix1;
  total.value = prix + prix1 + prix2;
});

butt[2].addEventListener("click", function f22() {
  if (Q[2].value > 1) {
    count2 -= 1;
    Q[2].value = count2;
    prix2 = 249 * count2;
    price[2].innerHTML = prix2;
    total.value = prix + prix1 + prix2;
  }
});
butt2[2].addEventListener("click", function f23() {
  count2 += 1;
  Q[2].value = count2;
  prix2 = 249 * count2;
  price[2].innerHTML = prix2;
  total.value = prix + prix1 + prix2;
});
dlete[0].addEventListener("click", function ff() {
  iitem[0].remove();
  prix = 0;
  total.value = prix + prix1 + prix2;
});
dlete[1].addEventListener("click", function ff1() {
  iitem[1].remove();
  prix1 = 0;
  total.value = prix + prix1 + prix2;
});
dlete[2].addEventListener("click", function ff2() {
  iitem[2].remove();
  prix2 = 0;
  total.value = prix + prix1 + prix2;
});
