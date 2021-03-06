window.eva_lib.array_form = {};

window.eva_lib.array_form.init = function() {
	window.eva_lib.array_form.event();
};

window.eva_lib.array_form.event = function() {
	jQuery( document ).on( 'click', '.wp-digi-action-edit', window.eva_lib.array_form.send_form );
};

window.eva_lib.array_form.get_input = function( parent ) {
	return parent.find('input');
};

window.eva_lib.array_form.send_form = function( event ) {
	event.preventDefault();

	var element = jQuery( this );
	element.closest( '.loader' ).addClass( 'loading' );
	var parent = element.closest( '.container' );
	var list_input = window.eva_lib.array_form.get_input( parent );

	var data = {};
	for (var i = 0; i < list_input.length; i++) {
		if ( list_input[i].name ) {
			data[list_input[i].name] = list_input[i].value;
		}
	}

	window.eva_lib.request.send( element, data );
};
