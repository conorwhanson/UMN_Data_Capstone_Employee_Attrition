$(document).ready(function() {
    console.log("Ready to predict...");

    $("#predict").click(function() {
        makePredictions();
    });
});

// call Flask API endpoint
function makePredictions() {
    var role = $("#role").val();
    var travel = $("#travel").val();
    var dept = $("#dept").val();
    var dist = $("#dist").val();
    var ed = $("#ed").val();
    var gender = $("#gender").val();
    var joblevel = $("#joblevel").val();
    var marr = $("#marr").val();
    var income = $("#income").val();
    var prevcomp = $("#companies").val();
    var hoursworked = $("#stdhrs").val();
    var stonks = $("#stonks").val();
    var totalyears = $("#yearsworked").val();
    var atcompany = $("#atcompany").val();
    var lastpromotion = $("#promotion").val();
    var currmanager = $("#manager").val();
    var enviro = $("#enviro").val();
    var jobsatisfaction = $("#satisfaction").val();
    var balance = $("#balance").val();
    var involvement = $("#involvement").val();
    var performance = $("#performance").val();
    var training = $("#training").val();
    var edfield = $("#edfield").val();
    var age = $("#age").val();
    var salincrease = $("#salincrease").val();

    // compile the data to send off
    var payload = {
        "Age": age,
        "BusinessTravel": travel,
        "Department": dept,
        "DistanceFromHome": dist,
        "Education": ed,
        "EducationField": edfield,
        "Gender": gender,
        "JobLevel": joblevel,
        "JobRole": role,
        "MaritalStatus": marr,
        "MonthlyIncome": income,
        "NumCompaniesWorked": prevcomp,
        "PercentSalaryHike": salincrease,
        "StandardHours": hoursworked,
        "StockOptionLevel": stonks,
        "TotalWorkingYears": totalyears,
        "TrainingTimesLastYear": training,
        "YearsAtCompany": atcompany,
        "YearsSinceLastPromotion": lastpromotion,
        "YearsWithCurrManager": currmanager,
        "EnvironmentSatisfaction": enviro,
        "JobSatisfaction": jobsatisfaction,
        "WorkLifeBalance": balance,
        "JobInvolvement": involvement,
        "PerformanceRating": performance
    }

    // Perform a POST request to the query URL
    $.ajax({
        type: "POST",
        url: "/makePredictions",
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify({ "data": payload }),
        success: function(returnedData) {
            // print it
            console.log(returnedData);

            if (returnedData["prediction"] == 1) {
                $("#output").text("You Survived!");
            } else {
                $("#output").text("You Died!");
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });

}