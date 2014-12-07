// Global router settings
Router.configure ({
	layoutTemplate: 'Header',
	//notFoundTemplate: '404',
	//loadingTemplate: 'Loading'
});


// Homepage
Router.route('/', {
	name: 'home',
	redirectOnLogin: true,
	action: function () {
		this.render('Home');
	},
	data: function () {
		if (Meteor.user()) {
			return {
				username : Meteor.user().username
			}
		}
	}
});


// Individual chatroom
Router.route('/chatroom/', {
	name: 'chatroom',
	loginRequired: 'home',
	waitOn: function () {
		return Meteor.subscribe('chatMessages');
	},
	data: function () {
		var chatMessages = Messages.find({}, {sort : {creation_date : 1}});
		return {
			messages: chatMessages,
		}
	},
	action: function () {
		this.render('Chatroom');
	}
});