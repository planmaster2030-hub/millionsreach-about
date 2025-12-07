// Hello World Interactive Script
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('clickBtn');
    const message = document.getElementById('message');
    
    let clickCount = 0;
    const messages = [
        "Hello from Millions Reach!",
        "Welcome to our website!",
        "Thanks for visiting!",
        "Have a great day!",
        "You're awesome!",
        "Keep exploring!"
    ];
    
    btn.addEventListener('click', function() {
        clickCount++;
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        message.textContent = `${randomMessage} (Clicked ${clickCount} time${clickCount !== 1 ? 's' : ''})`;
        message.classList.add('show');
        
        // Add a fun animation effect
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = '';
        }, 150);
    });
    
    // Add some interactivity on page load
    console.log('Hello World page loaded successfully!');
});

