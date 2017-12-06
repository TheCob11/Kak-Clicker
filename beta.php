<?php
	if(!isset($_COOKIE[kak])) {
		setcookie(kak, 0, time() + (86400 * 365.25);
	}else{
		$kak=$COOKIE[kak];
	}
?>
