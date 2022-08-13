$(document).ready(function() {
    console.log("Ready to predict...");

    $("#gender").change(function() {
        if ($("#gender").val() == "Male"){
            console.log("GENDER: ", "1")
        }
        else if ($("#gender").val() == "Female"){
            console.log("GENDER: ", "0")
        }})
    });

    $("#age").change(function(){
        console.log("AGE: ",$("#age").val())
    })

    $("#travel").change(function(){
        console.log("Travel?",$("#travel").val())
    })