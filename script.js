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
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // When the last message ("Just kidding, say yes please! ❤️") is displayed, hide the No button
    if (messageIndex === 0) {
        setTimeout(() => {
            noButton.style.display = "none";  // This will hide the No button
        }, 1500);  // Add a small delay to make sure the last message is visible before disappearing
    }
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
