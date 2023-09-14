// MessageRepository class
class MessageRepository {
    constructor() {
        this.messages = [];
    }

    insert(message) {
        this.messages.push(message);
    }

    remove(messageId) {
        const messageToBeRemovedId = this.messages.findIndex(
            message => message.id === messageId);
        if (messageToBeRemovedId > -1) {
            this.messages.splice(messageToBeRemovedId, 1);
        }
    }

    size() {
        return this.messages.length;
    }

    get messages() {
        return this.messages;
    }
}

// Message class
class Message {
    constructor(text, currentHour, id) {
        this.text = text;
        this.hour = currentHour;
        this.id = id;
    }
}

// Class for handling the messages
class MessageService {
    constructor(url) {
        this.url = url;
    }

    async list() {
        const answer = await fetch(this.url, {
            method: 'GET'
        });
        return await answer.json();
    }

    async insert(message) {
        const answer = await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(message),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return await answer.json();
    }

    async remove(messageId) {
        const answer = await fetch(this.url + messageId, {
            method: 'DELETE'
        });
        
        return await answer.json();
    }
}

// Calls the message service
let messageService = new MessageService(
    'https://my-json-server.typicode.com/yagocdj/pweb1-json-server/messages/');
let messageRepo = new MessageRepository();

messageService.list().then(messages => {
    messages.forEach(message => {
        insertMessageElement(message)
    });
});

// insert an message element into DOM
function insertMessageElement(message) {
    let messageElement = document.createElement('li');

    messageElement.textContent = `Texto ${message.text}\nHora: ${message.hour}`;

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.setAttribute('id', message.id);
    deleteButton.addEventListener('click', deleteMessage);

    messageElement.appendChild(deleteButton);
    document.querySelector('#list-of-msgs').appendChild(messageElement);
}

// handle click on insert button
function insertMessage() {
    let messageText = document.getElementById('msg').value;
    let messageId = messageRepo.size() > 0 ? messageRepo.size() + 1 : 1;
    let message = new Message(messageText, new Date(), messageId);
    messageRepo.insert(message);

    messageService.insert(message).then(
        message => insertMessageElement(message)
    );
}

// handle click on delete button
function deleteMessage(event) {
    let id = event.target.id;
    messageRepo.remove(id);
    console.log(messageRepo.messages);
    messageService.remove(id).then(
        event.target.parentNode.remove()
    );
}