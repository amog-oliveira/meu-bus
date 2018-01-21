$(function () {
    var a = $("#form");
<<<<<<< HEAD
    $("#form-response"), $(a).submit(function (e) {
=======
    $("#form-response");
    $(a).submit(function (e) {
>>>>>>> dev
        e.preventDefault();
        var o = $(a).serialize();
        $.ajax({
            type: "POST",
            url: "../mail.php",
            data: o
        }).done(function (a) {
<<<<<<< HEAD
            swal("Yay !", "Seu email foi enviado :)", "success"), $("#name").val(""), $("#email").val(""), $("#subject").val(""), $("#message").val(""), location.reload()
        }).fail(function () {
            swal("Oops !", "Oops ! Algum erro ocorreu e sua mensagem não pode ser enviada :( ", "error")
=======
            swal("Yay !", "Seu email foi enviado :)", "success");
            $("#name").val("");
            $("#email").val("");
            $("#subject").val(""); 
            $("#message").val(""); 
            location.reload();
        }).fail(function () {
            swal("Oops !", "Oops ! Algum erro ocorreu e sua mensagem não pode ser enviada :( ", "error");
>>>>>>> dev
        })
    })
});