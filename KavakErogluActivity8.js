

$(document).ready(function() {
    $("#birthday").datepicker();

    var programmingLanguage = ["Java", "C", "C++" , "Phyton", "PHP","Javascript","ActionScript","AppleScript","Lisp"];
    $("#programmingLanguage").autocomplete({
        source: programmingLanguage
    });

    $('input').on('input', function() {
        if (this.checkValidity()) {
            $(this).css('border', '2px solid black');
        } else {
            $(this).css('border', '2px solid red');
        }
    });

    
});

