const fetchConversations = async () => {
    try {
        const response = await fetch('./snippets/conversations.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const conversations = await response.json();
        displayConversations(conversations);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};

const displayConversations = (conversations) => {
    const conversationContainer = document.getElementById('conversation-container');
    conversations.forEach(conversation => {
        const conversationElement = document.createElement('div');
        conversationElement.classList.add('conversation');
        
        const dialogue = document.createElement('p');
        dialogue.textContent = conversation.dialogue;
        
        const context = document.createElement('p');
        context.textContent = `Context: ${conversation.context}`;
        
        const translation = document.createElement('p');
        translation.textContent = `Translation: ${conversation.translation}`;
        
        conversationElement.appendChild(dialogue);
        conversationElement.appendChild(context);
        conversationElement.appendChild(translation);
        
        conversationContainer.appendChild(conversationElement);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    fetchConversations();
});