<?php

include_once( 'examples/request-attribute/action.php' );
include_once( 'examples/request-with-form/action.php' );
include_once( 'examples/request-input-without-form/action.php' );
include_once( 'examples/request-delete/action.php' );

if ( !empty( $_REQUEST['action'] ) ) {
	call_user_func( $_REQUEST['action'] );
}

?>
