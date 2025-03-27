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

    // Remove the button right after displaying the "Just kidding" message
    if (messageIndex === messages.length) {
        noButton.textContent = "Just kidding, say yes please! ❤️";
        setTimeout(() => {
            noButton.style.display = "none";  // Hide the "No" button immediately after showing the last message
        }, 1000);  // Short delay to display the last message before the button disappears
    }
}

function handleYesClick() {
    const yesButton = document.querySelector('.yes-button');
    
    // Make the "Yes" button bigger on every click
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

    // Redirect to the "yes_page.html" when clicked
    setTimeout(() => {
        window.location.href = "yes_page.html";
    }, 500);  // Short delay before redirecting to the "Yes" page
}

// Attach event listeners
document.querySelector('.no-button').addEventListener("click", handleNoClick);
document.querySelector('.yes-button').addEventListener("click", handleYesClick);
