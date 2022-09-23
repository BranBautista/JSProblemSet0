$(document).ready(function () {

    var columns = 2;

    $("#btncolumns").click(function(){
        columns = $('#columns').find(":selected").val();
        $("#paragraph").css(`column-count`,`${columns}`)
    })
});