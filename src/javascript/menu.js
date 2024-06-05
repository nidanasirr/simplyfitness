document.addEventListener('DOMContentLoaded', function () {
    // Toggle dropdown visibility
    function toggleDropdownContent(dropdown, show) {
        const dropdownContent = dropdown.nextElementSibling;
        dropdown.setAttribute('aria-expanded', show.toString());
        dropdownContent.style.display = show ? 'block' : 'none';
    }

    // Initialize dropdowns and event listeners
    document.querySelectorAll('.dropdown > a').forEach(dropdownToggle => {
        // Go into the subsections of the drop down menu and go into a page through a click
        dropdownToggle.addEventListener('click', function (event) {
            event.preventDefault();
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            toggleDropdownContent(this, !isExpanded);
        });

        // Escape the drop down menu with the escape key
        dropdownToggle.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                event.preventDefault();
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                if (isExpanded) {
                    toggleDropdownContent(this, false);
                }
            }
        });

        // Go into the subsections of the drop down menu and go into a page with the enter key
        dropdownToggle.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                toggleDropdownContent(this, !isExpanded);
            }
        });
    });

    // Close dropdowns when clicking outside
    window.addEventListener('click', function (event) {
        if (!event.target.matches('.dropdown > a')) {
            document.querySelectorAll('.dropdown > a[aria-expanded="true"]').forEach(dropdownToggle => {
                toggleDropdownContent(dropdownToggle, false);
            });
        }
    });
});




