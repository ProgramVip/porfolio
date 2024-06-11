$(document).ready(function(){
    $('.article__tabs-btn').on('click',function (){
        $('.article__tabs-btn').removeClass('article__tabs-btn--active');
        $(this).addClass('article__tabs-btn--active');
        $('.article__tabs-content').removeClass('article__tabs-content--active');
        $('.article__tabs-content[data-id=' + $(this).attr('data-id') +']').addClass('article__tabs-content--active');
    });
    $('.article__share-itemlink--copy-url').on('click',function(){
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val(document.location).select();
        document.execCommand("copy");
        $temp.remove();
        $(this).addClass('article__share-itemlink--active')
    });
});