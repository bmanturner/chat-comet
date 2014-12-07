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