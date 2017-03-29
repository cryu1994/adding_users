$(document).ready(function () {
    $('#form1').submit(function () {
        var first_name = $('#first').val();
        var last_name = $('#last').val();
        var email = $('#email').val();
        var number = $('#number').val();
        $('#tbody1').append('<tr><td>'+ first_name + '</td><td>'+ last_name+'</td><td>'+email+'</td><td>'+ number+'</td></tr>');

        return false;
    });
});