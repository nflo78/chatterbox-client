// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$select.click(this.render);
    // function initializeRooms() {
    // for (let i = 0; i< Messages.getRooms().length, i++){
    // let $room = $(this.render(Messages.getRooms()[i]))
    // RoomsView.$button.append($room);
    // }
    // }
  },

  render: function(){
    console.log($('#rooms select'))
    $('#rooms select').empty()
    $('#rooms select').append($('<option>All</option>'))
    let roomList = Messages.getRooms();
    for (let i = 0; i< roomList.length; i++){
    let $room = $(Rooms.roomTemplate({'roomname':roomList[i]}))
    $('#rooms select').append($room);
    }
  },

  renderRoom: function(roomname) {

  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
