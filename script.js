// script.js
$(document).ready(function () {
    $('#submitBtn').on('click', function () {
        const formData = $('#registrationForm').serialize();
        
        $.ajax({
            type: 'POST',
            url: 'process.php',
            data: formData,
            success: function (response) {
                $('#response').html(response);
                $('#registrationForm')[0].reset();
            },
            error: function () {
                $('#response').html('<span style="color: red;">Error submitting the form. Please try again.</span>');
            }
        });
    });
});
