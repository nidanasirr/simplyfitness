$(document).ready(function() {
    $('form').submit(function(event) {
        var email = $('#email').val(); // Use jQuery to get the email value
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var isOK = emailRegex.test(email);

        if (!isOK) {
            // Show error message using jQuery
            $('#email-error-message').text('Invalid Email! Please make sure you are inputting the correct email.')
                                     .show();
            event.preventDefault(); // Prevent form submission
        } else {
            // Hide the error message
            $('#email-error-message').hide();
        }
    });
});
