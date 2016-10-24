<?php

echo json_encode( array(
    'success' => true,
    'data' => array(
        'module' => 'example_form', // Doit être renommé en object
        'callback_success' => 'delete_button' // Doir être renommé en success
    )
) );

?>
