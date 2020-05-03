$('.burger').on('click', function(e) {
    e.preventDefault();
    $('.menu_btn').toggleClass('menu_active')
    $('.nav').toggleClass('menu_active')
})