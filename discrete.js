// javascript for discrete.html
window.onload = function()
{
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
    var $ = function (id) {return document.getElementById(id);};
    $("d1_1x1").onclick = d1_1x1;

    /* discrete interactive */
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
        var d1_1x1_key = ["ℕ", "All of the above", "ℚ", "True", "True"];
        var d1_1x1_bool = [false, false, false, false, false];
        for (i = 0; i < d1_1x1_key.length; i++) {
            if (d1_1x1_user[i] == d1_1x1_key[i]) {d1_1x1_bool[i] = true;}
        }

        document.getElementById("d1_1x1_y1").innerHTML = d1_1x1_v1;
        document.getElementById("d1_1x1_y2").innerHTML = d1_1x1_v2;
        document.getElementById("d1_1x1_y3").innerHTML = d1_1x1_v3;
        document.getElementById("d1_1x1_y4").innerHTML = d1_1x1_v4;
        document.getElementById("d1_1x1_y5").innerHTML = d1_1x1_v5;

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
    /* discrete interactive */
}