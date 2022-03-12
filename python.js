// javascript for python.html
window.onload = function() {
    /* navbar */
    window.onscroll = function () {stick()};
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    function stick() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
    /* navbar */

    // naming convention (first letter of course)(number on LHS of .)_(number on RHS of .)x(Activity number)(abc... for fields)
    var $ = function (id) {return document.getElementById(id);};
    $("p1_1x1").onclick = p1_1x1;
    $("p1_1x2").onclick = p1_1x2;

    /* python interactive */
    // Activity 1
    function p1_1x1() {
        document.getElementById("p1_1x1_result").style.display = "block";

        var p1_1x1_v1 = document.getElementById("p1_1x1a").value;

        var p1_1x1_bool = [false];
        if (p1_1x1_v1 == "print(\"Hello, how are you?\")" || p1_1x1_v1 == "print(\"hello, how are you?\")") {
            p1_1x1_bool[0] = true;
        }

        document.getElementById("p1_1x1_y1").innerHTML = p1_1x1_v1;
        if (!p1_1x1_bool[0]) {
            document.getElementById("p1_1x1_r1").style.backgroundColor = "#B5534F";
            document.getElementById("p1_1x1_r1").innerHTML = "incorrect";
        }
        if (p1_1x1_bool[0]) {
            document.getElementById("p1_1x1_r1").style.backgroundColor = "#739E5B";
            document.getElementById("p1_1x1_r1").innerHTML = "correct";
        }
    }

    // Activity 2
    function p1_1x2() {
        document.getElementById("p1_1x2_result").style.display = "block";

        var p1_1x2_a = document.getElementById("p1_1x2a").checked;
        var p1_1x2_b = document.getElementById("p1_1x2b").checked;
        var p1_1x2_c = document.getElementById("p1_1x2c").checked;
        var p1_1x2_d = document.getElementById("p1_1x2d").checked;
        var p1_1x2_e = document.getElementById("p1_1x2e").checked;
        var p1_1x2_f = document.getElementById("p1_1x2f").checked;
        var p1_1x2_g = document.getElementById("p1_1x2g").checked;
        var p1_1x2_h = document.getElementById("p1_1x2h").checked;

        // placeholder values
        var p1_1x2_v1, p1_1x2_v2;
        if (p1_1x2_a) {p1_1x2_v1 = document.getElementById("p1_1x2a").value;}
        if (p1_1x2_b) {p1_1x2_v1 = document.getElementById("p1_1x2b").value;}
        if (p1_1x2_c) {p1_1x2_v1 = document.getElementById("p1_1x2c").value;}
        if (p1_1x2_d) {p1_1x2_v1 = document.getElementById("p1_1x2d").value;}
        if (p1_1x2_e) {p1_1x2_v2 = document.getElementById("p1_1x2e").value;}
        if (p1_1x2_f) {p1_1x2_v2 = document.getElementById("p1_1x2f").value;}
        if (p1_1x2_g) {p1_1x2_v2 = document.getElementById("p1_1x2g").value;}
        if (p1_1x2_h) {p1_1x2_v2 = document.getElementById("p1_1x2h").value;}

        // determine if answers are correct
        var p1_1x2_user = [p1_1x2_v1, p1_1x2_v2];
        var p1_1x2_key = ["Line 2", "Line 7"];
        var p1_1x2_bool = [false, false];
        for (i = 0; i < p1_1x2_key.length; i++) {
            if (p1_1x2_user[i] == p1_1x2_key[i]) {p1_1x2_bool[i] = true;}
        }

        document.getElementById("p1_1x2_y1").innerHTML = p1_1x2_v1;
        document.getElementById("p1_1x2_y2").innerHTML = p1_1x2_v2;

        // if incorrect
        if (!p1_1x2_bool[0]) {document.getElementById("p1_1x2_r1").style.backgroundColor = "#B5534F"; document.getElementById("p1_1x2_r1").innerHTML = "incorrect";}
        if (!p1_1x2_bool[1]) {document.getElementById("p1_1x2_r2").style.backgroundColor = "#B5534F"; document.getElementById("p1_1x2_r2").innerHTML = "incorrect";}

        // if correct
        if (p1_1x2_bool[0]) {document.getElementById("p1_1x2_r1").style.backgroundColor = "#739E5B"; document.getElementById("p1_1x2_r1").innerHTML = "correct";}
        if (p1_1x2_bool[1]) {document.getElementById("p1_1x2_r2").style.backgroundColor = "#739E5B"; document.getElementById("p1_1x2_r2").innerHTML = "correct";}
    }
    /* python interactive */
}