$(document).ready(function() {
    console.log("Ready to graph");

    $("#plot").click(function() {
        // alert("button clicked!");
        graphFromSQL();
    });
});


// call Flask API endpoint
function graphFromSQL() {
    var min_age = $("#min_age").val();
    var max_age = $("#max_age").val();


    // check if inputs are valid

    // create the payload
    var payload = {
        "min_age": min_age,
        "max_age": max_age
    }

    // Perform a POST request to the query URL
    $.ajax({
        type: "POST",
        url: "/graph",
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify({ "data": payload }),
        success: function(returnedData) {
            // print it
            console.log(returnedData);
            makeGraph(returnedData);

        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });

}

function makeGraph(inp_data) {
    var trace1 = {
        x: inp_data.filter(x => x.Attrition == "Yes").map(x => x.Attrition),
        y: inp_data.filter(x => x.Attrition == "Yes").map(x => x.Age),
        mode: 'markers',
        type: 'bar',
        marker: {
            color: "rgba(134, 96, 142, 1)"
        },
        name: "Attritioned"
    };

    var trace2 = {
        x: inp_data.filter(x => x.Attrition == "No").map(x => x.Attrition),
        y: inp_data.filter(x => x.Attrition == "No").map(x => x.Age),
        mode: 'markers',
        type: 'bar',
        marker: {
            color: "rgba(251, 175, 0, 1)"
        },
        name: "Non-Attrition"
    };

    var data = [trace1, trace2];

    var layout = {
        title: 'Employee Attrition by Age Group',
        xaxis: { "title": "Attritioned or Not" },
        yaxis: { "title": "Count" }
    };

    Plotly.newPlot('bar', data, layout);
}