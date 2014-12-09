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
		Meteor.subscribe('onlineUsers');
		var onlineUsers = Meteor.users.find({}, {sort : {username: 1}});
		var chatMessages = Messages.find({}, {sort : {creation_date : 1}});
		return {
			messages: chatMessages,
			users: onlineUsers,
			usercount: onlineUsers.count()
		}
	},
	action: function () {
		this.render('Chatroom');
	}
});