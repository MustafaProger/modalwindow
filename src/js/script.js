"use strict"

$(document).ready(function (){
    $(".form__phone").mask("+7 (999) 999-99-99")

    //modal
    $('[data-modal=call]').on('click', function() {
        $('.overlay, #call').fadeIn();
        $("body").toggleClass('modal-open');
    })

    $('[data-modal=request]').on('click', function() {
        $('.overlay, #request').fadeIn();
        $("body").toggleClass('modal-open');
    })

    $('.modal__close').on('click', function() {
        $('.overlay, #call, #request').fadeOut();
        $('body').removeClass('modal-open')
    })
});
