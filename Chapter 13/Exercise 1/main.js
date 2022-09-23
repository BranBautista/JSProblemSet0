$('document').ready(function () {
    var table = $('<div>').addClass('gridcontainer');
    for (i = 0; i < 25; i++) {
        var row = $('<div>').addClass('element').text(i + 1);
        table.append(row);
    }

    $('#table').append(table);

    $('.element').click(function () {
        alert($(this).text());
    });
});