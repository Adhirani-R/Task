// Selecting all radio buttons

var submit = document.getElementById("btn")
var scored=document.getElementById("score__para")
var scorecard=document.querySelector(".scorecard")

submit.addEventListener("click",(event) => {
    event.preventDefault()
    var capital = document.querySelector('input[name="capital"]:checked');
    var planet = document.querySelector('input[name="Planet"]:checked')
    var mammal = document.querySelector('input[name="Mammal"]:checked')
    
    var score = 0
    if (capital && capital.value === "Paris") {
        score += 1;
    }
    if (planet && planet.value === "Mars") {
        score += 1
    }
    
    if (mammal && mammal.value === "Bluewhale") {
        score += 1;
    }
       
    scored.textContent="Score:" +score
    scorecard.style.top="5%"       
})
