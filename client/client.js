Template.Chatroom.events({
	"submit .new-message": function (event){
		event.preventDefault();
		var chatMessage = event.target.text.value;
		Meteor.call('addMessage', Meteor.user().username, chatMessage);
		event.target.text.value = "";
		var $chat = $('#chat-messages');
		$chat.animate({scrollTop: $chat[0].scrollHeight}, 200);
		return false;
	}
});

Accounts.ui.config({
   	passwordSignupFields: "USERNAME_ONLY"
});