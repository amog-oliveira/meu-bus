$(function () {
    var a = $("#form");
    $("#form-response");
    $(a).submit(function (e) {
        e.preventDefault();
        var o = $(a).serialize();
        $.ajax({
            type: "POST",
            url: "../mail.php",
            data: o
        }).done(function (a) {
            swal("Yay !", "Seu email foi enviado :)", "success");
            $("#name").val("");
            $("#email").val("");
            $("#subject").val(""); 
            $("#message").val(""); 
            location.reload();
        }).fail(function () {
            swal("Oops !", "Oops ! Algum erro ocorreu e sua mensagem não pode ser enviada :( ", "error");
        })
    })
});