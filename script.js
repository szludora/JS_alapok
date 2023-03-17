window.addEventListener("load", init);

function init(){
    console.log("hi");
    elsof();
    masodik();
    harmadik();
    negyedik();
    ötödik();
    hatodik();
    hetedik();
    kilencedik();
   
}

function elsof() {
    console.log("1.feladat");
    // const ELEM = document.querySelectorAll("section:nth-child(1) h2")[0]
    // console.log(ELEM)
    // console.log(ELEM.innerHTML)
    const ELEM2 = document.querySelector("section h2")
    
    console.log(ELEM2)
}

function masodik() {
  console.log("2. feladat")
  const ELEM = document.getElementById("ide")
  ELEM.innerHTML += `<p>Jó reggelt!</p>`
  console.log(ELEM.innerHTML)
}
function harmadik() {
  console.log("3. feladat")
  const ELEM=document.querySelector(".ide")
  ELEM.innerHTML += `<p>Jó reggelt! :D</p>`
  console.log(ELEM.innerHTML)
}

function negyedik(){
  console.log("4. feladat")
  const ELEM = document.querySelector(".lista")
  let szam;
  ELEM.innerHTML += `<ul>`
  for (let i = 0; i < 5; i++) {
    szam = Math.floor((Math.random()*21) + 10)
    ELEM.innerHTML += `<li>${szam}</li>`
  }
  ELEM.innerHTML+= `</ul>`
}

function ötödik(){
  console.log("5. feladat")
  const LISTAELEM = document.querySelector(".lista")
  LISTAELEM.classList.add("formazott")
}

function hatodik(){
  console.log("6. feladat")
  const LISTA = document.querySelector(".lista")
  LISTA.addEventListener("click", hatodik2)
}

function hatodik2(){
  const LISTA = document.querySelector(".lista")
  szoveg = LISTA.innerHTML;
  LISTA.innerHTML = "";
  LISTA.classList.remove("formazott")
  const KATTDIV = document.querySelector(".kattintasutan")
  KATTDIV.innerHTML = szoveg;
  KATTDIV.classList.add("formazott")
}

function hetedik(){
  console.log("7. feladat")
  const SECTION = document.querySelector(".feladat")
  SECTION.classList.add("gombEsKep")
  SECTION.innerHTML += `<button>OK</button>`
  const GOMB = document.querySelector(".feladat button")
  GOMB.addEventListener("click", add)

  function add(){
    SECTION.innerHTML += `<div><img  class="envagyok" src="kep.jpg" alt=""></div>`
    const IMG = document.querySelector(".envagyok")
    nyolcadik();
  }
}

function nyolcadik(){
  console.log("8. feladat")
  const KEP = document.querySelector(".envagyok")
  KEP.addEventListener("mouseover", ramegy)
  KEP.addEventListener("mouseout", lemegy)
  function ramegy(){

    KEP.classList.add("nagyit")
  }
  function lemegy(){
    KEP.classList.remove("nagyit")
  }
}

function kilencedik(){
  const ELEM = document.querySelectorAll(".elem")

  for (let i = 0; i < ELEM.length; i++) {
    ELEM[i].addEventListener("click", function() {beleir(i);})
    
  }

  function beleir(i){
    const tartalom = ELEM[i].innerHTML
    const MEGJELENIT = document.querySelector(".megjelenito")
    MEGJELENIT.innerHTML += `${tartalom}`
  }
}
