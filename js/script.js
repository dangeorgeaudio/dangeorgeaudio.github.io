$(document).ready(function(){
    $('.category_item').click(function(){
        var category = $(this).attr('id');
        if(category == 'all'){
            $('.portfolio').addClass('hide');
            setTimeout(function(){
                    $('.portfolio').removeClass('hide');
            }, 300);
        } else {
            $('.portfolio').addClass('hide');
            setTimeout(function(){
                    $('.' + category).removeClass('hide');
            }, 300);
        }
    });
});