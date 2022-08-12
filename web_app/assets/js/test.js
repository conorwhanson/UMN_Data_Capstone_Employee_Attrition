$(document).ready(function() {
    console.log("Ready to predict...");

    $("#gender").change(function() {
        console.log("Gender");
        if ($("#gender").val() == 1){
            console.log("Male")
        }
        else if ($("#gender").val() == 0){
            console.log("Female")
        }})
    });

    $("#age").change(function(){
        console.log("AGE",$("#age").val())
    })

    $("#travel").change(function(){
        console.log("Travel?",$("#travel").val())
    })