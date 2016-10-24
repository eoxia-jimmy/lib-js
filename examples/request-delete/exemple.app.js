window.app.request_delete = {};

window.app.request_delete.delete_line = function( element, response ) {
	console.log(element);
  jQuery( element ).closest( 'ul' ).remove();
}
