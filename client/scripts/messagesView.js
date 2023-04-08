// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

  },

  render: function() {
    // TODO: Render _all_ the messages.
    // for message in messages.js
    for (let i = 0; i < Messages._data.length; i++) {
      let $current = this.renderMessage(Messages._data[i]);
      this.$chats.append($current);
    }
    // rendermessage
    // append to $chats
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    let $msg = $(MessageView.render({
      'username':message.username,
      'text':message.text
    }))
    console.log(message.username)
    console.log(message.text)
    // $msg.click(MessagesView.handleClick)
    return $msg
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};