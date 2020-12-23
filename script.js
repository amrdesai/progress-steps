// Variables
const progress = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

// Function: Update DOM on Next/Previous button click
const updateDOM = () => {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    // Get all the active circles
    const actives = document.querySelectorAll('.active');
    progress.style.width =
        ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    // Enable/disable buttons
    if (currentActive === 1) {
        prevBtn.disabled = true;
    } else if (currentActive === circles.length) {
        nextBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
};

// Event Listener: Next Button
nextBtn.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    updateDOM();
});

// Event Listener: Previous Button
prevBtn.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }

    updateDOM();
});
