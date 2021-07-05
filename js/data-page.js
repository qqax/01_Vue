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