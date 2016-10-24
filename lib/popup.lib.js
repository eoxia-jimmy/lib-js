window.eva_lib.popup = {};

window.eva_lib.popup.init = function() {
	window.eva_lib.popup.event();
};

window.eva_lib.popup.event = function() {
  jQuery( document ).on( 'click', '.open-popup', window.eva_lib.popup.open );
  jQuery( document ).on( 'click', '.popup-propagation', window.eva_lib.popup.stop );
  jQuery( document ).on( 'click', 'body', window.eva_lib.popup.close );
};

window.eva_lib.popup.open = function( event ) {
  // Récupères la box de destination mis dans l'attribut du popup
  var target = jQuery( this ).closest(  "." + jQuery( this ).data( 'parent' ) ).find( "." + jQuery( this ).data( 'target' ) );
	target.toggle();
  event.stopPropagation();
};

window.eva_lib.popup.stop = function( event ) {
	event.stopPropagation();
};

window.eva_lib.popup.close = function( event ) {
  jQuery( '.popup' ).hide();
}
