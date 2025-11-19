document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if (navLinks.style.display === 'flex') {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
                navLinks.style.padding = '20px';
                navLinks.style.borderBottom = '1px solid #222';
            }
        });
    }

    // Glitch Effect (Simple Random Text Replacement)
    const glitchText = document.querySelector('.glitch-text');
    if (glitchText) {
        const originalText = glitchText.getAttribute('data-text');
        const chars = '!<>-_\\/[]{}—=+*^?#________';
        
        glitchText.addEventListener('mouseover', () => {
            let iterations = 0;
            const interval = setInterval(() => {
                glitchText.innerText = originalText
                    .split('')
                    .map((letter, index) => {
                        if(index < iterations) {
                            return originalText[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join('');
                
                if(iterations >= originalText.length) clearInterval(interval);
                
                iterations += 1 / 3;
            }, 30);
        });
    }
});
