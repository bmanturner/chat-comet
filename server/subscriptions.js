// Messages publishing and persmissions
Meteor.publish('chatMessages', function() {
	var timestamp = new Date();
	return Messages.find({ creation_date: {$gte: timestamp} });
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

