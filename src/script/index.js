$(function () {
    var options = {
        width:9,
        height:7,
        animate: true,
        cell_height: 110,
        vertical_margin: 15,
    };
    $('.grid-stack').gridstack(options);
    $('.k-button').kendoButton();
    $('.k-grid').kendoGrid();
});