$(function(){
    var includes = $('[data-include]');
    //document.querySelector("[data-include]").innerText;
    jQuery.each(includes, function(){
        var file = 'components/' + $(this).data('include') + '.html';
        $(this).load(file);
    });
});

import theme from "./theme.js";

document.addEventListener('DOMContentLoaded', () => {
    let sColor = localStorage.getItem('secondaryColor');
    let themeType = localStorage.getItem('themeType');

    if (sColor && themeType) {
        theme.secondaryColor = sColor;
        theme.themeType = themeType;
    }

    theme.coolUpdate();
});

$('.menu-btn').on('click', function () {
   $('.menu-wrapper').slideToggle('slow');
});

let editPopup = document.querySelector('.edit-popup');
let editPopupSwitcher = false;

$('#edit').on('click', function () {
    this.classList.remove('pulse');
    editPopupSwitcher = !editPopupSwitcher;

    if (editPopupSwitcher) {
        TweenMax.to(editPopup, 1, {x: '2%', display: 'block', height: '65vh', ease: Back.easeOut});
    } else {
        TweenMax.to(editPopup, 1, {x: '-200%', display: 'block', height: '0vh', ease: Power3.easeOut});
    }
});

$('.content-wrapper').on('click', () => {
    if (editPopupSwitcher) {
        editPopupSwitcher = !editPopupSwitcher;
        TweenMax.to(editPopup, 1, {x: '-200%', display: 'block', height: '0vh', ease: Power3.easeOut});
    }
});

let preview = $('.preview-wrapper');
let themeSelects = document.querySelectorAll('.theme-select');

let previewChildes = function () {
    let nodes = [];

    let progressLine = $('.progress-line');

    nodes.push(progressLine[progressLine.length - 1]);
    nodes.push($('.preview-wrapper>a')[0]);

    return nodes;
};

let themePreview = {
    themeType: 'indigo-theme',
    secondaryColor: '4ebdd4',
};

$('.theme-select').on('click', function () {
    themeSelects.forEach(el => {
        el.classList.remove('selected-theme');
    });

    this.classList.add('selected-theme');

    if (this.id === 'indigo') {
        preview[0].classList.value = 'preview-wrapper indigo-theme';
        themePreview.themeType = 'indigo-theme';
    } else {
        preview[0].classList.value = 'preview-wrapper black-theme';
        themePreview.themeType = 'black-theme';
    }
});

$('.radio-item>label>span').on('click', (e) => {
    previewChildes().forEach(el => el.style.backgroundColor = e.target.style.color);
    themePreview.secondaryColor = e.target.style.color;
});

$('#save-theme-btn').on('click', () => {
    // theme.themeType = themePreview.themeType;
    // theme.secondaryColor = themePreview.secondaryColor;

    localStorage.secondaryColor = themePreview.secondaryColor;
    localStorage.themeType = themePreview.themeType;
    theme.coolUpdate();
});