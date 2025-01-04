// particles.js
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const numberOfParticles = 100;

class Particle {
    constructor(type) {
        this.type = type;
        this.reset();
    }
    
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = this.type === 'star' ? Math.random() * 2 : 3;
        this.speedX = (Math.random() - 0.5) * (this.type === 'star' ? 0.5 : 2);
        this.speedY = (Math.random() - 0.5) * (this.type === 'star' ? 0.5 : 2);
        this.brightness = Math.random();
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.type === 'star') {
            this.brightness += Math.random() * 0.02 - 0.01;
            this.brightness = Math.max(0, Math.min(1, this.brightness));
        }
        
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
            this.reset();
        }
    }
    
    draw() {
        ctx.beginPath();
        if (this.type === 'star') {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.brightness})`;
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        } else {
            ctx.fillStyle = '#FFD700';
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.strokeStyle = 'rgba(255, 215, 0, 0.3)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(this.x - this.speedX * 5, this.y - this.speedY * 5);
            ctx.lineTo(this.x, this.y);
            ctx.stroke();
        }
    }
}

function initParticles() {
    for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle('star'));
    }
    for (let i = 0; i < 5; i++) {
        particles.push(new Particle('satellite'));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

initParticles();
animate(); 
