    
    function showSection(sectionId) {
        // Hide all sections
        var sections = document.querySelectorAll('.category-section');
        sections.forEach(function(section) {
            section.classList.remove('active');
        });
    
        // Remove active class from all links
        var links = document.querySelectorAll('li');
        links.forEach(function(link) {
            link.classList.remove('active');
        });
    
        // Show the selected section
        var activeSection = document.getElementById(sectionId);
        activeSection.classList.add('active');
    
        // Add active class to the clicked link
        event.currentTarget.classList.add('active');
    }