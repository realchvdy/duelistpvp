function init3DTilt() {
    const cards = document.querySelectorAll('.tilt-card');
    
    cards.forEach(card => {

        const clone = card.cloneNode(true);
        card.parentNode.replaceChild(clone, card);
        
        clone.addEventListener('mousemove', e => {
            const rect = clone.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -8;
            const rotateY = ((x - centerX) / centerX) * 8;
            
            clone.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            
            const glare = clone.querySelector('.glare');
            if (glare) {
                const glareX = (x / rect.width) * 100;
                const glareY = (y / rect.height) * 100;
                glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.15), transparent 60%)`;
            }
        });
        
        clone.addEventListener('mouseleave', () => {
            clone.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            const glare = clone.querySelector('.glare');
            if (glare) {
                glare.style.background = `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1), transparent 60%)`;
            }
        });
    });
}
