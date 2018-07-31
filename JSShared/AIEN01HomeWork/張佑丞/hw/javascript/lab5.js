document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("ye1").addEventListener("change", yea1);
    document.getElementById("mo1").addEventListener("change", yea1);
    document.getElementById("da1").addEventListener("change", day1);
    // document.getElementById("button1").addEventListener("click", click1);
    for (i = 2010; i <= 2020 && i >= 2010; i++) {
        var year1 = document.createElement("option");
        year1.setAttribute("value", i);
        var no = document.createTextNode(i);
        year1.appendChild(no);
        document.getElementById("ye1").appendChild(year1)
    }
    for (j = 1; j <= 12; j++) {
        var mont1 = document.createElement("option");
        mont1.setAttribute("value", j);
        var month1 = document.createTextNode(j);
        mont1.appendChild(month1);
        document.getElementById("mo1").appendChild(mont1)
    }

    for (k = 1; k <= 31; k++) {
        var x1 = document.createElement("option");
        x1.setAttribute("value", k);
        var x2 = document.createTextNode(k);
        x1.appendChild(x2);
        document.getElementById("da1").appendChild(x1)
    }


});
function yea1() {
    document.getElementById("da1").innerHTML = "";
    var root = document.getElementById("ye1").value;
    var root1 = document.getElementById("mo1").value;
    var alldate = new Date(root, root1, "0")
    var dayy1 = alldate.getDate()
    // alert(alldate)

    for (l = 1; l <= dayy1; l++) {
        var x3 = document.createElement("option");
        x3.setAttribute("value", l);
        var x4 = document.createTextNode(l);
        x3.appendChild(x4);
        // x3.value = l;
        // x3.innerHTML = l;
        document.getElementById("da1").appendChild(x3)
    }

    document.getElementById("year2").innerHTML = root
    document.getElementById("month2").innerHTML = root1

}
function day1() {
    var root2 = document.getElementById("da1").value;
    document.getElementById("day2").innerHTML = root2
}
