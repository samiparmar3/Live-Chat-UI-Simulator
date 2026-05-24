const chatBox = document.getElementById("chatBox");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const typing = document.getElementById("typing");

const replies = [
    "Hello 👋",
    "How are you today?",
    "Nice to meet you 😊",
    "That's interesting!",
    "Can you tell me more?",
    "I am just a simulated bot 🤖",
    "Great message!",
    "Sounds good 👍"
];

function addMessage(text, sender) {

    const div = document.createElement("div");

    div.classList.add("message");
    div.classList.add(sender);

    div.textContent = text;

    chatBox.appendChild(div);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply() {

    typing.style.display = "block";

    setTimeout(() => {

        typing.style.display = "none";

        const randomReply =
            replies[Math.floor(Math.random() * replies.length)];

        addMessage(randomReply, "bot");

    }, 2000);
}

function sendMessage() {

    const text = messageInput.value.trim();

    if (!text) return;

    addMessage(text, "user");

    messageInput.value = "";

    botReply();
}

sendBtn.addEventListener("click", sendMessage);

messageInput.addEventListener("keypress", e => {

    if (e.key === "Enter") {
        sendMessage();
    }

});