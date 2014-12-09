Meteor.startup(function () {
	Messages.remove({});
});

Meteor.methods({
	addMessage: function (username, usermessage) {
		check(username, String);
		check(usermessage, String);
		Messages.insert({
			userID: this.userId,
			user: username,
			message: usermessage,
			creation_date: new Date()
		});
	}
});