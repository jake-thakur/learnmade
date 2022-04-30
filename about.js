$(document).ready(function() {
    $("#tabs").tabs();

    var _ = function (id) {return document.getElementById(id);};
    _("learnmade_info").onclick = learnmade;
    _("developer_info").onclick = developer;

    function learnmade() {
        $.ajax({
            type: "get",
            url: "learnmade.json",
            beforeSend: function() {
                $("#l_info").html("Loading...");
            },
            timeout: 10000,
            error: function(xhr, status, error) {
                alert("Error: " + xhr.status + " - " + error);
            },
            dataType: "json",
            success: function(data) {
                $("#l_info").html("");
                $.each(data, function() {
                    $.each(this, function(key, value) {
                        $("#l_info").append(
                            "<h3>" + "Info: " + "</h3>" + value.bio + "<br>"
                        );
                    });
                });
            }
        });
    }
    function developer() {
        $.ajax({
            type: "get",
            url: "developer.json",
            beforeSend: function() {
                $("#d_info").html("Loading...");
            },
            timeout: 10000,
            error: function(xhr, status, error) {
                alert("Error: " + xhr.status + " - " + error);
            },
            dataType: "json",
            success: function(data) {
                $("#d_info").html("");
                $.each(data, function() {
                    $.each(this, function(key, value) {
                        $("#d_info").append(
                            "<h3>" + "Info: " + "</h3>" + value.bio + "<br>"
                        );
                    });
                });
            }
        });
    }
});