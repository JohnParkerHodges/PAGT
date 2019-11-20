$("#submit").on("click", function(event){
    event.preventDefault();

    const newEntry = {
        Name: $("#nameField").val(),
        Phone: $("#phone").val(),
        Email: $("#emailField").val(),
        ID: $("#idField").val()
    }
    console.log(newEntry);

    var curURL = window.location.origin;

    $.post (curURL + "api/tables", newEntry, function(data){
        if (data === true) {
            alert("Reservation Made!");
        }else {
            alert("Tables are booked, you're on the waiting list");
        }
        $("#nameField").val("");
        $("#phone").val("");
        $("#emailField").val("");
        $("#idField").val("");
    })
})


