<?php
function request_attribute() {
	echo json_encode( array(
		'success' => true,
		'data' => array(
			'module' => 'request_attribute', // Doit être renommé en object
			'callback_success' => 'delete_button' // Doir être renommé en success
		)
	) );
}
?>
