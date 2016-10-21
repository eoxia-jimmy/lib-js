<?php

echo json_encode( array(
	'success' => true,
	'data' => array(
		'module' => 'example_form',
		'callback_success' => 'display_title',
		'title' => $_POST['title']  // Faille de sécurité; On s'en fou, mais à ne pas faire!
	)
) );

?>
