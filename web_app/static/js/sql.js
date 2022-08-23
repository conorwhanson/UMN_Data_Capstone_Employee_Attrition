$(document).ready(function() {
    console.log("Page Loaded");

    $("#filter").click(function() {
        // alert("button clicked!");
        getSQL();
    });
});

$('#sql_table').DataTable({
    //table settings
    initComplete : function() {
       if ($(this).find('tbody tr').length<=1) {
          $('#sql_table').parents('div.dataTables_wrapper').first().hide();
       }
    } 
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
        html += `<td>${row.Attrition}</td>`;  
        html += `<td>${row.Age}</td>`;  
        html += `<td>${row.EducationID}</td>`;  
        html += `<td>${row.EducationFieldID}</td>`;
        html += `<td>${row.DistanceFromHome}</td>`;  
        html += `<td>${row.Gender}</td>`;  
        html += `<td>${row.MarriageID}</td>`;  
        html += `<td>${row.NumCompaniesWorked}</td>`;
        html += `<td>${row.TotalWorkingYears}</td>`;  
        // html += `<td>${row.LastUpdated}</td>`; 
        // html += `<td>${row.EmployeeID}</td>`;
        html += `<td>${row.BusinessTravelID}</td>`;  
        html += `<td>${row.DepartmentID}</td>`;  
        html += `<td>${row.JobLevel}</td>`;
        html += `<td>${row.JobRoleID}</td>`;  
        html += `<td>${row.MonthlyIncome}</td>`; 
        html += `<td>${row.PercentSalaryHike}</td>`;  
        html += `<td>${row.StandardHours}</td>`;
        html += `<td>${row.StockOptionLevel}</td>`;  
        html += `<td>${row.TrainingTimesLastYear}</td>`;  
        html += `<td>${row.YearsAtCompany}</td>`;
        html += `<td>${row.YearsSinceLastPromotion}</td>`;  
        html += `<td>${row.YearsWithCurrManager}</td>`;  
        // html += `<td>${row.LastUpdated}</td>`;

        // close the row
        html += "</tr>";
    });

    // shove the html in our elements
    console.log(html);
    $("#sql_table tbody").html("");
    $("#sql_table tbody").append(html);

    // remake data table
    $('#sql_table').DataTable({
        scrollX: true,
        scrollY: true,
        fixedHeader: true
    });
}