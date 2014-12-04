// roomID, name, creation_date
Chatrooms = new Meteor.Collection('chatrooms');

// user, chatroom, content, creation_date
Messages = new Meteor.Collection('messages');

// chatroom, user
ChatroomUsers = new Meteor.Collection('chatusers');