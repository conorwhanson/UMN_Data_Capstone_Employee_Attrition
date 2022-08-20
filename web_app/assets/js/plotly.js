$(document).ready(function() {
    console.log("Ready to graph");

    $("#graph").click(function() {
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
        x: inp_data.filter(x => x.Attrition == 'Yes').map(x => x.Age),
        mode: 'markers',
        type: 'scatter',
        marker: {
            "color": "FrenchLilac"
        },
        name: "Died"
    };

    var trace2 = {
        x: inp_data.filter(x => x.Attrition == 'Yes').map(x => x.Age),
        mode: 'markers',
        type: 'scatter',
        marker: {
            "color": "HoneyYellow"
        },
        name: "Survived"
    };

    var data = [trace1, trace2];
    var layout = {
        title: 'Titanic Age vs Fare for Filter',
        xaxis: { "title": "Age" },
        yaxis: { "title": "Fare" }
    };

    Plotly.newPlot('scatter', data, layout);
}