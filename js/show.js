$(function () {
    $('.category-nav-item-1').hover(function () {
        $(this).find('.detailed').css('display','block')
    },function () {
        $(this).find('.detailed').css('display','none')
    })
}); 