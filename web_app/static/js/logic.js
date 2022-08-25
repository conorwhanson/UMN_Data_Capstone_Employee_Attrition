$(document).ready(function() {
    console.log("Ready to predict...");

    $("#predict").click(function(click) {
        click.preventDefault();
        makePredictions();
    });
});

// Extract and define user inputed values
function makePredictions() {
    var dist = $("#dist").val();
    var income = $("#income").val();
    var prevcomp = $("#companies").val();
    var totalyears = $("#yearsworked").val();
    var atcompany = $("#atcompany").val();
    var currmanager = $("#manager").val();
    var enviro = $("#enviro").val();
    var jobsatisfaction = $("#satisfaction").val();
    var age = $("#age").val();
    var salincrease = $("#salincrease").val();

    // var role = $("#role").val();
    // var travel = $("#travel").val();
    // var dept = $("#dept").val();
    // var ed = $("#ed").val();
    // var gender = $("#gender").val();
    // var joblevel = $("#joblevel").val();
    // var marr = $("#marr").val();
    // var hoursworked = $("#stdhrs").val();
    // var stonks = $("#stonks").val();
    // var lastpromotion = $("#promotion").val();
    // var balance = $("#balance").val();
    // var involvement = $("#involvement").val();
    // var performance = $("#performance").val();
    // var training = $("#training").val();
    // var edfield = $("#edfield").val();

    // compile the data to send off
    var payload = {
        "Age": age,
        "DistanceFromHome": dist,
        "MonthlyIncome": income,
        "NumCompaniesWorked": prevcomp,
        "PercentSalaryHike": salincrease,
        "TotalWorkingYears": totalyears,
        "YearsAtCompany": atcompany,
        "YearsWithCurrManager": currmanager,
        "EnvironmentSatisfaction": enviro,
        "JobSatisfaction": jobsatisfaction
    }

    console.log(payload);
//     if ((payload["Age"] >= 35) && payload["MonthlyIncome"] <= 2000){
//         $("#output").text("You have attritioned. Bye Felicia.");
//     } else {
//         $("#output").text("You and your company are ok...for now.");

//     }

// }
    // Perform a POST request to the query URL
    $.ajax({
        type: "POST",
        url: "/makePredictions",
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify({ "data": payload }),
        success: function(returnedData) {
            // print it
            console.log(returnedData);

            // if (returnedData["prediction"] == 1) {
            //     $("#output").text("You have attritioned. Bye Felicia.");
            //     $("#img_output").append("<img id='pic' src='static/images/bye.gif'/>");
            // } else {
            //     $("#output").text("You and your company are ok...for now.");
            // }
        },
        // error: function(XMLHttpRequest, textStatus, errorThrown) {
        //     alert("Status: " + textStatus);
        //     alert("Error: " + errorThrown);
        // }
    });

}