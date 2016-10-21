window.eva_lib.tab = {};

window.eva_lib.tab.init = function() {
	window.eva_lib.tab.event();
};

window.eva_lib.tab.event = function() {
  jQuery( document ).on( 'click', '.wp-digi-global-sheet-tab li', window.eva_lib.tab.load );
};

window.eva_lib.tab.load = function( event ) {
  event.preventDefault();
  var a = jQuery( this );

  jQuery( ".wp-digi-global-sheet-tab li.active" ).removeClass( "active" );
  a.addClass( "active" );

  jQuery( ".wp-digi-content" ).addClass( "wp-digi-bloc-loading" );

  var data = {
    action:           "load_tab_content",
    _wpnonce:         a.data( 'nonce' ),
    tab_to_display:   a.data( "action" ),
    element_id :      a.closest( '.wp-digi-sheet' ).data( 'id' ),
  };

  jQuery.post( window.ajaxurl, data, function( response ) {
    jQuery( ".wp-digi-content" ).replaceWith( response.data.template );

		window.eva_lib.tab.call_tab_changed();
  } );
};

window.eva_lib.tab.call_tab_changed = function() {
	for ( var key in window.eva_lib ) {
		if (window.eva_lib[key].tab_changed) {
			console.log('Tab changed de l\'objet: ' + key);
			window.eva_lib[key].tab_changed();
		}
	}
}
