$(function () {
    var options = {
        cell_height: 80,
        vertical_margin: 10
    };
    $('.grid-stack').gridstack(options);
    $('.k-button').kendoButton();
    $('.k-grid').kendoGrid({height: 300,});
});