$(document).ready(function() {
    const toggle = $('#darkModeToggle');
    
    // Apply the saved theme on page load
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        $('html').attr('data-theme', 'dark');
        toggle.prop('checked', true);
    }

    // Listen for toggle changes
    toggle.on('change', function() {
        if(this.checked) {
            $('html').attr('data-theme', 'dark');
            localStorage.setItem('theme', 'dark'); // Save theme to localStorage
        } else {
            $('html').removeAttr('data-theme');
            localStorage.setItem('theme', 'light'); // Update theme in localStorage
        }
    });
});
