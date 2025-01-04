document.addEventListener('DOMContentLoaded', function() {
    // Add page transition overlay
    const overlay = document.createElement('div');
    overlay.className = 'page-transition-overlay';
    document.body.appendChild(overlay);

    // Handle navigation
    document.querySelectorAll('a[href]').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.hostname === window.location.hostname) {
                e.preventDefault();
                const href = this.getAttribute('href');
                
                // Fade out current content
                document.querySelector('.content, .about-content, .col-md-12').style.opacity = '0';
                
                // Slide up overlay
                overlay.classList.add('slide-up');
                
                // Navigate after animation
                setTimeout(() => {
                    window.location.href = href;
                }, 800);
            }
        });
    });

    // Handle page load
    window.addEventListener('load', () => {
        overlay.classList.add('loaded');
        document.querySelector('.content, .about-content, .col-md-12').style.opacity = '1';
    });
});