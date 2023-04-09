// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form'
   let $room = $('#roomSelect');
   $room.val('Boiler Room');
    event.preventDefault();
    App.startSpinner()
    let msg = {
      'username': window.location.search.slice(10, window.location.search.length),
      'text': $('#message').val(),
      'roomname': $('#roomSelect').val() // we still need to set rooms up right now
    }
    console.log(msg)
    Parse.create(msg)
    // message, cb, errorcb
    // App.fetch()
    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.

  },

  setStatus: function(active) {
    // adust this function (connected function?) it changes the status to true if there's text in the form
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};