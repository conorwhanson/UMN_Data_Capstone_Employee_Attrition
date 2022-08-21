$(document).ready(function() {
    console.log("Page Loaded");

    $("#filter").click(function() {
        // alert("button clicked!");
        getSQL();
    });
});


// call Flask API endpoint
function getSQL() {
    var sex_flag = $("#gender").val();
    var min_age = $("#min_age").val();
    var max_age = $("#max_age").val();
    // var attrition = $("#attrition").val()


    // check if inputs are valid

    // create the payload
    var payload = {
        "sex_flag": sex_flag,
        "min_age": min_age,
        "max_age": max_age
        // "attrition": attrition
    }

    // Perform a POST request to the query URL
    $.ajax({
        type: "POST",
        url: "/getSQL",
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify({ "data2": payload }),
        success: function(returnedData) {
            // print it
            console.log(returnedData);
            renderTable(returnedData);

        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });

}

function renderTable(inp_data) {
    // init html string
    let html = "";

    // destroy datatable
    $('#sql_table').DataTable().clear().destroy();

    // loop through all rows
    inp_data.forEach(function(row) {
        html += "<tr>";

        // loop through each cell (order matters)
        HTML += `<td>${ROW.EmployeeID}</td>`;  
        HTML += `<td>${ROW.Age}</td>`;  
        HTML += `<td>${ROW.EducationID}</td>`;  
        HTML += `<td>${ROW.EducationFieldID}</td>`;
        HTML += `<td>${ROW.DistanceFromHome}</td>`;  
        HTML += `<td>${ROW.Gender}</td>`;  
        HTML += `<td>${ROW.MarriageID}</td>`;  
        HTML += `<td>${ROW.NumCompaniesWorked}</td>`;
        HTML += `<td>${ROW.TotalWorkingYears}</td>`;  
        // HTML += `<td>${ROW.LastUpdated}</td>`; 
        HTML += `<td>${ROW.EmployeeID}</td>`;
        HTML += `<td>${ROW.Attrition}</td>`;  
        HTML += `<td>${ROW.BusinessTravelID}</td>`;  
        HTML += `<td>${ROW.DepartmentID}</td>`;  
        HTML += `<td>${ROW.JobLevel}</td>`;
        HTML += `<td>${ROW.JobRoleID}</td>`;  
        HTML += `<td>${ROW.MonthlyIncome}</td>`; 
        HTML += `<td>${ROW.PercentSalaryHike}</td>`;  
        HTML += `<td>${ROW.StandardHours}</td>`;
        HTML += `<td>${ROW.StockOptionLevel}</td>`;  
        HTML += `<td>${ROW.TrainingTimesLastYear}</td>`;  
        HTML += `<td>${ROW.YearsAtCompany}</td>`;
        HTML += `<td>${ROW.YearsSinceLastPromotion}</td>`;  
        HTML += `<td>${ROW.YearsWithCurrManager}</td>`;  
        // HTML += `<td>${ROW.LastUpdated}</td>`;

        // close the row
        html += "</tr>";
    });

    // shove the html in our elements
    console.log(html);
    $("#sql_table tbody").html("");
    $("#sql_table tbody").append(html);

    // remake data table
    $('#sql_table').DataTable();
}