// // Create a new file: assets/js/enhancedAboutAnimation.js
// class ParticleSystem {
//     constructor(container) {
//         this.container = container;
//         this.particles = [];
//     }

//     createParticle(x, y) {
//         const particle = document.createElement('div');
//         particle.className = 'particle';
        
//         const size = Math.random() * 4 + 2;
//         particle.style.width = `${size}px`;
//         particle.style.height = `${size}px`;
        
//         const angle = Math.random() * Math.PI * 2;
//         const velocity = Math.random() * 100 + 50;
//         const vx = Math.cos(angle) * velocity;
//         const vy = Math.sin(angle) * velocity;
        
//         particle.style.left = `${x}px`;
//         particle.style.top = `${y}px`;
        
//         this.container.appendChild(particle);
        
//         setTimeout(() => {
//             particle.remove();
//         }, 1500);
//     }

//     burst(x, y) {
//         for (let i = 0; i < 20; i++) {
//             this.createParticle(x, y);
//         }
//     }
// }

// document.addEventListener('DOMContentLoaded', function() {
//     // Create and append animation elements
//     const introAnimation = document.createElement('div');
//     introAnimation.className = 'intro-animation';
    
//     const introBackground = document.createElement('div');
//     introBackground.className = 'intro-background';
    
//     const particleContainer = document.createElement('div');
//     particleContainer.className = 'intro-particles';
    
//     const introContent = document.createElement('div');
//     introContent.className = 'intro-content';
    
//     const introText = document.createElement('div');
//     introText.className = 'intro-text';
//     introText.textContent = 'About Us';
    
//     const introLine = document.createElement('div');
//     introLine.className = 'intro-line';
    
//     introContent.appendChild(introText);
//     introContent.appendChild(introLine);
    
//     introAnimation.appendChild(introBackground);
//     introAnimation.appendChild(particleContainer);
//     introAnimation.appendChild(introContent);
    
//     document.body.insertBefore(introAnimation, document.body.firstChild);
    
//     const particleSystem = new ParticleSystem(particleContainer);
//     let animationState = 0;
    
//     // Initial animation
//     setTimeout(() => {
//         introAnimation.classList.add('stage-1');
//         particleSystem.burst(window.innerWidth / 2, window.innerHeight / 2);
//     }, 100);

//     function handleAnimation(event) {
//         switch(animationState) {
//             case 0:
//                 introAnimation.classList.add('stage-2');
//                 particleSystem.burst(event.clientX, event.clientY);
//                 animationState++;
//                 break;
                
//             case 1:
//                 introAnimation.classList.add('fade-out');
//                 const aboutContent = document.querySelector('.about-content');
//                 setTimeout(() => {
//                     aboutContent.classList.add('visible');
//                     introAnimation.remove();
//                 }, 800);
//                 animationState++;
//                 break;
//         }
//     }
    
//     // Add click event listener
//     document.addEventListener('click', handleAnimation);
// });


// Enhanced About Animation - assets/js/enhancedAboutAnimation.js

class ParticleSystem {
    constructor(container) {
        this.container = container;
        this.particles = [];
        this.stars = [];
        this.satellites = [];
        this.createStarfield();
        this.createSatellites();
    }

    createStarfield() {
        const numStars = 100;
        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 3}s`;
            this.container.appendChild(star);
            this.stars.push(star);
        }
    }

    createSatellites() {
        const numSatellites = 3;
        for (let i = 0; i < numSatellites; i++) {
            const satellite = document.createElement('div');
            satellite.className = 'satellite';
            satellite.style.animationDelay = `${i * 2}s`;
            this.container.appendChild(satellite);
            this.satellites.push(satellite);
        }
    }

    createParticle(x, y) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 200 + 100;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        
        particle.style.setProperty('--vx', `${vx}px`);
        particle.style.setProperty('--vy', `${vy}px`);
        
        this.container.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1500);
    }

    burst(x, y) {
        for (let i = 0; i < 30; i++) {
            this.createParticle(x, y);
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const introAnimation = document.createElement('div');
    introAnimation.className = 'intro-animation';
    
    const introBackground = document.createElement('div');
    introBackground.className = 'intro-background';
    
    const particleContainer = document.createElement('div');
    particleContainer.className = 'intro-particles';
    
    const introContent = document.createElement('div');
    introContent.className = 'intro-content';
    
    const introText = document.createElement('div');
    introText.className = 'intro-text';
    introText.textContent = 'About Us';
    
    const introLine = document.createElement('div');
    introLine.className = 'intro-line';
    
    introContent.appendChild(introText);
    introContent.appendChild(introLine);
    
    introAnimation.appendChild(introBackground);
    introAnimation.appendChild(particleContainer);
    introAnimation.appendChild(introContent);
    
    document.body.insertBefore(introAnimation, document.body.firstChild);
    
    const particleSystem = new ParticleSystem(particleContainer);
    let animationState = 0;
    
    setTimeout(() => {
        introAnimation.classList.add('stage-1');
        particleSystem.burst(window.innerWidth / 2, window.innerHeight / 2);
    }, 100);
    
    function handleAnimation(event) {
        switch(animationState) {
            case 0:
                introAnimation.classList.add('stage-2');
                particleSystem.burst(event.clientX, event.clientY);
                animationState++;
                break;
            
            case 1:
                introAnimation.classList.add('fade-out');
                const aboutContent = document.querySelector('.about-content');
                setTimeout(() => {
                    aboutContent.classList.add('visible');
                    introAnimation.remove();
                }, 800);
                animationState++;
                break;
        }
    }
    
    document.addEventListener('click', handleAnimation);
});