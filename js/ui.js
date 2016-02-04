/**
 * Created by yarik_000 on 10.11.2014.
 */
$(document).ready(function () {
    $('.format-paper').click(function (){
        $('div.format-paper').removeClass('selected-format-paper');
       /* $(this).css('background-color', '#08c');*/
        $(this).addClass('selected-format-paper');
        $('#label-format-selected').addClass('selected-items');
        $('#label-format-selected').removeClass('unselected-items');
        $('#label-format-selected').empty();
        $('#label-format-selected').append($('.selected-format-paper').attr('id'));
    });

    $('.color-number').click(function (){
        $('#label-color-selected').addClass('selected-items');
        $('#label-color-selected').removeClass('unselected-items');
        $('#label-color-selected').empty();
        $('#label-color-selected').append($('input[name = "color-scheme"]:checked').attr('value'));
    });

    $('.material-kind').click(function (){
        $('#label-material-selected').addClass('selected-items');
        $('#label-material-selected').removeClass('unselected-items');
        $('#label-material-selected').empty();
        $('#label-material-selected').append($('input[name = "material"]:checked').attr('value'));
    });

    $('input[name = "quantity"]').keyup(function (){
        $('#label-quantity-selected').addClass('selected-items');
        $('#label-quantity-selected').removeClass('unselected-items');
        $('#label-quantity-selected').empty();
        $('#label-quantity-selected').text($('input[name = "quantity"]').val());
    });

    $('input[name = "bends"]').keyup(function (){
        $('#label-bends-selected').addClass('selected-items');
        $('#label-bends-selected').removeClass('unselected-items');
        $('#label-bends-selected').empty();
        $('#label-bends-selected').text($('input[name = "bends"]').val());
    });


});

function saveResults() {
    $('.field-history-btn').append('<div class="alert alert-info" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>    <span class="badge badge-success">1000 грн</span> А3, Цвет 3+1, Глянцевая 100 г/м2, 1000 шт, УФ лакировка 1+1<br><br>    <button class="btn btn-primary">Отправить заказ</button>&nbsp;&nbsp; <button class="btn btn-success">Изменить заказ</button>    </div>');
};