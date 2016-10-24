<?php
function request_delete() {
	echo json_encode( array(
		'success' => true,
		'data' => array(
			'module' => 'request_delete', // Doit être renommé en object
			'callback_success' => 'delete_line' // Doir être renommé en success
		)
	) );
}
?>
