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


// Chatroom listings
Router.route('/chatrooms', {
	name: 'chatrooms',
	loginRequired: 'home',
	waitOn: function () {
		return Meteor.subscribe('allChatrooms');
	},
	data: function () {
		var chatroomsList = Chatrooms.find({});
		return {
			chatrooms : chatroomsList
		}
	},
	action: function () {
		this.render('Chatselection');
	}
});


// Individual chatroom
Router.route('/chatroom/:_id', {
	name: 'chatroom',
	loginRequired: 'home',
	waitOn: function () {
		return Meteor.subscribe('chatMessages', this.params._id);
	},
	data: function () {
		var chatMessages = Messages.find({}, {sort : {creation_date : 1}});
		return {
			messages: chatMessages,
			roomID: this.params._id
		}
	},
	action: function () {
		this.render('Chatroom');
	}
});