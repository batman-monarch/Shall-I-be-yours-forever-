const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    // Show message and increment index
    noButton.textContent = messages[messageIndex];
    messageIndex++;

    // After the last message, hide the No button
    if (messageIndex === messages.length) {
        noButton.textContent = "Just kidding, say yes please! ❤️";
        setTimeout(() => {
            noButton.remove();  // Completely remove the No button after showing the last message
        }, 1000);  // Slight delay to show the last message
    }

    // Increase the size of the Yes button dramatically every time the No button is clicked
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 2.0}px`;  // Dramatic size increase (200%)
}

function handleYesClick() {
    // Redirect to the Yes page
    window.location.href = "yes_page.html";
}

// Attach event listeners to buttons
document.querySelector('.no-button').addEventListener("click", handleNoClick);
document.querySelector('.yes-button').addEventListener("click", handleYesClick);
