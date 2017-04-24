$(function () {

    var dialog = null;

    function resizeGrid() {
        console.log($(window).width());
    };

    $(window).resize(function () {
        resizeGrid();
    });

    var options = {
        width: 9,
        height: 7,
        animate: true,
        cell_height: 110,
        vertical_margin: 15,
    };
    $('.grid-stack').gridstack(options);
    $('.k-button').kendoButton();
    $('.k-grid').kendoGrid();
    dialog = $('.dialog').kendoWindow({
        modal: true,
        //title: options.texts.placeholder_resourcefilters,
        visible: false,
    }).data("kendoWindow");
    dialog.center();
    dialog.pin();

    $('.icon-bin').click(function () {
        var widget = $(this).parents('.grid-stack-item');
        $('.grid-stack').data('gridstack').removeWidget(widget);
    });
    $('.icon-enlarge').click(function () {
        var widget = $(this).parents('.grid-stack-item');
        $('.dialog').empty();
        $('.dialog').append(widget.find('.widget-body').clone());
        dialog.open();
        dialog.maximize();
    });
});