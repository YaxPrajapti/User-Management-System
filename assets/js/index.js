

$("#add_user").submit(function (event) {
    alert("Data inserted successfully.")
})

$("#update_user").submit(function (event) {
    event.preventDefault();
    const unindexed_Array = $(this).serializeArray();
    var data = {}
    $.map(unindexed_Array, function (n, i) {
        data[n['name']] = n['value']
    })

    const request = {
        "url": `http://localhost:8080/api/users/${data.id}`,
        "method": 'PUT',
        "data": data
    }

    $.ajax(request).done(function (response) {
        alert('data updated successfully');

    })
    console.log(data);
})


if (window.location.pathname == '/') {
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function () {
        var id = $(this).attr("data-id");
        const request = {
            "url": `http://localhost:8080/api/users/${id}`,
            "method": 'DELETE',
        }
        if(confirm('Do you want to this user data?')){
            $.ajax(request).done(function(response){
                alert('User data deleted successfully');
                location.reload();
            })
        }
    })
}