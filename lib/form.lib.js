window.eva_lib.form = {};

window.eva_lib.form.init = function() {
  window.eva_lib.form.event();
};
window.eva_lib.form.event = function() {
  jQuery( document ).on( 'click', '.submit-form', window.eva_lib.form.sumbit_form );
};

window.eva_lib.form.sumbit_form = function( event ) {
	event.preventDefault();
  var element = jQuery( this );
	element.closest( 'form' ).addClass( 'loader loading' );
  element.closest( 'form' ).ajaxSubmit( {
		dataType: 'json',
    success: function( response ) {
			element.closest( '.loader' ).removeClass( 'loader loading' );
      if ( response && response.success ) {
        if ( response.data.module && response.data.callback_success ) {
          window.eva_lib[response.data.module][response.data.callback_success]( element, response );
        }
      }
      else {
        if ( response.data.module && response.data.callback_error ) {
          window.eva_lib[response.data.module][response.data.callback_error]( element, response );
        }
      }
    }
  } );
}
