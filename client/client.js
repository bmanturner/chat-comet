Template.Chatroom.events({
	"submit .new-message": function (event){
		event.preventDefault();
		var chatMessage = event.target.text.value;
		Messages.insert({
			userID: Meteor.userId(),
			user: Meteor.user().username,
			message: chatMessage,
			creation_date: new Date()
		});
		event.target.text.value = "";
		var $chat = $('#chat-messages');
		$chat.animate({ scrollTop: $chat[0].scrollHeight}, 200);
		return false;
	}
});

Accounts.ui.config({
   	passwordSignupFields: "USERNAME_ONLY"
});
