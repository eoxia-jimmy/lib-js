window.eva_lib.request = {};

window.eva_lib.request.init = function() {};

window.eva_lib.request.send = function( element, data ) {
  jQuery.post( window.ajaxurl, data, function( response ) {
		element.closest( 'loader' ).removeClass( 'loading' );

    if ( response && response.success ) {
      if ( response.data.module && response.data.callback_success ) {
        window.app[response.data.module][response.data.callback_success]( element, response );
      }
    }
    else {
      alert('error');
      if ( response.data.module && response.data.callback_error ) {
        window.app[response.data.module][response.data.callback_error]( element, response );
      }
    }
  }, "json" );
};
