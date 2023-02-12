function sıfır() {
  bir = document.getElementById("sıfır").value; // id ile aldıgım degerin valu su
  document.getElementById("input").value += "0"; // inputun valusuna ekledim += 1 anladım salih
}
function Bir() {
  bir = document.getElementById("bir").value; // id ile aldıgım degerin valu su
  document.getElementById("input").value += "1"; // inputun valusuna ekledim += 1 anladım salih
}
function iki() {
  document.getElementById("input").value += "2";
}
function uc() {
document.getElementById("input").value += "3";
}
function dort() {

  document.getElementById("input").value += "4";
}
function bes() {
  document.getElementById("input").value += "5"; // degiştir işte sırayla teker teker
}
function altı() {

  document.getElementById("input").value += "6";
}
function yedi() {
  document.getElementById("input").value += "7";
}
function sekiz() {
;
  document.getElementById("input").value += "8";
}
function dokuz() {
  document.getElementById("input").value += "9";
}
var sayi1=0;
var sayi2=0;
var sonuc=0;
var islem;
function toplama()
{

  var deger =   document.getElementById("input").value;
    sayi1 = Number(deger);
  document.getElementById("input").value="";
  islem='+';
}
function cıkar()
{

  var deger =   document.getElementById("input").value;
    sayi1 = Number(deger);
  document.getElementById("input").value="";
  islem='-';
}
function carp()
{

  var deger =   document.getElementById("input").value;
    sayi1 = Number(deger);
  document.getElementById("input").value="";
  islem='x';
}
function bol()
{

  var deger =   document.getElementById("input").value;
    sayi1 = Number(deger);
  document.getElementById("input").value="";
  islem='/';
}
function kalan()
{
  var deger =   document.getElementById("input").value;
    sayi1 = Number(deger);
  document.getElementById("input").value="";
  islem='%';
}
function sonucum()
{
  var deger2 =   document.getElementById("input").value;
  sayi2 = Number(deger2);
  if (islem == '+') {
    sonuc = sayi1+sayi2;
  }
  if (islem == '-') {
    sonuc = sayi1-sayi2;
  }
  if (islem == 'x') {
    sonuc = sayi1*sayi2;
  }
  if (islem == '/') {
    sonuc = sayi1/sayi2;
  }
  if (islem == '%') {
    sonuc = sayi1%sayi2;
  }
  document.getElementById("input").value= sonuc;
}
function tumsil()
{
 document.getElementById("input").value=null;
}
function sil()
{
  var yazi=document.getElementById("input").value;
var yazi2 = yazi.slice(0, -1);
document.getElementById("input").value=yazi2;
}



















//vgh
