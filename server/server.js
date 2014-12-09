Meteor.startup(function () {
	Messages.remove({});
});

Meteor.users.find({ "status.online": true }).observe({
  added: function(id) {
    if(id) {
		var username = id.username;
		var message = "entered the chatroom";
		var messageType = 'login';
		Meteor.call('logEvent', username, message, messageType);
	}
  },
  removed: function(id) {
    if(id) {
		var username = id.username;
		var message = "left the chatroom";
		var messageType = 'logout';
		Meteor.call('logEvent', username, message, messageType);
	}
  }
});

Meteor.methods({
	addMessage: function (username, usermessage) {
		check(username, String);
		check(usermessage, String);
		Messages.insert({
			userID: this.userId,
			user: username,
			message: usermessage,
			msgEvent: 'message',
			creation_date: new Date()
		});
	},
	logEvent: function (username, logmessage, type) {
		check(username, String);
		check(logmessage, String);
		Messages.insert({
			userID: this.userId,
			user: username,
			message: logmessage,
			msgEvent: type,
			creation_date: new Date()
		});
		console.log('done');
	}
});