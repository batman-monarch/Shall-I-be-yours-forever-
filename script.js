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

    // Display the current message
    noButton.textContent = messages[messageIndex];
    messageIndex++;

    // If we reach the last message, hide the No button
    if (messageIndex === messages.length) {
        setTimeout(() => {
            noButton.style.display = "none";  // Hide the No button after the last message
        }, 1500);  // Add a short delay to show the "Just kidding" message before hiding
    }
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
