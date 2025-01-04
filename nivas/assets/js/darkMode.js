// // darkMode.js
// $(document).ready(function() {
//     let isDarkMode = true;
    
//     $('.dark-mode-toggle').click(function() {
//         isDarkMode = !isDarkMode;
//         $('body').toggleClass('light-mode');
//         $('.mode-text').text(isDarkMode ? 'Dark Mode' : 'Light Mode');
//         $('.dark-mode-toggle i').toggleClass('fa-moon fa-sun');
//     });
// });
 
// darkMode.js
$(document).ready(function() {
    // Get saved preference or default to true
    let isDarkMode = localStorage.getItem('isDarkMode') === null 
        ? true 
        : localStorage.getItem('isDarkMode') === 'true';
    
    // Apply initial state
    updateDarkMode(isDarkMode);
    
    // Handle toggle click
    $('.dark-mode-toggle').click(function() {
        isDarkMode = !isDarkMode;
        updateDarkMode(isDarkMode);
        localStorage.setItem('isDarkMode', isDarkMode);
    });
    
    function updateDarkMode(isDark) {
        $('body').toggleClass('light-mode', !isDark);
        $('.mode-text').text(isDark ? 'Dark Mode' : 'Light Mode');
        $('.dark-mode-toggle i').toggleClass('fa-moon', isDark)
                               .toggleClass('fa-sun', !isDark);
    }
});