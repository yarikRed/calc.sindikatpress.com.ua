/**
 * Created by yarik_000 on 10.11.2014.
 */

$(document).ready(function () {

    $('.format-paper').click(function (){
        $('div.format-paper').removeClass('selected-format-paper');
       /* $(this).css('background-color', '#08c');*/
        $(this).addClass('selected-format-paper');
        $('#label-format-selected-tab1').addClass('selected-items');
        $('#label-format-selected-tab1').removeClass('unselected-items');
        $('#label-format-selected-tab1').empty();
        $('#label-format-selected-tab1').append($('.selected-format-paper').data('format'));
    });

    $('.color-number').click(function (){
        $('#label-color-selected-tab1').addClass('selected-items');
        $('#label-color-selected-tab1').removeClass('unselected-items');
        $('#label-color-selected-tab1').empty();
        $('#label-color-selected-tab1').append($('input[name = "color-scheme"]:checked').attr('value'));
    });

    $('.material-kind').click(function (){
        $('#label-material-selected-tab1').addClass('selected-items');
        $('#label-material-selected-tab1').removeClass('unselected-items');
        $('#label-material-selected-tab1').empty();
        $('#label-material-selected-tab1').append($('input[name = "material"]:checked').attr('value'));
    });

    $('.varnish').click(function (){
        $('#label-varnish-selected-tab1').addClass('selected-items');
        $('#label-varnish-selected-tab1').removeClass('unselected-items');
        $('#label-varnish-selected-tab1').empty();
        $('#label-varnish-selected-tab1').append($('input[name = "laminat"]:checked').attr('value'));
        $('#label-varnish-selected-tab1').append($('input[name = "varnish"]:checked').attr('value'));
        $('#label-varnish-selected-tab1').append($('input[name = "uf-varnish"]:checked').attr('value'));
    });

    $('input[name = "quantity"]').keyup(function (){
        $('#label-quantity-selected-tab1').addClass('selected-items');
        $('#label-quantity-selected-tab1').removeClass('unselected-items');
        $('#label-quantity-selected-tab1').empty();
        $('#label-quantity-selected-tab1').text($('input[name = "quantity"]').val());
    });

    $('input[name = "bends"]').keyup(function (){
        $('#label-bends-selected-tab1').addClass('selected-items');
        $('#label-bends-selected-tab1').removeClass('unselected-items');
        $('#label-bends-selected-tab1').empty();
        $('#label-bends-selected-tab1').text($('input[name = "bends"]').val());
    });


});

/*var activeTab = $('[data-tab][class = "active"]').attr('id');
console.log (activeTab);*/

function saveResults() {
    calculation();
    $('.field-history-btn').append('<div class="alert alert-info" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>    <span class="badge badge-success">'+ $('#printCost-tab1').text() +'</span> '+ $('#label-format-selected-tab1').text() +', Цвет '+ $('#label-color-selected-tab1').text() +', '+ $('#label-material-selected-tab1').text() +', '+ $('#label-quantity-selected-tab1').text() +' шт, Доп. обработка: '+ $('#label-varnish-selected-tab1').text() +', кол-во изгибов: '+ $('#label-bends-selected-tab1').text() +'<br><br>    <button class="btn btn-primary">Отправить заказ</button>&nbsp;&nbsp; <button class="btn btn-success">Изменить заказ</button>    </div>');
};