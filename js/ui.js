/**
 * Created by yarik_000 on 10.11.2014.
 */
$(document).ready(function () {
    $('.format-paper').click(function (){
        $('div.format-paper').removeClass('selected-format-paper');
       /* $(this).css('background-color', '#08c');*/
        $(this).addClass('selected-format-paper');
    });
});