$(document).ready(function() {
    console.log("Ready to predict...");

    $("#predict").click(function() {
        makePredictions();
    });
});

function makePredictions() {
    var env_sat = $("env_sat").val();
    var role = $("#role").val();
    var dept = $("#dept").val();
    var travel = $("#travel").val();
    

    var payload = {
        "Age": age
    }

    $.ajax({
        type: "POST",
        url: "/makePredictions",
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify({ "data": payload }),
        success: function(returnedData) {
            // print it
            console.log(returnedData);

        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });

}