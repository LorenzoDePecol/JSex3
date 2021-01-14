var operations = function() {
    $("#plus").click(function () {calc("+")});
    $("#minus").click(function () {calc("-")});
    $("#mult").click(function () {calc("*")});
    $("#div").click(function () {calc("/")});

    function calc(segno) {
        var sign = segno;
        var n1 = $("#1st").val()*1;
        var n2 = $("#2nd").val()*1;
        var res = 0;
        switch(sign) {
            case "+": res = n1+n2; break;
            case "-": res = n1-n2; break;
            case "*": res = n1*n2; break;
            case "/": res = n1/n2; break;
        };

        var str = "<tr><td>"+n1+"</td><td>"+n2+"</td><td>"+sign+"</td><td>"+res+"</td></tr>";

        arrayLine = JSON.parse(localStorage.getItem("array")|| "[]");
        arrayLine.push(str);
        localStorage.setItem("array",JSON.stringify(arrayLine));

        var lastOp = localStorage.getItem("operation");

        
        $("#res").append(str);
    }
}

document.addEventListener("DOMContentLoaded", operations);