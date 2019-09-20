$(function() {
    $('.eat').on('click', function(event) {
        var id = $(this).data('id');
        console.log(id)
        var devour = $(this).data('devour');
        console.log(devour)
        let newEat = {
            devoured: devour
        }

        $.ajax({
            method: 'PUT',
            data: newEat,
            url: "/api/burgers/" + id
        }).then(
            function() {
                console.log('changed devour to', newEat)
                location.reload();
            }
        )
    })

    $('.create-form').on('submit', function(event) {
        event.preventDefault()

        let newBurger = {
            burger_name: $('#burgername').val().trim()
        }

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(function() {
            console.log('added your burger')
            location.reload()
        })
    })

    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");
    
        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
    });
})