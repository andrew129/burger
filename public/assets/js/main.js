console.log('hello')

$(function() {
    $('.eat').on('click', function() {
        console.log('hello')
        var id = $(this).data('id');
        console.log(id)
        var devour = $(this).data('devoured');

        let newEat = {
            devoured: devour
        }

        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: newEat
        }).then(
            function() {
                console.log('changed devour to', newEat)
                location.reload();
            }
        )
    })
})