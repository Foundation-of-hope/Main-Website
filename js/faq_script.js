// form 

$.validate();

// instanciate new modal
var modal = new tingle.modal({
  footer: true,
  stickyFooter: false,
  closeLabel: "Close",
  onOpen: function() {
  },
  onClose: function() {
  },
  beforeClose: function() {
    // here's goes some logic
    // e.g. save content before closing the modal
    return true; // close the modal
    return false; // nothing happens
  }
});

var modalBigContent = new tingle.modal();
// window one
var tingle_button = document.querySelector('.tingle_addon');
tingle_button.addEventListener('click', function(){
  modalBigContent.open();
});
modalBigContent.setContent(document.querySelector('.tingle_addon_window').innerHTML);
// window two
var tingle_button_two = document.querySelector('.tingle_addon_two');
tingle_button_two.addEventListener('click', function(){
  modalBigContent.open();
modalBigContent.setContent(document.querySelector('.tingle_addon_window_two').innerHTML);
});