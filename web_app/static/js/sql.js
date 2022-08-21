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
    var attrition = $("#attrition").val()


    // check if inputs are valid

    // create the payload
    var payload = {
        "sex_flag": sex_flag,
        "min_age": min_age,
        "max_age": max_age,
        "attrition": attrition
    }

    // Perform a POST request to the query URL
    $.ajax({
        type: "POST",
        url: "/getSQL",
        contentType: "application/json;charset=UTF-8}</TD>",
        data: JSON.stringify({ "data": payload }),
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
        HTML += `<td>${ROW.EmployeeID}</TD>`;  
        HTML += `<TD>${ROW.Age}</TD>`;  
        HTML += `<TD>${ROW.EducationID}</TD>`;  
        HTML += `<TD>${ROW.EducationFieldID}</TD>`;
        HTML += `<TD>${ROW.DistanceFromHome}</TD>`;  
        HTML += `<TD>${ROW.Gender}</TD>`;  
        HTML += `<TD>${ROW.MarriageID}</TD>`;  
        HTML += `<TD>${ROW.NumCompaniesWorked}</TD>`;
        HTML += `<TD>${ROW.TotalWorkingYears}</TD>`;  
        HTML += `<TD>${ROW.LastUpdated}</TD>`;  
        HTML += `<TD>${ROW.EmpWorkTableID}</TD>`;  
        HTML += `<TD>${ROW.EmployeeID}</TD>`;
        HTML += `<TD>${ROW.Attrition}</TD>`;  
        HTML += `<TD>${ROW.BusinessTravelID}</TD>`;  
        HTML += `<TD>${ROW.DepartmentID}</TD>`;  
        HTML += `<TD>${ROW.JobLevel}</TD>`;
        HTML += `<TD>${ROW.JobRoleID}</TD>`;  
        HTML += `<TD>${ROW.MonthlyIncome}</TD>`; 
        HTML += `<TD>${ROW.PercentSalaryHike}</TD>`;  
        HTML += `<TD>${ROW.StandardHours}</TD>`;
        HTML += `<TD>${ROW.StockOptionLevel}</TD>`;  
        HTML += `<TD>${ROW.TrainingTimesLastYear}</TD>`;  
        HTML += `<TD>${ROW.YearsAtCompany}</TD>`;
        HTML += `<TD>${ROW.YearsSinceLastPromotion}</TD>`;  
        HTML += `<TD>${ROW.YearsWithCurrManager}</TD>`;  
        HTML += `<TD>${ROW.LastUpdated}</TD>`;

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