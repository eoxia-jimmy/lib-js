<?php

function request_with_form() {
	echo json_encode( array(
		'success' => true,
		'data' => array(
			'module' => 'request_with_form', // Doit être renommé en object
			'callback_success' => 'display_title', // Doir être renommé en success
			'title' => $_POST['title']  // Faille de sécurité; On s'en fou, mais à ne pas faire!
		)
	) );
}

?>
