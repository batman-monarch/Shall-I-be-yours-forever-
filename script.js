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

    // After showing the last message, disable the button and hide it
    if (messageIndex === messages.length) {
        setTimeout(() => {
            noButton.style.display = "none";  // Hide the "No" button
        }, 1500);  // Add a short delay to let the last message show before hiding
        
        // Remove the click event listener so it no longer responds to clicks
        noButton.removeEventListener("click", handleNoClick);
    }
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

// Attach the event listener when the script is loaded
document.querySelector('.no-button').addEventListener("click",
