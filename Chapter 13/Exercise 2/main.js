var counter = 0;

$('button').click(function () {
    counter = counter + 1;
    $('#buttonUsage').val(counter)
    if (counter == 3){
        $('button').prop('disabled',true);
    }
});
