("#submit").on("click", function(event){
    event.preventDefault();

    const newEntry = {
        Name: $("#nameField").val(),
        Phone: $("#phone").val(),
        Email: $("#emailField").val(),
        ID: $("#idField").val()
    }
})
