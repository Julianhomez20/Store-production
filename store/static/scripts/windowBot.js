document.addEventListener("DOMContentLoaded", function () {
    // Button chat bot
    const btnBot = document.querySelector('.button-chat');
    const windowBot = document.querySelector('.windowBot');
    const closeBtn = document.querySelector('.close-img');

    function unfoldWindow() {
        if (windowBot.style.display == 'none' || windowBot.style.display === '') {
            windowBot.style.display = 'flex';
        } else {
            windowBot.style.display = 'none';
        }
    }

    function closeWindow() {
        windowBot.style.display = 'none';
    }

    btnBot.addEventListener('click', unfoldWindow);
    closeBtn.addEventListener('click', closeWindow);

    // Function to scroll to the bottom
    function scrollToBottom() {
        const chatContent = document.getElementById("chat-content");
        chatContent.scrollTop = chatContent.scrollHeight;
    }

    
});
