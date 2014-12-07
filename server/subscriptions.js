// Online users
Meteor.publish('onlineUsers', function () {
	return Meteor.users.find({ "status.online": true }, {username: 1, status: 1});
});

// Messages publishing and permissions
Meteor.publish('chatMessages', function() {
	var timestamp = new Date();
	return Messages.find({ creation_date: {$gte: timestamp} });
});

Messages.allow({
	'insert' : function () {
		return true;
	}
});