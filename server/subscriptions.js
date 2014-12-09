// Online users
Meteor.publish('onlineUsers', function () {
	return Meteor.users.find({ "status.online": true }, {username: 1, status: 1});
});

// Messages publishing. Retrieves messages made after subscription
Meteor.publish('chatMessages', function() {
	var timestamp = new Date();
	return Messages.find({ creation_date: {$gte: timestamp} });
});