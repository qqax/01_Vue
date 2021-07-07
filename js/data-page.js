import theme from "./theme.js";

theme.coolUpdate();

window.addEventListener('storage', (e) => {
    theme.coolUpdate();
})

$(function(){
    var includes = $('[data-include]');
    //document.querySelector("[data-include]").innerText;
    jQuery.each(includes, function(){
        var file = 'components/' + $(this).data('include') + '.html';
        $(this).load(file);
    });
});

let peoples = [];
let cupPeoples = [];
let nextPeoplesPage;
let prevPeoplesPage;

function Personage(pers) {
    return `<div class="personage-item_container" id="pers_${pers.i}" style="flex: 1; transform: translateY(70%)">
        <h5 style="margin: 0 auto">${pers.name}</h5>
        <p>Родился в ${pers.birth_year}</p>    
    </div>`;
}

function drawPersonages(startIndex=0, endIndex=3) {
    cupPeoples = peoples.slice(startIndex, endIndex);

    const HTMLPeoples = cupPeoples.map(el => Personage(el));

    $('.personages_container')[0].innerHTML = HTMLPeoples.join('');

    $('.personage-item_container').on('click', function() {
        if (this.style.transform === "translate(0%, 10%) matrix(1, 0, 0, 1, 0, 0)") {
            TweenMax.to(this, 0.6, {y:'70%', ease: Power4.easeOut});
        } else {
            TweenMax.to(this, 0.6, {y:'10%', ease: Back.easeOut});
        }
    });
}

const load = async function(url, startIndex=0, endIndex=3) {
    let {next, previous, results} = await fetch(url).then(res => res.json());

    nextPeoplesPage = next;
    prevPeoplesPage = previous;

    peoples = results.map( (el, i) => {
        el.i = i;
        return el;
    });

    drawPersonages(startIndex, endIndex);
}

window.onload = () => load("https://swapi.dev/api/people");

document.getElementById('next').addEventListener('click', () => {
    paginatation(cupPeoples[cupPeoples.length - 1].i, 1, 4, nextPeoplesPage, peoples.length-1);
});

document.getElementById('prev').addEventListener('click', () => {
    paginatation(cupPeoples[0].i, -3, 0, prevPeoplesPage, 0,9, 10);
});

function paginatation(targetInCurrentCup, firstTargetIndex, secondTargetIndex, peoplesPage, check , startIndex= 0, endIndex = 3) {
    if (targetInCurrentCup !== check) {
        drawPersonages(targetInCurrentCup + firstTargetIndex, targetInCurrentCup + secondTargetIndex);
    } else if (peoplesPage) {
        load(peoplesPage, startIndex, endIndex);
    }
}