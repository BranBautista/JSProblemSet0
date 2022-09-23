$(document).ready(function () {

    var columns = 1;

    var rows = 1;


    var $row = $("<div />", {
        class: 'row'
    });
    var $square = $("<div />", {
        class: 'square'
    });
    
    for (var i = 0; i < columns; i++) {
        $row.append($square.clone());
    }
    for (var i = 0; i < rows; i++) {
        $("#gridcontainer").append($row.clone());
    }

    $("#btncolumns").click(function(){
        columns = $('#columns').find(":selected").val();

        $("#gridcontainer").empty();

        var $row = $("<div />", {
            class: 'row'
        });
        var $square = $("<div />", {
            class: 'square'
        });
        
        for (var i = 0; i < columns; i++) {
            $row.append($square.clone());
        }

        for (var i = 0; i < rows; i++) {
            $("#gridcontainer").append($row.clone());
        }
    
    })

    $("#btnrows").click(function(){
        rows = $('#rows').find(":selected").val();

        $("#gridcontainer").empty();

        var $row = $("<div />", {
            class: 'row'
        });
        var $square = $("<div />", {
            class: 'square'
        });
        
        for (var i = 0; i < columns; i++) {
            $row.append($square.clone());
        }

        for (var i = 0; i < rows; i++) {
            $("#gridcontainer").append($row.clone());
        }
    
    })
});