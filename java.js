// javascript for java.html
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
    _("j1_1x1").onclick = j1_1x1;
    _("j1_1x2").onclick = j1_1x2;

    /* java interactive */

    // 1.1
    // Activity 1
    function j1_1x1() {
        document.getElementById("j1_1x1_result").style.display = "block";

        var j1_1x1_v1 = document.getElementById("j1_1x1a").value;
        var j1_1x1_v2 = document.getElementById("j1_1x1b").value;
        var j1_1x1_v3 = document.getElementById("j1_1x1c").value;

        var j1_1x1_user = [j1_1x1_v1, j1_1x1_v2, j1_1x1_v3];
        var j1_1x1_key = ["class", "main", "System"];
        var j1_1x1_bool = [false, false, false];
        for (i = 0; i < j1_1x1_key.length; i++) {
            if (j1_1x1_user[i] == j1_1x1_key[i]) {j1_1x1_bool[i] = true;}
        }

        document.getElementById("j1_1x1_y1").innerHTML = j1_1x1_v1;
        document.getElementById("j1_1x1_y2").innerHTML = j1_1x1_v2;
        document.getElementById("j1_1x1_y3").innerHTML = j1_1x1_v3;

        // if incorrect
        if (!j1_1x1_bool[0]) {document.getElementById("j1_1x1_r1").style.backgroundColor = "#B5534F"; document.getElementById("j1_1x1_r1").innerHTML = "incorrect";}
        if (!j1_1x1_bool[1]) {document.getElementById("j1_1x1_r2").style.backgroundColor = "#B5534F"; document.getElementById("j1_1x1_r2").innerHTML = "incorrect";}
        if (!j1_1x1_bool[2]) {document.getElementById("j1_1x1_r3").style.backgroundColor = "#B5534F"; document.getElementById("j1_1x1_r3").innerHTML = "incorrect";}

        // if correct
        if (j1_1x1_bool[0]) {document.getElementById("j1_1x1_r1").style.backgroundColor = "#739E5B"; document.getElementById("j1_1x1_r1").innerHTML = "correct";}
        if (j1_1x1_bool[1]) {document.getElementById("j1_1x1_r2").style.backgroundColor = "#739E5B"; document.getElementById("j1_1x1_r2").innerHTML = "correct";}
        if (j1_1x1_bool[2]) {document.getElementById("j1_1x1_r3").style.backgroundColor = "#739E5B"; document.getElementById("j1_1x1_r3").innerHTML = "correct";}
    }
    // Activity 2
    function j1_1x2() {
        document.getElementById("j1_1x2_result").style.display = "block";

        var j1_1x2_a = document.getElementById("j1_1x2a").checked;
        var j1_1x2_b = document.getElementById("j1_1x2b").checked;
        var j1_1x2_c = document.getElementById("j1_1x2c").checked;
        var j1_1x2_d = document.getElementById("j1_1x2d").checked;
        var j1_1x2_e = document.getElementById("j1_1x2e").checked;

        document.getElementById("j1_1x2_y1").innerHTML = j1_1x2_a;
        document.getElementById("j1_1x2_y2").innerHTML = j1_1x2_b;
        document.getElementById("j1_1x2_y3").innerHTML = j1_1x2_c;
        document.getElementById("j1_1x2_y4").innerHTML = j1_1x2_d;
        document.getElementById("j1_1x2_y5").innerHTML = j1_1x2_e;

        // incorrect
        if (!j1_1x2_a) {document.getElementById("j1_1x2_r1").style.backgroundColor = "#B5534F"; document.getElementById("j1_1x2_r1").innerHTML = "incorrect";}
        if (j1_1x2_b) {document.getElementById("j1_1x2_r2").style.backgroundColor = "#B5534F"; document.getElementById("j1_1x2_r2").innerHTML = "incorrect";}
        if (!j1_1x2_c) {document.getElementById("j1_1x2_r3").style.backgroundColor = "#B5534F"; document.getElementById("j1_1x2_r3").innerHTML = "incorrect";}
        if (j1_1x2_d) {document.getElementById("j1_1x2_r4").style.backgroundColor = "#B5534F"; document.getElementById("j1_1x2_r4").innerHTML = "incorrect";}
        if (!j1_1x2_e) {document.getElementById("j1_1x2_r5").style.backgroundColor = "#B5534F"; document.getElementById("j1_1x2_r5").innerHTML = "incorrect";}

        // correct
        if (j1_1x2_a) {document.getElementById("j1_1x2_r1").style.backgroundColor = "#739E5B"; document.getElementById("j1_1x2_r1").innerHTML = "correct";}
        if (!j1_1x2_b) {document.getElementById("j1_1x2_r2").style.backgroundColor = "#739E5B"; document.getElementById("j1_1x2_r2").innerHTML = "correct";}
        if (j1_1x2_c) {document.getElementById("j1_1x2_r3").style.backgroundColor = "#739E5B"; document.getElementById("j1_1x2_r3").innerHTML = "correct";}
        if (!j1_1x2_d) {document.getElementById("j1_1x2_r4").style.backgroundColor = "#739E5B"; document.getElementById("j1_1x2_r4").innerHTML = "correct";}
        if (j1_1x2_e) {document.getElementById("j1_1x2_r5").style.backgroundColor = "#739E5B"; document.getElementById("j1_1x2_r5").innerHTML = "correct";}
    }
    // 1.2
    // 1.3
    // 1.4
    // 1.5
    // 1.6
    // 1.7
    // 1.8
    // 1.9
    // 2.1
    // 2.2
    // 2.3
    // 2.4
    // 2.5
    // 2.6
    // 2.7
    // 2.8
    // 2.9
    /* java interactive */
}