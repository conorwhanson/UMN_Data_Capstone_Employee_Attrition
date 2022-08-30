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

    // var attryes = inp_data.filter(function(element){
    //     return element.Attrition == "Yes";
    // });

    // var attrno = inp_data.filter(function(element){
    //     return element.Attrition == "No";
    // });
    console.log(inp_data[0])
    console.log(inp_data[1])

    var trace1 = {
        x: ['No', 'Yes'],
        y: [(inp_data[0]), (inp_data[1])],
        mode: 'markers',
        type: 'bar',
        marker: {
            color: ["rgba(134, 96, 142, 1)", "rgba(251, 175, 0, 1)"]
        },
        // name: "Left the Company"
    };

    // var trace2 = {
    //     x: 'No',
    //     y: inp_data[1],
    //     mode: 'markers',
    //     type: 'bar',
    //     marker: {
    //         color: "rgba(251, 175, 0, 1)"
    //     },
    //     name: "Stayed"
    // };

    var data = [trace1,];

    var layout = {
        title: 'Employee Attrition by Age Group',
        xaxis: { "title": "Attritioned" },
        yaxis: { "title": "Count" }
    };

    Plotly.newPlot('bar', data, layout);
}