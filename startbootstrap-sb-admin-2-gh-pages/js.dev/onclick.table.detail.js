$(document).ready(function () {
    $(".edit").click(function (e) { 
        e.preventDefault();
        var id = $(this).parent().parent().attr('id');
        // To do code setting data. 
    });
    $(".delete").click(function (e) { 
        e.preventDefault();
        var id = $(this).parent().parent().attr('id');
        // To do code delete data. 
    });

    $("#butDel").click(function (e) { 
        e.preventDefault();
        var names = [];
        $('#contenst-table input:checked').each(function() {
            var id = $(this).parent().parent().parent().attr('id');
            names.push(id);
        });
        console.log(names); 
    });
});
$("#btn-0").click(function (e) {
    e.preventDefault();
    $("#btn-0").css("background-color", "red");
    $("#btn-1").css("background-color", "#858796");
    $("#btn-2").css("background-color", "#858796");
});
$("#btn-1").click(function (e) {
    e.preventDefault();
    $("#btn-0").css("background-color", "#858796");
    $("#btn-1").css("background-color", "red");
    $("#btn-2").css("background-color", "#858796");
});
$("#btn-2").click(function (e) {
    e.preventDefault();
    $("#btn-0").css("background-color", "#858796");
    $("#btn-1").css("background-color", "#858796");
    $("#btn-2").css("background-color", "red");
});