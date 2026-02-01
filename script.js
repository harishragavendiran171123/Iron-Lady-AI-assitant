const chatBox = document.getElementById("chat-box");

function addMessage(sender, text) {
    let div = document.createElement("div");
    div.className = sender;
    div.innerText = text;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Quick Button Reply
function quickReply(text) {
    addMessage("user", text);
    let response = getAIResponse(text);
    addMessage("bot", response);
}

// User Input Chat
function sendMessage() {
    let input = document.getElementById("user-input");
    let message = input.value.toLowerCase();
    if (message === "") return;

    addMessage("user", message);
    let response = getAIResponse(message);
    setTimeout(() => addMessage("bot", response), 500);

    input.value = "";
}

// Mock AI Logic
function getAIResponse(msg) {

    if (msg.includes("student")) {
        return " As a student, I recommend Iron Lady AI Internship Program and Tech Career Starter Program.";
    }

    if (msg.includes("working")) {
        return " For working professionals, Iron Lady offers Skill Upgrade Programs and Mentorship Training.";
    }

    if (msg.includes("ai program")) {
        return " Iron Lady AI Program includes Machine Learning, Deep Learning, Projects, and Mentorship.";
    }

    if (msg.includes("internship")) {
        return " Iron Lady Internship Program provides real-world projects, mentorship, and certification.";
    }

    if (msg.includes("program")) {
        return "Programs Offered:\n1) AI Internship Program\n2) Tech Career Program\n3) Mentorship Program";
    }

    if (msg.includes("enroll") || msg.includes("apply")) {
        return " To enroll, visit iamironlady.com → Select Program → Fill Registration Form.";
    }

    if (msg.includes("fees")) {
        return " Fees depend on program. Contact Iron Lady support for exact pricing details.";
    }

    if (msg.includes("duration")) {
        return " Programs duration ranges from 8 to 24 weeks depending on course.";
    }

    if (msg.includes("certificate")) {
        return " Yes! Iron Lady provides training and internship certificates.";
    }

    return "Ask me about Iron Lady programs, AI courses, internships, enrollment, and career guidance.";
}
