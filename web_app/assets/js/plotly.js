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
        x: inp_data.filter(x => x.Attrition == "Yes"),
        y: inp_data.Age,
        mode: 'markers',
        type: 'scatter',
        marker: {
            "color": "navy"
        },
        name: "Attritioned"
    };

    var trace2 = {
        x: inp_data.filter(x => x.Attrition == "No"),
        y: inp_data.Age,
        mode: 'markers',
        type: 'scatter',
        marker: {
            "color": "yellow"
        },
        name: "Non-Attrition"
    };

    var data = [trace1, trace2];

    var layout = {
        title: 'Employee Attrition by Age Group',
        xaxis: { "title": "Age" },
        yaxis: { "title": "Count" }
    };

    Plotly.newPlot('scatter', data, layout);
}