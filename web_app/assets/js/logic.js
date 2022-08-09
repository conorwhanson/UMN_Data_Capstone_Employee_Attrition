$(document).ready(function() {
    console.log("Ready to predict...");

    $("#predict").click(function() {
        predict_ml();
    })
});

function predict_ml() {
    var env_sat = $("env_sat").val();
    var role = $("#role").val();
    var dept = $("#dept").val();
    var travel = $("#travel").val();
    

}