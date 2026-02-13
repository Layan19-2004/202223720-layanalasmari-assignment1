// Smooth scrolling for navbar links
document.querySelectorAll('.navbar a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Greeting message based on time
const header = document.querySelector('.header');
const hour = new Date().getHours();

let greeting = "Welcome!";
if (hour >= 5 && hour < 12) greeting = "Good morning!";
else if (hour >= 12 && hour < 18) greeting = "Good afternoon!";
else greeting = "Good evening!";

const greetingEl = document.createElement('p');
greetingEl.textContent = greeting;
greetingEl.style.marginTop = "10px";

header.appendChild(greetingEl);
