if(Meteor.isClient){
	Template.Chatselection.events({
		"submit .new-chatroom": function (event){
			event.preventDefault();
			var chatroomName = event.target.text.value;
			Chatrooms.insert({
				name: chatroomName,
				creation_date: new Date(),
				created_by: Meteor.user().username
			});
			event.target.text.value = "";
			return false;
		}
	});

	Template.Chatroom.events({
		"submit .new-message": function (event){
			event.preventDefault();
			var chatMessage = event.target.text.value;
			var roomID = event.target.roomID.value;
			Messages.insert({
				user: Meteor.user().username,
				chatroom: roomID,
				message: chatMessage,
				creation_date: new Date()
			});
			event.target.text.value = "";
			return false;
		}
	});

	Accounts.ui.config({
    	passwordSignupFields: "USERNAME_ONLY"
  	});
}