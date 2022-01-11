function compute() {
    if (principalValidation()) {
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate / 100;
        var year = new Date().getFullYear() + parseInt(years);
        var result = document.getElementById("result");
        result.innerHTML = "If you deposit <b>" + principal
            + "</b> at an interest rate of <b>" + rate
            + "</b> You will receive an amount of <b>" + interest
            + "</b> In the year <b>" + year + "</b>"
    }
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + " %";
}

function principalValidation() {
    var number = document.getElementById("principal").value;
    if (number <= 0) {
        alert("Enter a positive number");
        //Set up a timer to wait for the thread to be idle
        window.setTimeout(() => document.getElementById("principal").focus(), 0);
        return false;
    }
    return true;
}

//Update rate on page load , so is correctly shown the first time
window.onload = function () {
    updateRate;
}
