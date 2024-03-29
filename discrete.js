// javascript for discrete.html
window.onload = function()
{
    // Night Mode Plugin
    $("body").nightMode({autoEnable: true, keepNormal: "img, input, a, #navbar, #sidenav"});

    /* navbar */
    window.onscroll = function () {stick()};
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    function stick()
    {
        if (window.pageYOffset >= sticky)
        {navbar.classList.add("sticky")}
        else {navbar.classList.remove("sticky");}
    }
    /* navbar */

    // naming convention (first letter of course)(number on LHS of .)_(number on RHS of .)x(Activity number)(abc... for fields)
    var _ = function (id) {return document.getElementById(id);};
    _("d1_1x1").onclick = d1_1x1;
    _("d1_2x1").onclick = d1_2x1;
    _("d1_3x1").onclick = d1_3x1;
    _("d1_4x1").onclick = d1_4x1;
    _("d1_5x1").onclick = d1_5x1;
    _("d1_6x1").onclick = d1_6x1;
    _("d1_7x1").onclick = d1_7x1;
    _("d1_8x1").onclick = d1_8x1;
    _("d1_9x1").onclick = d1_9x1;
    _("d2_1x1").onclick = d2_1x1;
    _("d2_2x1").onclick = d2_2x1;
    _("d2_4x1").onclick = d2_4x1;
    _("d2_5x1").onclick = d2_5x1;
    _("d2_6x1").onclick = d2_6x1;
    _("d2_7x1").onclick = d2_7x1;
    _("d2_8x1").onclick = d2_8x1;
    _("d2_9x1").onclick = d2_9x1;
    _("d3_1x1").onclick = d3_1x1;
    _("d3_3x1").onclick = d3_3x1;
    _("d3_4x1").onclick = d3_4x1;
    _("d3_5x1").onclick = d3_5x1;
    _("d3_6x1").onclick = d3_6x1;
    _("d3_7x1").onclick = d3_7x1;
    _("d3_8x1").onclick = d3_8x1;

    /* discrete interactive */

    // 1.1
    // Activity 1
    function d1_1x1() {
        document.getElementById("d1_1x1_result").style.display = "block";

        var d1_1x1_a = document.getElementById("d1_1x1a").checked;
        var d1_1x1_b = document.getElementById("d1_1x1b").checked;
        var d1_1x1_c = document.getElementById("d1_1x1c").checked;
        var d1_1x1_d = document.getElementById("d1_1x1d").checked;
        var d1_1x1_e = document.getElementById("d1_1x1e").checked;
        var d1_1x1_f = document.getElementById("d1_1x1f").checked;
        var d1_1x1_g = document.getElementById("d1_1x1g").checked;
        var d1_1x1_h = document.getElementById("d1_1x1h").checked;
        var d1_1x1_i = document.getElementById("d1_1x1i").checked;
        var d1_1x1_j = document.getElementById("d1_1x1j").checked;
        var d1_1x1_k = document.getElementById("d1_1x1k").checked;
        var d1_1x1_l = document.getElementById("d1_1x1l").checked;
        var d1_1x1_m = document.getElementById("d1_1x1m").checked;
        var d1_1x1_n = document.getElementById("d1_1x1n").checked;
        var d1_1x1_o = document.getElementById("d1_1x1o").checked;
        var d1_1x1_p = document.getElementById("d1_1x1p").checked;

        // placeholder values
        var d1_1x1_v1, d1_1x1_v2, d1_1x1_v3, d1_1x1_v4, d1_1x1_v5;
        if (d1_1x1_a) {d1_1x1_v1 = document.getElementById("d1_1x1a").value;}
        if (d1_1x1_b) {d1_1x1_v1 = document.getElementById("d1_1x1b").value;}
        if (d1_1x1_c) {d1_1x1_v1 = document.getElementById("d1_1x1c").value;}
        if (d1_1x1_d) {d1_1x1_v1 = document.getElementById("d1_1x1d").value;}
        if (d1_1x1_e) {d1_1x1_v2 = document.getElementById("d1_1x1e").value;}
        if (d1_1x1_f) {d1_1x1_v2 = document.getElementById("d1_1x1f").value;}
        if (d1_1x1_g) {d1_1x1_v2 = document.getElementById("d1_1x1g").value;}
        if (d1_1x1_h) {d1_1x1_v2 = document.getElementById("d1_1x1h").value;}
        if (d1_1x1_i) {d1_1x1_v3 = document.getElementById("d1_1x1i").value;}
        if (d1_1x1_j) {d1_1x1_v3 = document.getElementById("d1_1x1j").value;}
        if (d1_1x1_k) {d1_1x1_v3 = document.getElementById("d1_1x1k").value;}
        if (d1_1x1_l) {d1_1x1_v3 = document.getElementById("d1_1x1l").value;}
        if (d1_1x1_m) {d1_1x1_v4 = document.getElementById("d1_1x1m").value;}
        if (d1_1x1_n) {d1_1x1_v4 = document.getElementById("d1_1x1n").value;}
        if (d1_1x1_o) {d1_1x1_v5 = document.getElementById("d1_1x1o").value;}
        if (d1_1x1_p) {d1_1x1_v5 = document.getElementById("d1_1x1p").value;}

        // determine if answers are correct
        var d1_1x1_user = [d1_1x1_v1, d1_1x1_v2, d1_1x1_v3, d1_1x1_v4, d1_1x1_v5];
        var d1_1x1_key = ["@@ℕ@@", "All of the above", "@@ℚ@@", "True", "True"];
        var d1_1x1_bool = [false, false, false, false, false];
        for (i = 0; i < d1_1x1_key.length; i++) {
            if (d1_1x1_user[i] == d1_1x1_key[i]) {d1_1x1_bool[i] = true;}
        }

        document.getElementById("d1_1x1_y1").innerHTML = d1_1x1_v1;
        document.getElementById("d1_1x1_y2").innerHTML = d1_1x1_v2;
        document.getElementById("d1_1x1_y3").innerHTML = d1_1x1_v3;
        document.getElementById("d1_1x1_y4").innerHTML = d1_1x1_v4;
        document.getElementById("d1_1x1_y5").innerHTML = d1_1x1_v5;
        MathJax.typeset()

        // if incorrect
        if (!d1_1x1_bool[0]) {document.getElementById("d1_1x1_r1").style.backgroundColor = "#B5534F"; document.getElementById("d1_1x1_r1").innerHTML = "incorrect";}
        if (!d1_1x1_bool[1]) {document.getElementById("d1_1x1_r2").style.backgroundColor = "#B5534F"; document.getElementById("d1_1x1_r2").innerHTML = "incorrect";}
        if (!d1_1x1_bool[2]) {document.getElementById("d1_1x1_r3").style.backgroundColor = "#B5534F"; document.getElementById("d1_1x1_r3").innerHTML = "incorrect";}
        if (!d1_1x1_bool[3]) {document.getElementById("d1_1x1_r4").style.backgroundColor = "#B5534F"; document.getElementById("d1_1x1_r4").innerHTML = "incorrect";}
        if (!d1_1x1_bool[4]) {document.getElementById("d1_1x1_r5").style.backgroundColor = "#B5534F"; document.getElementById("d1_1x1_r5").innerHTML = "incorrect";}

        // if correct
        if (d1_1x1_bool[0]) {document.getElementById("d1_1x1_r1").style.backgroundColor = "#739E5B"; document.getElementById("d1_1x1_r1").innerHTML = "correct";}
        if (d1_1x1_bool[1]) {document.getElementById("d1_1x1_r2").style.backgroundColor = "#739E5B"; document.getElementById("d1_1x1_r2").innerHTML = "correct";}
        if (d1_1x1_bool[2]) {document.getElementById("d1_1x1_r3").style.backgroundColor = "#739E5B"; document.getElementById("d1_1x1_r3").innerHTML = "correct";}
        if (d1_1x1_bool[3]) {document.getElementById("d1_1x1_r4").style.backgroundColor = "#739E5B"; document.getElementById("d1_1x1_r4").innerHTML = "correct";}
        if (d1_1x1_bool[4]) {document.getElementById("d1_1x1_r5").style.backgroundColor = "#739E5B"; document.getElementById("d1_1x1_r5").innerHTML = "correct";}
    }
    // 1.2
    // Activity 1
    function d1_2x1() {
        document.getElementById("d1_2x1_result").style.display = "block";

        var d1_2x1_a = document.getElementById("d1_2x1a").checked;
        var d1_2x1_b = document.getElementById("d1_2x1b").checked;
        var d1_2x1_c = document.getElementById("d1_2x1c").checked;
        var d1_2x1_d = document.getElementById("d1_2x1d").checked;

        var d1_2x1_v1, d1_2x1_v2;
        if (d1_2x1_a) {d1_2x1_v1 = document.getElementById("d1_2x1a").value;}
        if (d1_2x1_b) {d1_2x1_v1 = document.getElementById("d1_2x1b").value;}
        if (d1_2x1_c) {d1_2x1_v2 = document.getElementById("d1_2x1c").value;}
        if (d1_2x1_d) {d1_2x1_v2 = document.getElementById("d1_2x1d").value;}

        // determine if answers are correct
        var d1_2x1_user = [d1_2x1_v1, d1_2x1_v2];
        var d1_2x1_key = ["True", "False"];
        var d1_2x1_bool = [false, false];
        for (i = 0; i < d1_2x1_key.length; i++) {
            if (d1_2x1_user[i] == d1_2x1_key[i]) {d1_2x1_bool[i] = true;}
        }

        document.getElementById("d1_2x1_y1").innerHTML = d1_2x1_v1;
        document.getElementById("d1_2x1_y2").innerHTML = d1_2x1_v2;
        MathJax.typeset()

        // if incorrect
        if (!d1_2x1_bool[0]) {document.getElementById("d1_2x1_r1").style.backgroundColor = "#B5534F"; document.getElementById("d1_2x1_r1").innerHTML = "incorrect";}
        if (!d1_2x1_bool[1]) {document.getElementById("d1_2x1_r2").style.backgroundColor = "#B5534F"; document.getElementById("d1_2x1_r2").innerHTML = "incorrect";}

        // if correct
        if (d1_2x1_bool[0]) {document.getElementById("d1_2x1_r1").style.backgroundColor = "#739E5B"; document.getElementById("d1_2x1_r1").innerHTML = "correct";}
        if (d1_2x1_bool[1]) {document.getElementById("d1_2x1_r2").style.backgroundColor = "#739E5B"; document.getElementById("d1_2x1_r2").innerHTML = "correct";}
    }
    // 1.3
    // Activity 1
    function d1_3x1() {
        document.getElementById("d1_3x1_result").style.display = "block";

        var d1_3x1_v1 = document.getElementById("d1_3x1a").value;
        var d1_3x1_v2 = document.getElementById("d1_3x1b").value;
        var d1_3x1_v3 = document.getElementById("d1_3x1c").value;
        var d1_3x1_v4 = document.getElementById("d1_3x1d").value;

        var d1_3x1_user = [d1_3x1_v1, d1_3x1_v2, d1_3x1_v3, d1_3x1_v4];
        var d1_3x1_key = [24, 8, -63, 3];
        var d1_3x1_bool = [false, false, false, false];
        for (i = 0; i < d1_3x1_key.length; i++) {
            if (d1_3x1_user[i] == d1_3x1_key[i]) {d1_3x1_bool[i] = true;}
        }

        document.getElementById("d1_3x1_y1").innerHTML = "@@"+d1_3x1_v1+"@@";
        document.getElementById("d1_3x1_y2").innerHTML = "@@"+d1_3x1_v2+"@@";
        document.getElementById("d1_3x1_y3").innerHTML = "@@"+d1_3x1_v3+"@@";
        document.getElementById("d1_3x1_y4").innerHTML = "@@"+d1_3x1_v4+"@@";
        MathJax.typeset()

        // if incorrect
        if (!d1_3x1_bool[0]) {document.getElementById("d1_3x1_r1").style.backgroundColor = "#B5534F"; document.getElementById("d1_3x1_r1").innerHTML = "incorrect";}
        if (!d1_3x1_bool[1]) {document.getElementById("d1_3x1_r2").style.backgroundColor = "#B5534F"; document.getElementById("d1_3x1_r2").innerHTML = "incorrect";}
        if (!d1_3x1_bool[2]) {document.getElementById("d1_3x1_r3").style.backgroundColor = "#B5534F"; document.getElementById("d1_3x1_r3").innerHTML = "incorrect";}
        if (!d1_3x1_bool[3]) {document.getElementById("d1_3x1_r4").style.backgroundColor = "#B5534F"; document.getElementById("d1_3x1_r4").innerHTML = "incorrect";}

        // if incorrect
        if (d1_3x1_bool[0]) {document.getElementById("d1_3x1_r1").style.backgroundColor = "#739E5B"; document.getElementById("d1_3x1_r1").innerHTML = "correct";}
        if (d1_3x1_bool[1]) {document.getElementById("d1_3x1_r2").style.backgroundColor = "#739E5B"; document.getElementById("d1_3x1_r2").innerHTML = "correct";}
        if (d1_3x1_bool[2]) {document.getElementById("d1_3x1_r3").style.backgroundColor = "#739E5B"; document.getElementById("d1_3x1_r3").innerHTML = "correct";}
        if (d1_3x1_bool[3]) {document.getElementById("d1_3x1_r4").style.backgroundColor = "#739E5B"; document.getElementById("d1_3x1_r4").innerHTML = "correct";}
    }
    // 1.4
    // Activity 1
    function d1_4x1() {
        document.getElementById("d1_4x1_result").style.display = "block";

        var d1_4x1_a = document.getElementById("d1_4x1a").checked;
        var d1_4x1_b = document.getElementById("d1_4x1b").checked;
        var d1_4x1_c = document.getElementById("d1_4x1c").checked;
        var d1_4x1_d = document.getElementById("d1_4x1d").checked;
        var d1_4x1_e = document.getElementById("d1_4x1e").checked;
        var d1_4x1_f = document.getElementById("d1_4x1f").checked;
        var d1_4x1_g = document.getElementById("d1_4x1g").checked;
        var d1_4x1_h = document.getElementById("d1_4x1h").checked;

        // placeholder values
        var d1_4x1_v1, d1_4x1_v2, d1_4x1_v3, d1_4x1_v4;
        if (d1_4x1_a) {d1_4x1_v1 = document.getElementById("d1_4x1a").value;}
        if (d1_4x1_b) {d1_4x1_v1 = document.getElementById("d1_4x1b").value;}
        if (d1_4x1_c) {d1_4x1_v2 = document.getElementById("d1_4x1c").value;}
        if (d1_4x1_d) {d1_4x1_v2 = document.getElementById("d1_4x1d").value;}
        if (d1_4x1_e) {d1_4x1_v3 = document.getElementById("d1_4x1e").value;}
        if (d1_4x1_f) {d1_4x1_v3 = document.getElementById("d1_4x1f").value;}
        if (d1_4x1_g) {d1_4x1_v4 = document.getElementById("d1_4x1g").value;}
        if (d1_4x1_h) {d1_4x1_v4 = document.getElementById("d1_4x1h").value;}

        // determine if answers are correct
        var d1_4x1_user = [d1_4x1_v1, d1_4x1_v2, d1_4x1_v3, d1_4x1_v4];
        var d1_4x1_key = ["False","True","True","True"];
        var d1_4x1_bool = [false, false, false, false];
        for (i = 0; i < d1_4x1_key.length; i++) {
            if (d1_4x1_user[i] == d1_4x1_key[i]) {d1_4x1_bool[i] = true;}
        }

        document.getElementById("d1_4x1_y1").innerHTML = d1_4x1_v1;
        document.getElementById("d1_4x1_y2").innerHTML = d1_4x1_v2;
        document.getElementById("d1_4x1_y3").innerHTML = d1_4x1_v3;
        document.getElementById("d1_4x1_y4").innerHTML = d1_4x1_v4;
        MathJax.typeset()

        // if incorrect
        if (!d1_4x1_bool[0]) {document.getElementById("d1_4x1_r1").style.backgroundColor = "#B5534F"; document.getElementById("d1_4x1_r1").innerHTML = "incorrect";}
        if (!d1_4x1_bool[1]) {document.getElementById("d1_4x1_r2").style.backgroundColor = "#B5534F"; document.getElementById("d1_4x1_r2").innerHTML = "incorrect";}
        if (!d1_4x1_bool[2]) {document.getElementById("d1_4x1_r3").style.backgroundColor = "#B5534F"; document.getElementById("d1_4x1_r3").innerHTML = "incorrect";}
        if (!d1_4x1_bool[3]) {document.getElementById("d1_4x1_r4").style.backgroundColor = "#B5534F"; document.getElementById("d1_4x1_r4").innerHTML = "incorrect";}

        // if correct
        if (d1_4x1_bool[0]) {document.getElementById("d1_4x1_r1").style.backgroundColor = "#739E5B"; document.getElementById("d1_4x1_r1").innerHTML = "correct";}
        if (d1_4x1_bool[1]) {document.getElementById("d1_4x1_r2").style.backgroundColor = "#739E5B"; document.getElementById("d1_4x1_r2").innerHTML = "correct";}
        if (d1_4x1_bool[2]) {document.getElementById("d1_4x1_r3").style.backgroundColor = "#739E5B"; document.getElementById("d1_4x1_r3").innerHTML = "correct";}
        if (d1_4x1_bool[3]) {document.getElementById("d1_4x1_r4").style.backgroundColor = "#739E5B"; document.getElementById("d1_4x1_r4").innerHTML = "correct";}
    }
    // 1.5
    // Activity 1
    function d1_5x1() {
        document.getElementById("d1_5x1_result").style.display = "block";

        var d1_5x1_v1 = document.getElementById("d1_5x1a").value;
        var d1_5x1_v2 = document.getElementById("d1_5x1b").value;
        var d1_5x1_v3 = document.getElementById("d1_5x1c").value;
        var d1_5x1_v4 = document.getElementById("d1_5x1d").value;

        var d1_5x1_user = [d1_5x1_v1, d1_5x1_v2, d1_5x1_v3, d1_5x1_v4];
        var d1_5x1_key = [8, 1, -15, 1052672];
        var d1_5x1_bool = [false, false, false, false];
        for (i = 0; i < d1_5x1_key.length; i++) {
            if (d1_5x1_user[i] == d1_5x1_key[i]) {d1_5x1_bool[i] = true;}
        }

        document.getElementById("d1_5x1_y1").innerHTML = "@@"+d1_5x1_v1+"@@";
        document.getElementById("d1_5x1_y2").innerHTML = "@@"+d1_5x1_v2+"@@";
        document.getElementById("d1_5x1_y3").innerHTML = "@@"+d1_5x1_v3+"@@";
        document.getElementById("d1_5x1_y4").innerHTML = "@@"+d1_5x1_v4+"@@";
        MathJax.typeset()

        // if incorrect
        if (!d1_5x1_bool[0]) {document.getElementById("d1_5x1_r1").style.backgroundColor = "#B5534F"; document.getElementById("d1_5x1_r1").innerHTML = "incorrect";}
        if (!d1_5x1_bool[1]) {document.getElementById("d1_5x1_r2").style.backgroundColor = "#B5534F"; document.getElementById("d1_5x1_r2").innerHTML = "incorrect";}
        if (!d1_5x1_bool[2]) {document.getElementById("d1_5x1_r3").style.backgroundColor = "#B5534F"; document.getElementById("d1_5x1_r3").innerHTML = "incorrect";}
        if (!d1_5x1_bool[3]) {document.getElementById("d1_5x1_r4").style.backgroundColor = "#B5534F"; document.getElementById("d1_5x1_r4").innerHTML = "incorrect";}

        // if incorrect
        if (d1_5x1_bool[0]) {document.getElementById("d1_5x1_r1").style.backgroundColor = "#739E5B"; document.getElementById("d1_5x1_r1").innerHTML = "correct";}
        if (d1_5x1_bool[1]) {document.getElementById("d1_5x1_r2").style.backgroundColor = "#739E5B"; document.getElementById("d1_5x1_r2").innerHTML = "correct";}
        if (d1_5x1_bool[2]) {document.getElementById("d1_5x1_r3").style.backgroundColor = "#739E5B"; document.getElementById("d1_5x1_r3").innerHTML = "correct";}
        if (d1_5x1_bool[3]) {document.getElementById("d1_5x1_r4").style.backgroundColor = "#739E5B"; document.getElementById("d1_5x1_r4").innerHTML = "correct";}
    }
    // 1.6
    // Activity 1
    function d1_6x1() {
        document.getElementById("d1_6x1_result").style.display = "block";

        var d1_6x1_v1 = document.getElementById("d1_6x1a").value;
        var d1_6x1_v2 = document.getElementById("d1_6x1b").value;
        var d1_6x1_v3 = document.getElementById("d1_6x1c").value;

        var d1_6x1_user = [d1_6x1_v1, d1_6x1_v2, d1_6x1_v3];
        var d1_6x1_key = [2, 2145, 74];
        var d1_6x1_bool = [false, false, false];
        for (i = 0; i < d1_6x1_key.length; i++) {
            if (d1_6x1_user[i] == d1_6x1_key[i]) {d1_6x1_bool[i] = true;}
        }

        document.getElementById("d1_6x1_y1").innerHTML = "@@"+d1_6x1_v1+"@@";
        document.getElementById("d1_6x1_y2").innerHTML = "@@"+d1_6x1_v2+"@@";
        document.getElementById("d1_6x1_y3").innerHTML = "@@"+d1_6x1_v3+"@@";
        MathJax.typeset()

        // if incorrect
        if (!d1_6x1_bool[0]) {document.getElementById("d1_6x1_r1").style.backgroundColor = "#B5534F"; document.getElementById("d1_6x1_r1").innerHTML = "incorrect";}
        if (!d1_6x1_bool[1]) {document.getElementById("d1_6x1_r2").style.backgroundColor = "#B5534F"; document.getElementById("d1_6x1_r2").innerHTML = "incorrect";}
        if (!d1_6x1_bool[2]) {document.getElementById("d1_6x1_r3").style.backgroundColor = "#B5534F"; document.getElementById("d1_6x1_r3").innerHTML = "incorrect";}

        // if incorrect
        if (d1_6x1_bool[0]) {document.getElementById("d1_6x1_r1").style.backgroundColor = "#739E5B"; document.getElementById("d1_6x1_r1").innerHTML = "correct";}
        if (d1_6x1_bool[1]) {document.getElementById("d1_6x1_r2").style.backgroundColor = "#739E5B"; document.getElementById("d1_6x1_r2").innerHTML = "correct";}
        if (d1_6x1_bool[2]) {document.getElementById("d1_6x1_r3").style.backgroundColor = "#739E5B"; document.getElementById("d1_6x1_r3").innerHTML = "correct";}
    }
    // 1.7
    // Activity 1
    function d1_7x1() {
        document.getElementById("d1_7x1_result").style.display = "block";

        var d1_7x1_a = document.getElementById("d1_7x1a").checked;
        var d1_7x1_b = document.getElementById("d1_7x1b").checked;
        var d1_7x1_d = document.getElementById("d1_7x1d").checked;
        var d1_7x1_e = document.getElementById("d1_7x1e").checked;

        // placeholder values
        var d1_7x1_v1, d1_7x1_v3;
        var d1_7x1_v2 = document.getElementById("d1_7x1c").value;
        if (d1_7x1_a) {d1_7x1_v1 = document.getElementById("d1_7x1a").value;}
        if (d1_7x1_b) {d1_7x1_v1 = document.getElementById("d1_7x1b").value;}
        if (d1_7x1_d) {d1_7x1_v3 = document.getElementById("d1_7x1d").value;}
        if (d1_7x1_e) {d1_7x1_v3 = document.getElementById("d1_7x1e").value;}

        // determine if answers are correct
        var d1_7x1_user = [d1_7x1_v1, d1_7x1_v2, d1_7x1_v3];
        var d1_7x1_key1 = ["Yes", "2^2*3*43", "No"];
        var d1_7x1_key2 = ["Yes", "2*2*3*43", "No"];
        var d1_7x1_bool = [false, false, false];
        for (i = 0; i < d1_7x1_key1.length; i++) {
            if (d1_7x1_user[i] == d1_7x1_key1[i] || d1_7x1_user[i] == d1_7x1_key2[i]) {d1_7x1_bool[i] = true;}
        }

        document.getElementById("d1_7x1_y1").innerHTML = "@@"+d1_7x1_v1+"@@";
        document.getElementById("d1_7x1_y2").innerHTML = "@@"+d1_7x1_v2+"@@";
        document.getElementById("d1_7x1_y3").innerHTML = "@@"+d1_7x1_v3+"@@";
        MathJax.typeset()

        // if incorrect
        if (!d1_7x1_bool[0]) {document.getElementById("d1_7x1_r1").style.backgroundColor = "#B5534F"; document.getElementById("d1_7x1_r1").innerHTML = "incorrect";}
        if (!d1_7x1_bool[1]) {document.getElementById("d1_7x1_r2").style.backgroundColor = "#B5534F"; document.getElementById("d1_7x1_r2").innerHTML = "incorrect";}
        if (!d1_7x1_bool[2]) {document.getElementById("d1_7x1_r3").style.backgroundColor = "#B5534F"; document.getElementById("d1_7x1_r3").innerHTML = "incorrect";}

        // if correct
        if (d1_7x1_bool[0]) {document.getElementById("d1_7x1_r1").style.backgroundColor = "#739E5B"; document.getElementById("d1_7x1_r1").innerHTML = "correct";}
        if (d1_7x1_bool[1]) {document.getElementById("d1_7x1_r2").style.backgroundColor = "#739E5B"; document.getElementById("d1_7x1_r2").innerHTML = "correct";}
        if (d1_7x1_bool[2]) {document.getElementById("d1_7x1_r3").style.backgroundColor = "#739E5B"; document.getElementById("d1_7x1_r3").innerHTML = "correct";}
    }
    // 1.8
    // Activity 1
    function d1_8x1() {
        document.getElementById("d1_8x1_result").style.display = "block";

        var d1_8x1_v1 = document.getElementById("d1_8x1a").value;
        var d1_8x1_v2 = document.getElementById("d1_8x1b").value;
        var d1_8x1_v3 = document.getElementById("d1_8x1c").value;
        var d1_8x1_v4 = document.getElementById("d1_8x1d").value;

        var d1_8x1_user = [d1_8x1_v1, d1_8x1_v2, d1_8x1_v3, d1_8x1_v4];
        var d1_8x1_key1 = [30, '0X39A', 1110011010, 32398];
        var d1_8x1_key2 = [30, '0x39a', 1110011010, 32398];
        var d1_8x1_bool = [false, false, false, false];
        for (i = 0; i < d1_8x1_key1.length; i++) {
            if (d1_8x1_user[i] == d1_8x1_key1[i] || d1_8x1_user[i] == d1_8x1_key2[i]) {d1_8x1_bool[i] = true;}
        }

        document.getElementById("d1_8x1_y1").innerHTML = "@@"+d1_8x1_v1+"@@";
        document.getElementById("d1_8x1_y2").innerHTML = d1_8x1_v2;
        document.getElementById("d1_8x1_y3").innerHTML = "@@"+d1_8x1_v3+"@@";
        document.getElementById("d1_8x1_y4").innerHTML = "@@"+d1_8x1_v4+"@@";
        MathJax.typeset()

        // if incorrect
        if (!d1_8x1_bool[0]) {document.getElementById("d1_8x1_r1").style.backgroundColor = "#B5534F"; document.getElementById("d1_8x1_r1").innerHTML = "incorrect";}
        if (!d1_8x1_bool[1]) {document.getElementById("d1_8x1_r2").style.backgroundColor = "#B5534F"; document.getElementById("d1_8x1_r2").innerHTML = "incorrect";}
        if (!d1_8x1_bool[2]) {document.getElementById("d1_8x1_r3").style.backgroundColor = "#B5534F"; document.getElementById("d1_8x1_r3").innerHTML = "incorrect";}
        if (!d1_8x1_bool[3]) {document.getElementById("d1_8x1_r4").style.backgroundColor = "#B5534F"; document.getElementById("d1_8x1_r4").innerHTML = "incorrect";}

        // if incorrect
        if (d1_8x1_bool[0]) {document.getElementById("d1_8x1_r1").style.backgroundColor = "#739E5B"; document.getElementById("d1_8x1_r1").innerHTML = "correct";}
        if (d1_8x1_bool[1]) {document.getElementById("d1_8x1_r2").style.backgroundColor = "#739E5B"; document.getElementById("d1_8x1_r2").innerHTML = "correct";}
        if (d1_8x1_bool[2]) {document.getElementById("d1_8x1_r3").style.backgroundColor = "#739E5B"; document.getElementById("d1_8x1_r3").innerHTML = "correct";}
        if (d1_8x1_bool[3]) {document.getElementById("d1_8x1_r4").style.backgroundColor = "#739E5B"; document.getElementById("d1_8x1_r4").innerHTML = "correct";}
    }
    // 1.9
    // Activity 1
    function d1_9x1() {
        document.getElementById("d1_9x1_result").style.display = "block";

        var d1_9x1_a = document.getElementById("d1_9x1a").checked;
        var d1_9x1_b = document.getElementById("d1_9x1b").checked;
        var d1_9x1_c = document.getElementById("d1_9x1c").checked;
        var d1_9x1_d = document.getElementById("d1_9x1d").checked;
        var d1_9x1_e = document.getElementById("d1_9x1e").checked;
        var d1_9x1_f = document.getElementById("d1_9x1f").checked;
        var d1_9x1_g = document.getElementById("d1_9x1g").checked;
        var d1_9x1_h = document.getElementById("d1_9x1h").checked;
        var d1_9x1_i = document.getElementById("d1_9x1i").checked;
        var d1_9x1_j = document.getElementById("d1_9x1j").checked;
        var d1_9x1_k = document.getElementById("d1_9x1k").checked;
        var d1_9x1_l = document.getElementById("d1_9x1l").checked;
        var d1_9x1_m = document.getElementById("d1_9x1m").checked;
        var d1_9x1_n = document.getElementById("d1_9x1n").checked;
        var d1_9x1_o = document.getElementById("d1_9x1o").checked;
        var d1_9x1_p = document.getElementById("d1_9x1p").checked;
        var d1_9x1_q = document.getElementById("d1_9x1q").checked;
        var d1_9x1_r = document.getElementById("d1_9x1r").checked;
        var d1_9x1_s = document.getElementById("d1_9x1s").checked;
        var d1_9x1_t = document.getElementById("d1_9x1t").checked;
        var d1_9x1_u = document.getElementById("d1_9x1u").checked;

        // placeholder values
        var d1_9x1_v1, d1_9x1_v2, d1_9x1_v3, d1_9x1_v4, d1_9x1_v5, d1_9x1_v6, d1_9x1_v7, d1_9x1_v8;
        if (d1_9x1_a) {d1_9x1_v1 = document.getElementById("d1_9x1a").value;}
        if (d1_9x1_b) {d1_9x1_v1 = document.getElementById("d1_9x1b").value;}
        if (d1_9x1_c) {d1_9x1_v2 = document.getElementById("d1_9x1c").value;}
        if (d1_9x1_d) {d1_9x1_v2 = document.getElementById("d1_9x1d").value;}
        if (d1_9x1_e) {d1_9x1_v3 = document.getElementById("d1_9x1e").value;}
        if (d1_9x1_f) {d1_9x1_v3 = document.getElementById("d1_9x1f").value;}
        if (d1_9x1_g) {d1_9x1_v4 = document.getElementById("d1_9x1g").value;}
        if (d1_9x1_h) {d1_9x1_v4 = document.getElementById("d1_9x1h").value;}
        if (d1_9x1_i) {d1_9x1_v5 = document.getElementById("d1_9x1i").value;}
        if (d1_9x1_j) {d1_9x1_v5 = document.getElementById("d1_9x1j").value;}
        if (d1_9x1_k) {d1_9x1_v5 = document.getElementById("d1_9x1k").value;}
        if (d1_9x1_l) {d1_9x1_v5 = document.getElementById("d1_9x1l").value;}
        if (d1_9x1_m) {d1_9x1_v6 = document.getElementById("d1_9x1m").value;}
        if (d1_9x1_n) {d1_9x1_v6 = document.getElementById("d1_9x1n").value;}
        if (d1_9x1_o) {d1_9x1_v6 = document.getElementById("d1_9x1o").value;}
        if (d1_9x1_p) {d1_9x1_v7 = document.getElementById("d1_9x1p").value;}
        if (d1_9x1_q) {d1_9x1_v7 = document.getElementById("d1_9x1q").value;}
        if (d1_9x1_r) {d1_9x1_v7 = document.getElementById("d1_9x1r").value;}
        if (d1_9x1_s) {d1_9x1_v7 = document.getElementById("d1_9x1s").value;}
        if (d1_9x1_t) {d1_9x1_v8 = document.getElementById("d1_9x1t").value;}
        if (d1_9x1_u) {d1_9x1_v8 = document.getElementById("d1_9x1u").value;}

        // determine if answers are correct
        var d1_9x1_user = [d1_9x1_v1, d1_9x1_v2, d1_9x1_v3, d1_9x1_v4, d1_9x1_v5, d1_9x1_v6, d1_9x1_v7, d1_9x1_v8];
        var d1_9x1_key = ["Yes", "@@F@@", "Yes", "Yes", "Distributive", "Contradiction", "Converse", "@@F@@"];
        var d1_9x1_bool = [false, false, false, false, false, false, false, false];
        for (i = 0; i < d1_9x1_key.length; i++) {
            if (d1_9x1_user[i] == d1_9x1_key[i]) {d1_9x1_bool[i] = true;}
        }

        document.getElementById("d1_9x1_y1").innerHTML = d1_9x1_v1;
        document.getElementById("d1_9x1_y2").innerHTML = d1_9x1_v2;
        document.getElementById("d1_9x1_y3").innerHTML = d1_9x1_v3;
        document.getElementById("d1_9x1_y4").innerHTML = d1_9x1_v4;
        document.getElementById("d1_9x1_y5").innerHTML = d1_9x1_v5;
        document.getElementById("d1_9x1_y6").innerHTML = d1_9x1_v6;
        document.getElementById("d1_9x1_y7").innerHTML = d1_9x1_v7;
        document.getElementById("d1_9x1_y8").innerHTML = d1_9x1_v8;
        MathJax.typeset()

        // if incorrect
        if (!d1_9x1_bool[0]) {document.getElementById("d1_9x1_r1").style.backgroundColor = "#B5534F"; document.getElementById("d1_9x1_r1").innerHTML = "incorrect";}
        if (!d1_9x1_bool[1]) {document.getElementById("d1_9x1_r2").style.backgroundColor = "#B5534F"; document.getElementById("d1_9x1_r2").innerHTML = "incorrect";}
        if (!d1_9x1_bool[2]) {document.getElementById("d1_9x1_r3").style.backgroundColor = "#B5534F"; document.getElementById("d1_9x1_r3").innerHTML = "incorrect";}
        if (!d1_9x1_bool[3]) {document.getElementById("d1_9x1_r4").style.backgroundColor = "#B5534F"; document.getElementById("d1_9x1_r4").innerHTML = "incorrect";}
        if (!d1_9x1_bool[4]) {document.getElementById("d1_9x1_r5").style.backgroundColor = "#B5534F"; document.getElementById("d1_9x1_r5").innerHTML = "incorrect";}
        if (!d1_9x1_bool[5]) {document.getElementById("d1_9x1_r6").style.backgroundColor = "#B5534F"; document.getElementById("d1_9x1_r6").innerHTML = "incorrect";}
        if (!d1_9x1_bool[6]) {document.getElementById("d1_9x1_r7").style.backgroundColor = "#B5534F"; document.getElementById("d1_9x1_r7").innerHTML = "incorrect";}
        if (!d1_9x1_bool[7]) {document.getElementById("d1_9x1_r8").style.backgroundColor = "#B5534F"; document.getElementById("d1_9x1_r8").innerHTML = "incorrect";}

        // if correct
        if (d1_9x1_bool[0]) {document.getElementById("d1_9x1_r1").style.backgroundColor = "#739E5B"; document.getElementById("d1_9x1_r1").innerHTML = "correct";}
        if (d1_9x1_bool[1]) {document.getElementById("d1_9x1_r2").style.backgroundColor = "#739E5B"; document.getElementById("d1_9x1_r2").innerHTML = "correct";}
        if (d1_9x1_bool[2]) {document.getElementById("d1_9x1_r3").style.backgroundColor = "#739E5B"; document.getElementById("d1_9x1_r3").innerHTML = "correct";}
        if (d1_9x1_bool[3]) {document.getElementById("d1_9x1_r4").style.backgroundColor = "#739E5B"; document.getElementById("d1_9x1_r4").innerHTML = "correct";}
        if (d1_9x1_bool[4]) {document.getElementById("d1_9x1_r5").style.backgroundColor = "#739E5B"; document.getElementById("d1_9x1_r5").innerHTML = "correct";}
        if (d1_9x1_bool[5]) {document.getElementById("d1_9x1_r6").style.backgroundColor = "#739E5B"; document.getElementById("d1_9x1_r6").innerHTML = "correct";}
        if (d1_9x1_bool[6]) {document.getElementById("d1_9x1_r7").style.backgroundColor = "#739E5B"; document.getElementById("d1_9x1_r7").innerHTML = "correct";}
        if (d1_9x1_bool[7]) {document.getElementById("d1_9x1_r8").style.backgroundColor = "#739E5B"; document.getElementById("d1_9x1_r8").innerHTML = "correct";}
    }
    // 2.1
    function d2_1x1() {
        document.getElementById("d2_1x1_result").style.display = "block";

        var d2_1x1_a = document.getElementById("d2_1x1a").checked;
        var d2_1x1_b = document.getElementById("d2_1x1b").checked;
        var d2_1x1_c = document.getElementById("d2_1x1c").checked;
        var d2_1x1_d = document.getElementById("d2_1x1d").checked;

        var d2_1x1_v1, d2_1x1_v2;
        if (d2_1x1_a) {d2_1x1_v1 = document.getElementById("d2_1x1a").value;}
        if (d2_1x1_b) {d2_1x1_v1 = document.getElementById("d2_1x1b").value;}
        if (d2_1x1_c) {d2_1x1_v2 = document.getElementById("d2_1x1c").value;}
        if (d2_1x1_d) {d2_1x1_v2 = document.getElementById("d2_1x1d").value;}

        // determine if answers are correct
        var d2_1x1_user = [d2_1x1_v1, d2_1x1_v2];
        var d2_1x1_key = ["ABCD + ABCD' + AB'CD' + AB'C'D' + A'BCD + A'BCD' + A'BC'D + A'B'CD + A'B'C'D'", "(A+B+C'+D)(A+B+C'+D')(A+B'+C+D)(A+B'+C'+D)(A'+B+C'+D')(A'+B'+C+D')(A'+B'+C'+D)"];
        var d2_1x1_bool = [false, false];
        for (i = 0; i < d2_1x1_key.length; i++) {
            if (d2_1x1_user[i] == d2_1x1_key[i]) {d2_1x1_bool[i] = true;}
        }

        document.getElementById("d2_1x1_y1").innerHTML = d2_1x1_v1;
        document.getElementById("d2_1x1_y2").innerHTML = d2_1x1_v2;
        MathJax.typeset()

        // if incorrect
        if (!d2_1x1_bool[0]) {document.getElementById("d2_1x1_r1").style.backgroundColor = "#B5534F"; document.getElementById("d2_1x1_r1").innerHTML = "incorrect";}
        if (!d2_1x1_bool[1]) {document.getElementById("d2_1x1_r2").style.backgroundColor = "#B5534F"; document.getElementById("d2_1x1_r2").innerHTML = "incorrect";}

        // if correct
        if (d2_1x1_bool[0]) {document.getElementById("d2_1x1_r1").style.backgroundColor = "#739E5B"; document.getElementById("d2_1x1_r1").innerHTML = "correct";}
        if (d2_1x1_bool[1]) {document.getElementById("d2_1x1_r2").style.backgroundColor = "#739E5B"; document.getElementById("d2_1x1_r2").innerHTML = "correct";}
    }
    // 2.2
    function d2_2x1() {
        document.getElementById("d2_2x1_result").style.display = "block";

        var d2_2x1_a = document.getElementById("d2_2x1a").checked;
        var d2_2x1_b = document.getElementById("d2_2x1b").checked;
        var d2_2x1_c = document.getElementById("d2_2x1c").checked;
        var d2_2x1_d = document.getElementById("d2_2x1d").checked;
        var d2_2x1_e = document.getElementById("d2_2x1e").checked;
        var d2_2x1_f = document.getElementById("d2_2x1f").checked;

        var d2_2x1_v1, d2_2x1_v2, d2_2x1_v3;
        if (d2_2x1_a) {d2_2x1_v1 = document.getElementById("d2_2x1a").value;}
        if (d2_2x1_b) {d2_2x1_v1 = document.getElementById("d2_2x1b").value;}
        if (d2_2x1_c) {d2_2x1_v2 = document.getElementById("d2_2x1c").value;}
        if (d2_2x1_d) {d2_2x1_v2 = document.getElementById("d2_2x1d").value;}
        if (d2_2x1_e) {d2_2x1_v3 = document.getElementById("d2_2x1e").value;}
        if (d2_2x1_f) {d2_2x1_v3 = document.getElementById("d2_2x1f").value;}

        // determine if answers are correct
        var d2_2x1_user = [d2_2x1_v1, d2_2x1_v2, d2_2x1_v3];
        var d2_2x1_key = ["@@\\small\\begin{bmatrix} 5rcos\\theta+r^3sin^3\\theta-1 \\\\ \\sqrt{2}+16r^2 \\end{bmatrix}\\small@@", "@@\\small\\begin{bmatrix} 27r^3cos^3\\theta+z^7 \\\\ rsin\\theta+rcos\\theta*ln(z) \\\\ rz \\end{bmatrix}\\small@@", "@@\\small\\begin{bmatrix} 27\\rho^3sin^3\\phi cos^3\\theta+\\rho^7cos^7\\phi \\\\ \\rho sin\\phi sin\\theta+\\rho sin\\phi cos\\theta*ln(\\rho cos\\theta) \\\\ \\rho^3cos\\phi \\end{bmatrix}\\small@@"];
        var d2_2x1_bool = [false, false, false];
        for (i = 0; i < d2_2x1_key.length; i++) {
            if (d2_2x1_user[i] == d2_2x1_key[i]) {d2_2x1_bool[i] = true;}
        }

        document.getElementById("d2_2x1_y1").innerHTML = d2_2x1_v1;
        document.getElementById("d2_2x1_y2").innerHTML = d2_2x1_v2;
        document.getElementById("d2_2x1_y3").innerHTML = d2_2x1_v3;
        if(d2_2x1_v3 != undefined){document.getElementById("d2_2x1_y3").setAttribute("class", "math-2");}
        MathJax.typeset()

        // if incorrect
        if (!d2_2x1_bool[0]) {document.getElementById("d2_2x1_r1").style.backgroundColor = "#B5534F"; document.getElementById("d2_2x1_r1").innerHTML = "incorrect";}
        if (!d2_2x1_bool[1]) {document.getElementById("d2_2x1_r2").style.backgroundColor = "#B5534F"; document.getElementById("d2_2x1_r2").innerHTML = "incorrect";}
        if (!d2_2x1_bool[2]) {document.getElementById("d2_2x1_r3").style.backgroundColor = "#B5534F"; document.getElementById("d2_2x1_r3").innerHTML = "incorrect";}

        // if correct
        if (d2_2x1_bool[0]) {document.getElementById("d2_2x1_r1").style.backgroundColor = "#739E5B"; document.getElementById("d2_2x1_r1").innerHTML = "correct";}
        if (d2_2x1_bool[1]) {document.getElementById("d2_2x1_r2").style.backgroundColor = "#739E5B"; document.getElementById("d2_2x1_r2").innerHTML = "correct";}
        if (d2_2x1_bool[2]) {document.getElementById("d2_2x1_r3").style.backgroundColor = "#739E5B"; document.getElementById("d2_2x1_r3").innerHTML = "correct";}
    }
    // 2.3
    // 2.4
    function d2_4x1() {
        document.getElementById("d2_4x1_result").style.display = "block";

        var d2_4x1_a = document.getElementById("d2_4x1a").checked;
        var d2_4x1_b = document.getElementById("d2_4x1b").checked;
        var d2_4x1_c = document.getElementById("d2_4x1c").checked;
        var d2_4x1_d = document.getElementById("d2_4x1d").checked;
        var d2_4x1_e = document.getElementById("d2_4x1e").checked;
        var d2_4x1_f = document.getElementById("d2_4x1f").checked;
        var d2_4x1_g = document.getElementById("d2_4x1g").checked;
        var d2_4x1_h = document.getElementById("d2_4x1h").checked;
        var d2_4x1_i = document.getElementById("d2_4x1i").checked;
        var d2_4x1_j = document.getElementById("d2_4x1j").checked;
        var d2_4x1_k = document.getElementById("d2_4x1k").checked;
        var d2_4x1_l = document.getElementById("d2_4x1l").checked;
        var d2_4x1_m = document.getElementById("d2_4x1m").checked;
        var d2_4x1_n = document.getElementById("d2_4x1n").checked;
        var d2_4x1_o = document.getElementById("d2_4x1o").checked;

        var d2_4x1_v1, d2_4x1_v2, d2_4x1_v3, d2_4x1_v4, d2_4x1_v5;
        if (d2_4x1_a) {d2_4x1_v1 = document.getElementById("d2_4x1a").value;}
        if (d2_4x1_b) {d2_4x1_v1 = document.getElementById("d2_4x1b").value;}
        if (d2_4x1_c) {d2_4x1_v1 = document.getElementById("d2_4x1c").value;}
        if (d2_4x1_d) {d2_4x1_v2 = document.getElementById("d2_4x1d").value;}
        if (d2_4x1_e) {d2_4x1_v2 = document.getElementById("d2_4x1e").value;}
        if (d2_4x1_f) {d2_4x1_v2 = document.getElementById("d2_4x1f").value;}
        if (d2_4x1_g) {d2_4x1_v3 = document.getElementById("d2_4x1g").value;}
        if (d2_4x1_h) {d2_4x1_v3 = document.getElementById("d2_4x1h").value;}
        if (d2_4x1_i) {d2_4x1_v3 = document.getElementById("d2_4x1i").value;}
        if (d2_4x1_j) {d2_4x1_v4 = document.getElementById("d2_4x1j").value;}
        if (d2_4x1_k) {d2_4x1_v4 = document.getElementById("d2_4x1k").value;}
        if (d2_4x1_l) {d2_4x1_v4 = document.getElementById("d2_4x1l").value;}
        if (d2_4x1_m) {d2_4x1_v5 = document.getElementById("d2_4x1m").value;}
        if (d2_4x1_n) {d2_4x1_v5 = document.getElementById("d2_4x1n").value;}
        if (d2_4x1_o) {d2_4x1_v5 = document.getElementById("d2_4x1o").value;}

        // determine if answers are correct
        var d2_4x1_user = [d2_4x1_v1, d2_4x1_v2, d2_4x1_v3, d2_4x1_v4, d2_4x1_v5];
        var d2_4x1_key = ["@@\\small\\begin{bmatrix} 16 \\\\ 46 \\\\ 76 \\end{bmatrix}\\small@@","@@\\small\\begin{bmatrix} 0 \\\\ -2 \\\\ -4 \\end{bmatrix}\\small@@","@@836@@","@@\\small\\begin{bmatrix} -2 \\\\ 4 \\\\ -2 \\end{bmatrix}\\small@@","@@\\small\\begin{bmatrix} 2 \\\\ -4 \\\\ 2 \\end{bmatrix}\\small@@"];
        var d2_4x1_bool = [false, false, false, false, false];
        for (i = 0; i < d2_4x1_key.length; i++) {
            if (d2_4x1_user[i] == d2_4x1_key[i]) {d2_4x1_bool[i] = true;}
        }

        document.getElementById("d2_4x1_y1").innerHTML = d2_4x1_v1;
        document.getElementById("d2_4x1_y2").innerHTML = d2_4x1_v2;
        document.getElementById("d2_4x1_y3").innerHTML = d2_4x1_v3;
        document.getElementById("d2_4x1_y4").innerHTML = d2_4x1_v4;
        document.getElementById("d2_4x1_y5").innerHTML = d2_4x1_v5;
        MathJax.typeset()

        // if incorrect
        if (!d2_4x1_bool[0]) {document.getElementById("d2_4x1_r1").style.backgroundColor = "#B5534F"; document.getElementById("d2_4x1_r1").innerHTML = "incorrect";}
        if (!d2_4x1_bool[1]) {document.getElementById("d2_4x1_r2").style.backgroundColor = "#B5534F"; document.getElementById("d2_4x1_r2").innerHTML = "incorrect";}
        if (!d2_4x1_bool[2]) {document.getElementById("d2_4x1_r3").style.backgroundColor = "#B5534F"; document.getElementById("d2_4x1_r3").innerHTML = "incorrect";}
        if (!d2_4x1_bool[3]) {document.getElementById("d2_4x1_r4").style.backgroundColor = "#B5534F"; document.getElementById("d2_4x1_r4").innerHTML = "incorrect";}
        if (!d2_4x1_bool[4]) {document.getElementById("d2_4x1_r5").style.backgroundColor = "#B5534F"; document.getElementById("d2_4x1_r5").innerHTML = "incorrect";}

        // if correct
        if (d2_4x1_bool[0]) {document.getElementById("d2_4x1_r1").style.backgroundColor = "#739E5B"; document.getElementById("d2_4x1_r1").innerHTML = "correct";}
        if (d2_4x1_bool[1]) {document.getElementById("d2_4x1_r2").style.backgroundColor = "#739E5B"; document.getElementById("d2_4x1_r2").innerHTML = "correct";}
        if (d2_4x1_bool[2]) {document.getElementById("d2_4x1_r3").style.backgroundColor = "#739E5B"; document.getElementById("d2_4x1_r3").innerHTML = "correct";}
        if (d2_4x1_bool[3]) {document.getElementById("d2_4x1_r4").style.backgroundColor = "#739E5B"; document.getElementById("d2_4x1_r4").innerHTML = "correct";}
        if (d2_4x1_bool[4]) {document.getElementById("d2_4x1_r5").style.backgroundColor = "#739E5B"; document.getElementById("d2_4x1_r5").innerHTML = "correct";}
    }
    // 2.5
    // Activity 1
    function d2_5x1() {
        document.getElementById("d2_5x1_result").style.display = "block";

        var d2_5x1_a = document.getElementById("d2_5x1a").checked;
        var d2_5x1_b = document.getElementById("d2_5x1b").checked;
        var d2_5x1_c = document.getElementById("d2_5x1c").checked;
        var d2_5x1_d = document.getElementById("d2_5x1d").checked;

        // placeholder values
        var d2_5x1_v1;
        if (d2_5x1_a) {d2_5x1_v1 = document.getElementById("d2_5x1a").value;}
        if (d2_5x1_b) {d2_5x1_v1 = document.getElementById("d2_5x1b").value;}
        if (d2_5x1_c) {d2_5x1_v1 = document.getElementById("d2_5x1c").value;}
        if (d2_5x1_d) {d2_5x1_v1 = document.getElementById("d2_5x1d").value;}

        // determine if answers are correct
        var d2_5x1_user = [d2_5x1_v1];
        var d2_5x1_key = [12];
        var d2_5x1_bool = [false];
        for (i = 0; i < d2_5x1_key.length; i++) {
            if (d2_5x1_user[i] == d2_5x1_key[i]) {d2_5x1_bool[i] = true;}
        }

        document.getElementById("d2_5x1_y1").innerHTML = d2_5x1_v1;

        // if incorrect
        if (!d2_5x1_bool[0]) {document.getElementById("d2_5x1_r1").style.backgroundColor = "#B5534F"; document.getElementById("d2_5x1_r1").innerHTML = "incorrect";}

        // if correct
        if (d2_5x1_bool[0]) {document.getElementById("d2_5x1_r1").style.backgroundColor = "#739E5B"; document.getElementById("d2_5x1_r1").innerHTML = "correct";}
    }
    // 2.6
    function d2_6x1() {
        document.getElementById("d2_6x1_result").style.display = "block";

        var d2_6x1_a = document.getElementById("d2_6x1a").checked;
        var d2_6x1_b = document.getElementById("d2_6x1b").checked;
        var d2_6x1_c = document.getElementById("d2_6x1c").checked;
        var d2_6x1_d = document.getElementById("d2_6x1d").checked;
        var d2_6x1_e = document.getElementById("d2_6x1e").checked;
        var d2_6x1_f = document.getElementById("d2_6x1f").checked;

        var d2_6x1_v1, d2_6x1_v2;
        if (d2_6x1_a) {d2_6x1_v1 = document.getElementById("d2_6x1a").value;}
        if (d2_6x1_b) {d2_6x1_v1 = document.getElementById("d2_6x1b").value;}
        if (d2_6x1_c) {d2_6x1_v1 = document.getElementById("d2_6x1c").value;}
        if (d2_6x1_d) {d2_6x1_v2 = document.getElementById("d2_6x1d").value;}
        if (d2_6x1_e) {d2_6x1_v2 = document.getElementById("d2_6x1e").value;}
        if (d2_6x1_f) {d2_6x1_v2 = document.getElementById("d2_6x1f").value;}

        // determine if answers are correct
        var d2_6x1_user = [d2_6x1_v1, d2_6x1_v2];
        var d2_6x1_key = ["@@\\small\\begin{bmatrix} -1&-3 \\\\ -6&-8 \\end{bmatrix}\\small@@","@@\\small\\begin{bmatrix} 24&34 \\\\ 60&88 \\end{bmatrix}\\small@@"];
        var d2_6x1_bool = [false, false];
        for (i = 0; i < d2_6x1_key.length; i++) {
            if (d2_6x1_user[i] == d2_6x1_key[i]) {d2_6x1_bool[i] = true;}
        }

        document.getElementById("d2_6x1_y1").innerHTML = d2_6x1_v1;
        document.getElementById("d2_6x1_y2").innerHTML = d2_6x1_v2;
        MathJax.typeset()

        // if incorrect
        if (!d2_6x1_bool[0]) {document.getElementById("d2_6x1_r1").style.backgroundColor = "#B5534F"; document.getElementById("d2_6x1_r1").innerHTML = "incorrect";}
        if (!d2_6x1_bool[1]) {document.getElementById("d2_6x1_r2").style.backgroundColor = "#B5534F"; document.getElementById("d2_6x1_r2").innerHTML = "incorrect";}

        // if correct
        if (d2_6x1_bool[0]) {document.getElementById("d2_6x1_r1").style.backgroundColor = "#739E5B"; document.getElementById("d2_6x1_r1").innerHTML = "correct";}
        if (d2_6x1_bool[1]) {document.getElementById("d2_6x1_r2").style.backgroundColor = "#739E5B"; document.getElementById("d2_6x1_r2").innerHTML = "correct";}
    }
    // 2.7
    function d2_7x1() {
        document.getElementById("d2_7x1_result").style.display = "block";

        var d2_7x1_b = document.getElementById("d2_7x1b").checked;
        var d2_7x1_c = document.getElementById("d2_7x1c").checked;

        // placeholder values
        var d2_7x1_v2;
        var d2_7x1_v1 = document.getElementById("d2_7x1a").value;
        if (d2_7x1_b) {d2_7x1_v2 = document.getElementById("d2_7x1b").value;}
        if (d2_7x1_c) {d2_7x1_v2 = document.getElementById("d2_7x1c").value;}

        // determine if answers are correct
        var d2_7x1_user = [d2_7x1_v1, d2_7x1_v2];
        var d2_7x1_key = ["2775","@@2cosx-493ye^{xy}@@"];
        var d2_7x1_bool = [false, false];
        for (i = 0; i < d2_7x1_key.length; i++) {
            if (d2_7x1_user[i] == d2_7x1_key[i]) {d2_7x1_bool[i] = true;}
        }

        document.getElementById("d2_7x1_y1").innerHTML = "@@"+d2_7x1_v1+"@@";
        document.getElementById("d2_7x1_y2").innerHTML = d2_7x1_v2;
        MathJax.typeset()

        // if incorrect
        if (!d2_7x1_bool[0]) {document.getElementById("d2_7x1_r1").style.backgroundColor = "#B5534F"; document.getElementById("d2_7x1_r1").innerHTML = "incorrect";}
        if (!d2_7x1_bool[1]) {document.getElementById("d2_7x1_r2").style.backgroundColor = "#B5534F"; document.getElementById("d2_7x1_r2").innerHTML = "incorrect";}

        // if correct
        if (d2_7x1_bool[0]) {document.getElementById("d2_7x1_r1").style.backgroundColor = "#739E5B"; document.getElementById("d2_7x1_r1").innerHTML = "correct";}
        if (d2_7x1_bool[1]) {document.getElementById("d2_7x1_r2").style.backgroundColor = "#739E5B"; document.getElementById("d2_7x1_r2").innerHTML = "correct";}
    }
    // 2.8
    function d2_8x1() {
        document.getElementById("d2_8x1_result").style.display = "block";

        var d2_8x1_a = document.getElementById("d2_8x1a").checked;
        var d2_8x1_b = document.getElementById("d2_8x1b").checked;
        var d2_8x1_c = document.getElementById("d2_8x1c").checked;

        // placeholder values
        var d2_8x1_v1;
        if (d2_8x1_a) {d2_8x1_v1 = document.getElementById("d2_8x1a").value;}
        if (d2_8x1_b) {d2_8x1_v1 = document.getElementById("d2_8x1b").value;}
        if (d2_8x1_c) {d2_8x1_v1 = document.getElementById("d2_8x1c").value;}

        // determine if answers are correct
        var d2_8x1_user = [d2_8x1_v1];
        var d2_8x1_key = ["@@\\small\\begin{bmatrix} \\frac{38}{2775}&-\\frac{209}{2775}&\\frac{11}{925} \\\\ \\frac{197}{2775}&\\frac{304}{2775}&-\\frac{16}{925} \\\\ -\\frac{48}{925}&\\frac{264}{925}&\\frac{7}{925} \\end{bmatrix}\\small@@"];
        var d2_8x1_bool = [false];
        for (i = 0; i < d2_8x1_key.length; i++) {
            if (d2_8x1_user[i] == d2_8x1_key[i]) {d2_8x1_bool[i] = true;}
        }

        document.getElementById("d2_8x1_y1").innerHTML = d2_8x1_v1
        MathJax.typeset()

        // if incorrect
        if (!d2_8x1_bool[0]) {document.getElementById("d2_8x1_r1").style.backgroundColor = "#B5534F"; document.getElementById("d2_8x1_r1").innerHTML = "incorrect";}

        // if correct
        if (d2_8x1_bool[0]) {document.getElementById("d2_8x1_r1").style.backgroundColor = "#739E5B"; document.getElementById("d2_8x1_r1").innerHTML = "correct";}
    }
    // 2.9
    function d2_9x1() {
        document.getElementById("d2_9x1_result").style.display = "block";

        var d2_9x1_a = document.getElementById("d2_9x1a").checked;
        var d2_9x1_b = document.getElementById("d2_9x1b").checked;
        var d2_9x1_c = document.getElementById("d2_9x1c").checked;
        var d2_9x1_d = document.getElementById("d2_9x1d").checked;
        var d2_9x1_e = document.getElementById("d2_9x1e").checked;
        var d2_9x1_f = document.getElementById("d2_9x1f").checked;

        var d2_9x1_v1, d2_9x1_v2;
        if (d2_9x1_a) {d2_9x1_v1 = document.getElementById("d2_9x1a").value;}
        if (d2_9x1_b) {d2_9x1_v1 = document.getElementById("d2_9x1b").value;}
        if (d2_9x1_c) {d2_9x1_v1 = document.getElementById("d2_9x1c").value;}
        if (d2_9x1_d) {d2_9x1_v2 = document.getElementById("d2_9x1d").value;}
        if (d2_9x1_e) {d2_9x1_v2 = document.getElementById("d2_9x1e").value;}
        if (d2_9x1_f) {d2_9x1_v2 = document.getElementById("d2_9x1f").value;}

        // determine if answers are correct
        var d2_9x1_user = [d2_9x1_v1, d2_9x1_v2];
        var d2_9x1_key = ["@@\\small\\begin{bmatrix} 0 \\\\ \\frac{173}{148} \\\\ -\\frac{3}{148} \\end{bmatrix}\\small@@","@@\\small\\begin{bmatrix} 0 \\\\ \\frac{5}{2} \\end{bmatrix}\\small@@"];
        var d2_9x1_bool = [false, false];
        for (i = 0; i < d2_9x1_key.length; i++) {
            if (d2_9x1_user[i] == d2_9x1_key[i]) {d2_9x1_bool[i] = true;}
        }

        document.getElementById("d2_9x1_y1").innerHTML = d2_9x1_v1;
        document.getElementById("d2_9x1_y2").innerHTML = d2_9x1_v2;
        MathJax.typeset()

        // if incorrect
        if (!d2_9x1_bool[0]) {document.getElementById("d2_9x1_r1").style.backgroundColor = "#B5534F"; document.getElementById("d2_9x1_r1").innerHTML = "incorrect";}
        if (!d2_9x1_bool[1]) {document.getElementById("d2_9x1_r2").style.backgroundColor = "#B5534F"; document.getElementById("d2_9x1_r2").innerHTML = "incorrect";}

        // if correct
        if (d2_9x1_bool[0]) {document.getElementById("d2_9x1_r1").style.backgroundColor = "#739E5B"; document.getElementById("d2_9x1_r1").innerHTML = "correct";}
        if (d2_9x1_bool[1]) {document.getElementById("d2_9x1_r2").style.backgroundColor = "#739E5B"; document.getElementById("d2_9x1_r2").innerHTML = "correct";}
    }
    // 3.1
    function d3_1x1() {
        document.getElementById("d3_1x1_result").style.display = "block";

        var d3_1x1_a = document.getElementById("d3_1x1a").checked;
        var d3_1x1_b = document.getElementById("d3_1x1b").checked;
        var d3_1x1_c = document.getElementById("d3_1x1c").checked;
        var d3_1x1_d = document.getElementById("d3_1x1d").checked;
        var d3_1x1_e = document.getElementById("d3_1x1e").checked;
        var d3_1x1_f = document.getElementById("d3_1x1f").checked;

        var d3_1x1_v1, d3_1x1_v2;
        if (d3_1x1_a) {d3_1x1_v1 = document.getElementById("d3_1x1a").value;}
        if (d3_1x1_b) {d3_1x1_v1 = document.getElementById("d3_1x1b").value;}
        if (d3_1x1_c) {d3_1x1_v1 = document.getElementById("d3_1x1c").value;}
        if (d3_1x1_d) {d3_1x1_v2 = document.getElementById("d3_1x1d").value;}
        if (d3_1x1_e) {d3_1x1_v2 = document.getElementById("d3_1x1e").value;}
        if (d3_1x1_f) {d3_1x1_v2 = document.getElementById("d3_1x1f").value;}

        // determine if answers are correct
        var d3_1x1_user = [d3_1x1_v1, d3_1x1_v2];
        var d3_1x1_key = ["@@1380+10\\sqrt{2}@@","@@9860500@@"];
        var d3_1x1_bool = [false, false];
        for (i = 0; i < d3_1x1_key.length; i++) {
            if (d3_1x1_user[i] == d3_1x1_key[i]) {d3_1x1_bool[i] = true;}
        }

        document.getElementById("d3_1x1_y1").innerHTML = d3_1x1_v1;
        document.getElementById("d3_1x1_y2").innerHTML = d3_1x1_v2;
        MathJax.typeset()

        // if incorrect
        if (!d3_1x1_bool[0]) {document.getElementById("d3_1x1_r1").style.backgroundColor = "#B5534F"; document.getElementById("d3_1x1_r1").innerHTML = "incorrect";}
        if (!d3_1x1_bool[1]) {document.getElementById("d3_1x1_r2").style.backgroundColor = "#B5534F"; document.getElementById("d3_1x1_r2").innerHTML = "incorrect";}

        // if correct
        if (d3_1x1_bool[0]) {document.getElementById("d3_1x1_r1").style.backgroundColor = "#739E5B"; document.getElementById("d3_1x1_r1").innerHTML = "correct";}
        if (d3_1x1_bool[1]) {document.getElementById("d3_1x1_r2").style.backgroundColor = "#739E5B"; document.getElementById("d3_1x1_r2").innerHTML = "correct";}
    }
    // 3.2
    // 3.3
    function d3_3x1() {
        document.getElementById("d3_3x1_result").style.display = "block";

        var d3_3x1_a = document.getElementById("d3_3x1a").checked;
        var d3_3x1_b = document.getElementById("d3_3x1b").checked;
        var d3_3x1_c = document.getElementById("d3_3x1c").checked;
        var d3_3x1_d = document.getElementById("d3_3x1d").checked;
        var d3_3x1_e = document.getElementById("d3_3x1e").checked;
        var d3_3x1_f = document.getElementById("d3_3x1f").checked;

        var d3_3x1_v1, d3_3x1_v2;
        if (d3_3x1_a) {d3_3x1_v1 = document.getElementById("d3_3x1a").value;}
        if (d3_3x1_b) {d3_3x1_v1 = document.getElementById("d3_3x1b").value;}
        if (d3_3x1_c) {d3_3x1_v1 = document.getElementById("d3_3x1c").value;}
        if (d3_3x1_d) {d3_3x1_v2 = document.getElementById("d3_3x1d").value;}
        if (d3_3x1_e) {d3_3x1_v2 = document.getElementById("d3_3x1e").value;}
        if (d3_3x1_f) {d3_3x1_v2 = document.getElementById("d3_3x1f").value;}

        // determine if answers are correct
        var d3_3x1_user = [d3_3x1_v1, d3_3x1_v2];
        var d3_3x1_key = ["@@\\small\\begin{bmatrix} 0&0&1&0&1&5 \\\\ 0&0&0&33&0&0 \\\\ 1&3&0&0&0&0 \\\\ 0&33&0&0&0&0 \\\\ 1&0&0&0&0&55 \\\\ 5&0&0&0&55&0 \\end{bmatrix}\\small@@","@@G=(V,E): V=\\{1,2,3,4,5,6\\},@@<br>@@E=\\{1-3, 1-5, 1-6, 3\\rightarrow2, 2-4, 5-6\\}@@"];
        var d3_3x1_bool = [false, false];
        for (i = 0; i < d3_3x1_key.length; i++) {
            if (d3_3x1_user[i] == d3_3x1_key[i]) {d3_3x1_bool[i] = true;}
        }

        document.getElementById("d3_3x1_y1").innerHTML = d3_3x1_v1;
        document.getElementById("d3_3x1_y2").innerHTML = d3_3x1_v2;
        MathJax.typeset()

        // if incorrect
        if (!d3_3x1_bool[0]) {document.getElementById("d3_3x1_r1").style.backgroundColor = "#B5534F"; document.getElementById("d3_3x1_r1").innerHTML = "incorrect";}
        if (!d3_3x1_bool[1]) {document.getElementById("d3_3x1_r2").style.backgroundColor = "#B5534F"; document.getElementById("d3_3x1_r2").innerHTML = "incorrect";}

        // if correct
        if (d3_3x1_bool[0]) {document.getElementById("d3_3x1_r1").style.backgroundColor = "#739E5B"; document.getElementById("d3_3x1_r1").innerHTML = "correct";}
        if (d3_3x1_bool[1]) {document.getElementById("d3_3x1_r2").style.backgroundColor = "#739E5B"; document.getElementById("d3_3x1_r2").innerHTML = "correct";}
    }

    // 3.4
    function d3_4x1() {
        document.getElementById("d3_4x1_result").style.display = "block";

        var d3_4x1_b = document.getElementById("d3_4x1b").checked;
        var d3_4x1_c = document.getElementById("d3_4x1c").checked;
        var d3_4x1_d = document.getElementById("d3_4x1d").checked;

        var d3_4x1_v2;
        var d3_4x1_v1 = "@@"+document.getElementById("d3_4x1a").value+"@@";
        if (d3_4x1_b) {d3_4x1_v2 = document.getElementById("d3_4x1b").value;}
        if (d3_4x1_c) {d3_4x1_v2 = document.getElementById("d3_4x1c").value;}
        if (d3_4x1_d) {d3_4x1_v2 = document.getElementById("d3_4x1d").value;}
        var d3_4x1_v3 = "@@"+document.getElementById("d3_4x1e").value+"@@";

        // determine if answers are correct
        var d3_4x1_user = [d3_4x1_v1, d3_4x1_v2, d3_4x1_v3];
        var d3_4x1_key = ["@@A@@","@@X,Y,Z,P,Q@@","@@4@@"];
        var d3_4x1_bool = [false, false, false];
        for (i = 0; i < d3_4x1_key.length; i++) {
            if (d3_4x1_user[i] == d3_4x1_key[i]) {d3_4x1_bool[i] = true;}
        }

        document.getElementById("d3_4x1_y1").innerHTML = d3_4x1_v1;
        document.getElementById("d3_4x1_y2").innerHTML = d3_4x1_v2;
        document.getElementById("d3_4x1_y3").innerHTML = d3_4x1_v3;
        MathJax.typeset()

        // if incorrect
        if (!d3_4x1_bool[0]) {document.getElementById("d3_4x1_r1").style.backgroundColor = "#B5534F"; document.getElementById("d3_4x1_r1").innerHTML = "incorrect";}
        if (!d3_4x1_bool[1]) {document.getElementById("d3_4x1_r2").style.backgroundColor = "#B5534F"; document.getElementById("d3_4x1_r2").innerHTML = "incorrect";}
        if (!d3_4x1_bool[2]) {document.getElementById("d3_4x1_r3").style.backgroundColor = "#B5534F"; document.getElementById("d3_4x1_r3").innerHTML = "incorrect";}

        // if correct
        if (d3_4x1_bool[0]) {document.getElementById("d3_4x1_r1").style.backgroundColor = "#739E5B"; document.getElementById("d3_4x1_r1").innerHTML = "correct";}
        if (d3_4x1_bool[1]) {document.getElementById("d3_4x1_r2").style.backgroundColor = "#739E5B"; document.getElementById("d3_4x1_r2").innerHTML = "correct";}
        if (d3_4x1_bool[2]) {document.getElementById("d3_4x1_r3").style.backgroundColor = "#739E5B"; document.getElementById("d3_4x1_r3").innerHTML = "correct";}
    }
    // 3.5
    function d3_5x1() {
        document.getElementById("d3_5x1_result").style.display = "block";

        var d3_5x1_v1 = "@@"+document.getElementById("d3_5x1a").value+"@@";
        var d3_5x1_v2 = "@@"+document.getElementById("d3_5x1b").value+"@@";
        var d3_5x1_v3 = "@@"+document.getElementById("d3_5x1c").value+"@@";
        var d3_5x1_v4 = "@@"+document.getElementById("d3_5x1d").value+"@@";

        // determine if answers are correct
        var d3_5x1_user = [d3_5x1_v1, d3_5x1_v2, d3_5x1_v3, d3_5x1_v4];
        var d3_5x1_key = ["@@0.7@@","@@1@@","@@0.21@@","@@0.8229@@"];
        var d3_5x1_bool = [false, false, false, false];
        for (i = 0; i < d3_5x1_key.length; i++) {
            if (d3_5x1_user[i] == d3_5x1_key[i]) {d3_5x1_bool[i] = true;}
        }

        document.getElementById("d3_5x1_y1").innerHTML = d3_5x1_v1;
        document.getElementById("d3_5x1_y2").innerHTML = d3_5x1_v2;
        document.getElementById("d3_5x1_y3").innerHTML = d3_5x1_v3;
        document.getElementById("d3_5x1_y4").innerHTML = d3_5x1_v4;
        MathJax.typeset()

        // if incorrect
        if (!d3_5x1_bool[0]) {document.getElementById("d3_5x1_r1").style.backgroundColor = "#B5534F"; document.getElementById("d3_5x1_r1").innerHTML = "incorrect";}
        if (!d3_5x1_bool[1]) {document.getElementById("d3_5x1_r2").style.backgroundColor = "#B5534F"; document.getElementById("d3_5x1_r2").innerHTML = "incorrect";}
        if (!d3_5x1_bool[2]) {document.getElementById("d3_5x1_r3").style.backgroundColor = "#B5534F"; document.getElementById("d3_5x1_r3").innerHTML = "incorrect";}
        if (!d3_5x1_bool[3]) {document.getElementById("d3_5x1_r4").style.backgroundColor = "#B5534F"; document.getElementById("d3_5x1_r4").innerHTML = "incorrect";}

        // if correct
        if (d3_5x1_bool[0]) {document.getElementById("d3_5x1_r1").style.backgroundColor = "#739E5B"; document.getElementById("d3_5x1_r1").innerHTML = "correct";}
        if (d3_5x1_bool[1]) {document.getElementById("d3_5x1_r2").style.backgroundColor = "#739E5B"; document.getElementById("d3_5x1_r2").innerHTML = "correct";}
        if (d3_5x1_bool[2]) {document.getElementById("d3_5x1_r3").style.backgroundColor = "#739E5B"; document.getElementById("d3_5x1_r3").innerHTML = "correct";}
        if (d3_5x1_bool[3]) {document.getElementById("d3_5x1_r4").style.backgroundColor = "#739E5B"; document.getElementById("d3_5x1_r4").innerHTML = "correct";}}
    // 3.6
    function d3_6x1() {
        document.getElementById("d3_6x1_result").style.display = "block";
        var d3_6x1_a = document.getElementById("d3_6x1a").checked;
        var d3_6x1_b = document.getElementById("d3_6x1b").checked;
        var d3_6x1_c = document.getElementById("d3_6x1c").checked;
        var d3_6x1_d = document.getElementById("d3_6x1d").checked;

        var d3_6x1_v1;
        if (d3_6x1_a) {d3_6x1_v1 = document.getElementById("d3_6x1a").value;}
        if (d3_6x1_b) {d3_6x1_v1 = document.getElementById("d3_6x1b").value;}
        if (d3_6x1_c) {d3_6x1_v1 = document.getElementById("d3_6x1c").value;}
        if (d3_6x1_d) {d3_6x1_v1 = document.getElementById("d3_6x1d").value;}

        // determine if answers are correct
        var d3_6x1_user = [d3_6x1_v1];
        var d3_6x1_key = ["@@8x^3+12x^2+6x+1@@"];
        var d3_6x1_bool = [false];
        for (i = 0; i < d3_6x1_key.length; i++) {
            if (d3_6x1_user[i] == d3_6x1_key[i]) {d3_6x1_bool[i] = true;}
        }

        document.getElementById("d3_6x1_y1").innerHTML = d3_6x1_v1;
        MathJax.typeset()

        // if incorrect
        if (!d3_6x1_bool[0]) {document.getElementById("d3_6x1_r1").style.backgroundColor = "#B5534F"; document.getElementById("d3_6x1_r1").innerHTML = "incorrect";}

        // if correct
        if (d3_6x1_bool[0]) {document.getElementById("d3_6x1_r1").style.backgroundColor = "#739E5B"; document.getElementById("d3_6x1_r1").innerHTML = "correct";}}
    // 3.7
    function d3_7x1() {
        document.getElementById("d3_7x1_result").style.display = "block";

        var d3_7x1_a = document.getElementById("d3_7x1a").checked;
        var d3_7x1_b = document.getElementById("d3_7x1b").checked;
        var d3_7x1_c = document.getElementById("d3_7x1c").checked;
        var d3_7x1_d = document.getElementById("d3_7x1d").checked;
        var d3_7x1_e = document.getElementById("d3_7x1e").checked;
        var d3_7x1_f = document.getElementById("d3_7x1f").checked;
        var d3_7x1_g = document.getElementById("d3_7x1g").checked;
        var d3_7x1_h = document.getElementById("d3_7x1h").checked;
        var d3_7x1_i = document.getElementById("d3_7x1i").checked;
        var d3_7x1_j = document.getElementById("d3_7x1j").checked;
        var d3_7x1_k = document.getElementById("d3_7x1k").checked;
        var d3_7x1_l = document.getElementById("d3_7x1l").checked;
        var d3_7x1_m = document.getElementById("d3_7x1m").checked;
        var d3_7x1_n = document.getElementById("d3_7x1n").checked;

        var d3_7x1_v1, d3_7x1_v2, d3_7x1_v3, d3_7x1_v4, d3_7x1_v5, d3_7x1_v6, d3_7x1_v7;
        if (d3_7x1_a) {d3_7x1_v1 = document.getElementById("d3_7x1a").value;}
        if (d3_7x1_b) {d3_7x1_v1 = document.getElementById("d3_7x1b").value;}
        if (d3_7x1_c) {d3_7x1_v2 = document.getElementById("d3_7x1c").value;}
        if (d3_7x1_d) {d3_7x1_v2 = document.getElementById("d3_7x1d").value;}
        if (d3_7x1_e) {d3_7x1_v3 = document.getElementById("d3_7x1e").value;}
        if (d3_7x1_f) {d3_7x1_v3 = document.getElementById("d3_7x1f").value;}
        if (d3_7x1_g) {d3_7x1_v4 = document.getElementById("d3_7x1g").value;}
        if (d3_7x1_h) {d3_7x1_v4 = document.getElementById("d3_7x1h").value;}
        if (d3_7x1_i) {d3_7x1_v5 = document.getElementById("d3_7x1i").value;}
        if (d3_7x1_j) {d3_7x1_v5 = document.getElementById("d3_7x1j").value;}
        if (d3_7x1_k) {d3_7x1_v6 = document.getElementById("d3_7x1k").value;}
        if (d3_7x1_l) {d3_7x1_v6 = document.getElementById("d3_7x1l").value;}
        if (d3_7x1_m) {d3_7x1_v7 = document.getElementById("d3_7x1m").value;}
        if (d3_7x1_n) {d3_7x1_v7 = document.getElementById("d3_7x1n").value;}

        // determine if answers are correct
        var d3_7x1_user = [d3_7x1_v1, d3_7x1_v2, d3_7x1_v3, d3_7x1_v4, d3_7x1_v5, d3_7x1_v6, d3_7x1_v7];
        var d3_7x1_key = ["@@\\{X,Y,Z\\}@@","@@\\{A,B,C\\}@@","@@S@@","@@\\{1,2,3\\}@@","@@\\{A,B,C\\}@@","@@\\{X,Y,Z\\}@@","@@\\{A,B,C,X,Y,Z\\}@@"];
        var d3_7x1_bool = [false, false, false, false, false, false, false];
        for (i = 0; i < d3_7x1_key.length; i++) {
            if (d3_7x1_user[i] == d3_7x1_key[i]) {d3_7x1_bool[i] = true;}
        }

        document.getElementById("d3_7x1_y1").innerHTML = d3_7x1_v1;
        document.getElementById("d3_7x1_y2").innerHTML = d3_7x1_v2;
        document.getElementById("d3_7x1_y3").innerHTML = d3_7x1_v3;
        document.getElementById("d3_7x1_y4").innerHTML = d3_7x1_v4;
        document.getElementById("d3_7x1_y5").innerHTML = d3_7x1_v5;
        document.getElementById("d3_7x1_y6").innerHTML = d3_7x1_v6;
        document.getElementById("d3_7x1_y7").innerHTML = d3_7x1_v7;
        MathJax.typeset()

        // if incorrect
        if (!d3_7x1_bool[0]) {document.getElementById("d3_7x1_r1").style.backgroundColor = "#B5534F"; document.getElementById("d3_7x1_r1").innerHTML = "incorrect";}
        if (!d3_7x1_bool[1]) {document.getElementById("d3_7x1_r2").style.backgroundColor = "#B5534F"; document.getElementById("d3_7x1_r2").innerHTML = "incorrect";}
        if (!d3_7x1_bool[2]) {document.getElementById("d3_7x1_r3").style.backgroundColor = "#B5534F"; document.getElementById("d3_7x1_r3").innerHTML = "incorrect";}
        if (!d3_7x1_bool[3]) {document.getElementById("d3_7x1_r4").style.backgroundColor = "#B5534F"; document.getElementById("d3_7x1_r4").innerHTML = "incorrect";}
        if (!d3_7x1_bool[4]) {document.getElementById("d3_7x1_r5").style.backgroundColor = "#B5534F"; document.getElementById("d3_7x1_r5").innerHTML = "incorrect";}
        if (!d3_7x1_bool[5]) {document.getElementById("d3_7x1_r6").style.backgroundColor = "#B5534F"; document.getElementById("d3_7x1_r6").innerHTML = "incorrect";}
        if (!d3_7x1_bool[6]) {document.getElementById("d3_7x1_r7").style.backgroundColor = "#B5534F"; document.getElementById("d3_7x1_r7").innerHTML = "incorrect";}

        // if correct
        if (d3_7x1_bool[0]) {document.getElementById("d3_7x1_r1").style.backgroundColor = "#739E5B"; document.getElementById("d3_7x1_r1").innerHTML = "correct";}
        if (d3_7x1_bool[1]) {document.getElementById("d3_7x1_r2").style.backgroundColor = "#739E5B"; document.getElementById("d3_7x1_r2").innerHTML = "correct";}
        if (d3_7x1_bool[2]) {document.getElementById("d3_7x1_r3").style.backgroundColor = "#739E5B"; document.getElementById("d3_7x1_r3").innerHTML = "correct";}
        if (d3_7x1_bool[3]) {document.getElementById("d3_7x1_r4").style.backgroundColor = "#739E5B"; document.getElementById("d3_7x1_r4").innerHTML = "correct";}
        if (d3_7x1_bool[4]) {document.getElementById("d3_7x1_r5").style.backgroundColor = "#739E5B"; document.getElementById("d3_7x1_r5").innerHTML = "correct";}
        if (d3_7x1_bool[5]) {document.getElementById("d3_7x1_r6").style.backgroundColor = "#739E5B"; document.getElementById("d3_7x1_r6").innerHTML = "correct";}
        if (d3_7x1_bool[6]) {document.getElementById("d3_7x1_r7").style.backgroundColor = "#739E5B"; document.getElementById("d3_7x1_r7").innerHTML = "correct";}
    }
    // 3.8
    function d3_8x1() {
        document.getElementById("d3_8x1_result").style.display = "block";
        var d3_8x1_a = document.getElementById("d3_8x1a").checked;
        var d3_8x1_b = document.getElementById("d3_8x1b").checked;
        var d3_8x1_c = document.getElementById("d3_8x1c").checked;
        var d3_8x1_d = document.getElementById("d3_8x1d").checked;
        var d3_8x1_e = document.getElementById("d3_8x1e").checked;
        var d3_8x1_f = document.getElementById("d3_8x1f").checked;
        var d3_8x1_x = document.getElementById("d3_8x1x").checked;
        var d3_8x1_g = document.getElementById("d3_8x1g").checked;
        var d3_8x1_h = document.getElementById("d3_8x1h").checked;
        var d3_8x1_y = document.getElementById("d3_8x1y").checked;
        var d3_8x1_i = document.getElementById("d3_8x1i").checked;
        var d3_8x1_j = document.getElementById("d3_8x1j").checked;
        var d3_8x1_z = document.getElementById("d3_8x1z").checked;
        var d3_8x1_k = document.getElementById("d3_8x1k").checked;
        var d3_8x1_l = document.getElementById("d3_8x1l").checked;
        var d3_8x1_m = document.getElementById("d3_8x1m").checked;
        var d3_8x1_n = document.getElementById("d3_8x1n").checked;
        var d3_8x1_o = document.getElementById("d3_8x1o").checked;
        var d3_8x1_p = document.getElementById("d3_8x1p").checked;

        var d3_8x1_v1, d3_8x1_v2, d3_8x1_v3, d3_8x1_v4, d3_8x1_v5, d3_8x1_v6, d3_8x1_v7, d3_8x1_v8;
        if (d3_8x1_a) {d3_8x1_v1 = document.getElementById("d3_8x1a").value;}
        if (d3_8x1_b) {d3_8x1_v1 = document.getElementById("d3_8x1b").value;}
        if (d3_8x1_c) {d3_8x1_v2 = document.getElementById("d3_8x1c").value;}
        if (d3_8x1_d) {d3_8x1_v2 = document.getElementById("d3_8x1d").value;}
        if (d3_8x1_e) {d3_8x1_v3 = document.getElementById("d3_8x1e").value;}
        if (d3_8x1_f) {d3_8x1_v3 = document.getElementById("d3_8x1f").value;}
        if (d3_8x1_x) {d3_8x1_v3 = document.getElementById("d3_8x1x").value;}
        if (d3_8x1_g) {d3_8x1_v4 = document.getElementById("d3_8x1g").value;}
        if (d3_8x1_h) {d3_8x1_v4 = document.getElementById("d3_8x1h").value;}
        if (d3_8x1_y) {d3_8x1_v4 = document.getElementById("d3_8x1y").value;}
        if (d3_8x1_i) {d3_8x1_v5 = document.getElementById("d3_8x1i").value;}
        if (d3_8x1_j) {d3_8x1_v5 = document.getElementById("d3_8x1j").value;}
        if (d3_8x1_z) {d3_8x1_v5 = document.getElementById("d3_8x1z").value;}
        if (d3_8x1_k) {d3_8x1_v6 = document.getElementById("d3_8x1k").value;}
        if (d3_8x1_l) {d3_8x1_v6 = document.getElementById("d3_8x1l").value;}
        if (d3_8x1_m) {d3_8x1_v7 = document.getElementById("d3_8x1m").value;}
        if (d3_8x1_n) {d3_8x1_v7 = document.getElementById("d3_8x1n").value;}
        if (d3_8x1_o) {d3_8x1_v8 = document.getElementById("d3_8x1o").value;}
        if (d3_8x1_p) {d3_8x1_v8 = document.getElementById("d3_8x1p").value;}

        // determine if answers are correct
        var d3_8x1_user = [d3_8x1_v1, d3_8x1_v2, d3_8x1_v3, d3_8x1_v4, d3_8x1_v5, d3_8x1_v6, d3_8x1_v7, d3_8x1_v8];
        var d3_8x1_key = ["Yes","Yes","@@\\{A,B,C\\}@@","@@\\{X_1,X_2,X_3,X_4\\}@@","@@\\{X_1,X_2,X_4\\}@@","Yes","No","No"];
        var d3_8x1_bool = [false, false, false, false, false, false, false, false];
        for (i = 0; i < d3_8x1_key.length; i++) {
            if (d3_8x1_user[i] == d3_8x1_key[i]) {d3_8x1_bool[i] = true;}
        }

        document.getElementById("d3_8x1_y1").innerHTML = d3_8x1_v1;
        document.getElementById("d3_8x1_y2").innerHTML = d3_8x1_v2;
        document.getElementById("d3_8x1_y3").innerHTML = d3_8x1_v3;
        document.getElementById("d3_8x1_y4").innerHTML = d3_8x1_v4;
        document.getElementById("d3_8x1_y5").innerHTML = d3_8x1_v5;
        document.getElementById("d3_8x1_y6").innerHTML = d3_8x1_v6;
        document.getElementById("d3_8x1_y7").innerHTML = d3_8x1_v7;
        document.getElementById("d3_8x1_y8").innerHTML = d3_8x1_v8;
        MathJax.typeset()

        // if incorrect
        if (!d3_8x1_bool[0]) {document.getElementById("d3_8x1_r1").style.backgroundColor = "#B5534F"; document.getElementById("d3_8x1_r1").innerHTML = "incorrect";}
        if (!d3_8x1_bool[1]) {document.getElementById("d3_8x1_r2").style.backgroundColor = "#B5534F"; document.getElementById("d3_8x1_r2").innerHTML = "incorrect";}
        if (!d3_8x1_bool[2]) {document.getElementById("d3_8x1_r3").style.backgroundColor = "#B5534F"; document.getElementById("d3_8x1_r3").innerHTML = "incorrect";}
        if (!d3_8x1_bool[3]) {document.getElementById("d3_8x1_r4").style.backgroundColor = "#B5534F"; document.getElementById("d3_8x1_r4").innerHTML = "incorrect";}
        if (!d3_8x1_bool[4]) {document.getElementById("d3_8x1_r5").style.backgroundColor = "#B5534F"; document.getElementById("d3_8x1_r5").innerHTML = "incorrect";}
        if (!d3_8x1_bool[5]) {document.getElementById("d3_8x1_r6").style.backgroundColor = "#B5534F"; document.getElementById("d3_8x1_r6").innerHTML = "incorrect";}
        if (!d3_8x1_bool[6]) {document.getElementById("d3_8x1_r7").style.backgroundColor = "#B5534F"; document.getElementById("d3_8x1_r7").innerHTML = "incorrect";}
        if (!d3_8x1_bool[7]) {document.getElementById("d3_8x1_r8").style.backgroundColor = "#B5534F"; document.getElementById("d3_8x1_r8").innerHTML = "incorrect";}

        // if correct
        if (d3_8x1_bool[0]) {document.getElementById("d3_8x1_r1").style.backgroundColor = "#739E5B"; document.getElementById("d3_8x1_r1").innerHTML = "correct";}
        if (d3_8x1_bool[1]) {document.getElementById("d3_8x1_r2").style.backgroundColor = "#739E5B"; document.getElementById("d3_8x1_r2").innerHTML = "correct";}
        if (d3_8x1_bool[2]) {document.getElementById("d3_8x1_r3").style.backgroundColor = "#739E5B"; document.getElementById("d3_8x1_r3").innerHTML = "correct";}
        if (d3_8x1_bool[3]) {document.getElementById("d3_8x1_r4").style.backgroundColor = "#739E5B"; document.getElementById("d3_8x1_r4").innerHTML = "correct";}
        if (d3_8x1_bool[4]) {document.getElementById("d3_8x1_r5").style.backgroundColor = "#739E5B"; document.getElementById("d3_8x1_r5").innerHTML = "correct";}
        if (d3_8x1_bool[5]) {document.getElementById("d3_8x1_r6").style.backgroundColor = "#739E5B"; document.getElementById("d3_8x1_r6").innerHTML = "correct";}
        if (d3_8x1_bool[6]) {document.getElementById("d3_8x1_r7").style.backgroundColor = "#739E5B"; document.getElementById("d3_8x1_r7").innerHTML = "correct";}
        if (d3_8x1_bool[7]) {document.getElementById("d3_8x1_r8").style.backgroundColor = "#739E5B"; document.getElementById("d3_8x1_r8").innerHTML = "correct";}
    }
    // 3.9
    /* discrete interactive */
}