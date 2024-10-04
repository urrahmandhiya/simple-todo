$(document).ready(() => {

    const add = () => {

        if ($('#name').val() === '' || $('#status').val() === '') {
            alert("please complete the form")
            return;
        }

        $('ul').append(`
        <li>
            <p class="name"></p>
            <p class="status"></p>
            <input class="delete" type="button" value=" X ">
        </li>
        `);
    
        let task = $('ul li:last-child');

        task.find('.name').text($('#name').val());
        task.find('.status').text($('#status').val());

        $('#name').val('');
        $('#status').val('Low Priority');
    }

    const del = e => {
        $(e.target).closest('li').remove();
    }
    
    $('#append').click(add);

    $('.task-form input').keydown(e => {
        if (e.which === 13) {
            e.preventDefault();
            $('#append').click();
        }
    });

    $(document).on('click', '.delete', del);
});