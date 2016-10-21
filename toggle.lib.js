window.eva_lib.toggle = {};

window.eva_lib.toggle.init = function() {
	window.eva_lib.toggle.event();
};

window.eva_lib.toggle.event = function() {
  jQuery( document ).on( 'click', 'toggle', window.eva_lib.toggle.open );
  jQuery( document ).on( 'click', 'body', window.eva_lib.toggle.close );
};

window.eva_lib.toggle.open = function( event ) {
	var target = undefined;
  // Récupères la box de destination mis dans l'attribut du toggle
  if ( jQuery( this ).data( 'parent' ) ) {
	  target = jQuery( this ).closest( "." + jQuery( this ).data( 'parent' ) ).find( "." + jQuery( this ).data( 'target' ) );
	}
	else {
		target = jQuery( "." + jQuery( this ).data( 'target' ) );
	}

	console.log(target);

	if ( target ) {
	  target.toggle();
	  event.stopPropagation();
	}
};

window.eva_lib.toggle.close = function( event ) {
  jQuery( '.digi-popup' ).hide();
}
