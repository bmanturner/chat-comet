// Chatrooms publishing and permissions
Meteor.publish('allChatrooms', function () {
	return Chatrooms.find();
});

Chatrooms.allow({
	'insert' : function () {
		return true;
	}
});

// Messages publishing and persmissions
Meteor.publish('chatMessages', function() {
	return Messages.find();
});

Messages.allow({
	'insert' : function () {
		return true;
	}
});

// ChatroomUsers publishing and permissions
Meteor.publish('chatUsers', function(roomID) {
	return ChatroomUsers.find({ chatroom : roomID});
});

ChatroomUsers.allow({
	'insert' : function() {
		return true;
	},
	'update' : function() {
		return true;
	},
	'remove' : function() {
		return true;
	}
});

