class Message{
    constructor(uid, content){
        this.messageId = Math.floor(Math.random() * 1000);
        //logic to make id unique
        this.user = uid;
        this.time = 1;
        //logic to get time on server/app/whatevs
        this.content = content;
    }

    showMessage(){
        return this.content;
    }
};

class ChatRoom{
    constructor(uid){
        this.userCreated = uid;
        this.activeUsers = [uid];
        this.chatRoomId = Math.floor(Math.random() * 1000);
        // check if user has any other chatrooms with id
        this.messages = [];
        this.usersIn = [];
    }

    getMessages(uid){
        if(!this.usersIn.find(user => uid === user.id)){
            return 'You are not a member of this group';
        }
        return this.messages;
    }

    saveMessage(message){
        if(this.usersIn.find(user => uid === user.id)){
            this.messages.push(message)
        }   
    }
};

class User {
    constructor(){
        this.id = Math.floor(Math.random() * 1000);
        // check if anyother user has id
        this.myChatrooms = [];
        this.friends = [];
    }

    getId(){
        return this.id;
    }

    addFriend(id){
        this.friends.push(id);
    }

    createChatRoom(id){
        const room = new ChatRoom(id);
        this.myChatrooms.push(room);
    }

    createMessage(content, chatroomId){
        const message = new Message(this.getId(), content);
        let chatroom = this.findChatRoom(chatroomId);
        if(chatroom){
            chatroom.saveMessage(message);
        }   
    }

    findChatRoom(chatroomId){
        return this.myChatrooms.find(chatroomId);
    }

    getMessages(chatroomId){
        const room = this.myChatrooms.find(chatRoomId);
        return room.getMessages(this.getId());
    }
};